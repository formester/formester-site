import baseSchema from "./pdf-builder-schema.json" with { type: "json" };
import { shortId } from "../helpers/short-id.js";

const clone = (value) => JSON.parse(JSON.stringify(value));

const ALIGN_OPTIONS = [
  { label: "Left", value: "left", iconName: "left-alignment" },
  { label: "Center", value: "center", iconName: "center-alignment" },
  { label: "Right", value: "right", iconName: "right-alignment" },
];

const LAYOUT_OPTIONS = [
  { label: "Stacked", value: "stacked", iconName: "layout-stacked" },
  { label: "Inline", value: "inline", iconName: "layout-inline" },
];

const VERTICAL_ALIGN_OPTIONS = [
  { label: "Top", value: "start" },
  { label: "Bottom", value: "end" },
];

const OPTION_LAYOUT_OPTIONS = [
  {
    value: "row",
    iconName: "layout-row",
    title: "Single row",
  },
  {
    value: "1col",
    iconName: "layout-1col",
    title: "1 column",
  },
  {
    value: "2col",
    iconName: "layout-2col",
    title: "2 columns",
  },
];

const CHOICE_DISPLAY_OPTIONS = [
  {
    value: "tag",
    iconName: "answer-tag",
    title: "Tags",
  },
  {
    value: "ordered",
    iconName: "answer-ordered",
    title: "Ordered list",
  },
  {
    value: "unordered",
    iconName: "answer-unordered",
    title: "Unordered list",
  },
  {
    value: "checkbox",
    iconName: "answer-radio",
    title: "Marked options",
  },
];

const MARKER_STYLE_OPTIONS = [
  { label: "Auto", value: "auto" },
  { label: "Radio", value: "radio" },
  { label: "Checkbox", value: "checkbox" },
];

const FIXED_POSITION_SETTING = {
  key: "style.fixedPosition",
  label: "Fixed position",
  type: "toggle",
  description: "Pin to this spot, behind other items.",
};

const buildPlaceholderSettings = () => ({
  general: [
    {
      key: "style.labelFontFamily",
      label: "Font family",
      type: "font-family",
      visibilityToggle: "content.kind!=checkmark",
    },
    {
      key: "style.fontSize",
      label: "Size",
      type: "number",
      min: 7,
      max: 72,
      visibilityToggle: "content.kind!=checkmark",
    },
    { key: "style.color", label: "Color", type: "color" },
    {
      type: "font-style",
      label: "Style",
      boldKey: "style.fontWeight",
      italicKey: "style.fontStyle",
      visibilityToggle: "content.kind!=checkmark",
    },
    {
      key: "style.renderMode",
      label: "Render as",
      type: "choice",
      visibilityToggle: "content.kind==choice||content.kind==checkmark",
      options: [
        { label: "Text", value: "text" },
        { label: "Checkbox", value: "checkbox" },
        { label: "Radio", value: "radio" },
      ],
    },
    {
      key: "style.markerStyle",
      label: "Style",
      type: "choice",
      visibilityToggle: "content.kind==checkmark&&style.renderMode==checkbox",
      options: [
        { label: "✓", value: "check" },
        { label: "☑", value: "box-check" },
        { label: "▣", value: "box-check-filled" },
      ],
    },
    {
      key: "w",
      label: "Size (pt)",
      type: "number",
      min: 6,
      max: 96,
      visibilityToggle: "content.kind==checkmark",
    },
    {
      key: "style.markerStyle",
      label: "Style",
      type: "choice",
      visibilityToggle: "content.kind==checkmark&&style.renderMode==radio",
      options: [
        { label: "●", value: "dot" },
        { label: "◉", value: "ring-dot" },
        { label: "⬤", value: "filled-circle" },
      ],
    },
    {
      key: "style.fileDisplay",
      label: "Display",
      type: "choice",
      visibilityToggle: "content.kind==file",
      options: [
        { label: "Grid", value: "square" },
        { label: "Masonry", value: "masonry" },
        { label: "Card", value: "card" },
      ],
    },
    {
      key: "style.fileItemSize",
      label: "Item size",
      type: "choice",
      visibilityToggle: "content.kind==file",
      options: [
        { label: "S", value: "small" },
        { label: "M", value: "mid" },
        { label: "L", value: "large" },
        { label: "Custom", value: "custom" },
      ],
    },
    {
      key: "style.fileItemSizeCustom",
      label: "Custom size (pt)",
      type: "number",
      min: 24,
      max: 240,
      visibilityToggle: "content.kind==file&&style.fileItemSize==custom",
    },
  ],
});

