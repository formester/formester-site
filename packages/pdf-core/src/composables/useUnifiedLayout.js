import { resolveElementStyle } from "../constants/pdf-element-style.js";
import {
  FORM_FIELD_TYPES,
  resolveFieldType,
  resolveFieldLabel,
  resolveFileItemSizePt,
} from "../constants/pdf-builder-schema.js";

// 1pt = 25.4/72mm ≈ 0.3528mm
export const PT_TO_MM = 0.3528;
export const ptToMm = (pt) => +(pt * PT_TO_MM).toFixed(3);
export const mmToPt = (mm) => mm / PT_TO_MM;

// pdfme defaults lineHeight to 1; we use 1.4 for prose and 1.1 inside tables.
// Both the metric (here) and the renderer (usePdfDownload) read these so the
// reported and rendered heights agree.
export const DEFAULT_TEXT_LINE_HEIGHT = 1.4;
export const DEFAULT_TABLE_LINE_HEIGHT = 1.1;

// Text measurement
// Uses an offscreen canvas to measure text exactly the same way pdfme will.
// When maxWidth is provided, simulates word-wrapping to count actual lines.
let _measureCanvas = null;

export function getTextMetrics(
  text,
  {
    fontSize,
    fontFamily,
    fontWeight = "normal",
    fontStyle = "normal",
    lineHeight = 1.4,
    maxWidth = null,
  } = {},
) {
  if (!text) return { width: 0, height: fontSize * lineHeight, lines: 1 };

  if (!_measureCanvas) {
    _measureCanvas = document.createElement("canvas");
  }
  const ctx = _measureCanvas.getContext("2d");
  const fWeight = fontWeight === "bold" ? "bold" : "normal";
  const fStyle = fontStyle === "italic" ? "italic" : "normal";
  ctx.font = `${fStyle} ${fWeight} ${fontSize}px "${fontFamily}", sans-serif`;

  // Split by explicit newlines first
  const paragraphs = text.split("\n");
  let totalLines = 0;
  let maxLineWidth = 0;

  for (const para of paragraphs) {
    const trimmed = para.trim();
    if (!trimmed) {
      // Empty line still counts as one line
      totalLines += 1;
      continue;
    }

    if (!maxWidth || maxWidth <= 0) {
      // No wrapping — just measure the full line
      maxLineWidth = Math.max(maxLineWidth, ctx.measureText(trimmed).width);
      totalLines += 1;
    } else {
      // Word-wrap simulation
      const words = trimmed.split(" ");
      let currentLine = words[0] || "";

      for (let i = 1; i < words.length; i++) {
        const candidate = currentLine + " " + words[i];
        if (ctx.measureText(candidate).width <= maxWidth) {
          currentLine = candidate;
        } else {
          maxLineWidth = Math.max(
            maxLineWidth,
            ctx.measureText(currentLine).width,
          );
          totalLines += 1;
          currentLine = words[i];
        }
      }
      maxLineWidth = Math.max(maxLineWidth, ctx.measureText(currentLine).width);
      totalLines += 1;
    }
  }

  if (totalLines === 0) totalLines = 1;

  return {
    width: Math.ceil(maxLineWidth),
    height: Math.ceil(totalLines * fontSize * lineHeight),
    lines: totalLines,
  };
}

// Word-wrap `text` to fit `maxWidth` (in same units as fontSize), returning
// an array of lines. Used to pre-insert "\n" into table cell text because
// pdfme's table fitContent measures wrap with the full cell width (including
// padding/border) while the actual renderer uses the inner width — the two
// disagree, so rows don't grow when content wraps. Pre-splitting forces
// pdfme to see the right line count.
export function wrapTextToLines(
  text,
  fontSize,
  fontFamily,
  fontWeight = "normal",
  fontStyle = "normal",
  maxWidth,
) {
  if (!text) return [""];
  if (!_measureCanvas) _measureCanvas = document.createElement("canvas");
  const ctx = _measureCanvas.getContext("2d");
  const fWeight = fontWeight === "bold" ? "bold" : "normal";
  const fStyle = fontStyle === "italic" ? "italic" : "normal";
  ctx.font = `${fStyle} ${fWeight} ${fontSize}px "${fontFamily}", sans-serif`;

  const out = [];
  for (const para of String(text).split(/\r\n|\r|\n/g)) {
    if (!para.trim() || !maxWidth || maxWidth <= 0) {
      out.push(para);
      continue;
    }
    const words = para.split(" ");
    let line = words[0] || "";
    for (let i = 1; i < words.length; i++) {
      const candidate = line + " " + words[i];
      if (ctx.measureText(candidate).width <= maxWidth) {
        line = candidate;
      } else {
        out.push(line);
        line = words[i];
      }
    }
    out.push(line);
  }
  return out.length ? out : [""];
}

export function parsedValue(rawValue) {
  if (rawValue == null || rawValue === "") return null;
  if (typeof rawValue === "string") {
    const trimmed = rawValue.trim();
    if (trimmed.startsWith("[") || trimmed.startsWith("{")) {
      try {
        return JSON.parse(trimmed);
      } catch {}
    }
  }
  return rawValue;
}

