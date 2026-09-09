// Field model ⇄ PDF. The field model uses PDF points with a top-left origin,
// the same convention as the app's `builder_state`, so canvas code can pass
// elements straight through. pdfme wants millimetres, pdf-lib wants points
// from the bottom-left; the conversions live here and nowhere else.

import { PDFDocument, PDFName } from "@pdfme/pdf-lib";
import { fillableField, FILLABLE_FIELD_TYPE, DEFAULT_FIELD_SCHEMA } from "./plugins/fillable-field.js";
import { getPageDimensions } from "./constants/pdf-page-sizes.js";

const PT_PER_MM = 72 / 25.4;
export const ptToMm = (pt) => pt / PT_PER_MM;
export const mmToPt = (mm) => mm * PT_PER_MM;

/**
 * A field in the tool's document model.
 * @typedef {Object} FillableField
 * @property {string} id            unique within the document; becomes the pdfme schema name
 * @property {'text'|'multiline'|'checkbox'|'radio'|'dropdown'|'date'|'signature'} fieldType
 * @property {string} name          AcroForm field name (radio widgets share one name)
 * @property {number} page          0-based page index
 * @property {number} x  @property {number} y  @property {number} w  @property {number} h   points, top-left origin
 * @property {boolean} [required] @property {boolean} [readOnly]
 * @property {string}  [defaultValue] @property {string} [tooltip]
 * @property {number}  [maxLength] @property {boolean} [comb]
 * @property {number}  [fontSize] @property {string} [align]
 * @property {string}  [textColor] @property {string} [borderColor] @property {number} [borderWidth] @property {string} [backgroundColor]
 * @property {string[]} [options] @property {string} [optionValue] @property {boolean} [editable]
 */

/** Canvas element of type "fillable" → FillableField model. `page` is the element's page index. */
export function elementToFillableField(el, page = 0) {
  const c = el.content ?? {};
  const st = el.style ?? {};
  return {
    id: el.id,
    page,
    x: el.x,
    y: el.y,
    w: el.w,
    h: el.h,
    fieldType: c.fieldType ?? "text",
    name: c.name || el.id,
    required: !!c.required,
    readOnly: !!c.readOnly,
    defaultValue: c.defaultValue ?? "",
    tooltip: c.tooltip ?? "",
    maxLength: c.maxLength ?? null,
    comb: !!c.comb,
    options: Array.isArray(c.options) ? c.options.map(String) : [],
    optionValue: c.optionValue ?? "",
    editable: !!c.editable,
    fontSize: st.fontSize ?? 10,
    align: st.align ?? "left",
    textColor: st.textColor ?? "#101828",
    borderColor: st.borderColor ?? "#98a2b3",
    borderWidth: st.borderWidth ?? 1,
    backgroundColor: st.backgroundColor ?? "",
  };
}

/** FillableField model → canvas element, for imported PDFs. */
export function fillableFieldToElement(f) {
  const { id, page, x, y, w, h, name, fontSize, align, textColor, borderColor, borderWidth, backgroundColor, ...content } = f;
  void page;
  return {
    id,
    type: "fillable",
    x,
    y,
    w,
    h,
    content: { ...content, name },
    style: { fontSize: fontSize ?? 10, align: align ?? "left", textColor: textColor ?? "#101828", borderColor: borderColor ?? "#98a2b3", borderWidth: borderWidth ?? 1, backgroundColor: backgroundColor ?? "" },
  };
}

/** Field model (pt, top-left) → pdfme schema (mm, top-left). */
export function fieldToSchema(field) {
  const { id, name, x, y, w, h, page, required, readOnly, ...rest } = field;
  return {
    ...DEFAULT_FIELD_SCHEMA,
    ...rest,
    fieldRequired: !!required,
    fieldReadOnly: !!readOnly,
    type: FILLABLE_FIELD_TYPE,
    name: id,
    fieldName: name,
    position: { x: ptToMm(x), y: ptToMm(y) },
    width: ptToMm(w),
    height: ptToMm(h),
  };
}

/** pdfme needs one input value per named schema; fields carry their own defaults so the input is just a placeholder. */
export function schemasAndInputsForFields(fields, pageCount) {
  const schemas = Array.from({ length: pageCount }, () => []);
  const inputs = {};
  for (const f of fields) {
    const idx = Math.min(Math.max(0, f.page ?? 0), pageCount - 1);
    schemas[idx].push(fieldToSchema(f));
    inputs[f.id] = f.defaultValue == null ? "" : String(f.defaultValue);
  }
  return { schemas, inputs };
}

