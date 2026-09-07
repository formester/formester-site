// Lazy pdfjs loader for rendering an uploaded PDF as a per-page backdrop
// inside the new pdf-builder. Returns page dimensions (in PDF points) and a
// render() callback that paints a given page onto a target <canvas>.

let _pdfjsModule = null;
let _workerSrcOverride = null;

/** Hosts that cannot resolve the `?url` worker import (e.g. a linked package under Nuxt) pass a served URL here. */
export function configurePdfjs({ workerSrc } = {}) {
  if (workerSrc) _workerSrcOverride = workerSrc;
}

async function loadPdfjs() {
  if (_pdfjsModule) return _pdfjsModule;
  const pdfjs = await import("pdfjs-dist");
  let workerSrc = _workerSrcOverride;
  if (!workerSrc) {
    // Use the bundled worker entry (Vite handles the URL).
    const mod = await import("pdfjs-dist/build/pdf.worker.min.mjs?url");
    workerSrc = typeof mod === "string" ? mod : typeof mod?.default === "string" ? mod.default : null;
  }
  if (workerSrc) pdfjs.GlobalWorkerOptions.workerSrc = workerSrc;
  _pdfjsModule = pdfjs;
  return pdfjs;
}

/**
 * Load a PDF from a URL and return per-page metadata + render helpers.
 *
 * @param {string} url
 * @returns {Promise<{
 *   pageCount: number,
 *   pages: Array<{ index: number, width: number, height: number,
 *                  render: (canvas: HTMLCanvasElement, scale?: number) => Promise<void>,
 *                  toDataURL: (scale?: number) => Promise<string> }>,
 *   document: any
 * }>}
 */
export async function loadPdfBackdrop(url) {
  const pdfjs = await loadPdfjs();
  const doc = await pdfjs.getDocument({ url, withCredentials: false }).promise;
  const rawPages = await Promise.all(
    Array.from({ length: doc.numPages }, (_, i) => doc.getPage(i + 1)),
  );
  const pages = rawPages.map((page, i) => {
    const viewport = page.getViewport({ scale: 1 });
    return {
      index: i,
      width: viewport.width,
      height: viewport.height,
      async render(canvas, scale = 2) {
        const v = page.getViewport({ scale });
        canvas.width = v.width;
        canvas.height = v.height;
        await page.render({
          canvasContext: canvas.getContext("2d"),
          viewport: v,
        }).promise;
      },
      async toDataURL(scale = 2) {
        const v = page.getViewport({ scale });
        const off = document.createElement("canvas");
        off.width = v.width;
        off.height = v.height;
        await page.render({ canvasContext: off.getContext("2d"), viewport: v })
          .promise;
        return off.toDataURL("image/png");
      },
    };
  });
  return { pageCount: doc.numPages, pages, document: doc };
}

/**
 * Fetch an uploaded PDF as a Uint8Array suitable for passing to
 * @pdfme/generator as basePdf. CORS is implied by the existing public_url.
 */
export async function fetchPdfBytes(url) {
  const res = await fetch(url, { credentials: "omit" });
  if (!res.ok) throw new Error(`Failed to fetch PDF (${res.status})`);
  const buf = await res.arrayBuffer();
  return new Uint8Array(buf);
}