export function formatAnswerText(
  type,
  value,
  formField = null,
  submissionData = null,
) {
  if (value == null && !submissionData) return "";

  const liveType = formField ? formField.type : type;

  // Compound fields (address, name) — traverse children recursively
  if (["name", "address"].includes(liveType) && formField?.children) {
    const collectValues = (children) => {
      return children
        .flatMap((child) => {
          if (child.children?.length) {
            return collectValues(child.children);
          }
          const val = submissionData ? submissionData[child.id] : null;
          return val ? String(val).trim() : null;
        })
        .filter(Boolean);
    };

    const sep = liveType === "address" ? ", " : " ";
    return collectValues(formField.children).join(sep);
  }

  if (value == null) return "";

  // File attachments — show filenames only
  if (type === "file") {
    if (Array.isArray(value)) {
      return value
        .map((f) =>
          typeof f === "object"
            ? (f.metadata?.filename ?? "attachment")
            : String(f),
        )
        .join("\n");
    }
    return String(value);
  }

  // Ranking — numbered list
  if (type === "ranking") {
    if (Array.isArray(value))
      return value.map((v, i) => `${i + 1}. ${v}`).join("\n");
    return String(value);
  }

  // Any array → join (handles choice fields)
  if (Array.isArray(value)) return value.join(", ");

  // Nested object — matrix or fallback compound
  if (typeof value === "object") {
    const entries = Object.entries(value);

    // Matrix check: values are objects
    if (entries.some(([, v]) => typeof v === "object" && v !== null)) {
      return entries
        .map(([row, cols]) => {
          if (typeof cols === "object") {
            const selected = Object.keys(cols)[0] ?? "—";
            return `${row}: ${selected}`;
          }
          return `${row}: ${String(cols)}`;
        })
        .join("\n");
    }
  }

  return String(value);
}

/* Element metrics
  Computes the exact geometry for an element.
  For fields this returns:
    labelW, labelH    — bounding box for the question label
    answerW, answerH  — bounding box for the answer area
    borderW           — width of the border line (= answerW)
    borderY           — y-offset of the border within the element
    padding           — inner spacing
    h                 — total element height
*/

function buildMetricsCtx(el, globalTypography, formField) {
  const s = resolveElementStyle(el, globalTypography);
  const liveType = formField ? resolveFieldType(formField.type) : el.type;
  const isInline = s.labelLayout === "inline";
  const padding = s.padding;
  const borderThickness = s.lineThickness;
  const showLabel = s.showLabel !== false;
  const showBorder = s.showBorder !== false;
  const lh = s.lineHeight;
  // Stacked-only gap between label and answer. Inline layouts ignore it.
  const labelSpacing = showLabel && !isInline ? (s.labelSpacing ?? 4) : 0;

  // Inner width after padding
  const innerW = Math.max(0, el.w - padding * 2);

  // Width allocation
  let labelW = innerW;
  let answerW = innerW;
  if (isInline) {
    const labelRatio = (s.labelWidth ?? 38) / 100;
    labelW = innerW * labelRatio;
    answerW = innerW - labelW;
  }

  // Label height calculation for all fields
  let labelH = 0;
  if (showLabel) {
    const labelText = resolveFieldLabel(el, formField) || liveType;
    const { height } = getTextMetrics(labelText, {
      fontSize: s.fontSize,
      fontFamily: s.labelFontFamily,
      fontWeight: s.fontWeight,
      fontStyle: s.fontStyle,
      lineHeight: lh,
      maxWidth: labelW,
    });
    labelH = height + labelSpacing;
  }

  return {
    s,
    liveType,
    isInline,
    padding,
    borderThickness,
    showLabel,
    showBorder,
    lh,
    labelSpacing,
    innerW,
    labelW,
    answerW,
    labelH,
  };
}

function measureTableRowLines(
  texts,
  colWidths,
  fontSize,
  fontFamily,
  weight,
  style,
  tableLh,
  cellPadPt,
) {
  if (!Array.isArray(colWidths) || colWidths.length === 0) return 1;
  let maxLines = 1;
  for (let i = 0; i < texts.length; i++) {
    const colW = colWidths[i];
    if (!Number.isFinite(colW) || colW <= 0) continue;
    // Mirror the renderer's WRAP_SAFETY shrink so predicted line counts
    // match what pdfme actually produces.
    const innerW = Math.max(1, (colW - cellPadPt * 2) * 0.95);
    const { lines } = getTextMetrics(String(texts[i] ?? ""), {
      fontSize,
      fontFamily,
      fontWeight: weight,
      fontStyle: style,
      lineHeight: tableLh,
      maxWidth: innerW,
    });
    if (lines > maxLines) maxLines = lines;
  }
  return maxLines;
}

