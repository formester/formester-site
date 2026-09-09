# packages/

Vendored workspaces that back the free tools on formester.com. They are written as standalone npm packages
(own `package.json`, tests, no imports from the site) so they can be lifted into their own repo and published to
GitHub Packages later without code changes: move the folder, `npm publish`, and switch the site's dependency
from `*` (workspace) to a version.

| Package | What it is |
|---|---|
| `pdf-core` (`@formester/pdf-core`) | Element → PDF via pdfme, `fillableField` AcroForm plugin, AcroForm import/strip/flatten, page sizes, element schema, drag/backdrop composables. Extracted from formester-app's PDF builder. |
| `pdf-canvas` (`@formester/pdf-canvas`) | Vue 3 canvas components (`CanvasPage`, `CanvasElement`, `PageControls`, `FillablePreview`) plus `tokens.css`. |

```bash
npm test -w packages/pdf-core -w packages/pdf-canvas
```

Spec and design notes: `SPEC.md`. Original extraction history: local repo `~/projects/fmst/formester-pdf` (archived).
