import { describe, it, expect, beforeAll } from "vitest";
import { mkdirSync, writeFileSync } from "node:fs";
import { PDFDocument, PDFName } from "@pdfme/pdf-lib";
import { generateFillablePdf, importAcroFormFields } from "../src/acroform.js";

const A4 = { w: 595, h: 842 };

const FIELDS = [
  { id: "f_name", fieldType: "text", name: "full_name", page: 0, x: 72, y: 72, w: 216, h: 24, required: true, tooltip: "Your full name", fontSize: 11 },
  { id: "f_notes", fieldType: "multiline", name: "notes", page: 0, x: 72, y: 110, w: 300, h: 80, maxLength: 500 },
  { id: "f_agree", fieldType: "checkbox", name: "agree_terms", page: 0, x: 72, y: 200, w: 14, h: 14, defaultValue: "true" },
  { id: "f_size_s", fieldType: "radio", name: "size", page: 0, x: 72, y: 230, w: 12, h: 12, optionValue: "S", options: ["S", "M"] },
  { id: "f_size_m", fieldType: "radio", name: "size", page: 0, x: 100, y: 230, w: 12, h: 12, optionValue: "M", options: ["S", "M"], defaultValue: "M" },
  { id: "f_country", fieldType: "dropdown", name: "country", page: 0, x: 72, y: 260, w: 160, h: 22, options: ["Nepal", "India", "USA"], defaultValue: "Nepal" },
  { id: "f_date", fieldType: "date", name: "signed_on", page: 0, x: 72, y: 300, w: 120, h: 22, maxLength: 10, comb: true },
  { id: "f_sig", fieldType: "signature", name: "signature", page: 1, x: 72, y: 600, w: 200, h: 60, required: true },
  { id: "f_dup", fieldType: "text", name: "full_name", page: 1, x: 72, y: 72, w: 216, h: 24 },
];

let bytes;
let doc;
let form;

beforeAll(async () => {
  bytes = await generateFillablePdf({ pageSize: "A4", pageCount: 2, fields: FIELDS });
  mkdirSync(new URL("./output/", import.meta.url), { recursive: true });
  writeFileSync(new URL("./output/fillable-sample.pdf", import.meta.url), bytes);
  doc = await PDFDocument.load(bytes);
  form = doc.getForm();
});

describe("generateFillablePdf", () => {
  it("produces a 2-page A4 document", () => {
    expect(doc.getPageCount()).toBe(2);
    const p = doc.getPage(0);
    expect(Math.round(p.getWidth())).toBe(A4.w);
    expect(Math.round(p.getHeight())).toBe(A4.h);
  });

  it("creates one AcroForm field per name, radio widgets grouped, duplicate names suffixed", () => {
    const names = form.getFields().map((f) => f.getName()).sort();
    expect(names).toEqual(
      ["agree_terms", "country", "full_name", "full_name_2", "notes", "signature", "signed_on", "size"].sort(),
    );
  });

  it("text field carries required, tooltip, font size and value flags", () => {
    const f = form.getTextField("full_name");
    expect(f.isRequired()).toBe(true);
    expect(f.isMultiline()).toBe(false);
    expect(f.acroField.dict.get(PDFName.of("TU"))?.decodeText()).toBe("Your full name");
  });

  it("multiline text keeps max length", () => {
    const f = form.getTextField("notes");
    expect(f.isMultiline()).toBe(true);
    expect(f.getMaxLength()).toBe(500);
  });

  it("date is a combed text field with a format hint", () => {
    const f = form.getTextField("signed_on");
    expect(f.isCombed()).toBe(true);
    expect(f.getMaxLength()).toBe(10);
    expect(f.acroField.dict.get(PDFName.of("TU"))?.decodeText()).toBe("MM/DD/YYYY");
  });

  it("checkbox default is checked", () => {
    expect(form.getCheckBox("agree_terms").isChecked()).toBe(true);
  });

  it("radio group has both options and the default selected", () => {
    const g = form.getRadioGroup("size");
    expect(g.getOptions().sort()).toEqual(["M", "S"]);
    expect(g.getSelected()).toBe("M");
    expect(g.acroField.getWidgets().length).toBe(2);
  });

  it("dropdown has options and default", () => {
    const d = form.getDropdown("country");
    expect(d.getOptions()).toEqual(["Nepal", "India", "USA"]);
    expect(d.getSelected()).toEqual(["Nepal"]);
  });

  it("signature is a real /Sig field on page 2", () => {
    const sig = form.getSignature("signature");
    expect(sig).toBeTruthy();
    const widget = sig.acroField.getWidgets()[0];
    expect(widget.P()).toBe(doc.getPage(1).ref);
  });

  it("places the widget where the model said (pt, top-left → pdf-lib bottom-left)", () => {
    const w = form.getTextField("full_name").acroField.getWidgets()[0];
    const r = w.getRectangle();
    expect(r.x).toBeCloseTo(72, 0);
    expect(r.width).toBeCloseTo(216, 0);
    expect(r.height).toBeCloseTo(24, 0);
    expect(r.y).toBeCloseTo(A4.h - 72 - 24, 0);
  });

  it("sets NeedAppearances so viewers regenerate appearance streams", () => {
    const flag = form.acroForm.dict.get(PDFName.of("NeedAppearances"));
    expect(String(flag)).toBe("true");
  });
});