function computeTableMetrics(el, ctx, submissionData, formField) {
  const { s, liveType, isInline, padding, borderThickness, labelW, answerW } =
    ctx;
  const labelH = chunkLabelH(el, ctx);
  const tableLh = el.style?.lineHeight ?? DEFAULT_TABLE_LINE_HEIGHT;
  const cellPadMm = s.cellPadding ?? 2;
  const cellPadPt = mmToPt(cellPadMm);

  const rowHeightFor = (lines, fontSize) =>
    lines * fontSize * tableLh + cellPadPt * 2;

  let headerCells = [];
  let bodyCells = [];
  let columnWidths = [];
  let showTableHeader = true;

  if (liveType === "repeat-field") {
    const liveColumns = formField?.components ?? [];
    const numCols = Math.max(liveColumns.length, 1);
    columnWidths = Array(liveColumns.length).fill(answerW / numCols);
    headerCells = liveColumns.map((c) => c.label ?? c.fixedName ?? "");
    const fieldId = el.content?.fieldId;
    const raw =
      fieldId && submissionData ? parsedValue(submissionData[fieldId]) : null;
    const dataRows = Array.isArray(el._chunkRows)
      ? el._chunkRows
      : Array.isArray(raw)
        ? raw
        : [];
    bodyCells = dataRows.map((row) =>
      liveColumns.map((col) => {
        if (!row || typeof row !== "object") return "";
        const v = row[col.id] ?? row[col.label];
        return v != null ? String(v) : "";
      }),
    );
    showTableHeader = s.showHeader !== false;
  } else {
    const liveCols = formField?.item?.columns ?? formField?.columns ?? [];
    const allRows = formField?.item?.rows ?? formField?.rows ?? [];
    const liveRows = Array.isArray(el._chunkRows) ? el._chunkRows : allRows;
    const showRowHeader = s.showRowHeader !== false;
    const dataColCount = liveCols.length;
    const rowLabelPct = showRowHeader ? 0.25 : 0;
    const dataColW = ((1 - rowLabelPct) / Math.max(dataColCount, 1)) * answerW;
    columnWidths = showRowHeader
      ? [rowLabelPct * answerW, ...Array(dataColCount).fill(dataColW)]
      : Array(dataColCount).fill(dataColW);
    headerCells = showRowHeader
      ? ["", ...liveCols.map((c) => c.label ?? "")]
      : liveCols.map((c) => c.label ?? "");
    const fieldId = el.content?.fieldId;
    const raw =
      fieldId && submissionData ? parsedValue(submissionData[fieldId]) : null;
    const matrixData =
      raw && typeof raw === "object" && !Array.isArray(raw) ? raw : {};
    bodyCells = liveRows.map((row) => {
      const cells = liveCols.map((col) => {
        const bucket = matrixData[row.label] ?? matrixData[row.id];
        const v = bucket?.[col.label] ?? bucket?.[col.id];
        return v != null ? String(v) : "";
      });
      return showRowHeader ? [row.label ?? "", ...cells] : cells;
    });
    showTableHeader = s.showColumnHeader !== false;
  }

  let headerRowH = 0;
  if (showTableHeader) {
    const lines = measureTableRowLines(
      headerCells,
      columnWidths,
      s.fontSize,
      s.labelFontFamily,
      s.fontWeight,
      s.fontStyle,
      tableLh,
      cellPadPt,
    );
    headerRowH = rowHeightFor(lines, s.fontSize);
  }

  let bodyTotalH = 0;
  for (const cells of bodyCells) {
    const lines = measureTableRowLines(
      cells,
      columnWidths,
      s.answerFontSize,
      s.answerFontFamily,
      s.answerFontWeight,
      s.answerFontStyle,
      tableLh,
      cellPadPt,
    );
    bodyTotalH += rowHeightFor(lines, s.answerFontSize);
  }

  const tableH = headerRowH + bodyTotalH;
  const calculatedTotalH = isInline
    ? Math.max(labelH, tableH) + padding * 2
    : labelH + tableH + padding * 2;

  const estimatedH = submissionData
    ? calculatedTotalH
    : Math.max(el.h, calculatedTotalH);

  const tableAreaH = isInline
    ? Math.max(10, estimatedH - padding * 2)
    : Math.max(10, estimatedH - labelH - padding * 2);

  return {
    h: estimatedH,
    labelH,
    labelW,
    answerH: tableAreaH,
    answerW,
    borderW: answerW,
    borderY: estimatedH - borderThickness,
    padding,
    borderThickness,
    showBorder: false,
    isInline,
    liveType,
    labelVerticalAlign: s.labelVerticalAlign,
  };
}

function computeSignatureMetrics(el, ctx) {
  const {
    s,
    liveType,
    isInline,
    padding,
    borderThickness,
    showBorder,
    labelH,
    labelW,
    answerW,
  } = ctx;
  const estimatedH = el.h;
  const answerH = isInline
    ? Math.max(10, estimatedH - padding * 2)
    : Math.max(10, estimatedH - labelH - padding * 2);
  return {
    h: estimatedH,
    labelH,
    labelW,
    answerH,
    answerW,
    borderW: answerW,
    borderY: estimatedH - borderThickness,
    padding,
    borderThickness,
    showBorder,
    isInline,
    liveType,
    labelVerticalAlign: s.labelVerticalAlign,
  };
}

function termsMarkerReserve(fontSize) {
  return fontSize * 1.4;
}

function termsLabelText(el, formField) {
  return el.content?.label ?? formField?.label ?? formField?.fixedName ?? "";
}

function computeTermsMetrics(el, ctx, formField) {
  const { s, liveType, padding, innerW, lh } = ctx;
  const fontSize = s.fontSize ?? 11;
  // Continuation chunks have no marker, so the text reclaims its column.
  const textW = el._chunkIsContinuation
    ? innerW
    : Math.max(innerW - termsMarkerReserve(fontSize), 10);

  let textH;
  if (Array.isArray(el._chunkLines)) {
    textH = Math.ceil(el._chunkLines.length * fontSize * lh);
  } else {
    const labelText = termsLabelText(el, formField);
    textH = labelText
      ? getTextMetrics(labelText, {
          fontSize,
          fontFamily: s.labelFontFamily,
          fontWeight: s.fontWeight,
          fontStyle: s.fontStyle,
          lineHeight: lh,
          maxWidth: textW,
        }).height
      : fontSize * lh;
  }

  const calculatedH = textH + padding * 2;
  return {
    h: withHeightFloor(el, calculatedH),
    labelH: 0,
    labelW: 0,
    answerH: calculatedH - padding * 2,
    answerW: innerW,
    borderW: 0,
    borderY: 0,
    padding,
    borderThickness: 0,
    showBorder: false,
    isInline: false,
    liveType,
    labelVerticalAlign: "start",
  };
}