const buildTextSettings = () => ({
  general: [
    { key: "content.text", label: "Text", type: "recall" },
    { key: "style.labelFontFamily", label: "Font family", type: "font-family" },
    { key: "style.fontSize", label: "Size", type: "number", min: 7, max: 72 },
    { key: "style.color", label: "Color", type: "color" },
    {
      type: "font-style",
      label: "Style",
      boldKey: "style.fontWeight",
      italicKey: "style.fontStyle",
    },
    {
      key: "style.align",
      label: "Alignment",
      type: "choice",
      options: ALIGN_OPTIONS,
    },
    {
      key: "style.lineHeight",
      label: "Line height",
      type: "number",
      min: 1,
      max: 16,
      step: 0.1,
    },
  ],
  advanced: [FIXED_POSITION_SETTING],
});

const buildFieldGeneralSettings = ({ includeLabel = true } = {}) => {
  const settings = [];
  if (includeLabel) {
    settings.push({ key: "content.label", label: "Label text", type: "text" });
  }
  settings.push(
    { key: "style.showLabel", label: "Show label", type: "toggle" },
    {
      key: "style.labelLayout",
      label: "Layout",
      type: "choice",
      options: LAYOUT_OPTIONS,
      description: "Label above the answer, or beside it.",
    },
    {
      key: "style.labelWidth",
      label: "Label width %",
      type: "number",
      min: 20,
      max: 60,
      visibilityToggle: "style.labelLayout==inline&&style.showLabel",
      description: "Width of the label area.",
    },
    {
      key: "style.labelVerticalAlign",
      label: "Label vertical align",
      type: "choice",
      options: VERTICAL_ALIGN_OPTIONS,
      visibilityToggle: "style.labelLayout==inline&&style.showLabel",
    },
    {
      key: "style.labelSpacing",
      label: "Label spacing",
      type: "number",
      min: 0,
      max: 32,
      step: 1,
      visibilityToggle: "style.labelLayout==stacked&&style.showLabel",
      description: "Gap between the label and the answer.",
    },
    { type: "divider" },
  );
  return settings;
};

const buildLabelTypographySettings = () => [
  { type: "section", label: "Label" },
  { key: "style.labelFontFamily", label: "Font family", type: "font-family" },
  { key: "style.fontSize", label: "Size", type: "number", min: 7, max: 24 },
  { key: "style.color", label: "Color", type: "color" },
  {
    type: "font-style",
    label: "Style",
    boldKey: "style.fontWeight",
    italicKey: "style.fontStyle",
  },
  {
    key: "style.align",
    label: "Alignment",
    type: "choice",
    options: ALIGN_OPTIONS,
  },
];

const buildAnswerTypographySettings = () => [
  { type: "divider" },
  { type: "section", label: "Answer" },
  { key: "style.answerFontFamily", label: "Font family", type: "font-family" },
  {
    key: "style.answerFontSize",
    label: "Size",
    type: "number",
    min: 7,
    max: 24,
  },
  { key: "style.answerColor", label: "Color", type: "color" },
  {
    type: "font-style",
    label: "Style",
    boldKey: "style.answerFontWeight",
    italicKey: "style.answerFontStyle",
  },
  {
    key: "style.answerAlign",
    label: "Alignment",
    type: "choice",
    options: ALIGN_OPTIONS,
  },
];

const buildFieldAppearanceSettings = () => [
  { type: "section", label: "Appearance" },
  { key: "style.backgroundColor", label: "Background", type: "color" },
  {
    key: "style.padding",
    label: "Padding",
    type: "number",
    min: 0,
    max: 20,
    step: 1,
  },
  { type: "divider" },
  { type: "section", label: "Border" },
  { key: "style.showBorder", label: "Show border", type: "toggle" },
  { key: "style.lineColor", label: "Border color", type: "color" },
  {
    key: "style.lineThickness",
    label: "Border width",
    type: "number",
    min: 0.5,
    max: 5,
    step: 0.5,
  },
];