describe("importAcroFormFields", () => {
  it("round-trips the generated document back into the field model", async () => {
    const imported = await importAcroFormFields(bytes);
    expect(imported.pageCount).toBe(2);
    expect(imported.pages[0].width).toBeCloseTo(A4.w, 0);

    const byName = (n) => imported.fields.filter((f) => f.name === n);
    const name = byName("full_name")[0];
    expect(name.fieldType).toBe("text");
    expect(name.page).toBe(0);
    expect(name.x).toBeCloseTo(72, 0);
    expect(name.y).toBeCloseTo(72, 0);
    expect(name.w).toBeCloseTo(216, 0);
    expect(name.h).toBeCloseTo(24, 0);
    expect(name.required).toBe(true);

    expect(byName("notes")[0].fieldType).toBe("multiline");
    expect(byName("notes")[0].maxLength).toBe(500);
    expect(byName("agree_terms")[0]).toMatchObject({ fieldType: "checkbox", defaultValue: "true" });

    const radios = byName("size");
    expect(radios).toHaveLength(2);
    expect(radios.map((r) => r.optionValue).sort()).toEqual(["M", "S"]);
    expect(radios[0].defaultValue).toBe("M");

    expect(byName("country")[0]).toMatchObject({ fieldType: "dropdown", options: ["Nepal", "India", "USA"], defaultValue: "Nepal" });
    expect(byName("signature")[0]).toMatchObject({ fieldType: "signature", page: 1 });
    expect(byName("signature")[0].y).toBeCloseTo(600, 0);
  });

  it("returns no fields for a PDF without an AcroForm", async () => {
    const plain = await PDFDocument.create();
    plain.addPage([A4.w, A4.h]);
    const res = await importAcroFormFields(await plain.save());
    expect(res.fields).toEqual([]);
    expect(res.pageCount).toBe(1);
  });
});

describe("generateFillablePdf on an uploaded base PDF", () => {
  it("adds fields on top of existing pages and keeps the page count", async () => {
    const base = await PDFDocument.create();
    for (let i = 0; i < 3; i++) {
      const pg = base.addPage([612, 792]);
      pg.drawText(`Page ${i + 1}`, { x: 50, y: 750, size: 18 });
    }
    const baseBytes = await base.save();
    const out = await generateFillablePdf({
      basePdf: baseBytes,
      fields: [{ id: "a", fieldType: "text", name: "on_page_3", page: 2, x: 50, y: 50, w: 100, h: 20 }],
    });
    const d = await PDFDocument.load(out);
    expect(d.getPageCount()).toBe(3);
    const f = d.getForm().getTextField("on_page_3");
    expect(f.acroField.getWidgets()[0].P()).toBe(d.getPage(2).ref);
  });
});

describe("generateFillablePdf on a base PDF with a blank page", () => {
  it("does not choke on pages that have no content stream", async () => {
    const base = await PDFDocument.create();
    base.addPage([612, 792]); // no /Contents at all
    const pg2 = base.addPage([612, 792]);
    pg2.drawText("Second", { x: 50, y: 750, size: 18 });
    const out = await generateFillablePdf({
      basePdf: await base.save(),
      fields: [{ id: "a", fieldType: "checkbox", name: "blank_page_box", page: 0, x: 50, y: 50, w: 14, h: 14 }],
    });
    const d = await PDFDocument.load(out);
    expect(d.getPageCount()).toBe(2);
    expect(d.getForm().getCheckBox("blank_page_box")).toBeTruthy();
  });
});