function computeFileMetrics(el, ctx, submissionData, formField, aspectCache) {
  const {
    s,
    liveType,
    isInline,
    padding,
    borderThickness,
    showBorder,
    lh,
    labelW,
    answerW,
  } = ctx;

  const labelH = chunkLabelH(el, ctx);

  const fileFieldId = el.content?.fieldId;
  const raw =
    fileFieldId && submissionData
      ? parsedValue(submissionData[fileFieldId])
      : null;
  const items = resolveFileChunkItems(el, raw);

  if (!items.length) {
    const answerH = Math.max(0, el.h - labelH - padding * 2);
    return {
      h: el.h,
      labelH,
      labelW,
      answerH,
      answerW,
      borderW: answerW,
      borderY: el.h - borderThickness,
      padding,
      borderThickness,
      showBorder,
      isInline,
      liveType,
      labelVerticalAlign: s.labelVerticalAlign,
    };
  }

  const display = s.fileDisplay ?? "grid";
  const gap = 6; // pt

  let contentH;
  if (display === "bullet") {
    const lineH = Math.max((s.answerFontSize ?? 11) * lh, 4);
    contentH = items.length * lineH;
  } else if (display === "card") {
    const itemPt = resolveFileItemSizePt(s);
    const cardH = Math.min(itemPt, 32) + 8;
    contentH = items.length * (cardH + gap);
  } else {
    // grid / masonry
    const itemPt = resolveFileItemSizePt(s);
    const isMasonry = display === "masonry";
    const MASONRY_FALLBACK = [1, 0.75, 4 / 3];

    let rows = 0;
    let currentRowW = 0;
    items.forEach((item, i) => {
      const itemUrl = typeof item === "object" ? item.url : item;
      const realRatio = itemUrl ? aspectCache[itemUrl] : null;
      const ratio = isMasonry
        ? (realRatio ?? MASONRY_FALLBACK[i % MASONRY_FALLBACK.length])
        : 1;
      const tw = itemPt * ratio;
      // Use epsilon to prevent rounding errors from causing unnecessary wraps
      if (currentRowW + tw > answerW + 0.01 && currentRowW > 0) {
        rows++;
        currentRowW = 0;
      }
      currentRowW += tw + gap;
    });
    if (currentRowW > 0) rows++;
    contentH = rows * itemPt + Math.max(0, rows - 1) * gap;
  }

  const calculatedH = isInline
    ? Math.max(labelH, contentH) + padding * 2
    : labelH + contentH + padding * 2;

  const h = withHeightFloor(el, calculatedH);
  return {
    h,
    labelH,
    labelW,
    answerH: contentH,
    answerW,
    borderW: answerW,
    borderY: h - padding - borderThickness,
    padding,
    borderThickness,
    showBorder,
    isInline,
    liveType,
    labelVerticalAlign: s.labelVerticalAlign,
  };
}

function computeChoiceMetrics(el, ctx, formField) {
  const {
    s,
    liveType,
    isInline,
    padding,
    borderThickness,
    showBorder,
    lh,
    labelW,
    answerW,
  } = ctx;
  const labelH = chunkLabelH(el, ctx);

  const display = s.answerDisplay ?? "tag";
  const showAll = s.showAllOptions !== false;
  const options = Array.isArray(el._chunkOptions)
    ? el._chunkOptions
    : (formField?.options ?? []);

  if (
    showAll &&
    (display === "checkbox" || display === "radio") &&
    options.length > 0
  ) {
    const answerFontSize = s.answerFontSize ?? 11;
    const cols = s.optionLayout === "2col" ? 2 : 1;
    const numGridRows = Math.ceil(options.length / cols);
    const contentH = numGridRows * (answerFontSize * lh);

    const calculatedH = isInline
      ? Math.max(labelH, contentH) + padding * 2
      : labelH + contentH + padding * 2;
    const h = withHeightFloor(el, calculatedH);

    return {
      h,
      labelH,
      labelW,
      answerH: contentH,
      answerW,
      borderW: answerW,
      borderY: h - padding - borderThickness,
      padding,
      borderThickness,
      showBorder,
      isInline,
      liveType,
      labelVerticalAlign: s.labelVerticalAlign,
    };
  }

  return null;
}

function computeRankingMetrics(el, ctx, formField, submissionData) {
  const {
    s,
    liveType,
    isInline,
    padding,
    borderThickness,
    showBorder,
    lh,
    labelW,
    answerW,
  } = ctx;
  const labelH = chunkLabelH(el, ctx);

  const numRows = Array.isArray(el._chunkLines)
    ? el._chunkLines.length
    : rankingLines(el, formField, submissionData).length;
  const contentH = numRows * Math.max((s.answerFontSize ?? 11) * lh, 10);

  const calculatedH = isInline
    ? Math.max(labelH, contentH) + padding * 2
    : labelH + contentH + padding * 2;
  const h = withHeightFloor(el, calculatedH);

  return {
    h,
    labelH,
    labelW,
    answerH: contentH,
    answerW,
    borderW: answerW,
    borderY: h - padding - borderThickness,
    padding,
    borderThickness,
    showBorder,
    isInline,
    liveType,
    labelVerticalAlign: s.labelVerticalAlign,
  };
}

