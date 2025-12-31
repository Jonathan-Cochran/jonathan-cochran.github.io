---
summary: How to update content, images, and files for the site.
read_when:
  - Updating copy, hero, experience, or social links.
  - Replacing images or the resume PDF.
---
# Content Guide

## Primary Content Source
Most content is configured in `config.yaml` under `params:`. Common sections include:
- `hero`: headline, subtitle, hero image, resume button.
- `about`: bio, skills, profile image.
- `experience`, `education`, `projects`, `achievements`, `contact`.

## Images and Files
- Place images in `static/images/` and reference them as `/images/...`.
- Place downloadable files (resume) in `static/files/` and reference `/files/...`.

## Updating the Resume
1. Replace `static/files/JonathanCochranResume.pdf`.
2. Confirm the hero button `url` in `config.yaml` points to `/files/JonathanCochranResume.pdf`.

## Adding or Editing Sections
- Follow the structure used by the theme in `config.yaml`.
- Keep dates and titles consistent for readability.
- If a new content section is added, update `docs/ProjectOverview.md` and `docs/codexcontext.md`.
