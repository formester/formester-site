import { ref } from "vue";
import { getPageDimensions } from "../constants/pdf-page-sizes.js";
import {
  applyUnifiedLayout,
  getTextMetrics,
  wrapTextToLines,
  parsedValue,
  formatAnswerText,
  rankingLines,
  ptToMm,
  mmToPt,
  DEFAULT_TEXT_LINE_HEIGHT,
  DEFAULT_TABLE_LINE_HEIGHT,
} from "./useUnifiedLayout.js";
import { resolveElementStyle } from "../constants/pdf-element-style.js";
import {
  resolveFieldType,
  resolveFieldLabel,
  resolveFileItemSizePt,
  resolveMarkerGlyph,
} from "../constants/pdf-builder-schema.js";
import { fetchPdfBytes } from "./usePdfBackdrop.js";
import { formatDate } from "../helpers/datetime.js";
import { fillableField, FILLABLE_FIELD_TYPE } from "../plugins/fillable-field.js";
import { fieldToSchema, elementToFillableField, ensurePageContents } from "../acroform.js";
const mm = ptToMm;
const pt = mmToPt;
// Shrink the cell-inner width when pre-wrapping table text. pdfme's fontKit
// measurements run a touch wider than canvas measureText; the safety factor
// keeps borderline strings on the wrapping side so the row height we predict
// matches what pdfme renders.
const WRAP_SAFETY = 0.95;

// Normalize "open-sans" to "Open Sans"
function normalizeFontName(name) {
  if (!name) return "";
  if (name.includes("-")) {
    return name
      .split("-")
      .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
      .join(" ");
  }
  return name;
}

let _cachedFontMap = null;

function resolvePdfFontName(fontName, fontWeight, fontStyle) {
  if (!fontName) return undefined;
  const normalized = normalizeFontName(fontName);
  let resolved =
    _cachedFontMap && _cachedFontMap[normalized] ? normalized : undefined;

  if (resolved) {
    const isBold = String(fontWeight).toLowerCase() === "bold";
    const isItalic = String(fontStyle).toLowerCase() === "italic";
    let suffix = "";
    if (isBold && isItalic) suffix = "-BoldItalic";
    else if (isBold) suffix = "-Bold";
    else if (isItalic) suffix = "-Italic";

    if (suffix && _cachedFontMap[resolved + suffix]) {
      resolved += suffix;
    }
  }

  return resolved;
}

let _pdfmePromise = null;
function loadPdfme() {
  if (!_pdfmePromise) {
    _pdfmePromise = Promise.all([
      import("@pdfme/generator"),
      import("@pdfme/schemas"),
    ]).then(([{ generate }, schemas]) => ({
      generate,
      text: schemas.text,
      line: schemas.line,
      rectangle: schemas.rectangle,
      ellipse: schemas.ellipse,
      image: schemas.image,
      table: schemas.table,
    }));
  }
  return _pdfmePromise;
}

let _fontMapPromise = null;
async function loadFontMap(requiredFonts = []) {
  if (!_cachedFontMap) {
    _cachedFontMap = {};
  }

  // Ensure DejaVu Sans is always included as it's the fallback
  const fontsToLoad = [...new Set(["DejaVu Sans", ...requiredFonts])];

  const fetchPromises = fontsToLoad.map(async (fontName) => {
    const formattedName = normalizeFontName(fontName);
    if (_cachedFontMap[formattedName]) return;

    const fontId = formattedName.toLowerCase().replace(/\s+/g, "-");
    const url = `https://api.fontsource.org/v1/fonts/${fontId}`;
    try {
      const res = await fetch(url);
      if (!res.ok) return;
      const data = await res.json();

      const weights = data.weights || [400];
      const getClosestWeight = (target) => {
        return weights.reduce((prev, curr) =>
          Math.abs(curr - target) < Math.abs(prev - target) ? curr : prev,
        );
      };

      const stylesToFetch = [
        { weight: getClosestWeight(400), style: "normal", suffix: "" },
        { weight: getClosestWeight(700), style: "normal", suffix: "-Bold" },
        { weight: getClosestWeight(400), style: "italic", suffix: "-Italic" },
        {
          weight: getClosestWeight(700),
          style: "italic",
          suffix: "-BoldItalic",
        },
      ];

      for (const req of stylesToFetch) {
        const variants = data.variants[req.weight];
        if (!variants) continue;
        const styleData = variants[req.style];
        if (!styleData) continue;

        // Use latin subset as default, fallback to whatever is available
        const subset = styleData.latin || Object.values(styleData)[0];
        if (!subset || !subset.url || !subset.url.ttf) continue;

        const pdfFontKey = formattedName + req.suffix;
        if (_cachedFontMap[pdfFontKey]) continue;

        const fontRes = await fetch(subset.url.ttf);
        if (fontRes.ok) {
          const fontData = await fontRes.arrayBuffer();
          _cachedFontMap[pdfFontKey] = {
            data: fontData,
            fallback: formattedName === "DejaVu Sans" && req.suffix === "",
          };
        }
      }
    } catch (e) {
      console.warn("Failed to load font:", formattedName, e);
    }
  });

  await Promise.all(fetchPromises);
  return _cachedFontMap;
}

// Read width/height from a base64 data URL by loading it into an Image.
// Returns aspect ratio (w/h), or null if the image fails to load.
function readImageAspectRatio(dataUrl) {
  if (!dataUrl) return Promise.resolve(null);
  return new Promise((resolve) => {
    const img = new Image();
    img.onload = () =>
      resolve(
        img.naturalWidth && img.naturalHeight
          ? img.naturalWidth / img.naturalHeight
          : null,
      );
    img.onerror = () => resolve(null);
    img.src = dataUrl;
  });
}

async function urlToBase64(url) {
  try {
    const res = await fetch(url);
    const blob = await res.blob();
    return await new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result);
      reader.onerror = reject;
      reader.readAsDataURL(blob);
    });
  } catch {
    return null;
  }
}

const BORDER_COLOR = "#d0d5dd";

function getLineThicknessMm(s) {
  return mm(s.lineThickness ?? 0.5);
}

function buildTextSchema({
  name,
  position,
  width,
  height,
  fontSize,
  fontColor,
  fontWeight = "normal",
  fontStyle = "normal",
  fontName,
  alignment = "left",
  verticalAlignment = "top",
  lineHeight,
}) {
  const normalizedWeight = String(fontWeight).toLowerCase();
  return {
    name,
    type: "text",
    position,
    width,
    height,
    fontSize,
    fontColor,
    fontWeight: normalizedWeight === "bold" ? "Bold" : "Regular",
    fontName: resolvePdfFontName(fontName, fontWeight, fontStyle),
    alignment,
    verticalAlignment,
    lineHeight: lineHeight || DEFAULT_TEXT_LINE_HEIGHT,
  };
}

function buildRectangleSchema({
  name,
  position,
  width,
  height,
  color = "",
  borderColor = BORDER_COLOR,
  borderWidth = 0.5,
  radius = 0,
}) {
  return {
    name,
    type: "rectangle",
    position,
    width,
    height,
    color,
    borderColor,
    borderWidth,
    radius,
  };
}

function buildLineSchema({
  name,
  position,
  width,
  height,
  color = BORDER_COLOR,
}) {
  return {
    name,
    type: "line",
    position,
    width,
    height,
    color,
  };
}

function mapPdfVerticalAlign(val) {
  if (val === "center") return "middle";
  if (val === "end") return "bottom";
  return "top";
}

// Continuation chunks (post-split pages) suppress the field/label header
// — pages 2+ of a split shouldn't repeat the question text.
function chunkAwareStyle(el, baseStyle) {
  return el._chunkIsContinuation
    ? { ...baseStyle, showLabel: false }
    : baseStyle;
}

function fieldBase(el, style, formField = null) {
  const labelText = resolveFieldLabel(el, formField);
  const { label, area } = labelAndArea(el, style, labelText);
  const schemas = [];
  const inputs = {};

  const w = mm(el.w);
  const h = mm(el.h);

  if (style.backgroundColor) {
    schemas.push(
      buildRectangleSchema({
        name: `${el.id}_bg`,
        position: { x: mm(el.x), y: mm(el.y) },
        width: w,
        height: h,
        color: style.backgroundColor,
        borderColor: style.backgroundColor,
        borderWidth: 0,
      }),
    );
  }

  if (label) {
    schemas.push(label);
    inputs[el.id] = String(labelText || "");
  }

  return { w, h, area, labelText, schemas, inputs };
}

// Layout helpers