const buildFieldSettings = () => ({
  general: [
    ...buildFieldGeneralSettings(),
    ...buildLabelTypographySettings(),
    ...buildAnswerTypographySettings(),
  ],
  advanced: buildFieldAppearanceSettings(),
});

const buildRankingSettings = () => ({
  general: [
    ...buildFieldGeneralSettings(),
    ...buildLabelTypographySettings(),
    ...buildAnswerTypographySettings(),
  ],
  advanced: buildFieldAppearanceSettings(),
});

const buildTermsSettings = () => ({
  general: [
    { key: "content.label", label: "Label text", type: "text" },
    { type: "divider" },
    ...buildLabelTypographySettings(),
  ],
  advanced: [
    { type: "section", label: "Appearance" },
    { key: "style.backgroundColor", label: "Background", type: "color" },
    {
      key: "style.padding",
      label: "Padding",
      type: "number",
      min: 0,
      max: 20,
      step: 1,
    },
  ],
});

const buildChoiceSettings = () => ({
  general: [
    ...buildFieldGeneralSettings(),
    { type: "section", label: "Answer display" },
    {
      key: "style.answerDisplay",
      label: "Answer display",
      type: "choice",
      options: CHOICE_DISPLAY_OPTIONS,
      description: "How the selected option(s) appear in the PDF.",
    },
    {
      key: "style.tagBackgroundColor",
      label: "Tag background",
      type: "color",
      visibilityToggle: "style.answerDisplay==tag",
    },
    {
      key: "style.tagTextColor",
      label: "Tag text color",
      type: "color",
      visibilityToggle: "style.answerDisplay==tag",
    },
    {
      key: "style.showAllOptions",
      label: "Show all options",
      type: "toggle",
      visibilityToggle: "style.answerDisplay==checkbox",
      description: "Also list unselected options alongside the selected ones.",
    },
    {
      key: "style.markerStyle",
      label: "Marker style",
      type: "choice",
      visibilityToggle: "style.answerDisplay==checkbox",
      options: MARKER_STYLE_OPTIONS,
      description: "Shape used next to each option.",
    },
    {
      key: "style.optionLayout",
      label: "Option layout",
      type: "choice",
      visibilityToggle: "style.answerDisplay!=tag",
      options: OPTION_LAYOUT_OPTIONS,
      description: "Arrange options in a single row or in columns.",
    },
    { type: "divider" },
    ...buildLabelTypographySettings(),
    ...buildAnswerTypographySettings(),
  ],
  advanced: buildFieldAppearanceSettings(),
});

// Star/scale counts come from the live form field config (item.count for
// stars, item.start/item.end for scale). PDF builder only controls visual
// styling: colour and per-item size.
const buildRatingSettings = (valueField) => {
  const isStar = valueField.endsWith("maxRating");
  return {
    general: [
      ...buildFieldGeneralSettings(),
      { type: "section", label: "Appearance" },
      {
        key: isStar ? "style.starColor" : "style.scaleColor",
        label: "Active color",
        type: "color",
      },
      isStar
        ? {
            key: "style.starSize",
            label: "Star size",
            type: "number",
            min: 8,
            max: 64,
          }
        : {
            key: "style.scaleBoxSize",
            label: "Box size",
            type: "number",
            min: 16,
            max: 64,
          },
      ...(isStar
        ? []
        : [
            {
              key: "style.scaleFontSize",
              label: "Number size",
              type: "number",
              min: 8,
              max: 32,
            },
          ]),
      { type: "divider" },
      ...buildLabelTypographySettings(),
    ],
    advanced: buildFieldAppearanceSettings(),
  };
};

const FILE_DISPLAY_OPTIONS = [
  { value: "masonry", iconName: "file-masonry", title: "Masonry" },
  { value: "square", iconName: "file-square", title: "Square" },
  { value: "card", iconName: "file-card", title: "Card" },
  { value: "bullet", iconName: "file-bullet", title: "Bullet" },
];

const FILE_SIZE_OPTIONS = [
  { value: "small", label: "Small" },
  { value: "mid", label: "Medium" },
  { value: "large", label: "Large" },
  { value: "custom", label: "Custom" },
];

