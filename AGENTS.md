# Project Snapshot

This repository is a Vite-based static site with Handlebars templates, SCSS styling, and TypeScript-driven UI behaviors. The entry page is `index.html`, which composes section partials from `partials/` and pulls data via the Handlebars context in `pages.config.js` and `pages-data/`.

## Tech Stack

- Build: Vite (`vite.config.ts`) with ES2022 target.
- Templating: `vite-plugin-handlebars` with partials in `partials/`.
- Styling: SCSS with modular partials in `src/scss/`.
- Scripts: TypeScript modules in `src/js/` bootstrapped by `src/js/main.ts`.
- Icons: `vite-plugin-svg-icons`, source SVGs in `src/icons/` and `virtual:svg-icons-register`.
- UI libs: Swiper, GSAP, Fancyapps UI, Inputmask, Validator.

## Structure

- `index.html`: Main page composition with Handlebars partials.
- `partials/`: Section templates (intro, services, doctors, etc.).
- `pages-data/`: Page data for Handlebars context.
- `pages.config.js`: Maps pages to data.
- `src/scss/style.scss`: Imports all SCSS modules in a layered order.
- `src/js/main.ts`: Initializes all section scripts on `DOMContentLoaded`.

## Styling Conventions

- Global CSS variables are defined in `src/scss/_variables.scss`.
- Layout uses CSS custom properties for container width and content padding.
- Typography and reset are centralized in `src/scss/_typography.scss` and `src/scss/_reset.scss`.
- Section and card styles are split into dedicated SCSS partials.
- Markup and class naming should follow BEM (Block, Element, Modifier) methodology.
- Use rem units for layout and typography with the convention `1rem = 10px`. Exception: values of 1-2px may remain in `px` (e.g., hairlines, borders).
- When adding new styles, compare against variables in `src/scss/_variables.scss` and reuse an existing custom property when its value is close to the needed one.

## JS Conventions

- Each section has its own module in `src/js/` and is invoked from `src/js/main.ts`.
- `document.body` gets a `loaded` class on window `load` for post-load effects.

## Build Notes

- Vite builds `*.html` as entry points via glob in `vite.config.ts`.
- Output filenames are deterministic (no hashes) in `assets/`.

## Where To Add New UI

- New section markup: add a partial in `partials/` and include it in `index.html`.
- New styles: add a SCSS partial in `src/scss/` and import it in `src/scss/style.scss`.
- New behavior: add a TS module in `src/js/` and register it in `src/js/main.ts`.

## Sections And Reuse Map (BEM)

Use existing blocks when matching design sections; prefer reusing these blocks and their element classes.

1. `intro` → `intro` block, plus `btn`, `slider-nav`, `numbers-card`, `swiper*`
2. `clinic-services` → `clinic-services`, `clinic-service-card`, plus `large-btn`, `btn`, `swiper*`
3. `doctors` → `doctors`, `doctor-card`, plus `tabs-nav`, `slider-nav`, `btn`, `swiper*`
4. `help` → `help`, `numbers-card`
5. `about-clinic` → `about-clinic`, plus `base-text`
6. `service` → `service`, plus `btn`
7. `equipment` → `equipment`, `equipment-card`, `equipment-feature-card`, plus `swiper*`
8. `patients` → `patients`, `video-review-card`, plus `slider-nav`, `btn`, `swiper*`
9. `ratings` → `ratings`, `rating-card`, plus `slider-nav`, `swiper*`
10. `first-visit` → `first-visit`, plus `btn`
11. `promo` → `promo`, `promo-card`, plus `slider-nav`, `large-btn`, `swiper*`
12. `faq` → `faq`, plus `accordion`
13. `blog` → `blog`, `blog-card`, plus `large-btn`, `btn`
14. `clinic` → `clinic`
15. `licenses` → `licenses`, `license-card`, plus `swiper*`
16. `header` → `page-header`, plus utility classes `city`, `time`
17. `footer` → `page-footer`
18. `meta` → only metadata (no BEM block)

## Reusable UI Blocks

- Navigation: `slider-nav`, `tabs-nav`, `accordion`
- Buttons: `btn`, `btn--green`, `large-btn`
- Cards: `blog-card`, `promo-card`, `rating-card`, `video-review-card`, `numbers-card`, `doctor-card`, `license-card`, `clinic-service-card`, `equipment-card`, `equipment-feature-card`
- Sliders: `swiper`, `swiper-wrapper`, `swiper-slide`

## Sliders

- For all sliders, prefer using Swiper where possible.

## Known Quirks

- In `clinic-services` markup there is a typo class `linic-services__horizontal-card-price` (missing "c"). If reusing this block, keep the existing class to preserve styles.
