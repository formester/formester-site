# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Build Commands

```bash
npm install          # Install dependencies (runs nuxt prepare automatically)
npm run dev          # Start dev server at localhost:3000 with hot reload
npm run build        # Production build (outputs to .output/public)
npm run generate     # Generate static site
npm run start        # Preview production build
```

All commands run `fetch-navbar` first to pull navbar config from external source.

## Architecture Overview

**Stack:** Nuxt 4 (Vue 3) static site generator for Formester's marketing website.

### Content-Driven Architecture

Content is pulled from Strapi CMS at `https://cms.formester.com`. The site uses a component mapping system where Strapi components map to local Vue components via `constants/componentMapping.js`, enabling CMS editors to compose pages without code changes.

### Key Directories

- **pages/** - File-based routing. `[...slug].vue` handles dynamic CMS pages
- **components/** - Auto-imported Vue components organized by feature (nav/, home/, blog/, UI/, etc.)
- **composables/** - Vue 3 composition API hooks for data fetching (`useBlogData.js`, `useTemplateData.js`)
- **utils/** - Data fetching helpers for Strapi (`getStrapiData.js`, `getRoutes.js`)
- **constants/** - Static config including `componentMapping.js` for Strapi-to-Vue mapping
- **plugins/** - Client-side plugins for analytics, consent management, and Bootstrap

### Data Flow

Strapi API → Utils functions (`getStrapiData.js`) → Composables → Components → Pages

### Route Generation

Routes are pre-generated at build time via `nitro.hooks['prerender:routes']` in nuxt.config.js, which calls utility functions to query Strapi for blog posts, features, pages, and templates.

### Analytics & Consent

All tracking (GTM, GA4, Microsoft Clarity) is gated behind cookie consent. The consent logic lives in `plugins/consent.client.js` and `components/CookieConsent.vue`.

## Runtime Config

Access via `useRuntimeConfig()`:
- `strapiUrl`: https://cms.formester.com
- `appUrl`: https://app.formester.com
- `baseUrl`: Site base URL
- `clarityId`: Microsoft Clarity ID

## Deployment

Static files output to `.output/public`. Configured for AWS Amplify (amplify.yml) and Netlify (netlify.toml).

## Node Version

Requires Node.js >=18.20.0 (see package.json engines).
