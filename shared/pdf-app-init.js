// shared/pdf-app-init.js
import "fabric";
import "pdfjs-dist";
import { PdfFontKitIntegration } from "@/scripts/pdf-font-kit.js";

/**
 * Dynamically load PDF-lib and fontkit scripts
 */
async function loadPdfLibScripts() {
  return new Promise((resolve, reject) => {
    // Check if scripts are already loaded
    if (window.PDFLib && window.fontkit) {
      resolve();
      return;
    }

    let scriptsLoaded = 0;
    const totalScripts = 2;

    function onScriptLoad() {
      scriptsLoaded++;
      if (scriptsLoaded === totalScripts) {
        resolve();
      }
    }

    function onScriptError(error) {
      reject(new Error(`Failed to load PDF script: ${error.message}`));
    }

    // Load PDF-lib
    if (!window.PDFLib) {
      const pdfLibScript = document.createElement('script');
      pdfLibScript.src = 'https://unpkg.com/pdf-lib/dist/pdf-lib.min.js';
      pdfLibScript.onload = onScriptLoad;
      pdfLibScript.onerror = onScriptError;
      document.head.appendChild(pdfLibScript);
    } else {
      onScriptLoad();
    }

    // Load fontkit
    if (!window.fontkit) {
      const fontkitScript = document.createElement('script');
      fontkitScript.src = 'https://cdn.jsdelivr.net/npm/@pdf-lib/fontkit@1.1.1/dist/fontkit.umd.min.js';
      fontkitScript.onload = onScriptLoad;
      fontkitScript.onerror = onScriptError;
      document.head.appendChild(fontkitScript);
    } else {
      onScriptLoad();
    }
  });
}

export async function initPdfEditor(component, mountSelector) {
  // Load PDF-lib and fontkit scripts dynamically
  await loadPdfLibScripts();

  // PDF Dependencies Setup
  const fabric = await import("fabric");
  window.fabric = fabric.fabric || fabric.default || fabric;

  const pdfjs = await import("pdfjs-dist");
  window.pdfjsLib = pdfjs.default || pdfjs;

  try {
    const workerSrc = new URL(
      "assets/js/pdf.worker.mjs",
      window.location.origin,
    ).href;
    window.pdfjsLib.GlobalWorkerOptions.workerSrc = workerSrc;
  } catch (error) {
    console.warn("Could not set PDF.js worker, some features may not work");
  }

  // console.log("Dependencies loaded:", {
  //   fabric: window.fabric,
  //   pdfjsLib: window.pdfjsLib,
  //   workerSrc: window.pdfjsLib?.GlobalWorkerOptions?.workerSrc,
  // });

  await import("@/scripts/pdf-editor.js");

  window.fontIntegration = new PdfFontKitIntegration();

  // Vue App Setup
  const emitter = mitt();
  const app = createApp({ components: component });

  initializeSentry(app);
  app.use(VueClickAway);
  app.config.globalProperties.emitter = emitter;
  app.mount(mountSelector);
}
