// PDF page dimensions in points (1pt = 1/72 inch)
// Portrait dimensions — swap w/h for landscape

export const PDF_PAGE_SIZES = {
  A4:     { w: 595, h: 842 },
  A5:     { w: 420, h: 595 },
  Letter: { w: 612, h: 792 },
};

export const PDF_PAGE_SIZE_OPTIONS = Object.keys(PDF_PAGE_SIZES).map((key) => ({
  label: key,
  value: key,
}));

export const getPageDimensions = (size, orientation = "portrait") => {
  const dims = PDF_PAGE_SIZES[size] ?? PDF_PAGE_SIZES.A4;
  return orientation === "landscape"
    ? { w: dims.h, h: dims.w }
    : { w: dims.w, h: dims.h };
};