function computeStaticMetrics(el, ctx) {
  const { s, padding, borderThickness, lh, innerW } = ctx;
  const text = el.content?.text ?? el.content?.label ?? "";
  let contentH = el.h;
  if (text) {
    const { height } = getTextMetrics(text, {
      fontSize: s.fontSize,
      fontFamily: s.labelFontFamily,
      fontWeight: s.fontWeight,
      fontStyle: s.fontStyle,
      lineHeight: lh,
      maxWidth: innerW,
    });
    contentH = height + padding * 2;
  }
  return {
    h: Math.max(el.h, contentH),
    labelH: 0,
    labelW: innerW,
    answerH: 0,
    answerW: innerW,
    borderW: 0,
    borderY: 0,
    padding,
    borderThickness,
    showBorder: false,
    isInline: false,
  };
}

function computeFieldMetrics(el, ctx, submissionData, formField) {
  const {
    s,
    isInline,
    padding,
    borderThickness,
    showBorder,
    lh,
    labelW,
    answerW,
  } = ctx;
  const labelH = chunkLabelH(el, ctx);

  let answerH = 0;
  const fieldId = el.content?.fieldId;
  const raw =
    fieldId && submissionData ? parsedValue(submissionData[fieldId]) : null;

  const isCompound = ["name", "address"].includes(formField?.type);
  let answerText = "";
  // Pre-split line subset takes precedence over fresh submission data.
  if (Array.isArray(el._chunkLines)) {
    answerText = el._chunkLines.join("\n");
    answerH = Math.ceil(el._chunkLines.length * (s.answerFontSize ?? 11) * lh);
  } else if (
    (raw != null && raw !== "") ||
    (isCompound && formField?.children)
  ) {
    answerText = formatAnswerText(el.type, raw, formField, submissionData);
    const { height } = getTextMetrics(answerText, {
      fontSize: s.answerFontSize,
      fontFamily: s.answerFontFamily,
      fontWeight: s.answerFontWeight,
      fontStyle: s.answerFontStyle,
      lineHeight: lh,
      maxWidth: answerW,
    });
    answerH = height;
  } else {
    answerH = Math.max((s.answerFontSize ?? 11) * lh, 4);
  }

  let calculatedH = isInline
    ? Math.max(labelH, answerH) + padding * 2
    : labelH + answerH + padding * 2;
  if (showBorder) calculatedH += borderThickness;
  calculatedH = withHeightFloor(el, calculatedH);

  const borderY = calculatedH - padding - borderThickness;

  return {
    h: calculatedH,
    labelH,
    labelW,
    answerH,
    answerW,
    borderW: answerW,
    borderY,
    padding,
    borderThickness,
    showBorder,
    isInline,
    labelVerticalAlign: s.labelVerticalAlign,
  };
}

export function computeElementMetrics(
  el,
  submissionData,
  globalTypography,
  formField = null,
  aspectCache = {},
) {
  const ctx = buildMetricsCtx(el, globalTypography, formField);
  const { liveType } = ctx;

  if (liveType === "repeat-field" || liveType === "matrix")
    return computeTableMetrics(el, ctx, submissionData, formField);
  if (liveType === "signature") return computeSignatureMetrics(el, ctx);
  if (liveType === "terms") return computeTermsMetrics(el, ctx, formField);
  if (liveType === "file")
    return computeFileMetrics(el, ctx, submissionData, formField, aspectCache);
  if (
    ["radio", "multiple-checkbox", "dropdown", "picture-checkbox"].includes(
      liveType,
    )
  ) {
    const result = computeChoiceMetrics(el, ctx, formField);
    if (result) return result;
  }
  if (liveType === "ranking") {
    return computeRankingMetrics(el, ctx, formField, submissionData);
  }
  if (!FORM_FIELD_TYPES.has(liveType)) return computeStaticMetrics(el, ctx);
  return computeFieldMetrics(el, ctx, submissionData, formField);
}

// Layout pass
// Runs computeElementMetrics on every element, applies y-shifting for grown
// elements, and paginates overflow to new pages.

const PAGE_GAP_PT = 8;

// Safety cap; an element with h > pageContentH would grow `result` forever.
const MAX_AUTO_PAGES = 200;

// Per-type splitting config. Types absent here are atomic.
const CHUNK_CONFIG = {
  field: {
    key: "_chunkLines",
    getSource(el, { submissionData, formField, globalTypography }) {
      if (Array.isArray(el._chunkLines)) return el._chunkLines;
      return resolveAnswerLines(
        el,
        submissionData,
        formField,
        globalTypography,
      );
    },
  },
  file: {
    key: "_chunkItems",
    getSource(el, { submissionData }) {
      if (Array.isArray(el._chunkItems)) return el._chunkItems;
      const fid = el.content?.fieldId;
      const raw =
        fid && submissionData ? parsedValue(submissionData[fid]) : null;
      return raw ? (Array.isArray(raw) ? raw : [raw]) : [];
    },
  },
  matrix: {
    key: "_chunkRows",
    getSource(el, { formField }) {
      if (Array.isArray(el._chunkRows)) return el._chunkRows;
      return formField?.item?.rows ?? formField?.rows ?? [];
    },
  },
  "repeat-field": {
    key: "_chunkRows",
    getSource(el, { submissionData }) {
      if (Array.isArray(el._chunkRows)) return el._chunkRows;
      const fid = el.content?.fieldId;
      const raw =
        fid && submissionData ? parsedValue(submissionData[fid]) : null;
      return Array.isArray(raw) ? raw : [];
    },
  },
};

