const PDF_STYLE_OPTIONS_MAP = {
  default: { label: "Document layout", value: "default" },
  form_layout: { label: "Form Layout", value: "form_layout" },
  pdf_template: { label: "Connected PDF", value: "pdf_template" },
  custom_pdf: { label: "Custom PDF", value: "custom_pdf" },
};

const formatPdfStyleLabel = (value = "") =>
  value
    .split("_")
    .map((segment) => segment.charAt(0).toUpperCase() + segment.slice(1))
    .join(" ");

const optionFor = (type) =>
  PDF_STYLE_OPTIONS_MAP[type] ? { ...PDF_STYLE_OPTIONS_MAP[type] } : null;

export const buildPdfStyleOptions = ({
  hasPdfTemplateFeature = false,
  canHaveCustomPdf = false,
  currentValue = null,
} = {}) => {
  const options = ["default", "form_layout"].map(optionFor).filter(Boolean);

  if (hasPdfTemplateFeature) {
    const connected = optionFor("pdf_template");
    connected && options.push(connected);
  }

  if (canHaveCustomPdf) {
    const custom = optionFor("custom_pdf");
    custom && options.push(custom);
  }

  if (
    currentValue &&
    !options.some((option) => option.value === currentValue)
  ) {
    const fallback = optionFor(currentValue);
    options.push(
      fallback || {
        label: formatPdfStyleLabel(currentValue),
        value: currentValue,
      },
    );
  }

  return options;
};

export const defaultPdfStyle = () => PDF_STYLE_OPTIONS_MAP.default.value;

export { PDF_STYLE_OPTIONS_MAP };