const buildFileSettings = () => ({
  general: [
    ...buildFieldGeneralSettings(),
    { type: "section", label: "Display" },
    {
      key: "style.fileDisplay",
      label: "File display",
      type: "choice",
      options: FILE_DISPLAY_OPTIONS,
    },
    {
      key: "style.fileItemSize",
      label: "Item size",
      type: "choice",
      options: FILE_SIZE_OPTIONS,
      visibilityToggle: "style.fileDisplay!=bullet",
    },
    {
      key: "style.fileItemSizeCustom",
      label: "Custom size",
      type: "number",
      min: 24,
      max: 240,
      visibilityToggle: "style.fileItemSize==custom&&style.fileDisplay!=bullet",
    },
    { type: "divider" },
    ...buildLabelTypographySettings(),
    ...buildAnswerTypographySettings(),
  ],
  advanced: buildFieldAppearanceSettings(),
});

const buildImageSettings = () => ({
  general: [
    { key: "content.src", label: "Image", type: "image-picker" },
    {
      key: "style.objectFit",
      label: "Fit",
      type: "choice",
      options: [
        { label: "Contain", value: "contain" },
        { label: "Cover", value: "cover" },
        { label: "Fill", value: "fill" },
      ],
    },
    {
      key: "style.borderRadius",
      label: "Border radius",
      type: "number",
      min: 0,
      max: 50,
    },
    { key: "style.rotate", label: "Rotate", type: "number", min: 0, max: 360 },
  ],
  advanced: [FIXED_POSITION_SETTING],
});

const buildLineSettings = () => ({
  general: [
    { key: "style.color", label: "Color", type: "color" },
    {
      key: "style.thickness",
      label: "Thickness (px)",
      type: "number",
      min: 0.5,
      max: 20,
      step: 0.5,
    },
    {
      key: "style.rotate",
      label: "Rotation (°)",
      type: "number",
      min: 0,
      max: 360,
    },
  ],
  advanced: [FIXED_POSITION_SETTING],
});

const buildRectangleSettings = () => ({
  general: [
    { key: "style.fill", label: "Fill", type: "color" },
    { key: "style.stroke", label: "Border color", type: "color" },
    {
      key: "style.strokeWidth",
      label: "Border width",
      type: "number",
      min: 0,
      max: 20,
      step: 0.5,
    },
    {
      key: "style.borderRadius",
      label: "Border radius",
      type: "number",
      min: 0,
      max: 50,
    },
    {
      key: "style.rotate",
      label: "Rotation (°)",
      type: "number",
      min: 0,
      max: 360,
    },
  ],
  advanced: [FIXED_POSITION_SETTING],
});

const buildCircleSettings = () => ({
  general: [
    { key: "style.fill", label: "Fill", type: "color" },
    { key: "style.stroke", label: "Border color", type: "color" },
    {
      key: "style.strokeWidth",
      label: "Border width",
      type: "number",
      min: 0,
      max: 20,
      step: 0.5,
    },
  ],
  advanced: [FIXED_POSITION_SETTING],
});

const buildRepeaterSettings = () => ({
  general: [
    ...buildFieldGeneralSettings(),
    ...buildLabelTypographySettings(),
    { type: "divider" },
    {
      type: "section",
      label: "Table cells",
    },
    { key: "style.showHeader", label: "Show header", type: "toggle" },
    { key: "style.headerColor", label: "Header background", type: "color" },
    { key: "style.headerTextColor", label: "Header text color", type: "color" },
    {
      key: "style.answerFontSize",
      label: "Cell size",
      type: "number",
      min: 7,
      max: 24,
    },
    { key: "style.answerColor", label: "Cell color", type: "color" },
    {
      key: "style.answerAlign",
      label: "Cell alignment",
      type: "choice",
      options: ALIGN_OPTIONS,
    },
  ],
  advanced: [
    { type: "section", label: "Table appearance" },
    { key: "style.borderColor", label: "Border color", type: "color" },
    {
      key: "style.borderWidth",
      label: "Border width",
      type: "number",
      min: 0.5,
      max: 20,
      step: 0.5,
    },
    {
      key: "style.cellPadding",
      label: "Cell padding",
      type: "number",
      min: 0,
      max: 12,
    },
    { key: "style.rowStripeColor", label: "Row stripe color", type: "color" },
  ],
});