const CHOICE_CHUNK_ENTRY = {
  key: "_chunkOptions",
  getSource(el, { formField }) {
    if (Array.isArray(el._chunkOptions)) return el._chunkOptions;
    return formField?.options ?? [];
  },
};
for (const type of ["radio", "multiple-checkbox", "dropdown"]) {
  CHUNK_CONFIG[type] = CHOICE_CHUNK_ENTRY;
}

// Canvas (no submissionData) previews using the form's option order;
// download uses the submission ranking, or empty when no raw answer.
export function rankingLines(el, formField, submissionData) {
  const fid = el.content?.fieldId;
  const raw = fid && submissionData ? parsedValue(submissionData[fid]) : null;
  if (Array.isArray(raw)) return raw.map((v, i) => `${i + 1}. ${v}`);
  if (submissionData != null) return [];
  return (formField?.options ?? []).map(
    (o, i) => `${i + 1}. ${o.label ?? o.value ?? ""}`,
  );
}

CHUNK_CONFIG["ranking"] = {
  key: "_chunkLines",
  getSource(el, { formField, submissionData }) {
    if (Array.isArray(el._chunkLines)) return el._chunkLines;
    return rankingLines(el, formField, submissionData);
  },
};

CHUNK_CONFIG["terms"] = {
  key: "_chunkLines",
  getSource(el, { formField, globalTypography }) {
    if (Array.isArray(el._chunkLines)) return el._chunkLines;
    const labelText = termsLabelText(el, formField);
    if (!labelText) return [];
    const ctx = buildMetricsCtx(el, globalTypography, formField);
    const fontSize = ctx.s.fontSize ?? 11;
    const textW = Math.max(ctx.innerW - termsMarkerReserve(fontSize), 10);
    return wrapTextToLines(
      labelText,
      fontSize,
      ctx.s.labelFontFamily,
      ctx.s.fontWeight,
      ctx.s.fontStyle,
      textW,
    );
  },
};

function isSplittable(liveType) {
  return CHUNK_CONFIG[liveType] != null;
}

function chunkLabelH(el, ctx) {
  return el._chunkIsContinuation ? 0 : ctx.labelH;
}

function withHeightFloor(el, calculatedH) {
  const isChunk =
    Array.isArray(el._chunkLines) ||
    Array.isArray(el._chunkItems) ||
    Array.isArray(el._chunkRows) ||
    Array.isArray(el._chunkOptions);
  return isChunk ? calculatedH : Math.max(el.h, calculatedH);
}

function resolveFileChunkItems(el, raw) {
  if (Array.isArray(el._chunkItems)) return el._chunkItems;
  if (raw == null) return [];
  return Array.isArray(raw) ? raw : [raw];
}

// Per-type widow/orphan floor for partial splits.
const MIN_PARTIAL = {
  field: { fit: 2, remainder: 1 },
  matrix: { fit: 2, remainder: 1 },
  "repeat-field": { fit: 2, remainder: 1 },
  file: { fit: 1, remainder: 1 }, // files are visual; even one image is OK
  radio: { fit: 2, remainder: 1 },
  "multiple-checkbox": { fit: 2, remainder: 1 },
  dropdown: { fit: 2, remainder: 1 },
  ranking: { fit: 2, remainder: 1 },
  terms: { fit: 2, remainder: 1 },
};

function passesPartialThreshold(liveType, fitCount, remainderCount) {
  const t = MIN_PARTIAL[liveType] ?? { fit: 1, remainder: 1 };
  return fitCount >= t.fit && remainderCount >= t.remainder;
}

function resolveAnswerLines(el, submissionData, formField, globalTypography) {
  const { s, answerW } = buildMetricsCtx(el, globalTypography, formField);
  const fieldId = el.content?.fieldId;
  const raw =
    fieldId && submissionData ? parsedValue(submissionData[fieldId]) : null;
  const isCompound = ["name", "address"].includes(formField?.type);
  let answerText = "";
  if ((raw != null && raw !== "") || (isCompound && formField?.children)) {
    answerText = formatAnswerText(el.type, raw, formField, submissionData);
  }
  if (!answerText) return [];
  return wrapTextToLines(
    answerText,
    s.answerFontSize,
    s.answerFontFamily,
    s.answerFontWeight,
    s.answerFontStyle,
    answerW,
  ).filter(
    // Drop wrapTextToLines' trailing-paragraph artefact.
    (_, i, arr) => !(i === arr.length - 1 && arr[i] === "" && arr.length > 1),
  );
}

