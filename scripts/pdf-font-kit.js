/**
 * Google Fonts PDF Editor Integration - FIXED VERSION
 * Handles loading Google Fonts list, managing font selection, and integrating with PDF editor
 */

export class PdfFontKitIntegration {
  constructor(options = {}) {
    this.fontkitCDN =
      options.fontkitCDN ||
      "https://cdn.jsdelivr.net/npm/@pdf-lib/fontkit@1.1.1/dist/fontkit.umd.min.js";

    this.fontkitLoaded = false;
  }

  /**
   * Load fontkit library from CDN
   */
  async loadFontkit() {
    if (this.fontkitLoaded && window.fontkit) {
      return window.fontkit;
    }

    return new Promise((resolve, reject) => {
      // Check if fontkit is already loaded
      if (window.fontkit) {
        this.fontkitLoaded = true;
        resolve(window.fontkit);
        return;
      }

      // Create script element to load fontkit
      const script = document.createElement("script");
      script.src = this.fontkitCDN;
      script.async = true;

      script.onload = () => {
        if (window.fontkit) {
          console.log("Fontkit loaded successfully from CDN");
          this.fontkitLoaded = true;
          resolve(window.fontkit);
        } else {
          reject(new Error("Fontkit failed to load properly"));
        }
      };

      script.onerror = () => {
        reject(new Error("Failed to load fontkit from CDN"));
      };

      document.head.appendChild(script);
    });
  }

  /**
   * Preload fontkit for better performance
   */
  async preloadFontkit() {
    try {
      await this.loadFontkit();
      console.log("Fontkit preloaded successfully");
    } catch (error) {
      console.warn("Failed to preload fontkit:", error);
    }
  }

  /**
   * Get fontkit instance (loads if needed)
   */
  async getFontkit() {
    return await this.loadFontkit();
  }
}

// Export for module use
if (typeof module !== "undefined" && module.exports) {
  module.exports = PdfFontKitIntegration;
}