const buildMatrixSettings = () => ({
  general: [
    ...buildFieldGeneralSettings(),
    {
      key: "style.matrixDisplay",
      label: "Display",
      type: "choice",
      options: [
        { label: "Table", value: "table" },
        { label: "Summary", value: "summary" },
      ],
      description: "Show the full grid, or list only the selected cells.",
    },
    { type: "divider" },
    ...buildLabelTypographySettings(),
    { type: "divider" },
    {
      type: "section",
      label: "Table cells",
      visibilityToggle: "style.matrixDisplay==table",
    },
    {
      key: "style.answerFontSize",
      label: "Cell size",
      type: "number",
      min: 7,
      max: 24,
      visibilityToggle: "style.matrixDisplay==table",
    },
    {
      key: "style.answerColor",
      label: "Cell color",
      type: "color",
      visibilityToggle: "style.matrixDisplay==table",
    },
    {
      key: "style.answerAlign",
      label: "Cell alignment",
      type: "choice",
      options: ALIGN_OPTIONS,
      visibilityToggle: "style.matrixDisplay==table",
    },
    {
      type: "section",
      label: "Answers",
      visibilityToggle: "style.matrixDisplay==summary",
    },
    {
      key: "style.answerFontSize",
      label: "Font size",
      type: "number",
      min: 7,
      max: 24,
      visibilityToggle: "style.matrixDisplay==summary",
    },
    {
      key: "style.answerColor",
      label: "Text color",
      type: "color",
      visibilityToggle: "style.matrixDisplay==summary",
    },
    {
      key: "style.answerAlign",
      label: "Alignment",
      type: "choice",
      options: ALIGN_OPTIONS,
      visibilityToggle: "style.matrixDisplay==summary",
    },
  ],
  advanced: [
    { type: "section", label: "Border" },
    { key: "style.borderColor", label: "Color", type: "color" },
    {
      key: "style.borderWidth",
      label: "Width",
      type: "number",
      min: 0.5,
      max: 20,
      step: 0.5,
    },
    {
      key: "style.headerColor",
      label: "Header background",
      type: "color",
      visibilityToggle: "style.matrixDisplay==table",
    },
    {
      key: "style.headerTextColor",
      label: "Header text color",
      type: "color",
      visibilityToggle: "style.matrixDisplay==table",
    },
    {
      key: "style.cellPadding",
      label: "Cell padding",
      type: "number",
      min: 0,
      max: 12,
      visibilityToggle: "style.matrixDisplay==table",
    },
    { type: "divider" },
    {
      key: "style.emptyCellStyle",
      label: "Empty cell style",
      type: "choice",
      visibilityToggle: "style.matrixDisplay==table",
      options: [
        { label: "Empty", value: "empty" },
        { label: "Line", value: "line" },
      ],
      description: "How unselected cells look.",
    },
    {
      key: "style.showColumnHeader",
      label: "Show column header",
      type: "toggle",
      visibilityToggle: "style.matrixDisplay==table",
    },
    {
      key: "style.showRowHeader",
      label: "Show row header",
      type: "toggle",
      visibilityToggle: "style.matrixDisplay==table",
    },
  ],
});

const withStyleDefaults = (element, defaults) => ({
  ...element,
  style: { ...defaults, ...(element.style ?? {}) },
});

const COMMON_FIELD_STYLE_DEFAULTS = {
  showLabel: true,
  labelLayout: "stacked",
  labelWidth: 38,
  labelVerticalAlign: "start",
  backgroundColor: "",
  padding: 4,
};

const TABLE_STYLE_DEFAULTS = {
  showLabel: true,
  labelLayout: "stacked",
  labelWidth: 38,
  backgroundColor: "",
  padding: 4,
  showHeader: true,
  headerTextColor: "#475467",
  answerFontSize: 11,
  answerColor: "#101828",
  answerAlign: "left",
  borderWidth: 0.3,
  cellPadding: 0.5,
  rowStripeColor: "",
};

