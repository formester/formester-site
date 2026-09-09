// pdfme plugin that writes real AcroForm widgets (text, checkbox, radio,
// dropdown, signature) instead of drawing static ink. The generator hands us
// the live pdf-lib document, so field creation is a direct PDFForm call.
//
// Schema (pdfme units: mm, origin top-left):
//   { name, type: 'fillableField', position:{x,y}, width, height,
//     fieldType: 'text'|'multiline'|'checkbox'|'radio'|'dropdown'|'date'|'signature',
//     fieldName, fieldRequired, fieldReadOnly (pdfme owns `required`/`readOnly`), defaultValue, tooltip, maxLength, comb,
//     fontSize, textColor, borderColor, borderWidth, backgroundColor, align,
//     options: [..], optionValue (radio widget), editable (dropdown) }


export const FILLABLE_FIELD_TYPE = "fillableField";

export const FIELD_TYPES = [
  "text",
  "multiline",
  "checkbox",
  "radio",
  "dropdown",
  "date",
  "signature",
];

export const DEFAULT_FIELD_SCHEMA = {
  name: "",
  type: FILLABLE_FIELD_TYPE,
  fieldType: "text",
  fieldName: "",
  fieldRequired: false,
  fieldReadOnly: false,
  defaultValue: "",
  tooltip: "",
  maxLength: null,
  comb: false,
  fontSize: 10,
  textColor: "#101828",
  borderColor: "#98a2b3",
  borderWidth: 1,
  backgroundColor: "",
  align: "left",
  options: [],
  optionValue: "",
  editable: false,
  position: { x: 0, y: 0 },
  width: 60,
  height: 8,
  rotate: 0,
  opacity: 1,
};