// Returns label schema + answer area coords.
// All dimensions come from el._metrics (computed by useUnifiedLayout).
function labelAndArea(el, s, labelText = "") {
  const m = el._metrics;
  if (!m)
    return {
      label: null,
      area: { x: mm(el.x), y: mm(el.y), w: mm(el.w), h: mm(el.h) },
    };

  const isInline = m.isInline;
  const padding = mm(m.padding);
  const innerX = +(mm(el.x) + padding).toFixed(3);
  const innerY = +(mm(el.y) + padding).toFixed(3);

  const labelW = mm(m.labelW);
  const answerW = mm(m.answerW);
  const labelH = mm(m.labelH);
  const answerH = mm(m.answerH);

  const showLabel = s.showLabel !== false && !!labelText?.trim();
  const vertAlign = m.labelVerticalAlign ?? "start";

  // Continuation chunks (post-split) suppress the label render but should
  // still reserve the label column so the answer keeps the same horizontal
  // position as on the first chunk — otherwise inline-layout text shifts
  // left to the page margin on every continuation page.
  const reserveLabelColumn = el._chunkIsContinuation === true;

  if (isInline) {
    return {
      label: showLabel
        ? buildTextSchema({
            name: el.id,
            position: { x: innerX, y: innerY },
            width: labelW,
            height: mm(m.h - m.padding * 2),
            fontSize: s.fontSize ?? 11,
            fontColor: s.color ?? "#101828",
            fontWeight: s.fontWeight ?? "normal",
            fontStyle: s.fontStyle ?? "normal",
            fontName: s.labelFontFamily,
            alignment: "left",
            verticalAlignment: mapPdfVerticalAlign(vertAlign),
            lineHeight: s.lineHeight,
          })
        : null,
      area: {
        x: +(innerX + (showLabel || reserveLabelColumn ? labelW : 0)).toFixed(
          3,
        ),
        y: innerY,
        w: showLabel || reserveLabelColumn ? answerW : mm(el.w - m.padding * 2),
        h: mm(m.h - m.padding * 2),
      },
    };
  }

  // Stacked
  return {
    label: showLabel
      ? buildTextSchema({
          name: el.id,
          position: { x: innerX, y: innerY },
          width: labelW,
          height: labelH,
          fontSize: s.fontSize ?? 11,
          fontColor: s.color ?? "#101828",
          fontWeight: s.fontWeight ?? "normal",
          fontStyle: s.fontStyle ?? "normal",
          fontName: s.labelFontFamily,
          alignment: s.align ?? "left",
          verticalAlignment: "top",
          lineHeight: s.lineHeight,
        })
      : null,
    area: {
      x: innerX,
      y: showLabel ? +(innerY + labelH).toFixed(3) : innerY,
      w: answerW,
      h: answerH,
    },
  };
}

// Per-type renderers

// Returns { schemas: [], inputs: {} }
function resolveAnswerStyle(s) {
  const isInline = s.labelLayout === "inline";
  return {
    fontSize: s.answerFontSize ?? 11,
    fontColor: s.answerColor ?? "#101828",
    fontWeight: s.answerFontWeight ?? "normal",
    fontStyle: s.answerFontStyle ?? "normal",
    fontName: s.answerFontFamily,
    alignment: isInline ? "left" : (s.answerAlign ?? "left"),
  };
}

function fieldSchemasAndInputs(
  el,
  submissionData,
  formField,
  globalTypography = {},
) {
  // Continuation chunks (after long-answer line-split) suppress the field
  // label so the question doesn't repeat on every continuation page.
  const s = chunkAwareStyle(el, resolveElementStyle(el, globalTypography));
  const { area, schemas, inputs } = fieldBase(el, s, formField);
  const ans = resolveAnswerStyle(s);

  const fieldId = el.content?.fieldId;
  const raw =
    fieldId && submissionData ? parsedValue(submissionData[fieldId]) : null;

  // Pre-split line subset takes precedence over re-deriving from submission.
  const answerText = Array.isArray(el._chunkLines)
    ? el._chunkLines.join("\n")
    : formatAnswerText(el.type, raw, formField, submissionData);
  if (answerText != null) {
    schemas.push(
      buildTextSchema({
        name: `${el.id}_answer`,
        position: { x: area.x, y: area.y },
        width: area.w,
        height: area.h,
        fontSize: ans.fontSize,
        fontColor: ans.fontColor,
        fontWeight: ans.fontWeight,
        fontStyle: ans.fontStyle,
        fontName: ans.fontName,
        lineHeight: s.lineHeight,
        alignment: ans.alignment,
        verticalAlignment:
          el._metrics?.isInline || s.labelLayout === "inline"
            ? mapPdfVerticalAlign(s.labelVerticalAlign ?? "start")
            : "top",
      }),
    );
    inputs[`${el.id}_answer`] = answerText;
  }

  renderBorder(el, s, area, schemas, inputs);
  return { schemas, inputs };
}

function renderBorder(el, s, area, schemas, inputs) {
  if (s.showBorder === false) return;
  // For a split element, the underline border belongs at the END of the
  // answer — don't draw it on non-final chunks, otherwise every page in
  // the split gets its own line.
  if (el._chunkIsLast === false) return;
  const m = el._metrics;
  const lineThick = mm(m?.borderThickness ?? 0.5);
  const borderY =
    m?.borderY != null ? mm(el.y + m.borderY) : area.y + area.h - lineThick;

  schemas.push(
    buildLineSchema({
      name: `${el.id}_line`,
      position: { x: area.x, y: +borderY.toFixed(3) },
      width: area.w,
      height: lineThick,
      color: s.lineColor ?? BORDER_COLOR,
    }),
  );
  inputs[`${el.id}_line`] = "";
}

const IMAGE_EXTS = new Set(["png", "jpg", "jpeg", "gif", "webp"]);
function isImageFilename(name) {
  if (!name) return false;
  const ext = String(name).split(".").pop()?.toLowerCase();
  return IMAGE_EXTS.has(ext);
}

function resolveFileItems(raw) {
  if (raw == null) return [];
  const arr = Array.isArray(raw) ? raw : [raw];
  return arr.map((item, i) => {
    if (typeof item === "object" && item) {
      return {
        url: item.url ?? null,
        filename: item.metadata?.filename ?? item.filename ?? `file-${i + 1}`,
      };
    }
    return { url: null, filename: String(item) };
  });
}

function fileUploadSchemasAndInputs(
  el,
  submissionData,
  formField,
  imageCache = {},
  aspectCache = {},
) {
  // Continuation chunks (produced by file splitting in useUnifiedLayout)
  // suppress the field label so the second/third page doesn't repeat it.
  const s = chunkAwareStyle(el, el.style ?? {});
  const { area, schemas, inputs } = fieldBase(el, s, formField);
  const ans = resolveAnswerStyle(s);

  const fieldId = el.content?.fieldId;
  const raw =
    fieldId && submissionData ? parsedValue(submissionData[fieldId]) : null;
  // Prefer the chunk's pre-split items over the full submission list. When
  // useUnifiedLayout splits an oversized file element, each chunk carries
  // the slice of items it should render via `_chunkItems`.
  const items = Array.isArray(el._chunkItems)
    ? resolveFileItems(el._chunkItems)
    : resolveFileItems(raw);
  // No submission files → render nothing. Canvas still shows placeholders
  // so the layout is previewable in the builder.
  if (!items.length) return { schemas, inputs };

  const display = s.fileDisplay ?? "grid";

  // Bullets — filenames as a vertical list, each linked to the URL.
  if (display === "bullet") {
    const lineH = Math.max(mm(ans.fontSize) * 1.4, mm(4));
    items.forEach((item, i) => {
      const y = area.y + i * lineH;
      schemas.push(
        buildTextSchema({
          name: `${el.id}_b_${i}`,
          position: { x: area.x, y },
          width: area.w,
          height: lineH,
          fontSize: ans.fontSize,
          fontColor: ans.fontColor,
          fontWeight: ans.fontWeight,
          fontStyle: ans.fontStyle,
          fontName: ans.fontName,
          alignment: "left",
          verticalAlignment: "middle",
        }),
      );
      inputs[`${el.id}_b_${i}`] = `• ${item.filename}`;
    });
    return { schemas, inputs };
  }

  renderFileTiles({
    area,
    items,
    style: s,
    text: {
      fontSize: ans.fontSize,
      fontColor: ans.fontColor,
      fontWeight: ans.fontWeight,
      fontStyle: ans.fontStyle,
      fontName: ans.fontName,
    },
    imageCache,
    aspectCache,
    idPrefix: el.id,
    schemas,
    inputs,
    gapMm: mm(6),
    cardPadMm: mm(4),
  });
  return { schemas, inputs };
}

function signatureSchemasAndInputs(
  el,
  submissionData,
  formField,
  imageCache = {},
) {
  const s = el.style ?? {};
  const { area, schemas, inputs } = fieldBase(el, s, formField);
  const m = el._metrics ?? {};
  const borderColor = s.lineColor ?? BORDER_COLOR;
  const borderWidth = getLineThicknessMm(s);

  const fieldId = el.content?.fieldId;
  const raw =
    fieldId && submissionData ? parsedValue(submissionData[fieldId]) : null;
  const sigItems = resolveFileItems(raw);
  const sigUrl = sigItems[0]?.url;
  const base64 = sigUrl ? imageCache[sigUrl] : null;

  // Render a border bottom like other fields
  if (m.showBorder !== false) {
    schemas.push(
      buildLineSchema({
        name: `${el.id}_border`,
        position: { x: area.x, y: area.y + area.h },
        width: area.w,
        height: borderWidth,
        color: borderColor,
      }),
    );
  }

  // If we have a signature image, render it inside the box
  if (base64 && isImageFilename(sigItems[0]?.filename)) {
    // Render image bottom-aligned above the line
    const imgH = Math.max(area.h - mm(1), mm(40)); // Limit height but try to fill
    schemas.push({
      name: `${el.id}_image`,
      type: "image",
      position: { x: area.x, y: area.y + (area.h - imgH) },
      width: area.w,
      height: imgH,
    });
    inputs[`${el.id}_image`] = base64;
  }

  return { schemas, inputs };
}