function buildSchema() {
  const schema = clone(baseSchema);
  const { elements } = schema;

  elements.header.settings = buildTextSettings();
  elements.text.settings = buildTextSettings();
  elements.image.settings = buildImageSettings();
  elements.signature = withStyleDefaults(
    elements.signature,
    COMMON_FIELD_STYLE_DEFAULTS,
  );
  elements.signature.settings = buildFieldSettings();
  elements.line.settings = buildLineSettings();
  elements.rectangle.settings = buildRectangleSettings();
  elements.circle.settings = buildCircleSettings();

  elements.field = withStyleDefaults(
    elements.field,
    COMMON_FIELD_STYLE_DEFAULTS,
  );
  elements.field.settings = buildFieldSettings();

  elements.file = withStyleDefaults(elements.file, COMMON_FIELD_STYLE_DEFAULTS);
  elements.file.settings = buildFileSettings();

  elements.ranking = withStyleDefaults(
    elements.ranking,
    COMMON_FIELD_STYLE_DEFAULTS,
  );
  elements.ranking.settings = buildRankingSettings();

  elements.dropdown = withStyleDefaults(elements.dropdown, {
    ...COMMON_FIELD_STYLE_DEFAULTS,
    markerStyle: "auto",
  });
  elements.dropdown.settings = buildChoiceSettings();

  elements.terms = withStyleDefaults(
    elements.terms,
    COMMON_FIELD_STYLE_DEFAULTS,
  );
  elements.terms.settings = buildTermsSettings();

  elements.radio = withStyleDefaults(elements.radio, {
    ...COMMON_FIELD_STYLE_DEFAULTS,
    markerStyle: "auto",
  });
  elements.radio.settings = buildChoiceSettings();

  elements["multiple-checkbox"] = withStyleDefaults(
    elements["multiple-checkbox"],
    {
      ...COMMON_FIELD_STYLE_DEFAULTS,
      markerStyle: "auto",
    },
  );
  elements["multiple-checkbox"].settings = buildChoiceSettings();

  elements["star-rating"] = withStyleDefaults(
    elements["star-rating"],
    COMMON_FIELD_STYLE_DEFAULTS,
  );
  elements["star-rating"].settings = buildRatingSettings("style.maxRating");

  elements["scale-rating"] = withStyleDefaults(
    elements["scale-rating"],
    COMMON_FIELD_STYLE_DEFAULTS,
  );
  elements["scale-rating"].settings = buildRatingSettings("style.steps");

  elements["repeat-field"] = withStyleDefaults(
    elements["repeat-field"],
    TABLE_STYLE_DEFAULTS,
  );
  elements["repeat-field"].settings = buildRepeaterSettings();

  elements.matrix = withStyleDefaults(elements.matrix, TABLE_STYLE_DEFAULTS);
  elements.matrix.settings = buildMatrixSettings();

  elements.placeholder.settings = buildPlaceholderSettings();

  return schema;
}

export const PDF_SCHEMA = buildSchema();

// Reserved synthetic field ids for submission metadata. Surface in the recall
// dropdown and in the palette's System group; resolved against submissionData
// at PDF render time.
export const PDF_SYSTEM_VARIABLES = [
  {
    id: "formesterSubmissionId",
    label: "Submission ID",
    icon: "file-2",
    category: "input",
  },
  {
    id: "formesterSubmissionCreatedAt",
    label: "Submitted At",
    icon: "calendar",
    category: "input",
  },
  {
    id: "formesterSubmissionUpdatedAt",
    label: "Submission Updated At",
    icon: "calendar",
    category: "input",
  },
];

export const PDF_SYSTEM_VARIABLE_IDS = new Set(
  PDF_SYSTEM_VARIABLES.map((v) => v.id),
);

export const PDF_SYSTEM_VARIABLE_ICONS = Object.fromEntries(
  PDF_SYSTEM_VARIABLES.map((v) => [v.id, v.icon]),
);

export const FILE_SIZE_PRESETS = { small: 72, mid: 120, large: 180 };

export function resolveFileItemSizePt(style) {
  const key = style?.fileItemSize ?? "mid";
  if (key === "custom") return Math.max(24, style?.fileItemSizeCustom || 0);
  return FILE_SIZE_PRESETS[key] ?? FILE_SIZE_PRESETS.mid;
}

export const FORM_FIELD_TYPES = new Set([
  "field",
  "star-rating",
  "scale-rating",
  "radio",
  "multiple-checkbox",
  "dropdown",
  "file",
  "ranking",
  "repeat-field",
  "matrix",
  "signature",
  "terms",
]);

