import { describe, it, expect } from "vitest";
import { PDFDocument } from "@pdfme/pdf-lib";
import { createFillableElement, FILLABLE_PRESETS, PDF_SCHEMA } from "../src/constants/pdf-builder-schema.js";
import { elementToFillableField, fillableFieldToElement, fieldToSchema, generateFillablePdf, importAcroFormFields } from "../src/acroform.js";

describe("fillable canvas element", () => {
  it("is a first-class element in the schema with a preset per field type", () => {
    expect(PDF_SCHEMA.elements.fillable).toBeTruthy();
    expect(Object.keys(FILLABLE_PRESETS).sort()).toEqual(["checkbox", "date", "dropdown", "multiline", "radio", "signature", "text"]);
  });

  it("createFillableElement auto-names and applies the preset", () => {
    const el = createFillableElement("dropdown", 72, 100);
    expect(el.type).toBe("fillable");
    expect(el.content.fieldType).toBe("dropdown");
    expect(el.content.name).toMatch(/^dropdown_\d+$/);
    expect(el.content.options).toEqual(["Option 1", "Option 2"]);
    expect([el.w, el.h]).toEqual([160, 24]);
    const date = createFillableElement("date", 0, 0);
    expect(date.content).toMatchObject({ comb: true, maxLength: 10 });
  });

  it("element → field → schema keeps geometry (pt → mm) and flags", () => {
    const el = createFillableElement("text", 72, 72, { name: "full_name", required: true });
    const field = elementToFillableField(el, 1);
    expect(field).toMatchObject({ page: 1, x: 72, y: 72, w: 216, h: 24, name: "full_name", required: true, fieldType: "text" });
    const schema = fieldToSchema(field);
    expect(schema.type).toBe("fillableField");
    expect(schema.fieldRequired).toBe(true);
    expect(schema.position.x).toBeCloseTo(25.4, 3);
    expect(schema.width).toBeCloseTo(76.2, 3);
  });

  it("round-trips element → PDF → import → element", async () => {
    const el = createFillableElement("checkbox", 50, 60, { name: "agree", defaultValue: "true" });
    const bytes = await generateFillablePdf({ pageSize: "Letter", fields: [elementToFillableField(el, 0)] });
    const { fields } = await importAcroFormFields(bytes);
    const back = fillableFieldToElement(fields[0]);
    expect(back.type).toBe("fillable");
    expect(back.content).toMatchObject({ fieldType: "checkbox", name: "agree", defaultValue: "true" });
    expect(back.x).toBeCloseTo(50, 0);
    expect(back.y).toBeCloseTo(60, 0);
    const doc = await PDFDocument.load(bytes);
    expect(doc.getForm().getCheckBox("agree").isChecked()).toBe(true);
  });
});

describe("flattenPdf", () => {
  it("removes the AcroForm and keeps the page", async () => {
    const { flattenPdf } = await import("../src/acroform.js");
    const bytes = await generateFillablePdf({ fields: [
      { id: "t", fieldType: "text", name: "t", page: 0, x: 50, y: 50, w: 100, h: 20, defaultValue: "hello" },
      { id: "s", fieldType: "signature", name: "s", page: 0, x: 50, y: 120, w: 100, h: 30 },
    ] });
    const flat = await flattenPdf(bytes);
    const doc = await PDFDocument.load(flat);
    expect(doc.getPageCount()).toBe(1);
    expect(doc.getForm().getFields()).toHaveLength(0);
  });
});

describe("stripAcroForm", () => {
  it("removes all fields so re-export does not duplicate them", async () => {
    const { stripAcroForm } = await import("../src/acroform.js");
    const bytes = await generateFillablePdf({ fields: [
      { id: "a", fieldType: "text", name: "a", page: 0, x: 50, y: 50, w: 100, h: 20 },
      { id: "r1", fieldType: "radio", name: "r", page: 0, x: 50, y: 90, w: 12, h: 12, optionValue: "x" },
      { id: "s", fieldType: "signature", name: "s", page: 0, x: 50, y: 120, w: 100, h: 30 },
    ] });
    const stripped = await stripAcroForm(bytes);
    const doc = await PDFDocument.load(stripped);
    expect(doc.getForm().getFields()).toHaveLength(0);
    expect(doc.getPage(0).node.Annots()?.size() ?? 0).toBe(0);
  });
});