// Placeholder renderer dispatched by content.kind.
function placeholderSchemasAndInputs(
  el,
  submissionData,
  formField,
  imageCache,
  pos,
  width,
  height,
) {
  const s = el.style ?? {};
  const fieldId = el.content?.fieldId;
  const kind = el.content?.kind ?? deriveKindFromFormField(formField);
  const raw = fieldId && submissionData ? submissionData[fieldId] : null;

  // Per-option marker — glyph only when submission selected this option.
  if (kind === "checkmark") {
    const target = String(el.content?.optionValue ?? "");
    const parsed = parsedValue(raw);
    const selected = new Set(
      Array.isArray(parsed)
        ? parsed.map(String)
        : parsed != null
          ? [String(parsed)]
          : [],
    );
    if (!selected.has(target)) return { schemas: [], inputs: {} };

    const { glyph, bg } = resolveMarkerGlyph(el.content, s);
    // Glyph scales to the box.
    const glyphSize = Math.min(el.w, el.h) * 0.9;
    const fillColor = s.color || "#101828";
    const schemas = [];
    if (bg) {
      schemas.push({
        name: `${el.id}_bg`,
        type: "rectangle",
        position: pos,
        width,
        height,
        color: fillColor,
        borderColor: fillColor,
        borderWidth: 0,
      });
    }
    schemas.push(
      buildTextSchema({
        name: el.id,
        position: pos,
        width,
        height,
        fontSize: glyphSize,
        fontColor: bg ? "#FFFFFF" : fillColor,
        fontName: "DejaVu Sans",
        fontWeight: "normal",
        fontStyle: "normal",
        alignment: "center",
        verticalAlignment: "middle",
        lineHeight: 1,
        characterSpacing: 0,
      }),
    );
    return { schemas, inputs: { [el.id]: glyph } };
  }

  // Signature — single image filling the box.
  if (kind === "signature" || formField?.type === "signature") {
    const items = resolveFileItems(parsedValue(raw));
    const first = items[0];
    if (!first?.url || !isImageFilename(first.filename)) {
      return { schemas: [], inputs: {} };
    }
    const base64 = imageCache[first.url];
    if (!base64) return { schemas: [], inputs: {} };
    return {
      schemas: [
        {
          name: el.id,
          type: "image",
          position: pos,
          width,
          height,
        },
      ],
      inputs: { [el.id]: base64 },
    };
  }

  // File — multi-tile layout.
  if (kind === "file") {
    const items = resolveFileItems(parsedValue(raw));
    if (!items.length) return { schemas: [], inputs: {} };
    const schemas = [];
    const inputs = {};
    renderFileTiles({
      area: { x: pos.x, y: pos.y, w: width, h: height },
      items,
      style: s,
      text: {
        fontSize: s.fontSize ?? 11,
        fontColor: s.color ?? "#101828",
        fontWeight: s.fontWeight,
        fontStyle: s.fontStyle,
        fontName: s.labelFontFamily,
      },
      imageCache,
      idPrefix: el.id,
      schemas,
      inputs,
    });
    return { schemas, inputs };
  }

  // Choice-shaped — render a glyphed list or just the selected value text.
  if (kind === "choice") {
    const renderMode = s.renderMode ?? "text";
    const options = formField?.options ?? formField?.item?.options ?? [];
    const selected = new Set(
      Array.isArray(parsedValue(raw))
        ? parsedValue(raw).map(String)
        : raw != null
          ? [String(parsedValue(raw))]
          : [],
    );
    let text = "";
    if (renderMode === "checkbox" && options.length) {
      text = options
        .map(
          (o) =>
            `${selected.has(String(o.value ?? o)) ? "☑" : "☐"} ${o.label ?? o.value ?? o}`,
        )
        .join("\n");
    } else if (renderMode === "radio" && options.length) {
      text = options
        .map(
          (o) =>
            `${selected.has(String(o.value ?? o)) ? "●" : "○"} ${o.label ?? o.value ?? o}`,
        )
        .join("\n");
    } else {
      // Plain text mode — comma-separate multi-select values.
      text = Array.from(selected).join(", ");
    }
    return {
      schemas: [
        buildTextSchema({
          name: el.id,
          position: pos,
          width,
          height,
          fontSize: s.fontSize,
          fontColor: s.color,
          fontName: s.labelFontFamily,
          fontWeight: s.fontWeight,
          fontStyle: s.fontStyle,
          alignment: s.align ?? "left",
          verticalAlignment: "top",
          lineHeight: 1,
          characterSpacing: 0,
        }),
      ],
      inputs: { [el.id]: text },
    };
  }

  // System metadata (submission id / created-at / updated-at).
  if (kind === "system") {
    let text = raw == null ? "" : String(raw);
    if (
      raw &&
      (fieldId === "formesterSubmissionCreatedAt" ||
        fieldId === "formesterSubmissionUpdatedAt")
    ) {
      text = formatDate(raw);
    }
    return {
      schemas: [
        buildTextSchema({
          name: el.id,
          position: pos,
          width,
          height,
          fontSize: s.fontSize,
          fontColor: s.color,
          fontName: s.labelFontFamily,
          fontWeight: s.fontWeight,
          fontStyle: s.fontStyle,
          alignment: s.align ?? "left",
          verticalAlignment: "top",
          lineHeight: 1,
          characterSpacing: 0,
        }),
      ],
      inputs: { [el.id]: text },
    };
  }

  // Text — uses formatAnswerText so compound fields (name, address) resolve.
  const value = formatAnswerText(
    formField?.type ?? "text",
    parsedValue(raw),
    formField,
    submissionData,
  );
  // Baseline nudge to match editor preview.
  const nudged = { x: pos.x, y: Math.max(0, pos.y + mm(2)) };
  return {
    schemas: [
      buildTextSchema({
        name: el.id,
        position: nudged,
        width,
        height,
        fontSize: s.fontSize,
        fontColor: s.color,
        fontName: s.labelFontFamily,
        fontWeight: s.fontWeight,
        fontStyle: s.fontStyle,
        alignment: s.align ?? "left",
        verticalAlignment: "top",
        lineHeight: 1,
        characterSpacing: 0,
      }),
    ],
    inputs: { [el.id]: value },
  };
}

const CHOICE_FORM_TYPES = new Set([
  "radio",
  "multiple-checkbox",
  "dropdown",
  "picture-checkbox",
]);

function deriveKindFromFormField(formField) {
  if (!formField) return "text";
  if (formField.type === "signature") return "signature";
  if (CHOICE_FORM_TYPES.has(formField.type)) return "choice";
  return "text";
}

// Shared tile layout for file_upload elements and file-kind placeholders.
// Pushes schemas + inputs into the provided arrays. Caller pre-computes
// `area` (x/y/w/h in mm) and supplies typography for filename text.
function renderFileTiles({
  area,
  items,
  style,
  text,
  imageCache,
  aspectCache = {},
  idPrefix,
  schemas,
  inputs,
  gapMm = mm(4),
  cardPadMm = mm(3),
}) {
  const display = style.fileDisplay ?? "square";
  const itemPt = resolveFileItemSizePt(style);
  const itemSizeMm = mm(itemPt);

  const drawTile = (item, x, y, w, h, key) => {
    const base64 = item.url && imageCache[item.url];
    if (base64 && isImageFilename(item.filename)) {
      schemas.push({
        name: `${idPrefix}_t_${key}`,
        type: "image",
        position: { x, y },
        width: w,
        height: h,
      });
      inputs[`${idPrefix}_t_${key}`] = base64;
      return;
    }
    schemas.push(
      buildRectangleSchema({
        name: `${idPrefix}_tb_${key}`,
        position: { x, y },
        width: w,
        height: h,
        color: style.backgroundColor || "#f9fafb",
        borderColor: style.lineColor || "#d0d5dd",
        borderWidth: mm(0.3),
        radius: mm(1),
      }),
    );
  };

  if (display === "card") {
    const iconMm = mm(Math.min(itemPt, 32));
    const cardH = iconMm + cardPadMm * 2;
    items.forEach((item, i) => {
      const cy = area.y + i * (cardH + gapMm);
      schemas.push(
        buildRectangleSchema({
          name: `${idPrefix}_c_${i}`,
          position: { x: area.x, y: cy },
          width: area.w,
          height: cardH,
          color: style.backgroundColor || "#f9fafb",
          borderColor: style.lineColor || "#e4e7ec",
          borderWidth: mm(0.3),
          radius: mm(1),
        }),
      );
      drawTile(
        item,
        area.x + cardPadMm,
        cy + cardPadMm,
        iconMm,
        iconMm,
        `c${i}`,
      );
      schemas.push(
        buildTextSchema({
          name: `${idPrefix}_cn_${i}`,
          position: { x: area.x + cardPadMm * 2 + iconMm, y: cy },
          width: area.w - (cardPadMm * 3 + iconMm),
          height: cardH,
          fontSize: text.fontSize,
          fontColor: text.fontColor,
          fontWeight: text.fontWeight,
          fontStyle: text.fontStyle,
          fontName: text.fontName,
          alignment: "left",
          verticalAlignment: "middle",
        }),
      );
      inputs[`${idPrefix}_cn_${i}`] = item.filename ?? "";
    });
    return;
  }
  const MASONRY_FALLBACK = [1, 0.75, 4 / 3];
  const tileH = itemSizeMm;
  const tileWidthFor = (i, item) => {
    if (display !== "masonry") return itemSizeMm;
    const real = item.url ? aspectCache[item.url] : null;
    const ratio = real ?? MASONRY_FALLBACK[i % MASONRY_FALLBACK.length];
    return itemSizeMm * ratio;
  };

  const rows = [];
  let cur = [];
  let curW = 0;
  items.forEach((item, i) => {
    const w = tileWidthFor(i, item);
    if (curW + w > area.w + 0.01 && cur.length) {
      rows.push(cur);
      cur = [];
      curW = 0;
    }
    cur.push({ item, i, w });
    curW += w + gapMm;
  });
  if (cur.length) rows.push(cur);

  rows.forEach((row, rowIdx) => {
    const totalGap = gapMm * (row.length - 1);
    const naturalSum = row.reduce((acc, c) => acc + c.w, 0);
    const scale =
      naturalSum > 0 ? Math.min(1, (area.w - totalGap) / naturalSum) : 1;
    const rowH = tileH * scale;
    let cursorX = 0;
    const ty = area.y + rowIdx * (rowH + gapMm);
    row.forEach(({ item, i, w }) => {
      drawTile(item, area.x + cursorX, ty, w * scale, rowH, `g${i}`);
      cursorX += w * scale + gapMm;
    });
  });
}