// Approximate height a stacked label row occupies (11px font + padding)
const LABEL_HEIGHT_PT = 18;

/**
 * Returns the correct natural height for an element.
 * For form-field types, adjusts based on labelLayout (stacked vs inline).
 * For all other types, returns the element's current h unchanged.
 */
export function computeNaturalHeight(el, globalLayout = "stacked") {
  if (!FORM_FIELD_TYPES.has(el.type)) return el.h;
  const def = PDF_SCHEMA.elements[el.type];
  if (!def) return el.h;
  const baseH = def.dimensions.h;
  const effectiveLayout = el.style?.labelLayout ?? globalLayout;
  const showLabel = el.style?.showLabel !== false;
  if (effectiveLayout === "inline" || !showLabel) {
    return Math.max(baseH - LABEL_HEIGHT_PT, 20);
  }
  return baseH;
}

const SIGNATURE_FORM_TYPES = new Set(["signature"]);
const FILE_KIND_FORM_TYPES = new Set(["file", "image"]);
const CHOICE_KIND_FORM_TYPES = new Set([
  "radio",
  "multiple-checkbox",
  "dropdown",
]);

export function resolveElementType(item) {
  if (item.placeholder && item.field) return "placeholder";
  if (item.field) {
    return PDF_SCHEMA.formFieldMap[item.field.type] ?? "field";
  }
  return item.type;
}

const MARKER_STYLE_MAP = {
  check: { glyph: "✓", bg: false },
  "box-check": { glyph: "☑", bg: false },
  "box-check-filled": { glyph: "✓", bg: true },
  dot: { glyph: "●", bg: false },
  "ring-dot": { glyph: "◉", bg: false },
  "filled-circle": { glyph: "⬤", bg: false },
};

export function resolveMarkerGlyph(content, style) {
  const styleKey =
    style?.markerStyle ||
    (content?.markerType === "radio" ? "dot" : "box-check");
  return MARKER_STYLE_MAP[styleKey] ?? MARKER_STYLE_MAP["box-check"];
}

export function resolvePlaceholderKind(formFieldType) {
  if (SIGNATURE_FORM_TYPES.has(formFieldType)) return "signature";
  if (FILE_KIND_FORM_TYPES.has(formFieldType)) return "file";
  if (CHOICE_KIND_FORM_TYPES.has(formFieldType)) return "choice";
  return "text";
}

export function createOptionMarkerElement({
  fieldId,
  optionValue,
  optionLabel,
  markerType,
  x,
  y,
}) {
  const def = PDF_SCHEMA.elements.placeholder;
  return {
    id: shortId(),
    type: "placeholder",
    x,
    y,
    w: 18,
    h: 18,
    content: {
      fieldId,
      kind: "checkmark",
      label: optionLabel,
      optionValue,
      markerType, // "checkbox" | "radio"
    },
    style: {
      ...(def.style ?? {}),
      fontSize: 14,
      renderMode: markerType,
      markerStyle: markerType === "radio" ? "dot" : "box-check",
    },
    fieldRefs: [fieldId],
  };
}

/**
 * Resolve the PDF element type from a raw form field type string.
 * Used to derive the live type from a live formField at render time.
 */
export function resolveFieldType(fieldType) {
  return PDF_SCHEMA.formFieldMap[fieldType] ?? "field";
}

/**
 * Resolve the display label for a canvas element, preferring user overrides
 * then live form field data over stale content snapshots.
 */
export function resolveFieldLabel(element, formField) {
  return (
    element.content?.label ||
    formField?.label ||
    formField?.fixedName ||
    element.content?.fixedName ||
    ""
  );
}

/**
 * Build a new canvas element from a palette item and placement coordinates.
 * x/y should already be clamped/adjusted by the caller.
 */