// Returns 0 when even 1 unit doesn't fit.
function binarySearchPrefixThatFits(el, maxH, source, makeProbe, layoutCtx) {
  if (!source?.length) return 0;
  let lo = 1;
  let hi = source.length;
  let best = 0;
  while (lo <= hi) {
    const mid = (lo + hi) >> 1;
    const probe = makeProbe(el, source.slice(0, mid));
    const m = computeElementMetrics(
      probe,
      layoutCtx.submissionData,
      layoutCtx.globalTypography,
      layoutCtx.formField,
      layoutCtx.aspectCache,
    );
    if (Number.isFinite(m.h) && m.h <= maxH) {
      best = mid;
      lo = mid + 1;
    } else {
      hi = mid - 1;
    }
  }
  return best;
}

function makeChunkProbe(key, isContinuation) {
  return (e, slice) => ({
    ...e,
    [key]: slice,
    _chunkIsContinuation: isContinuation,
  });
}

// Forces ≥1 unit/chunk so a pathological oversized unit still progresses; the layout-pass clip then catches it.
function splitOversized(el, pageContentH, liveType, layoutCtx) {
  const config = CHUNK_CONFIG[liveType];
  if (!config) return [el];
  const source = config.getSource(el, layoutCtx);
  if (source.length <= 1) return [el];

  const chunks = [];
  let cursor = 0;
  while (cursor < source.length) {
    const window = cursor === 0 ? source : source.slice(cursor);
    const isContinuation = cursor > 0;
    const probe = makeChunkProbe(config.key, isContinuation);
    const best = Math.max(
      1,
      binarySearchPrefixThatFits(el, pageContentH, window, probe, layoutCtx),
    );
    chunks.push({
      ...el,
      id: `${el.id}__c${chunks.length}`,
      [config.key]: source.slice(cursor, cursor + best),
      _chunkIsContinuation: isContinuation,
      _chunkIsLast: cursor + best === source.length,
    });
    cursor += best;
  }
  return chunks.length ? chunks : [el];
}

// Returns null → caller moves the whole element to the next page.
function sliceForFit(el, maxH, liveType, layoutCtx) {
  const config = CHUNK_CONFIG[liveType];
  if (!config) return null;
  const source = config.getSource(el, layoutCtx);
  if (source.length <= 1) return null;

  const wasContinuation = !!el._chunkIsContinuation;
  const parentIsLast = el._chunkIsLast !== false;
  const probe = makeChunkProbe(config.key, wasContinuation);
  const best = binarySearchPrefixThatFits(el, maxH, source, probe, layoutCtx);
  if (best === 0 || best === source.length) return null;
  if (!passesPartialThreshold(liveType, best, source.length - best)) {
    return null;
  }
  return {
    fit: {
      ...el,
      id: `${el.id}__f`,
      [config.key]: source.slice(0, best),
      _chunkIsContinuation: wasContinuation,
      _chunkIsLast: false,
    },
    remainder: {
      ...el,
      id: `${el.id}__r`,
      [config.key]: source.slice(best),
      _chunkIsContinuation: true,
      _chunkIsLast: parentIsLast,
    },
  };
}

function splitElementIfOversized(el, pageContentH, layoutCtx) {
  if (layoutCtx.submissionData == null) return [el];
  const { formField } = layoutCtx;
  const liveType = formField ? resolveFieldType(formField.type) : el.type;
  if (!isSplittable(liveType)) return [el];
  const fullMetrics = computeElementMetrics(
    el,
    layoutCtx.submissionData,
    layoutCtx.globalTypography,
    formField,
    layoutCtx.aspectCache,
  );
  if (fullMetrics.h <= pageContentH) return [el];
  return splitOversized(el, pageContentH, liveType, layoutCtx);
}

function sliceElementToFit(el, maxH, layoutCtx) {
  if (layoutCtx.submissionData == null) return null;
  const { formField } = layoutCtx;
  const liveType = formField ? resolveFieldType(formField.type) : el.type;
  if (!isSplittable(liveType)) return null;
  return sliceForFit(el, maxH, liveType, layoutCtx);
}

function expandSplittableElements(
  pages,
  dims,
  margin,
  submissionData,
  globalTypography,
  formFieldsMap,
  aspectCache,
) {
  if (submissionData == null) return pages;
  const pageContentH = Math.max(
    1,
    dims.h - (margin.top ?? 0) - (margin.bottom ?? 0),
  );
  return pages.map((p) => {
    const expanded = (p.elements ?? []).flatMap((el) => {
      if (el.style?.fixedPosition) return [el];
      const formField = el.content?.fieldId
        ? formFieldsMap[el.content.fieldId]
        : null;
      const layoutCtx = {
        submissionData,
        globalTypography,
        formField,
        aspectCache,
      };
      return splitElementIfOversized(el, pageContentH, layoutCtx);
    });
    return { ...p, elements: expanded };
  });
}