function ratingSchemasAndInputs(el, submissionData, formField) {
  const s = el.style ?? {};
  const { area, schemas, inputs } = fieldBase(el, s, formField);
  // Star count comes from the live form field (item.count), not a builder
  // override.
  const item = formField?.item ?? formField ?? {};
  const max = Number(item.count ?? 5);

  const fieldId = el.content?.fieldId;
  const raw =
    fieldId && submissionData ? parsedValue(submissionData[fieldId]) : null;
  const rating = raw != null ? Number(raw) : null;

  const halfFilled = Math.ceil(max / 2);
  const starsText =
    rating != null
      ? "★".repeat(Math.min(rating, max)) +
        "☆".repeat(Math.max(max - rating, 0))
      : "★".repeat(halfFilled) + "☆".repeat(max - halfFilled);

  return {
    schemas: [
      ...schemas,
      buildTextSchema({
        name: `${el.id}_stars`,
        position: { x: area.x, y: area.y },
        width: area.w,
        height: Math.max(area.h, mm(10)),
        fontSize: s.starSize ?? 24,
        fontColor: s.starColor ?? "#f79009",
        alignment: "left",
        verticalAlignment: "middle",
      }),
    ],
    inputs: { ...inputs, [`${el.id}_stars`]: starsText },
  };
}

function opinionScaleSchemasAndInputs(el, submissionData, formField) {
  const s = el.style ?? {};
  const { area, schemas, inputs } = fieldBase(el, s, formField);
  // Step count comes from the live form field range (item.start..item.end).
  const item = formField?.item ?? formField ?? {};
  const start = Number(item.start ?? 1);
  const end = Number(item.end ?? 10);
  const steps = Math.max(1, end - start + 1);

  const fieldId = el.content?.fieldId;
  const raw =
    fieldId && submissionData ? parsedValue(submissionData[fieldId]) : null;
  const selected = raw != null ? Number(raw) : null;

  const scaleColor = s.scaleColor ?? "#344054";
  const borderWidth = getLineThicknessMm(s);
  // scaleBoxSize / scaleFontSize values are in pt (canvas renders them as
  // CSS pt, PDF treats them as pt). Convert pt → mm for rectangle dimensions.
  const boxSizeMm = mm(s.scaleBoxSize ?? 24);
  const numFontSize = s.scaleFontSize ?? 12;
  const gapMm = mm(2);
  const boxW = boxSizeMm;
  const boxH = boxSizeMm;
  // Lay out boxes left-to-right, wrapping to the next line when they overflow.
  const perRow = Math.max(1, Math.floor((area.w + gapMm) / (boxW + gapMm)));

  for (let i = 1; i <= steps; i++) {
    const col = (i - 1) % perRow;
    const row = Math.floor((i - 1) / perRow);
    const boxX = +(area.x + col * (boxW + gapMm)).toFixed(3);
    const boxY = +(area.y + row * (boxH + gapMm)).toFixed(3);
    const isSelected = selected === start + i - 1;
    schemas.push(
      buildRectangleSchema({
        name: `${el.id}_box_${i}`,
        position: { x: boxX, y: boxY },
        width: boxW,
        height: boxH,
        color: isSelected ? scaleColor : "",
        borderColor: scaleColor,
        borderWidth,
        radius: 0,
      }),
    );
    schemas.push(
      buildTextSchema({
        name: `${el.id}_num_${i}`,
        position: { x: boxX, y: boxY },
        width: boxW,
        height: boxH,
        fontSize: numFontSize,
        fontColor: isSelected ? "#ffffff" : scaleColor,
        alignment: "center",
        verticalAlignment: "middle",
      }),
    );
    inputs[`${el.id}_num_${i}`] = String(start + i - 1);
  }

  return { schemas, inputs };
}

function renderChoiceContent({
  el,
  area,
  ans,
  rows,
  display,
  s,
  isMultiple,
  schemas,
  inputs,
}) {
  const layout = s.optionLayout ?? "1col";
  const cols = layout === "2col" ? 2 : 1;
  const singleRow = layout === "row";
  const markerStyle = s.markerStyle ?? "auto";

  // Tag mode
  if (display === "tag") {
    const tagGap = mm(3);
    const tagPaddingX = mm(8);
    const tagH = mm(18);
    let currentX = area.x;
    let currentY = area.y;

    const tagFontSize = Math.max(ans.fontSize - 2, 7);
    rows.forEach((row, i) => {
      const textMetrics = getTextMetrics(row.text, {
        fontSize: tagFontSize,
        fontFamily: ans.fontName || "Roboto",
        fontWeight: "Regular",
        fontStyle: 1,
      });
      const tagW = mm(textMetrics.width) + tagPaddingX * 2;

      if (currentX + tagW > area.x + area.w && currentX > area.x) {
        currentX = area.x;
        currentY += tagH + tagGap;
      }

      schemas.push(
        buildRectangleSchema({
          name: `${el.id}_tag_bg_${i}`,
          position: { x: currentX, y: currentY },
          width: tagW,
          height: tagH,
          color: "#f2f4f7",
          borderColor: "#f2f4f7",
          borderWidth: 0,
          radius: tagH / 2,
        }),
      );
      schemas.push(
        buildTextSchema({
          name: `${el.id}_tag_txt_${i}`,
          position: { x: currentX, y: currentY },
          width: tagW,
          height: tagH,
          fontSize: tagFontSize,
          fontColor: "#344054",
          fontWeight: ans.fontWeight,
          fontStyle: ans.fontStyle,
          fontName: ans.fontName,
          alignment: "center",
          verticalAlignment: "middle",
        }),
      );
      inputs[`${el.id}_tag_txt_${i}`] = row.text;
      currentX += tagW + tagGap;
    });
    return;
  }

  // List modes — per-grid-row height matches the tallest wrapped cell so a long option that wraps to 2 lines doesn't bleed into the next row.
  const totalCols = singleRow ? rows.length : cols;
  const lineH = s.lineHeight ?? DEFAULT_TEXT_LINE_HEIGHT;
  const colW = +(area.w / totalCols).toFixed(3);
  const iconW = mm(ans.fontSize * 1.4);
  const textW = Math.max(0, colW - iconW);
  const textW_pt = Math.max(0, pt(area.w) / totalCols - ans.fontSize * 1.4);
  const ROW_GAP = mm(1);

  const linesFor = (text) =>
    getTextMetrics(text || "", {
      fontSize: ans.fontSize,
      fontFamily: ans.fontName || "Roboto",
      fontWeight: ans.fontWeight,
      fontStyle: ans.fontStyle,
      lineHeight: lineH,
      maxWidth: textW_pt,
    }).lines;

  const numGridRows = singleRow
    ? 1
    : Math.max(Math.ceil(rows.length / cols), 1);
  const gridRowLines = new Array(numGridRows).fill(1);
  rows.forEach((row, i) => {
    const gi = singleRow ? 0 : Math.floor(i / cols);
    gridRowLines[gi] = Math.max(gridRowLines[gi], linesFor(row.text));
  });
  const lineHeightMm = mm(ans.fontSize * lineH);
  const gridRowH = gridRowLines.map((n) => n * lineHeightMm + ROW_GAP);
  const rowYOffsets = [0];
  for (const h of gridRowH) rowYOffsets.push(rowYOffsets.at(-1) + h);

  const drawMarker = (x, y, h, checked, isRadio, i, fontSize) => {
    const size = mm(fontSize * 0.8);
    const mx = x + mm(2);
    const my = y + mm(2) + (mm(fontSize * lineH) - size) / 2;
    const color = s.answerColor ?? "#101828";

    if (isRadio) {
      schemas.push({
        name: `${el.id}_r_outer_${i}`,
        type: "ellipse",
        position: { x: mx, y: my },
        width: size,
        height: size,
        color: "",
        borderColor: color,
        borderWidth: mm(fontSize * 0.08),
      });
      if (checked) {
        const dot = size * 0.45;
        schemas.push({
          name: `${el.id}_r_inner_${i}`,
          type: "ellipse",
          position: { x: mx + (size - dot) / 2, y: my + (size - dot) / 2 },
          width: dot,
          height: dot,
          color: color,
          borderColor: color,
          borderWidth: 0,
        });
      }
    } else {
      schemas.push(
        buildRectangleSchema({
          name: `${el.id}_cb_outer_${i}`,
          position: { x: mx, y: my },
          width: size,
          height: size,
          color: "",
          borderColor: color,
          borderWidth: mm(fontSize * 0.08),
          radius: mm(fontSize * 0.12),
        }),
      );
      if (checked) {
        schemas.push(
          buildTextSchema({
            name: `${el.id}_cb_inner_${i}`,
            position: { x: mx, y: my },
            width: size,
            height: size,
            fontSize: fontSize * 0.7,
            fontColor: color,
            fontWeight: "bold",
            fontName: undefined,
            alignment: "center",
            verticalAlignment: "middle",
          }),
        );
        inputs[`${el.id}_cb_inner_${i}`] = "✓";
      }
    }
  };

  rows.forEach((row, i) => {
    const col = singleRow ? i : i % cols;
    const rowIdx = singleRow ? 0 : Math.floor(i / cols);
    const rx = +(area.x + col * colW).toFixed(3);
    const ry = +(area.y + rowYOffsets[rowIdx]).toFixed(3);
    const cellH = gridRowH[rowIdx];

    if (display === "ordered" || display === "unordered") {
      const prefix = display === "ordered" ? `${i + 1}.` : "•";
      schemas.push(
        buildTextSchema({
          name: `${el.id}_opt_icon_${i}`,
          position: { x: rx, y: ry + mm(1) },
          width: iconW,
          height: cellH,
          fontSize: ans.fontSize,
          fontColor: ans.fontColor,
          fontWeight: ans.fontWeight,
          fontStyle: ans.fontStyle,
          fontName: ans.fontName,
          lineHeight: lineH,
          alignment: "center",
          verticalAlignment: "top",
        }),
      );
      inputs[`${el.id}_opt_icon_${i}`] = prefix;
    } else {
      let isRadio = !isMultiple;
      if (markerStyle === "radio") isRadio = true;
      if (markerStyle === "checkbox") isRadio = false;
      drawMarker(rx, ry, cellH, row.checked, isRadio, i, ans.fontSize);
    }

    schemas.push(
      buildTextSchema({
        name: `${el.id}_opt_text_${i}`,
        position: { x: rx + iconW, y: ry + mm(1) },
        width: textW,
        height: cellH,
        fontSize: ans.fontSize,
        fontColor: ans.fontColor,
        fontWeight: ans.fontWeight,
        fontStyle: ans.fontStyle,
        fontName: ans.fontName,
        lineHeight: lineH,
        alignment: "left",
        verticalAlignment: "top",
      }),
    );
    inputs[`${el.id}_opt_text_${i}`] = row.text;
  });
}

