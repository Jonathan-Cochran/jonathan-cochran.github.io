# Jonathan Cochran – Hugo Site

Personal portfolio site built with Hugo and the `hugo-profile` theme.

## Quickstart

1. Initialize submodules (first time only):
   ```bash
   git submodule update --init --recursive
   ```
2. Run the dev server:
   ```bash
   hugo server
   ```
   The site will be available at `http://localhost:1313`.

## Production Build

```bash
hugo --minify
```

## Project Structure

- `config.yaml`: primary content and layout configuration.
- `static/`: images and files served at root paths.
- `themes/hugo-profile`: theme submodule.
- `docs/`: documentation and guardrails.
