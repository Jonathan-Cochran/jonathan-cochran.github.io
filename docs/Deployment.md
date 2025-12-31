---
summary: Deployment workflow for GitHub Pages and local build commands.
read_when:
  - Changing deployment settings or Hugo build options.
---
# Deployment

## GitHub Pages (CI)
Deployment is handled by `.github/workflows/deploy_gh_pages.yaml`.
- Trigger: push to `main`.
- Build: `hugo --minify`.
- Output: `public/`.
- CNAME: `jonathan.roosterran.ch` is written during the workflow.

## Local Build
- Dev server: `hugo server`.
- Production build: `hugo --minify`.

## Notes
- The workflow checks out the `themes/hugo-profile` submodule, so ensure it is initialized locally if building from a fresh clone.
- Do not commit `public/` unless explicitly desired; it is generated output.