function choiceSchemasAndInputs(el, submissionData, isMultiple, formField) {
  const s = chunkAwareStyle(el, el.style ?? {});
  const { area, schemas, inputs } = fieldBase(el, s, formField);

  const fieldId = el.content?.fieldId;
  const raw =
    fieldId && submissionData ? parsedValue(submissionData[fieldId]) : null;
  const ans = resolveAnswerStyle(s);

  const display = s.answerDisplay ?? "tag";
  const showAll = s.showAllOptions !== false;
  // Pre-split option subset takes precedence over the form field's full list.
  const liveOptions = Array.isArray(el._chunkOptions)
    ? el._chunkOptions
    : (formField?.options ?? []);
  const hasCustomValues = formField?.hasCustomValuesForOptions ?? false;

  const resolveOptionLabel = (optIdOrLabel) => {
    if (liveOptions.length) {
      const opt = liveOptions.find((o) => o.id === optIdOrLabel);
      if (opt) return hasCustomValues ? opt.value || opt.label : opt.label;
    }
    return optIdOrLabel;
  };

  const selectedRaw =
    raw != null ? (Array.isArray(raw) ? raw.map(String) : [String(raw)]) : null;
  const selected = selectedRaw ? selectedRaw.map(resolveOptionLabel) : null;

  const allOptionLabels = liveOptions.map((o) =>
    hasCustomValues ? o.value || o.label : o.label,
  );

  if (!allOptionLabels.length && !selected?.length) return { schemas, inputs };

  let rows;
  if (display === "tag") {
    const items = selected ?? [];
    rows = items.map((text) => ({ text, checked: false }));
  } else if (display === "checkbox" || display === "radio") {
    rows = showAll
      ? allOptionLabels.map((text) => ({
          text,
          checked: selected ? selected.includes(text) : false,
        }))
      : (selected ?? []).map((text) => ({
          text,
          checked: true,
        }));
  } else {
    const items = selected ?? [];
    rows = items.map((text) => ({ text, checked: false }));
  }

  if (!rows.length) return { schemas, inputs };

  renderChoiceContent({
    el,
    area,
    ans,
    rows,
    display,
    s,
    isMultiple,
    schemas,
    inputs,
  });

  return { schemas, inputs };
}

function termsSchemasAndInputs(el, submissionData, formField) {
  const s = el.style ?? {};
  // Suppress the field-level label header — the agreement text is rendered as the checkbox option itself.
  const { area, schemas, inputs } = fieldBase(
    el,
    { ...s, showLabel: false },
    formField,
  );

  const labelAns = {
    fontSize: s.fontSize ?? 11,
    fontColor: s.color ?? "#101828",
    fontWeight: s.fontWeight ?? "normal",
    fontStyle: s.fontStyle ?? "normal",
    fontName: s.labelFontFamily,
    alignment: s.align ?? "left",
  };

  const fieldId = el.content?.fieldId;
  const raw =
    fieldId && submissionData ? parsedValue(submissionData[fieldId]) : null;

  const checked = raw === true || raw === "true";

  // Chunked terms (long agreement text split across pages): use the chunk's
  // line subset as the option text. Continuation chunks render text only — no checkbox marker repeats.
  const isChunk = Array.isArray(el._chunkLines);
  const optionLabel = isChunk
    ? el._chunkLines.join("\n")
    : formField?.label || formField?.fixedName || el.content?.label || "";

  if (!optionLabel && raw == null) return { schemas, inputs };

  if (el._chunkIsContinuation) {
    schemas.push(
      buildTextSchema({
        name: `${el.id}_terms`,
        position: { x: area.x, y: area.y },
        width: area.w,
        height: area.h,
        ...labelAns,
        verticalAlignment: "top",
        lineHeight: s.lineHeight,
      }),
    );
    inputs[`${el.id}_terms`] = optionLabel;
    return { schemas, inputs };
  }

  renderChoiceContent({
    el,
    area,
    ans: labelAns,
    rows: [{ text: optionLabel, checked }],
    display: "checkbox",
    s: { ...s, markerStyle: "checkbox" },
    isMultiple: true,
    schemas,
    inputs,
  });

  return { schemas, inputs };
}

function rankingSchemasAndInputs(el, submissionData, formField) {
  const s = chunkAwareStyle(el, el.style ?? {});
  const { area, schemas, inputs } = fieldBase(el, s, formField);
  const ans = resolveAnswerStyle(s);

  const lines = Array.isArray(el._chunkLines)
    ? el._chunkLines
    : rankingLines(el, formField, submissionData);
  if (!lines.length) return { schemas, inputs };

  schemas.push(
    buildTextSchema({
      name: `${el.id}_answer`,
      position: { x: area.x, y: area.y },
      width: area.w,
      height: Math.max(area.h, mm(10)),
      fontSize: ans.fontSize,
      fontColor: ans.fontColor,
      fontWeight: ans.fontWeight,
      fontStyle: ans.fontStyle,
      fontName: ans.fontName,
      alignment: s.answerAlign ?? "left",
      verticalAlignment: "top",
    }),
  );
  inputs[`${el.id}_answer`] = lines.join("\n");

  return { schemas, inputs };
}