/**
 * Generate a fillable PDF from a field list, on top of an uploaded PDF or blank pages.
 * `extraSchemas[pageIndex]` lets a host add static pdfme schemas (text, lines, images) to each page;
 * pass the matching `plugins` and `inputs` for them.
 */
export async function generateFillablePdf({
  basePdf = null,
  pageSize = "A4",
  orientation = "portrait",
  pageCount = 1,
  fields = [],
  extraSchemas = [],
  extraInputs = {},
  plugins = {},
  font,
} = {}) {
  const { generate } = await import("@pdfme/generator");
  let base = basePdf;
  let pages = pageCount;
  if (!base) {
    const dims = getPageDimensions(pageSize, orientation);
    base = { width: ptToMm(dims.w), height: ptToMm(dims.h), padding: [0, 0, 0, 0] };
  } else {
    const { bytes: safe, pageCount } = await ensurePageContents(base);
    base = safe;
    pages = pageCount;
  }
  const { schemas, inputs } = schemasAndInputsForFields(fields, pages);
  const merged = schemas.map((s, i) => [...(extraSchemas[i] || []), ...s]);
  const template = { basePdf: base, schemas: merged };
  const options = font ? { font } : {};
  return generate({
    template,
    inputs: [{ ...extraInputs, ...inputs }],
    options,
    plugins: { ...plugins, [FILLABLE_FIELD_TYPE]: fillableField },
  });
}

/**
 * pdfme embeds each base page and throws on pages with no /Contents (blank pages are common in real
 * uploads and in generated PDFs). Adds an empty content stream where missing. Returns bytes + page count.
 */
export async function ensurePageContents(bytes) {
  const doc = await PDFDocument.load(bytes, { ignoreEncryption: true, updateMetadata: false });
  let patched = false;
  for (const pg of doc.getPages()) {
    if (!pg.node.Contents()) {
      pg.drawRectangle({ x: 0, y: 0, width: 0, height: 0, opacity: 0 });
      patched = true;
    }
  }
  return { bytes: patched ? await doc.save({ useObjectStreams: false }) : bytes, pageCount: doc.getPageCount() };
}

function widgetPageIndex(pdfDoc, widget) {
  const pages = pdfDoc.getPages();
  const pRef = widget.P();
  if (pRef) {
    const i = pages.findIndex((p) => p.ref === pRef);
    if (i >= 0) return i;
  }
  // Fallback: which page's /Annots holds this widget?
  for (let i = 0; i < pages.length; i++) {
    const annots = pages[i].node.Annots();
    if (!annots) continue;
    for (let j = 0; j < annots.size(); j++) {
      const ref = annots.get(j);
      if (pdfDoc.context.lookup(ref) === widget.dict) return i;
    }
  }
  return 0;
}

function rectToModel(pdfDoc, pageIndex, rect) {
  const page = pdfDoc.getPage(pageIndex);
  const pageH = page.getHeight();
  const x = Math.min(rect.x, rect.x + rect.width);
  const w = Math.abs(rect.width);
  const h = Math.abs(rect.height);
  const yBottom = Math.min(rect.y, rect.y + rect.height);
  return { x, y: pageH - yBottom - h, w, h };
}

