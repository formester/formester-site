# Fillable PDF Creator — Phase 0 spec

Status: draft v1, 7 Sep 2026. Plan: https://claude.ai/code/artifact/ca77fd69-b957-46d5-90da-4cf61f240833

## 1. What ships at launch

A browser-only tool at `formester.com/tools/fillable-pdf-creator/` with two doors:

- **Make a PDF fillable** — drop a PDF (≤ 10 MB, ≤ 50 pages). Pages render as the canvas via pdf.js. Existing AcroForm fields are imported.
- **Start from blank** — Letter or A4, portrait or landscape. Static elements (heading, text, line, rectangle, image) plus fields.

Output: a real AcroForm PDF (fillable in Acrobat, Preview, Chrome, Firefox, iOS) or a flattened copy. No upload, no account, no watermark.

## 2. Document model

Points, origin top-left, identical to the app's `builder_state` so canvas code passes elements through untouched.

```jsonc
{
  "version": 1,
  "source": { "type": "blank" | "upload", "fileName": "lease.pdf", "sha256": "…" },
  "page": { "size": "A4" | "Letter", "orientation": "portrait" | "landscape" },
  "pages": [
    {
      "index": 0,
      "width": 595, "height": 842,                 // pt; from the PDF in upload mode
      "elements": [ /* app element shapes: header, text, line, rectangle, image */ ],
      "fields":   [ /* FillableField, see below — or elements of type "fillable" (same data, element shape) */ ]
    }
  ]
}
```

### FillableField

| Prop | Type | Applies to | Notes |
|---|---|---|---|
| `id` | string | all | unique per document; pdfme schema name |
| `fieldType` | `text` `multiline` `checkbox` `radio` `dropdown` `date` `signature` | all | |
| `name` | string | all | AcroForm field name. Auto: `${fieldType}_${n}`; user-editable. Radio widgets in one group share a name. Duplicates get `_2`, `_3` on export. |
| `page`, `x`, `y`, `w`, `h` | number | all | pt, top-left |
| `required`, `readOnly` | boolean | all | `Ff` flags. In the pdfme schema these are `fieldRequired` / `fieldReadOnly` because pdfme reserves `required` for input validation. |
| `defaultValue` | string | text, multiline, date, dropdown; `"true"` for checkbox; option value for radio | |
| `tooltip` | string | all | `/TU`; date defaults to `MM/DD/YYYY` |
| `maxLength`, `comb` | number, boolean | text, date | comb needs maxLength |
| `fontSize` (pt), `align` | number, `left|center|right` | text, multiline, date, dropdown | |
| `textColor`, `borderColor`, `borderWidth`, `backgroundColor` | hex / pt | all except signature (border only) | empty = transparent |
| `options` | string[] | dropdown, radio | |
| `optionValue` | string | radio | export value of this widget |
| `editable` | boolean | dropdown | allow custom text |

## 3. AcroForm mapping (pdf-lib via pdfme plugin)

| fieldType | pdf-lib | Extras |
|---|---|---|
| text / date | `createTextField` | `setFontSize`, `setAlignment`, `setMaxLength`, `enableCombing`, `setText`, `/TU` |
| multiline | `createTextField` + `enableMultiline` | |
| checkbox | `createCheckBox` | `check()` when default `"true"` |
| radio | `createRadioGroup` once per name, `addOptionToPage` per widget | `select(default)` |
| dropdown | `createDropdown` + `addOptions` | `enableEditing`, `select` |
| signature | low-level `/FT /Sig` widget dict + `acroForm.addField` | Acrobat shows "Sign here"; Preview/Chrome show the box |

`NeedAppearances true` is set on the AcroForm so viewers that ignore embedded appearance streams regenerate them. pdf-lib writes Helvetica appearance streams at save (WinAnsi; non-Latin default values render as boxes in some viewers — accepted for MVP).

Coordinate conversions live in `@formester/pdf-core/acroform`: pt top-left → mm top-left (pdfme) → pt bottom-left (pdf-lib via `convertForPdfLayoutProps`).

Out of scope for MVP: AcroForm JavaScript (date validation `AFDate_FormatEx`), calculated fields, XFA, field tab order beyond page/z order, rich text.

## 4. Viewer test matrix (Phase 1 exit criterion)

Open `packages/pdf-core/test/output/fillable-sample.pdf` in each viewer and record: field visible · typeable · checkbox toggles · radio exclusive · dropdown opens · date comb cells · signature recognised · values persist after save.

| Viewer | Version | Result |
|---|---|---|
| Adobe Acrobat Reader (macOS) | | |
| Adobe Acrobat Reader (Windows) | | |
| macOS Preview | | |
| Chrome (PDFium) | | |
| Firefox (pdf.js) | | |
| iOS Files / Safari | | |
| Android Chrome / Drive viewer | | |

Known: Preview and pdf.js do not offer signing on `/Sig` fields; they display the box. Acrobat does.

## 5. Tool UI acceptance (Phase 2)

- Field palette: 7 types, drag to canvas or click to place at the next free spot.
- Selection: move, resize (8 handles), multi-select, duplicate (⌘D), delete, arrow nudges (1 pt / 8 pt with shift), snap to 8 pt grid + alignment guides.
- Properties panel per field type as in §2. Name uniqueness warning inline.
- Undo/redo (50 steps). Autosave to localStorage every change; "Recent documents" on return.
- Test-fill mode: renders the current PDF via pdf.js with AcroForm rendering enabled so the user fills real fields in-browser.
- Download: fillable or flattened. File name defaults to `<source name>-fillable.pdf`.
- Mobile: SEO copy responsive; editor shows a "best on a laptop" card.

## 6. Fill-link bridge (Phase 3)

`POST https://app.formester.com/api/site/pdf_tools/fill_links` (Turnstile token required)

```jsonc
{ "pdf": "<base64 or presigned S3 key>", "fileName": "lease.pdf",
  "fields": [ /* FillableField[] as above */ ],
  "page": { "size": "A4", "orientation": "portrait" } }
```

→ `{ "formUrl": "https://app.formester.com/f/…", "claimUrl": "https://app.formester.com/guest/claim?token=…" }`

Server: `GuestWorkspace.provision!` → `Form` with one input per field (`text`→short text, `multiline`→long text, `checkbox`→single checkbox, `radio`→radio, `dropdown`→dropdown, `date`→date, `signature`→signature) → `PdfTemplate` `source_type: upload` with `builder_state` placeholders at the same pt coordinates bound by `content.fieldId`. Sign-up prompt on first submission. "Get filled PDF" opens Business upgrade ($49/mo).

## 7. Analytics events (consent-gated `dataLayer`)

`pdf_tool_start {door}`, `pdf_tool_field_added {fieldType}`, `pdf_tool_download {mode: fillable|flattened, fields, pages}`, `pdf_tool_fill_link_created`, `pdf_tool_bridge_click {target}`, `pdf_tool_signup`.

## 8. Design artboards

Canvas: https://claude.ai/code/artifact/b2aebfc4-529c-48a7-a2ae-e9306689d469 · working files in `docs/design/` (`Main.dc.html` hero + tool at rest, `Editor.dc.html` editing with a field selected, `TestFill.dc.html` test-fill with the download / fill-link panel).

Typography and components follow existing site pages exactly: Inter 700 headings as in `components/v2/HeroV2.vue` and `components/v2/SectionHeader.vue`, cards as in `components/v2/CardGrid.vue`, buttons as in `components/UI/FButton.vue`. Instrument Serif appears only on the italic highlighted hero word (the HeroV2 pattern).