function repeaterSchemasAndInputs(el, submissionData, formField) {
  // Continuation chunks suppress the field label; the table header still
  // repeats on every chunk so each page is self-explanatory.
  const s = chunkAwareStyle(el, el.style ?? {});
  const { area, schemas, inputs } = fieldBase(el, s, formField);
  const borderColor = s.borderColor ?? BORDER_COLOR;
  const borderWidth = mm(s.borderWidth ?? 1);
  const headerColor = s.headerColor ?? "#f2f4f7";
  const headerTextColor = s.headerTextColor ?? "#475467";
  const rowStripeColor = s.rowStripeColor ?? "";
  const showHeader = s.showHeader !== false;

  const liveColumns =
    formField?.components?.map((c) => ({
      id: c.id,
      label: c.label ?? c.fixedName ?? "",
    })) ?? [];
  const cols = liveColumns;
  if (!cols.length) return { schemas, inputs };

  const fieldId = el.content?.fieldId;
  const raw =
    fieldId && submissionData ? parsedValue(submissionData[fieldId]) : null;
  // Prefer the chunk's pre-split row subset; falls back to the full submission
  // list when the element wasn't split.
  const rows = Array.isArray(el._chunkRows)
    ? el._chunkRows
    : Array.isArray(raw)
      ? raw
      : [];
  if (!rows.length) return { schemas, inputs };

  const headFontSize = s.fontSize ?? 10;
  const bodyFontSize = s.answerFontSize ?? s.fontSize ?? 9;
  const lineHeight = s.lineHeight ?? DEFAULT_TABLE_LINE_HEIGHT;
  const cellPadMm = s.cellPadding ?? 2;
  // pdfme's table fitContent measures wrap against the full cell width but
  // the renderer wraps against the inner width — rows don't grow on wrap.
  // Pre-split each cell so pdfme sees the right line count. Shrink the wrap
  // target slightly: pdfme's fontKit measurements are a touch wider than
  // canvas measureText, so without the safety factor borderline strings
  // squeak past our wrap and pdfme re-wraps them while the row stays short.
  const cellPadPt = pt(cellPadMm);
  const colWidthPt = pt(area.w) / Math.max(cols.length, 1);
  const innerColPt = Math.max(1, (colWidthPt - cellPadPt * 2) * WRAP_SAFETY);
  const headFont = {
    size: headFontSize,
    family: s.labelFontFamily,
    weight: s.fontWeight,
    style: s.fontStyle,
  };
  const bodyFont = {
    size: bodyFontSize,
    family: s.answerFontFamily,
    weight: s.answerFontWeight,
    style: s.answerFontStyle,
  };
  const wrapCell = (text, font) =>
    wrapTextToLines(
      text,
      font.size,
      font.family,
      font.weight,
      font.style,
      innerColPt,
    ).join("\n");
  const head = cols.map((c) => wrapCell(c.label, headFont));
  const headWidthPercentages = Array(cols.length).fill(
    +(100 / cols.length).toFixed(4),
  );
  const bodyRows = rows.map((row) =>
    cols.map((col) => {
      if (!row || typeof row !== "object") return "";
      const v = row[col.id] ?? row[col.label];
      return wrapCell(v != null ? String(v) : "", bodyFont);
    }),
  );
  const cellPad = {
    top: cellPadMm,
    right: cellPadMm,
    bottom: cellPadMm,
    left: cellPadMm,
  };
  const charSpacing = 0;
  const cellBorder = {
    top: borderWidth,
    right: borderWidth,
    bottom: borderWidth,
    left: borderWidth,
  };
  const headAlign = s.align ?? "center";
  const bodyAlign = s.answerAlign ?? "center";
  const verticalAlignment = s.verticalAlignment ?? "top";

  schemas.push({
    name: `${el.id}_table`,
    type: "table",
    position: { x: area.x, y: area.y },
    width: area.w,
    height: mm(el._metrics?.answerH ?? 10), // Use estimated height from metrics
    content: JSON.stringify(bodyRows),
    showHead: showHeader,
    head,
    headWidthPercentages,
    tableStyles: {
      borderWidth,
      borderColor,
    },
    headStyles: {
      fontSize: headFontSize,
      lineHeight,
      characterSpacing: charSpacing,
      fontColor: headerTextColor,
      fontName: resolvePdfFontName(s.labelFontFamily),
      fontWeight:
        String(s.fontWeight ?? "bold").toLowerCase() === "bold"
          ? "Bold"
          : "Regular",
      backgroundColor: headerColor,
      alignment: headAlign,
      verticalAlignment,
      borderColor,
      borderWidth: cellBorder,
      padding: cellPad,
    },
    bodyStyles: {
      fontSize: bodyFontSize,
      lineHeight,
      characterSpacing: charSpacing,
      fontColor: s.answerColor ?? s.color ?? "#101828",
      fontName: resolvePdfFontName(
        s.answerFontFamily,
        s.answerFontWeight,
        s.answerFontStyle,
      ),
      fontWeight:
        String(s.answerFontWeight ?? "normal").toLowerCase() === "bold"
          ? "Bold"
          : "Regular",
      backgroundColor: "",
      alternateBackgroundColor: rowStripeColor,
      alignment: bodyAlign,
      verticalAlignment,
      borderColor,
      borderWidth: cellBorder,
      padding: cellPad,
    },
    columnStyles: {},
  });
  inputs[`${el.id}_table`] = bodyRows;

  return { schemas, inputs };
}

function matrixSchemasAndInputs(el, submissionData, formField) {
  // Continuation chunks suppress the field label; the table column header
  // still repeats on every chunk via showHead.
  const s = chunkAwareStyle(el, el.style ?? {});
  const { area, schemas, inputs } = fieldBase(el, s, formField);
  const borderColor = s.borderColor ?? BORDER_COLOR;
  const borderWidth = mm(s.borderWidth ?? 1);
  const headerColor = s.headerColor ?? "#f2f4f7";
  const headerTextColor = s.headerTextColor ?? "#475467";
  const emptyCellStyle = s.emptyCellStyle ?? "empty";
  const showColHeader = s.showColumnHeader !== false;
  const showRowHeader = s.showRowHeader !== false;

  const fieldId = el.content?.fieldId;
  const raw =
    fieldId && submissionData ? parsedValue(submissionData[fieldId]) : null;
  const matrixData =
    raw && typeof raw === "object" && !Array.isArray(raw) ? raw : {};

  const allRows = formField?.item?.rows ?? formField?.rows ?? [];
  // Prefer the chunk's pre-split row subset over the full form row list.
  const liveRows = Array.isArray(el._chunkRows) ? el._chunkRows : allRows;
  const liveCols = formField?.item?.columns ?? formField?.columns ?? [];

  const display = s.matrixDisplay ?? "table";

  const CHOICE_TYPES = new Set(["radio", "checkbox"]);
  const isChoice = (col) =>
    CHOICE_TYPES.has(col.type ?? formField?.inputType ?? "radio");
  // Submission stores matrix data keyed by row.label / col.label, with id-keyed
  // fallback for older saves.
  const cellValue = (row, col) => {
    const rowBucket = matrixData[row.label] ?? matrixData[row.id];
    const v = rowBucket?.[col.label] ?? rowBucket?.[col.id];
    return v != null ? String(v) : "";
  };

  // Summary mode
  if (display === "summary") {
    const rows = liveRows;
    const ansFs = s.answerFontSize ?? s.fontSize ?? 10;
    const lineH = mm(ansFs * 1.6);

    rows.forEach((row, ri) => {
      const rowY = area.y + ri * lineH;
      const parts = liveCols
        .map((col) => {
          const v = cellValue(row, col);
          if (isChoice(col)) return v === "✔" ? col.label : null;
          if (col.type === "dropdown") {
            const opt = col.options?.find((o) => o.id === v);
            return opt ? opt.label : v || null;
          }
          return v || null;
        })
        .filter(Boolean);

      const summaryText = parts.length ? parts.join(", ") : "-";
      schemas.push(
        buildTextSchema({
          name: `${el.id}_row_${ri}`,
          position: { x: area.x, y: rowY },
          width: area.w,
          height: lineH,
          fontSize: s.answerFontSize ?? s.fontSize ?? 10,
          fontColor: s.answerColor ?? s.color ?? "#101828",
          fontWeight: s.answerFontWeight ?? s.fontWeight ?? "normal",
          fontName: s.answerFontFamily,
          alignment: s.answerAlign ?? "left",
          verticalAlignment: "middle",
        }),
      );
      inputs[`${el.id}_row_${ri}`] = `${row.label}: ${summaryText}`;
    });

    return { schemas, inputs };
  }

  const cols = liveCols;
  const rows = liveRows;

  if (!cols.length || !rows.length) return { schemas, inputs };

  // Build table using pdfme table schema.
  // When showRowHeader is true, prepend a leading column for row labels.
  const dataColCount = cols.length;
  const rowLabelPct = showRowHeader ? 25 : 0;
  const dataColPct = +((100 - rowLabelPct) / Math.max(dataColCount, 1)).toFixed(
    4,
  );
  const headWidthPercentages = showRowHeader
    ? [rowLabelPct, ...Array(dataColCount).fill(dataColPct)]
    : Array(dataColCount).fill(dataColPct);

  // Choice cells store selection as "✔", "✓", true, or "true" depending on
  // entry path. Treat any of those as selected.
  const SELECTED_TOKENS = new Set(["✔", "✓", "true", "1", "yes"]);
  const isSelected = (v) => SELECTED_TOKENS.has(String(v).toLowerCase());

  // pdfme tables don't support per-column fontName, so when any column is a
  // choice type we route the whole body through the DejaVu fallback (which has
  // the ✔ glyph). Pure-text matrices keep the user's selected answer font.
  const hasChoiceColumn = cols.some((col) => isChoice(col));
  const headFontSize = s.fontSize ?? 10;
  const bodyFontSize = s.answerFontSize ?? s.fontSize ?? 9;
  const lineHeight = s.lineHeight ?? DEFAULT_TABLE_LINE_HEIGHT;
  const cellPadMm = s.cellPadding ?? 2;
  // Pre-wrap each cell to its column's inner width — see repeater for why.
  const cellPadPt = pt(cellPadMm);
  const innerColPts = headWidthPercentages.map((pct) =>
    Math.max(1, ((pct / 100) * pt(area.w) - cellPadPt * 2) * WRAP_SAFETY),
  );
  const headFont = {
    size: headFontSize,
    family: s.labelFontFamily,
    weight: s.fontWeight,
    style: s.fontStyle,
  };
  const bodyFont = {
    size: bodyFontSize,
    family: s.answerFontFamily,
    weight: s.answerFontWeight,
    style: s.answerFontStyle,
  };
  const wrapCell = (text, font, colIdx) =>
    wrapTextToLines(
      text,
      font.size,
      font.family,
      font.weight,
      font.style,
      innerColPts[colIdx],
    ).join("\n");

  const dataHead = cols.map((c, i) =>
    wrapCell(c.label, headFont, showRowHeader ? i + 1 : i),
  );
  const head = showRowHeader ? ["", ...dataHead] : dataHead;

  const bodyRows = rows.map((row) => {
    const dataCells = cols.map((col, i) => {
      const v = cellValue(row, col);
      let text;
      if (isChoice(col)) {
        text = isSelected(v) ? "✔" : emptyCellStyle === "line" ? "–" : "";
      } else if (col.type === "dropdown") {
        const opt = col.options?.find((o) => o.id === v);
        text = opt ? opt.label : v || (emptyCellStyle === "line" ? "-" : "");
      } else {
        text = v || (emptyCellStyle === "line" ? "-" : "");
      }
      return wrapCell(text, bodyFont, showRowHeader ? i + 1 : i);
    });
    if (!showRowHeader) return dataCells;
    return [wrapCell(row.label ?? "", bodyFont, 0), ...dataCells];
  });
  const cellPad = {
    top: cellPadMm,
    right: cellPadMm,
    bottom: cellPadMm,
    left: cellPadMm,
  };
  const charSpacing = 0;
  const cellBorder = {
    top: borderWidth,
    right: borderWidth,
    bottom: borderWidth,
    left: borderWidth,
  };
  const headAlign = s.align ?? "center";
  const bodyAlign = s.answerAlign ?? "center";
  const verticalAlignment = s.verticalAlignment ?? "top";

  schemas.push({
    name: `${el.id}_table`,
    type: "table",
    position: { x: area.x, y: area.y },
    width: area.w,
    height: mm(el._metrics?.answerH ?? 10), // Use estimated height from metrics
    content: JSON.stringify(bodyRows),
    showHead: showColHeader,
    head,
    headWidthPercentages,
    tableStyles: {
      borderWidth,
      borderColor,
    },
    headStyles: {
      fontSize: headFontSize,
      lineHeight,
      characterSpacing: charSpacing,
      fontColor: headerTextColor,
      fontName: resolvePdfFontName(s.labelFontFamily),
      fontWeight:
        String(s.fontWeight ?? "bold").toLowerCase() === "bold"
          ? "Bold"
          : "Regular",
      backgroundColor: headerColor,
      alignment: headAlign,
      verticalAlignment,
      borderColor,
      borderWidth: cellBorder,
      padding: cellPad,
    },
    bodyStyles: {
      fontSize: bodyFontSize,
      lineHeight,
      characterSpacing: charSpacing,
      fontColor: s.answerColor ?? s.color ?? "#101828",
      fontName: hasChoiceColumn
        ? undefined
        : resolvePdfFontName(
            s.answerFontFamily,
            s.answerFontWeight,
            s.answerFontStyle,
          ),
      fontWeight:
        String(s.answerFontWeight ?? "normal").toLowerCase() === "bold"
          ? "Bold"
          : "Regular",
      backgroundColor: "",
      alternateBackgroundColor: s.rowStripeColor ?? "",
      alignment: bodyAlign,
      verticalAlignment,
      borderColor,
      borderWidth: cellBorder,
      padding: cellPad,
    },
    columnStyles: {},
  });
  inputs[`${el.id}_table`] = bodyRows;

  return { schemas, inputs };
}

