---
name: site-content
description: Updates site content, images, or assets for this Hugo profile site using config.yaml and static/.
---

# Site Content Updates

## Quickstart
- Use this skill when editing copy, sections, social links, or assets.
- Source of truth: `config.yaml`.
- Assets: `static/images/` and `static/files/`.

## Workflow
1. Read `docs/ProjectOverview.md` and `docs/ContentGuide.md`.
2. Identify the section in `config.yaml` that maps to the requested change.
3. Update or add assets under `static/` and reference them with `/`-prefixed paths.
4. Avoid editing `public/`; it is generated output.
5. If you change content structure or asset paths, update `docs/codexcontext.md`.

## Guardrails
- Preserve `baseURL` unless explicitly instructed.
- Keep YAML formatting consistent with the existing file.
- Prefer minimal edits to the theme submodule; avoid vendor changes.
