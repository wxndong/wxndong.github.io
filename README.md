# Wenxuan Dong Academic Homepage

This repository contains the source for <https://wxndong.github.io/>.

The site is a lightweight Jekyll academic homepage designed for GitHub Pages. It uses semantic HTML, static Liquid templates, and a small custom CSS file. No backend service or frontend framework is required.

## Local Preview

Install Ruby and Bundler, then run:

```bash
bundle install
bundle exec jekyll serve
```

Open the local URL printed by Jekyll, usually:

```text
http://127.0.0.1:4000/
```

Jekyll watches the source files while the server is running. After editing text, save the file and refresh the browser.

If `bundle` is not available:

```bash
gem install bundler
bundle install
bundle exec jekyll serve
```

## GitHub Pages Deployment

This repository is compatible with GitHub Pages as a user site.

1. Push changes to the `main` branch of `wxndong/wxndong.github.io`.
2. In GitHub, open `Settings` -> `Pages`.
3. Set the source to deploy from the repository branch, usually `main` and `/`.
4. After the Pages workflow completes, the site is available at <https://wxndong.github.io/>.

## Content Maintenance

- Home biography: edit `index.html`.
- Profile, education, and awards data: edit `_data/profile.yml`.
- Navigation: edit `_data/navigation.yml`.
- News: add or edit Markdown files in `_news/`.
- Publications: add or edit Markdown files in `_publications/`.
- Global styling: edit `assets/css/global.css`.
- Theme toggle behavior: edit `assets/js/theme.js`.

Publication entries support the existing metadata fields:

- `title`
- `date`
- `pub`
- `pub_date`
- `pub_last`
- `venue_short`
- `abstract`
- `cover`
- `authors`
- `links`

Use `venue_short` for the compact venue label shown on the homepage, for example `ALP 2025`. Use `#` at the end of an author name in a publication entry to render the corresponding-author marker as `†`.

## Editing Workflow

For text-only changes:

1. Start the preview server with `bundle exec jekyll serve`.
2. Edit the relevant file.
3. Refresh `http://127.0.0.1:4000/`.
4. Check both light and dark modes with the navbar theme button.

For publication changes, edit or add a file under `_publications/`. A minimal entry looks like:

```yaml
---
title: "Paper Title"
date: 2026-01-01 00:00:00 +0800
venue_short: "Conference 2026"
cover: /assets/images/covers/example.png
authors:
  - Wenxuan Dong
links:
  Paper: https://example.com
---
```

Before deployment, run:

```bash
bundle exec jekyll build
```

## Redesign Summary

- Rebuilt the homepage into a single-column academic CV layout.
- Added light and dark modes with a small navbar toggle; the default follows `prefers-color-scheme`.
- Switched typography to JetBrains Mono for navigation, section titles, and name; Inter for body text.
- Standardized link colors with a purple light theme accent and a cyan dark theme accent.
- Reworked Publications, News, Education, and Honors & Awards into responsive academic list layouts.
- Removed unnecessary Bootstrap, jQuery, Masonry, carousel, and visual-effect dependencies from the main layout.