function dropdownSchemasAndInputs(el, submissionData, formField) {
  const s = el.style ?? {};
  const { area, schemas, inputs } = fieldBase(el, s, formField);
  const fieldId = el.content?.fieldId;
  const raw =
    fieldId && submissionData ? parsedValue(submissionData[fieldId]) : null;
  const ans = resolveAnswerStyle(s);

  const display = s.answerDisplay ?? "tag";
  const liveOptions = formField?.options ?? [];
  const hasCustomValues = formField?.hasCustomValuesForOptions ?? false;

  const resolveOptionLabel = (optIdOrLabel) => {
    if (liveOptions.length) {
      const opt = liveOptions.find((o) => o.id === optIdOrLabel);
      if (opt) return hasCustomValues ? opt.value || opt.label : opt.label;
    }
    return optIdOrLabel;
  };

  // List modes (tag, checkbox, radio, ordered, unordered)
  const rawResolved = raw != null ? resolveOptionLabel(String(raw)) : null;
  const allLabels = liveOptions.map((o) =>
    hasCustomValues ? o.value || o.label : o.label,
  );

  if (!allLabels.length && !rawResolved) return { schemas, inputs };

  let rows;
  if (display === "checkbox" || display === "radio") {
    rows = allLabels.map((text) => ({
      text,
      checked: rawResolved === text,
    }));
  } else {
    const items = rawResolved != null ? [rawResolved] : allLabels;
    rows = items.map((text) => ({ text, checked: false }));
  }

  if (!rows.length) return { schemas, inputs };

  renderChoiceContent({
    el,
    area,
    ans,
    rows,
    display,
    s,
    isMultiple: false,
    schemas,
    inputs,
  });
  return { schemas, inputs };
}

// Main dispatcher

function elementToSchemasAndInputs(
  el,
  submissionData = null,
  globalTypo = null,
  imageCache = {},
  formFieldsMap = {},
  aspectCache = {},
) {
  // Merge element-level overrides with global typography so all renderers see resolved values
  const resolved = { ...el, style: resolveElementStyle(el, globalTypo) };
  const s = resolved.style;
  const pos = { x: mm(el.x), y: mm(el.y) };
  const w = mm(el.w);
  const h = mm(el.h);

  // Resolve live form field; derive effective type from it if available
  const formField = el.content?.fieldId
    ? (formFieldsMap[el.content.fieldId] ?? null)
    : null;
  if (el.type === "placeholder") {
    return placeholderSchemasAndInputs(
      resolved,
      submissionData,
      formField,
      imageCache,
      pos,
      w,
      h,
    );
  }
  if (el.type === "fillable") {
    const field = elementToFillableField(el);
    return {
      schemas: [fieldToSchema(field)],
      inputs: { [el.id]: field.defaultValue == null ? "" : String(field.defaultValue) },
    };
  }
  const effectiveType = formField ? resolveFieldType(formField.type) : el.type;

  switch (effectiveType) {
    case "text":
    case "header":
      return {
        schemas: [
          buildTextSchema({
            name: el.id,
            position: pos,
            width: w,
            height: h,
            fontSize: s.fontSize,
            fontColor: s.color,
            fontName: s.labelFontFamily,
            fontWeight: s.fontWeight,
            fontStyle: s.fontStyle,
            alignment: s.align,
            verticalAlignment: "top",
            lineHeight: s.lineHeight ?? DEFAULT_TEXT_LINE_HEIGHT,
            characterSpacing: 0,
          }),
        ],
        inputs: { [el.id]: el.content?.text ?? "" },
      };

    case "field":
      return fieldSchemasAndInputs(
        resolved,
        submissionData,
        formField,
        globalTypo,
      );

    case "file":
      return fileUploadSchemasAndInputs(
        resolved,
        submissionData,
        formField,
        imageCache,
        aspectCache,
      );

    case "signature":
      return signatureSchemasAndInputs(
        resolved,
        submissionData,
        formField,
        imageCache,
      );

    case "star-rating":
      return ratingSchemasAndInputs(resolved, submissionData, formField);

    case "scale-rating":
      return opinionScaleSchemasAndInputs(resolved, submissionData, formField);

    case "terms":
      return termsSchemasAndInputs(resolved, submissionData, formField);

    case "radio":
      return choiceSchemasAndInputs(resolved, submissionData, false, formField);

    case "multiple-checkbox":
      return choiceSchemasAndInputs(resolved, submissionData, true, formField);

    case "dropdown":
      return dropdownSchemasAndInputs(resolved, submissionData, formField);

    case "ranking":
      return rankingSchemasAndInputs(resolved, submissionData, formField);

    case "repeat-field":
      return repeaterSchemasAndInputs(resolved, submissionData, formField);

    case "matrix":
      return matrixSchemasAndInputs(resolved, submissionData, formField);

    case "rectangle":
      return {
        schemas: [
          {
            name: el.id,
            type: "rectangle",
            position: pos,
            width: w,
            height: h,
            color: s.fill ?? "",
            borderColor: s.stroke ?? "#101828",
            borderWidth: mm(s.strokeWidth ?? 2),
            radius: s.borderRadius ? mm(s.borderRadius) : 0,
            rotate: s.rotate ?? 0,
          },
        ],
        inputs: {},
      };

    case "circle":
      return {
        schemas: [
          {
            name: el.id,
            type: "ellipse",
            position: pos,
            width: w,
            height: h,
            color: s.fill ?? "",
            borderColor: s.stroke ?? "#101828",
            borderWidth: mm(s.strokeWidth ?? 2),
            rotate: s.rotate ?? 0,
          },
        ],
        inputs: {},
      };

    case "line":
      return {
        schemas: [
          {
            name: el.id,
            type: "line",
            position: pos,
            width: w,
            height: mm(s.thickness ?? 2),
            color: s.color ?? "#101828",
            rotate: s.rotate ?? 0,
          },
        ],
        inputs: {},
      };

    case "image": {
      const src = el.content?.src;
      const base64 = src ? imageCache[src] : null;
      const isSvg =
        src?.toLowerCase()?.endsWith(".svg") ||
        (typeof base64 === "string" && base64.includes("image/svg+xml"));
      if (base64 && !isSvg) {
        return {
          schemas: [
            {
              name: el.id,
              type: "image",
              position: pos,
              width: w,
              height: h,
              rotate: s.rotate ?? 0,
            },
          ],
          inputs: { [el.id]: base64 },
        };
      }
      // No image selected or unsupported format — render nothing
      return { schemas: [], inputs: {} };
    }

    default:
      return { schemas: [], inputs: {} };
  }
}