function decodeName(obj) {
  if (!obj) return undefined;
  if (typeof obj.decodeText === "function") return obj.decodeText();
  if (typeof obj.asString === "function") return obj.asString().replace(/^\//, "");
  return String(obj);
}

/**
 * Read existing AcroForm fields from a PDF into the field model, so "edit my fillable PDF" works.
 * Returns page sizes too, so the canvas can lay out backdrops without a second parse.
 */
export async function importAcroFormFields(bytes) {
  const pdfDoc = await PDFDocument.load(bytes, { ignoreEncryption: true, updateMetadata: false });
  const pages = pdfDoc.getPages().map((p) => ({ width: p.getWidth(), height: p.getHeight() }));
  const out = [];
  let form;
  try {
    form = pdfDoc.getForm();
  } catch {
    return { pageCount: pages.length, pages, fields: out };
  }
  let n = 0;
  for (const field of form.getFields()) {
    const ctor = field.constructor.name;
    const name = field.getName();
    const widgets = field.acroField.getWidgets();
    const common = {
      name,
      required: field.isRequired(),
      readOnly: field.isReadOnly(),
    };
    if (ctor === "PDFRadioGroup") {
      const exportValues = field.acroField.getExportValues?.() || [];
      const selected = field.getSelected();
      widgets.forEach((wgt, i) => {
        const on = decodeName(wgt.getOnValue?.());
        const optionValue = exportValues[i] ? decodeName(exportValues[i]) : on;
        const pg = widgetPageIndex(pdfDoc, wgt);
        out.push({
          id: `fld_${++n}`,
          fieldType: "radio",
          page: pg,
          ...rectToModel(pdfDoc, pg, wgt.getRectangle()),
          ...common,
          optionValue,
          options: field.getOptions(),
          defaultValue: selected ?? "",
        });
      });
      continue;
    }
    widgets.forEach((wgt) => {
      const pg = widgetPageIndex(pdfDoc, wgt);
      const geo = rectToModel(pdfDoc, pg, wgt.getRectangle());
      const base = { id: `fld_${++n}`, page: pg, ...geo, ...common };
      switch (ctor) {
        case "PDFTextField":
          out.push({
            ...base,
            fieldType: field.isMultiline() ? "multiline" : "text",
            defaultValue: field.getText() ?? "",
            maxLength: field.getMaxLength() ?? null,
            comb: field.isCombed?.() ?? false,
          });
          break;
        case "PDFCheckBox":
          out.push({ ...base, fieldType: "checkbox", defaultValue: field.isChecked() ? "true" : "" });
          break;
        case "PDFDropdown":
          out.push({
            ...base,
            fieldType: "dropdown",
            options: field.getOptions(),
            defaultValue: field.getSelected()[0] ?? "",
            editable: field.isEditable?.() ?? false,
          });
          break;
        case "PDFOptionList":
          out.push({ ...base, fieldType: "dropdown", options: field.getOptions(), defaultValue: field.getSelected()[0] ?? "" });
          break;
        case "PDFSignature":
          out.push({ ...base, fieldType: "signature" });
          break;
        default: {
          // Buttons and unknown types: keep geometry so the user can see and delete them.
          const ft = decodeName(field.acroField.dict.get(PDFName.of("FT")));
          out.push({ ...base, fieldType: "text", unsupported: ft || ctor });
        }
      }
    });
  }
  return { pageCount: pages.length, pages, fields: out };
}

/** Flatten every field into static page content (the "non-fillable copy"). Returns new bytes. */
export async function flattenPdf(bytes) {
  const pdfDoc = await PDFDocument.load(bytes, { ignoreEncryption: true, updateMetadata: false });
  let form;
  try {
    form = pdfDoc.getForm();
  } catch {
    return pdfDoc.save();
  }
  // Unsigned /Sig widgets have no appearance stream and make pdf-lib's flatten throw; their box is
  // already painted into the page, so drop them first.
  const sigs = form.getFields().filter((f) => f.constructor.name === "PDFSignature");
  if (sigs.length) removeFields(pdfDoc, form, sigs);
  try {
    form.flatten();
  } catch {
    // Fallback: keep the page, drop the interactivity.
    removeFields(pdfDoc, form, form.getFields());
  }
  return pdfDoc.save({ useObjectStreams: false });
}

/** Detach the given fields and their widgets at the object level (no appearance streams needed). */
function removeFields(pdfDoc, form, fields) {
  const pages = pdfDoc.getPages();
  const detach = (ref) => {
    for (const page of pages) {
      const annots = page.node.Annots();
      if (!annots) continue;
      for (let i = annots.size() - 1; i >= 0; i--) {
        if (annots.get(i) === ref) annots.remove(i);
      }
    }
  };
  for (const f of fields) {
    const kids = f.acroField.dict.lookup(PDFName.of("Kids"));
    const widgetRefs = kids && typeof kids.asArray === "function" ? kids.asArray() : [f.ref];
    widgetRefs.forEach(detach);
    detach(f.ref);
    try {
      form.acroForm.removeField(f.acroField);
    } catch {
      /* already detached from /Fields */
    }
  }
}

/**
 * Remove every AcroForm field (and its widgets) without drawing values, so an imported PDF can be
 * re-exported with the fields the user edited instead of the originals underneath. Returns new bytes.
 */
export async function stripAcroForm(bytes) {
  const pdfDoc = await PDFDocument.load(bytes, { ignoreEncryption: true, updateMetadata: false });
  let form;
  try {
    form = pdfDoc.getForm();
  } catch {
    return bytes;
  }
  const fields = form.getFields();
  if (!fields.length) return bytes;
  removeFields(pdfDoc, form, fields);
  return pdfDoc.save({ useObjectStreams: false });
}
