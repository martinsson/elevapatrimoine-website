# Eleva Patrimoine — website

Marketing website for Eleva Patrimoine (`elevapatrimoine.fr`).

## Stack

- [Astro](https://astro.build/) static site generator
- Deployed for **testing** to GitHub Pages via GitHub Actions (`.github/workflows/deploy.yml`)
- Deployed for **production** to a Hetzner server (static files served from `dist/`)

## Local development

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # outputs to dist/
npm run preview  # preview the production build
```

## Deployments

### Testing — GitHub Pages
Pushing to `main` triggers the workflow, which builds with `DEPLOY_TARGET=gh-pages`
(this sets the correct `base` path for the project Pages URL) and publishes to
GitHub Pages.

### Production — Hetzner
Build with the default target (root path, `elevapatrimoine.fr`) and serve `dist/`:

```bash
npm run build
# copy dist/ to the Hetzner web root
```

DNS for `elevapatrimoine.fr` is managed at LWS (lws.fr).