/** "#rrggbb" → pdf-lib rgb(); empty/invalid → undefined (transparent). */
function hexToRgb(pdfLib, hex) {
  if (!hex || typeof hex !== "string") return undefined;
  const m = hex.trim().match(/^#?([0-9a-f]{6})$/i);
  if (!m) return undefined;
  const n = parseInt(m[1], 16);
  return pdfLib.rgb(((n >> 16) & 255) / 255, ((n >> 8) & 255) / 255, (n & 255) / 255);
}

function sanitizeName(raw, fallback) {
  const s = String(raw || "").trim().replace(/[.\s]+/g, "_");
  return s || fallback;
}

/** Field names must be unique per document; suffix repeats (_2, _3, …). Radio groups share one name on purpose. */
function uniqueName(cache, wanted) {
  const used = cache.get("fillable:usedNames") || new Set();
  cache.set("fillable:usedNames", used);
  let name = wanted;
  let i = 2;
  while (used.has(name)) name = `${wanted}_${i++}`;
  used.add(name);
  return name;
}

/** pdf-lib grows the widget /Rect by borderWidth/2 on every side; shrink first so the PDF rect equals the model box. */
function appearance(pdfLib, schema, { x, y, width, height }) {
  const b = (schema.borderWidth ?? 1) / 2;
  return {
    x: x + b,
    y: y + b,
    width: Math.max(0, width - 2 * b),
    height: Math.max(0, height - 2 * b),
    textColor: hexToRgb(pdfLib, schema.textColor),
    borderColor: hexToRgb(pdfLib, schema.borderColor),
    borderWidth: schema.borderWidth ?? 1,
    backgroundColor: hexToRgb(pdfLib, schema.backgroundColor),
  };
}

function setTooltip(pdfLib, field, tooltip) {
  if (!tooltip) return;
  field.acroField.dict.set(pdfLib.PDFName.of("TU"), pdfLib.PDFString.of(String(tooltip)));
}

/** This pdf-lib fork creates fields without /DA; seed one so setFontSize/setAlignment can parse it. save() rewrites it with the real font. */
function seedDefaultAppearance(field, fontSize = 0) {
  if (!field.acroField.getDefaultAppearance()) {
    field.acroField.setDefaultAppearance(`/Helv ${Number(fontSize) || 0} Tf 0 g`);
  }
}

function applyTextOptions(pdfLib, field, schema) {
  seedDefaultAppearance(field, schema.fontSize);
  if (schema.fieldRequired) field.enableRequired();
  if (schema.fieldReadOnly) field.enableReadOnly();
  if (schema.fontSize) field.setFontSize(Number(schema.fontSize));
  const align = { left: "Left", center: "Center", right: "Right" }[schema.align] || "Left";
  field.setAlignment(pdfLib.TextAlignment[align]);
  if (schema.maxLength) field.setMaxLength(Number(schema.maxLength));
  if (schema.comb && schema.maxLength) field.enableCombing();
  if (schema.defaultValue) field.setText(String(schema.defaultValue));
  setTooltip(pdfLib, field, schema.tooltip);
}

/** Writes a bare /Sig widget; pdf-lib has no high-level API for signature fields. Acrobat shows it as "Sign here". */
function addSignatureField(pdfLib, pdfDoc, page, name, box, schema) {
  const { PDFName, PDFString, PDFNumber, PDFArray, PDFDict } = pdfLib;
  const ctx = pdfDoc.context;
  const rect = ctx.obj([box.x, box.y, box.x + box.width, box.y + box.height]);
  const dict = ctx.obj({
    Type: "Annot",
    Subtype: "Widget",
    FT: "Sig",
    T: PDFString.of(name),
    Rect: rect,
    F: 4,
    P: page.ref,
  });
  if (schema.tooltip) dict.set(PDFName.of("TU"), PDFString.of(String(schema.tooltip)));
  if (schema.fieldRequired) dict.set(PDFName.of("Ff"), PDFNumber.of(2));
  // Visible border so the box exists before signing; viewers replace it once signed.
  const border = hexToRgb(pdfLib, schema.borderColor);
  if (border) {
    const mk = ctx.obj({ BC: ctx.obj([border.red, border.green, border.blue]) });
    dict.set(PDFName.of("MK"), mk);
  }
  const ref = ctx.register(dict);
  pdfDoc.getForm().acroForm.addField(ref);
  page.node.addAnnot(ref);
  // Viewers other than Acrobat draw nothing for an unsigned /Sig widget, so paint the box into the page.
  if (border && (schema.borderWidth ?? 1) > 0) {
    page.drawRectangle({
      x: box.x,
      y: box.y,
      width: box.width,
      height: box.height,
      borderColor: border,
      borderWidth: schema.borderWidth ?? 1,
      color: hexToRgb(pdfLib, schema.backgroundColor),
    });
  }
  void PDFArray;
  void PDFDict;
}

async function pdfRender(arg) {
  const { schema, pdfDoc, page, pdfLib, _cache } = arg;
  const form = pdfDoc.getForm();
  // pdfme schemas are mm from the top-left; pdf-lib wants points from the bottom-left. Rotation is not supported for widgets.
  const MM = 72 / 25.4;
  const width = schema.width * MM;
  const height = schema.height * MM;
  const box = { x: schema.position.x * MM, y: page.getHeight() - schema.position.y * MM - height, width, height };
  const base = sanitizeName(schema.fieldName, schema.name);

  // Viewers that ignore our appearance streams regenerate them from this flag.
  form.acroForm.dict.set(pdfLib.PDFName.of("NeedAppearances"), pdfLib.PDFBool.True);

  switch (schema.fieldType) {
    case "text":
    case "date":
    case "multiline": {
      const field = form.createTextField(uniqueName(_cache, base));
      if (schema.fieldType === "multiline") field.enableMultiline();
      applyTextOptions(pdfLib, field, {
        ...schema,
        tooltip: schema.tooltip || (schema.fieldType === "date" ? "MM/DD/YYYY" : ""),
      });
      field.addToPage(page, appearance(pdfLib, schema, box));
      break;
    }
    case "checkbox": {
      const field = form.createCheckBox(uniqueName(_cache, base));
      seedDefaultAppearance(field);
      if (schema.fieldRequired) field.enableRequired();
      if (schema.fieldReadOnly) field.enableReadOnly();
      setTooltip(pdfLib, field, schema.tooltip);
      field.addToPage(page, appearance(pdfLib, schema, box));
      if (String(schema.defaultValue) === "true") field.check();
      break;
    }
    case "radio": {
      // One RadioGroup per fieldName across widgets; the group is created by the first widget.
      const key = `fillable:radio:${base}`;
      let group = _cache.get(key);
      if (!group) {
        group = form.createRadioGroup(uniqueName(_cache, base));
        seedDefaultAppearance(group);
        if (schema.fieldRequired) group.enableRequired();
        if (schema.fieldReadOnly) group.enableReadOnly();
        setTooltip(pdfLib, group, schema.tooltip);
        _cache.set(key, group);
      }
      const option = String(schema.optionValue || schema.name);
      group.addOptionToPage(option, page, appearance(pdfLib, schema, box));
      if (schema.defaultValue && String(schema.defaultValue) === option) group.select(option);
      break;
    }
    case "dropdown": {
      const field = form.createDropdown(uniqueName(_cache, base));
      const options = (schema.options || []).map(String).filter(Boolean);
      if (options.length) field.addOptions(options);
      if (schema.fieldRequired) field.enableRequired();
      if (schema.fieldReadOnly) field.enableReadOnly();
      if (schema.editable) field.enableEditing();
      seedDefaultAppearance(field, schema.fontSize);
      if (schema.fontSize) field.setFontSize(Number(schema.fontSize));
      if (schema.defaultValue && options.includes(String(schema.defaultValue))) field.select(String(schema.defaultValue));
      setTooltip(pdfLib, field, schema.tooltip);
      field.addToPage(page, appearance(pdfLib, schema, box));
      break;
    }
    case "signature": {
      addSignatureField(pdfLib, pdfDoc, page, uniqueName(_cache, base), box, schema);
      break;
    }
    default:
      throw new Error(`fillableField: unknown fieldType "${schema.fieldType}"`);
  }
}

/** Minimal DOM preview for pdfme's Designer/Viewer. The site editor renders fields with its own Vue component. */
function uiRender(arg) {
  const { schema, rootElement } = arg;
  rootElement.innerHTML = "";
  const el = document.createElement("div");
  el.style.cssText =
    "width:100%;height:100%;box-sizing:border-box;border:1px dashed #7a5af5;background:rgba(122,90,245,.08);" +
    "font:10px/1.2 sans-serif;color:#4a23a3;padding:2px 4px;overflow:hidden;white-space:nowrap";
  el.textContent = `${schema.fieldType}: ${schema.fieldName || schema.name}`;
  rootElement.appendChild(el);
}

const propPanelSchema = {
  fieldType: {
    title: "Field type",
    type: "string",
    widget: "select",
    props: { options: FIELD_TYPES.map((v) => ({ label: v, value: v })) },
  },
  fieldName: { title: "Field name", type: "string", widget: "input" },
  fieldRequired: { title: "Required", type: "boolean", widget: "switch" },
  fieldReadOnly: { title: "Read only", type: "boolean", widget: "switch" },
  defaultValue: { title: "Default value", type: "string", widget: "input" },
  tooltip: { title: "Tooltip", type: "string", widget: "input" },
  fontSize: { title: "Font size (pt)", type: "number", widget: "inputNumber", props: { min: 4, max: 72 } },
  align: {
    title: "Align",
    type: "string",
    widget: "select",
    props: { options: ["left", "center", "right"].map((v) => ({ label: v, value: v })) },
  },
  maxLength: { title: "Max length", type: "number", widget: "inputNumber", props: { min: 1 } },
  comb: { title: "Comb cells", type: "boolean", widget: "switch" },
  textColor: { title: "Text color", type: "string", widget: "color" },
  borderColor: { title: "Border color", type: "string", widget: "color" },
  borderWidth: { title: "Border width", type: "number", widget: "inputNumber", props: { min: 0, max: 4 } },
  backgroundColor: { title: "Background", type: "string", widget: "color" },
  options: { title: "Options (dropdown / radio)", type: "array", widget: "select", props: { mode: "tags" } },
  optionValue: { title: "This option's value (radio)", type: "string", widget: "input" },
  editable: { title: "Allow custom text (dropdown)", type: "boolean", widget: "switch" },
};

export const fillableField = {
  pdf: pdfRender,
  ui: uiRender,
  propPanel: { schema: propPanelSchema, defaultSchema: DEFAULT_FIELD_SCHEMA },
  icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="6" width="18" height="12" rx="2"/><path d="M7 12h6"/></svg>',
};

export default fillableField;