export function applyUnifiedLayout(
  pages,
  dims,
  submissionData = null,
  globalTypography = {},
  formFieldsMap = {},
  margin = { top: 0, bottom: 0 },
  aspectCache = {},
) {
  if (!pages?.length) return pages;

  // No-op in canvas/edit mode (submissionData == null).
  const expandedPages = expandSplittableElements(
    pages,
    dims,
    margin,
    submissionData,
    globalTypography,
    formFieldsMap,
    aspectCache,
  );

  // Deep-clone pages so we never mutate the edit model
  const result = expandedPages.map((p) => ({
    ...p,
    elements: (p.elements ?? []).map((e) => ({
      ...e,
      style: { ...(e.style ?? {}) },
    })),
  }));

  const pageContentH = Math.max(
    1,
    dims.h - (margin.top ?? 0) - (margin.bottom ?? 0),
  );

  for (let pi = 0; pi < result.length; pi++) {
    if (pi >= MAX_AUTO_PAGES) {
      console.warn(
        `[useUnifiedLayout] reached MAX_AUTO_PAGES (${MAX_AUTO_PAGES}); halting pagination`,
      );
      result.length = MAX_AUTO_PAGES;
      break;
    }
    const page = result[pi];
    const sorted = [...page.elements].sort((a, b) => a.y - b.y);
    const kept = [];
    const overflow = [];
    let overflowing = false;
    let overflowY = margin.top ?? 0;
    const pageBottom = dims.h - (margin.bottom ?? 0);

    for (let i = 0; i < sorted.length; i++) {
      const el = sorted[i];
      if (el.style?.fixedPosition) {
        kept.push(el);
        continue;
      }
      const formField = el.content?.fieldId
        ? formFieldsMap[el.content.fieldId]
        : null;
      const metrics = computeElementMetrics(
        el,
        submissionData,
        globalTypography,
        formField,
        aspectCache,
      );

      // Raw form-field types (textarea/email/name) aren't keys in CHUNK_CONFIG;
      // resolveFieldType maps them to "field".
      const liveType = formField ? resolveFieldType(formField.type) : el.type;
      let clippedToPage = false;
      if (metrics.h > pageContentH) {
        // Last-resort clip; without it the outer loop adds pages forever.
        console.warn(
          `[useUnifiedLayout] element ${el.id} type=${liveType} h=${metrics.h}pt exceeds page content (${pageContentH}pt); clipping`,
          { splittable: isSplittable(liveType) },
        );
        const shrink = metrics.h - pageContentH;
        metrics.h = pageContentH;
        clippedToPage = true;
        // pdfme's table plugin crashes in breakIntoPages if answerH > clipped h.
        if (Number.isFinite(metrics.answerH)) {
          metrics.answerH = Math.max(10, metrics.answerH - shrink);
        }
      }

      // Clip-shrink isn't real growth; propagating it pushes siblings to
      // negative y → pdfme's breakIntoPages crashes (pages[-1].insertChild).
      const growth = clippedToPage ? 0 : metrics.h - el.h;
      if (growth !== 0 && submissionData !== null) {
        // For positive growth: only shift if element stays on page.
        // For negative growth (element shrank): always shift elements up to close the gap — matrix/repeat-field
        const canShift =
          growth < 0 || (!overflowing && el.y + metrics.h <= pageBottom);
        if (canShift) {
          const threshold = el.y + 1;
          for (let j = i + 1; j < sorted.length; j++) {
            if (sorted[j].style?.fixedPosition) continue;
            if (sorted[j].y >= threshold) {
              sorted[j] = { ...sorted[j], y: sorted[j].y + growth };
            }
          }
        }
      }

      const newEl = {
        ...el,
        h: metrics.h,
        _metrics: metrics,
      };

      if (
        submissionData !== null &&
        (overflowing || el.y + metrics.h > pageBottom)
      ) {
        // Skip once already overflowing; remainder gets full pageContentH next.
        let partial = null;
        if (!overflowing && isSplittable(liveType) && !clippedToPage) {
          const availableH = pageBottom - el.y;
          if (availableH > 20) {
            partial = sliceElementToFit(el, availableH, {
              submissionData,
              globalTypography,
              formField,
              aspectCache,
            });
          }
        }

        if (partial) {
          const fitMetrics = computeElementMetrics(
            partial.fit,
            submissionData,
            globalTypography,
            formField,
            aspectCache,
          );
          kept.push({ ...partial.fit, h: fitMetrics.h, _metrics: fitMetrics });

          const remMetrics = computeElementMetrics(
            partial.remainder,
            submissionData,
            globalTypography,
            formField,
            aspectCache,
          );
          overflow.push({
            ...partial.remainder,
            h: remMetrics.h,
            _metrics: remMetrics,
            y: overflowY,
          });
          overflowY += remMetrics.h + PAGE_GAP_PT;
          overflowing = true;
        } else {
          overflow.push({ ...newEl, y: overflowY });
          overflowY += metrics.h + PAGE_GAP_PT;
          overflowing = true;
        }
      } else {
        kept.push(newEl);
      }
    }

    page.elements = kept.sort((a, b) => {
      const af = a.style?.fixedPosition ? 0 : 1;
      const bf = b.style?.fixedPosition ? 0 : 1;
      return af - bf;
    });

    if (overflow.length > 0) {
      const nextIdx = pi + 1;
      if (nextIdx >= result.length) {
        result.push({ index: nextIdx, elements: [] });
      }
      // Slide the existing cluster down so its topmost element sits at
      // overflowY (right after the last overflowed element). Every flowing
      // element moves by the same delta, so gaps within the cluster don't
      // change. Fixed-position elements stay put.
      const existing = result[nextIdx].elements;
      const flowing = existing.filter((e) => !e.style?.fixedPosition);
      const fixed = existing.filter((e) => e.style?.fixedPosition);
      let flowingShifted = flowing;
      if (flowing.length) {
        const minY = Math.min(...flowing.map((e) => e.y));
        const shift = overflowY - minY;
        flowingShifted = flowing.map((e) => ({ ...e, y: e.y + shift }));
      }
      result[nextIdx].elements = [...fixed, ...overflow, ...flowingShifted];
    }
  }

  return result;
}