// @{el_id} → submission value; missing → "".
function resolveInfoRecall(text, submissionData, _formFieldsMap = {}) {
  if (!text || !submissionData) return text ?? "";
  return text.replace(/@\{([^}]+)\}/g, (_match, key) => {
    const segments = key.split(".");
    const rootKey = segments[0];
    let cur = submissionData[rootKey];
    for (let i = 1; i < segments.length && cur != null; i++) {
      cur = cur[segments[i]];
    }
    if (cur == null) return "";
    if (
      rootKey === "formesterSubmissionCreatedAt" ||
      rootKey === "formesterSubmissionUpdatedAt"
    ) {
      return formatDate(cur);
    }
    if (Array.isArray(cur)) return cur.join(", ");
    if (typeof cur === "object") {
      // Pull common single-value shapes (e.g. { value: ..., label: ... }).
      return cur.value ?? cur.label ?? cur.text ?? JSON.stringify(cur);
    }
    return String(cur);
  });
}

/** `notify(message)` is called on failure; hosts pass their own toast. Defaults to console.error. */
export function usePdfDownload({ notify = (msg) => console.error(msg), plugins: extraPlugins = {} } = {}) {
  const isGenerating = ref(false);

  const downloadPdf = async ({
    pages,
    pdfSettings,
    filename = "document.pdf",
    submissionData = null,
    formFieldsMap = {},
    sourceType = "builder",
    pdfUrl = null,
    isPreview = false,
    returnBlobUrl = false,
    silent = false,
  }) => {
    if (isGenerating.value) return;
    isGenerating.value = true;

    try {
      // Gather required fonts
      const requiredFonts = new Set();
      if (pdfSettings.typography) {
        if (pdfSettings.typography.labelFontFamily)
          requiredFonts.add(pdfSettings.typography.labelFontFamily);
        if (pdfSettings.typography.answerFontFamily)
          requiredFonts.add(pdfSettings.typography.answerFontFamily);
      }
      pages.forEach((p) => {
        (p.elements || []).forEach((el) => {
          if (el.style?.labelFontFamily)
            requiredFonts.add(el.style.labelFontFamily);
          if (el.style?.answerFontFamily)
            requiredFonts.add(el.style.answerFontFamily);
        });
      });

      const [
        { generate, text, line, rectangle, ellipse, image, table },
        fontMap,
      ] = await Promise.all([
        loadPdfme(),
        loadFontMap(Array.from(requiredFonts)),
      ]);

      const dims = getPageDimensions(pdfSettings.size, pdfSettings.orientation);

      // Resolve @{...} tokens in free-form text content.
      if (submissionData) {
        pages = pages.map((p) => ({
          ...p,
          elements: (p.elements ?? []).map((el) => {
            if (el.type !== "text" && el.type !== "header") return el;
            const raw = el.content?.text;
            if (!raw || !/@\{[^}]+\}/.test(raw)) return el;
            return {
              ...el,
              content: {
                ...el.content,
                text: resolveInfoRecall(raw, submissionData, formFieldsMap),
              },
            };
          }),
        }));
      }

      // 1. Gather all potential image URLs first (from original pages)
      const allOriginalElements = pages.flatMap((p) => p.elements ?? []);
      const staticImageSrcs = allOriginalElements
        .filter((el) => el.type === "image" && el.content?.src)
        .map((el) => el.content.src);
      const submissionImageSrcs = allOriginalElements.flatMap((el) => {
        const fieldId = el.content?.fieldId;
        if (!fieldId) return [];
        const formField = formFieldsMap[fieldId];
        const type = formField ? resolveFieldType(formField.type) : el.type;
        const isPlaceholderImage =
          el.type === "placeholder" &&
          (el.content?.kind === "image" || el.content?.kind === "signature");
        if (type !== "file" && type !== "signature" && !isPlaceholderImage)
          return [];

        const raw = parsedValue(submissionData?.[fieldId]);
        return resolveFileItems(raw)
          .filter((it) => it.url && isImageFilename(it.filename))
          .map((it) => it.url);
      });
      const bgImageSrc =
        pdfSettings.backgroundImage?.image || pdfSettings.backgroundImage?.url;
      const imageSrcs = [
        ...new Set([
          ...staticImageSrcs,
          ...submissionImageSrcs,
          ...(bgImageSrc ? [bgImageSrc] : []),
        ]),
      ];

      // 2. Pre-fetch images and calculate aspect ratios for masonry layout
      const base64Results = await Promise.all(imageSrcs.map(urlToBase64));
      const imageCache = Object.fromEntries(
        imageSrcs.map((src, i) => [src, base64Results[i]]).filter(([, b]) => b),
      );
      const aspectRatios = await Promise.all(
        imageSrcs.map((src) => readImageAspectRatio(imageCache[src])),
      );
      const aspectCache = Object.fromEntries(
        imageSrcs.map((src, i) => [src, aspectRatios[i]]).filter(([, r]) => r),
      );

      // 3. Layout pass — skipped in upload mode (absolute positioning).
      const layoutPages =
        sourceType === "upload"
          ? pages
          : applyUnifiedLayout(
              pages,
              dims,
              submissionData,
              pdfSettings.typography,
              formFieldsMap,
              pdfSettings.margin,
              aspectCache,
            );

      const inputValues = {};
      const schemas = layoutPages.map((page, pageIdx) => {
        const pageSchemas = [];

        if (sourceType !== "upload") {
          if (pdfSettings.backgroundColor) {
            pageSchemas.push(
              buildRectangleSchema({
                name: `_bg_color_p${pageIdx}`,
                position: { x: 0, y: 0 },
                width: mm(dims.w),
                height: mm(dims.h),
                color: pdfSettings.backgroundColor,
                borderColor: pdfSettings.backgroundColor,
                borderWidth: 0,
              }),
            );
          }

          if (bgImageSrc && imageCache[bgImageSrc]) {
            const bgName = `_bg_img_p${pageIdx}`;
            inputValues[bgName] = imageCache[bgImageSrc];
            pageSchemas.push({
              name: bgName,
              type: "image",
              position: { x: 0, y: 0 },
              width: mm(dims.w),
              height: mm(dims.h),
            });
          }
        }

        pageSchemas.push(
          ...(page.elements ?? []).flatMap((el) => {
            const { schemas: elSchemas, inputs } = elementToSchemasAndInputs(
              el,
              submissionData,
              pdfSettings.typography,
              imageCache,
              formFieldsMap,
              aspectCache,
            );
            if (!elSchemas.length) return [];
            Object.assign(inputValues, inputs);
            return elSchemas;
          }),
        );

        if (!pageSchemas.length) {
          const placeholder = `_blank_p${pageIdx}`;
          inputValues[placeholder] = "";
          pageSchemas.push({
            name: placeholder,
            type: "text",
            position: { x: 0, y: 0 },
            width: 0.1,
            height: 0.1,
            fontSize: 1,
          });
        }

        return pageSchemas;
      });

      // Upload mode: pdfme draws on top of the original PDF bytes.
      let basePdf;
      if (sourceType === "upload" && pdfUrl) {
        basePdf = (await ensurePageContents(await fetchPdfBytes(pdfUrl))).bytes;
      } else {
        basePdf = {
          width: mm(dims.w),
          height: mm(dims.h),
          padding: [0, 0, 0, 0],
        };
      }

      // Strip fontName for any font not in the embedded set — pdfme falls back
      // to DejaVu Sans (the fallback entry) rather than throwing.
      // Also drop any schema with non-finite position/size. pdfme's
      // `breakIntoPages` does `Math.floor(y / pageHeight)`; if y is NaN it
      // exits the page-allocation loop without creating the target page and
      // then crashes on `pages[NaN].insertChild(...)`. Upstream we already
      // clip/clamp metrics, but this is the last-line guarantee.
      const isFiniteNum = (n) => typeof n === "number" && Number.isFinite(n);
      const finitePosSize = (s) =>
        isFiniteNum(s.position?.x) &&
        isFiniteNum(s.position?.y) &&
        isFiniteNum(s.width) &&
        isFiniteNum(s.height);
      const sanitizedSchemas = schemas.map((page) =>
        page
          .filter((s) => {
            if (!finitePosSize(s)) {
              console.warn(
                "[downloadPdf] dropping schema with non-finite position/size",
                s.name,
                {
                  x: s.position?.x,
                  y: s.position?.y,
                  width: s.width,
                  height: s.height,
                },
              );
              return false;
            }
            return true;
          })
          .map((s) =>
            s.fontName && !(_cachedFontMap && _cachedFontMap[s.fontName])
              ? { ...s, fontName: undefined }
              : s,
          ),
      );

      const bytes = await generate({
        template: { basePdf, schemas: sanitizedSchemas },
        inputs: [inputValues],
        options: { font: fontMap },
        plugins: { text, line, rectangle, ellipse, image, table, [FILLABLE_FIELD_TYPE]: fillableField, ...extraPlugins },
      });

      const blob = new File([bytes.buffer ?? bytes], filename, {
        type: "application/pdf",
      });
      const url = URL.createObjectURL(blob);

      if (silent) {
        // Caller owns the blob URL (e.g. an in-page test-fill viewer); nothing is opened or downloaded.
        return url;
      }
      if (isPreview) {
        window.open(url, "_blank");
      } else {
        const a = document.createElement("a");
        a.href = url;
        a.download = filename;
        a.click();
      }

      if (returnBlobUrl) {
        return url;
      }
      setTimeout(() => URL.revokeObjectURL(url), 5000);
    } catch (e) {
      console.error("PDF generation failed:", e);
      notify("Something went wrong. Please try again.");
    } finally {
      isGenerating.value = false;
    }
  };

  return { downloadPdf, isGenerating };
}
