---
summary: Working context with key invariants and operational notes for this Hugo site.
read_when:
  - Before broad changes to site structure or deployment.
---
# Codex Context

## Critical Invariants (Do Not Break)
- `config.yaml` is the single source of truth for site content and layout.
- `public/` is generated output; do not hand-edit it.
- Assets live in `static/` and are referenced with `/`-prefixed paths.
- The theme is a git submodule at `themes/hugo-profile`; avoid vendor edits unless necessary.

## Quick Orientation
- Content updates: edit `config.yaml`, update assets in `static/`.
- Deployment: handled by `.github/workflows/deploy_gh_pages.yaml`.
- Base URL: `baseURL` in `config.yaml` should remain accurate for production.

## When to Update This Doc
- Any change to deployment behavior or build commands.
- Any new content source beyond `config.yaml`.
- Any change to how assets are served or organized.