export function createElement(item, x, y) {
  const type = resolveElementType(item);
  const def = PDF_SCHEMA.elements[type] ?? PDF_SCHEMA.elements.field;

  let content;
  if (type === "placeholder" && item.field) {
    content = {
      fieldId: item.field.id,
      label: item.field.label,
      kind: resolvePlaceholderKind(item.field.type),
    };
  } else if (item.field) {
    content = { label: item.field.label, fieldId: item.field.id };
  } else if (item.presetContent) {
    content = { ...def.content, ...item.presetContent };
  } else {
    content = { ...def.content };
  }

  // Non-field elements (basic + shape groups) bake their schema defaults into
  // the element so each type stays visually opinionated (header big & bold,
  // text plain) and isn't silently re-styled when global page typography
  // changes. Field elements leave style empty so the resolver can fall back
  // to global typography for shared label/answer styling.
  const style =
    def.group && def.group !== "field" ? { ...(def.style ?? {}) } : {};
  if (type === "placeholder" && content.kind === "choice") {
    style.renderMode = "text";
  }
  if (type === "placeholder" && content.kind === "file") {
    style.fileDisplay = "square";
    style.fileItemSize = "mid";
  }

  return {
    id: item.field ? item.field.id : shortId(),
    type,
    x,
    y,
    w: def.dimensions.w,
    h: def.dimensions.h,
    content,
    style,
    fieldRefs: item.field ? [item.field.id] : [],
  };
}

/**
 * Merge saved builder_state with page defaults.
 */
export function buildPageSettings(initialState = {}) {
  const s = initialState ?? {};
  const d = PDF_SCHEMA.page.defaults;
  return {
    size: s.page?.format ?? d.size,
    orientation: s.page?.orientation ?? d.orientation,
    backgroundColor: s.backgroundColor ?? d.backgroundColor,
    backgroundImage: s.backgroundImage ?? d.backgroundImage ?? null,
    margin: s.margin ? { ...s.margin } : { ...d.margin },
    typography: s.typography
      ? { ...d.typography, ...s.typography }
      : { ...d.typography },
  };
}

/**
 * Normalize the pages array from a saved builder_state.
 */
export function buildInitialPages(initialState = {}) {
  const s = initialState ?? {};
  if (s.pages?.length) {
    return s.pages.map((p) => ({
      ...p,
      elements: [...(p.elements ?? [])],
    }));
  }
  return [{ index: 0, elements: [] }];
}

/**
 * Convert live editor state ({ pages, pdfSettings }) into the persisted
 * builder_state shape consumed by buildInitialPages / buildPageSettings.
 */
export function serializeBuilderState(pages, pdfSettings) {
  const { size, orientation, ...rest } = pdfSettings;
  return {
    pages,
    page: { format: size, orientation },
    ...rest,
  };
}

// ---------------------------------------------------------------------------
// Fillable (AcroForm) fields — the free tool's element type. Content mirrors the
// FillableField model in acroform.js; geometry is pt, top-left like every element.
export const FILLABLE_PRESETS = {
  text: { label: "Text", w: 216, h: 24 },
  multiline: { label: "Paragraph", w: 300, h: 80 },
  checkbox: { label: "Checkbox", w: 14, h: 14 },
  radio: { label: "Radio", w: 14, h: 14, options: ["Option 1", "Option 2"] },
  dropdown: { label: "Dropdown", w: 160, h: 24, options: ["Option 1", "Option 2"] },
  date: { label: "Date", w: 120, h: 24, maxLength: 10, comb: true },
  signature: { label: "Signature", w: 220, h: 60 },
};

let _fillableSeq = 0;
/** New fillable element at (x, y) pt. Names auto-increment per type (text_1, text_2, …) and stay editable. */
export function createFillableElement(fieldType, x = 0, y = 0, overrides = {}) {
  const preset = FILLABLE_PRESETS[fieldType] ?? FILLABLE_PRESETS.text;
  const def = PDF_SCHEMA.elements.fillable;
  _fillableSeq += 1;
  const name = overrides.name ?? `${fieldType}_${_fillableSeq}`;
  const content = {
    ...def.content,
    fieldType,
    name,
    options: preset.options ? [...preset.options] : [],
    optionValue: fieldType === "radio" ? (preset.options?.[0] ?? "") : "",
    maxLength: preset.maxLength ?? null,
    comb: preset.comb ?? false,
    ...overrides,
  };
  return {
    id: shortId(),
    type: "fillable",
    x,
    y,
    w: overrides.w ?? preset.w,
    h: overrides.h ?? preset.h,
    content,
    style: { ...def.style },
  };
}
