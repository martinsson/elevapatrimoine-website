// @ts-check
import { defineConfig } from 'astro/config';

// GitHub Pages serves a project repo at https://<user>.github.io/<repo>/
// so we set `base` to the repo name for the Pages (test) build.
// The env var lets the production (Hetzner) build use root path with no base.
const REPO_NAME = 'elevapatrimoine-website';
const isPages = process.env.DEPLOY_TARGET === 'gh-pages';

export default defineConfig({
  site: isPages
    ? 'https://martinsson.github.io'
    : 'https://elevapatrimoine.fr',
  base: isPages ? `/${REPO_NAME}/` : '/',
});
