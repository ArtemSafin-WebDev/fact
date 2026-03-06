# Project Understanding (`fact`)

## Что это за проект
- Лендинг/маркетинговый сайт офтальмологической клиники на `Vite + TypeScript + SCSS + Handlebars partials`.
- Сейчас в проекте одна страница: `pages/index.html` (язык `ru`), собранная из секций в `partials/sections`.
- Контент в основном статический в HTML partials; data-layer через `pages-data/*.js` подключен, но пока минимальный.

## Технологии
- Сборка: `vite@7`, `typescript@5`, `sass-embedded`.
- Шаблоны: `vite-plugin-handlebars` (partials + контекст страницы).
- Иконки: `vite-plugin-svg-icons` из `src/icons/*` с `<use xlink:href="#icon-id">`.
- UI-библиотеки:
  - `swiper` для слайдеров.
  - `@fancyapps/ui` (Fancybox) для галерей.
  - `gsap` (используется в адаптивных и/или вспомогательных сценариях).
  - `validator`, `inputmask` (в классе `Validator`, который сейчас не подключен в `main.ts`).

## Как запускать
- `npm run dev` — дев-сервер Vite.
- `npm run build` — `tsc && vite build`.
- `npm run preview` — предпросмотр production-сборки.

## Ключевая структура
- `pages/` — HTML entry points для Vite (сейчас `index.html`).
- `partials/layout/` — общие layout partials (`meta`, `header`, `footer`).
- `partials/sections/` — секции страницы.
- `pages-data/` — данные для Handlebars-контекста страниц.
- `src/js/main.ts` — главный entry point JS.
- `src/js/sections/*` — инициализация секционных сценариев.
- `src/js/ui/*` — общие UI-сценарии (аккордеон, fancybox).
- `src/scss/style.scss` — агрегатор стилей через `@use`.
- `src/scss/{tokens,base,layout,components,sections}` — слойная структура SCSS.
- `public/images/` — статика изображений.

## Vite/шаблонизация: что важно
- В `vite.config.js` используется `glob("pages/*.html")` как `build.rollupOptions.input`.
- Кастомный плагин `flattenPagesPlugin()`:
  - в dev пробрасывает роуты к `pages/*.html`;
  - после сборки перемещает файлы из `dist/pages/*` в корень `dist/`.
- Кастомный `cssRelativePublicUrls()` переписывает `url(/images/...)` и `url(/fonts/...)` в относительные пути в итоговом CSS.
- Контекст для Handlebars = `globalContext + pagesConfig[normalizedPath]`.
  - Сейчас в `pages-data/home.js` определен только `title` для `/index.html`.

## JS-поведение (DOM-контракты)
- Инициализация: `DOMContentLoaded -> ui(); sections();`, затем на `load` добавляется `body.loaded`.
- `ui()`:
  - `accordions.ts` — переключение `.accordion.active` (один открыт одновременно).
  - `fancybox.ts` — биндинг на `[data-fancybox]`.
- `sections()` инициализирует:
  - `intro` — Swiper + responsive-конфиг через `gsap.matchMedia()`.
  - `doctors` — табы (`.tabs-nav__btn` ↔ `.doctors__tabs-item`) + пересоздание Swiper при смене таба.
  - `equipment` — autoplay marquee-подобный Swiper.
  - `clinicServices` — мобильный Swiper только при `(max-width: 640px)`.
  - `patients`, `ratings`, `promo`, `licenses` — отдельные Swiper-конфиги.
- Для корректной работы слайдеров в разметке обязательны контейнеры `.swiper > .swiper-wrapper > .swiper-slide` и, где нужно, `.slider-nav__arrow--prev/--next`.

## SCSS-конвенции
- Используются каскадные слои через `@layer`: `vendor, tokens, reset, base, layout, components, sections, utilities, overrides`.
- Токены в `src/scss/tokens/_variables.scss` (`--primary-color`, `--container-width`, `--content-padding`, и т.д.).
- Брейкпоинты миксинами из `src/scss/_media.scss`:
  - `laptop <=1200`, `tablet <=1024`, `small-tablet <=768`, `mobile <=640`.
- БЭМ-нейминг классов соблюдается в partials и SCSS.
- Для CSS Grid: не использовать проценты в `grid-template-columns`/`grid-template-rows`, использовать только единицы `fr`.

## Как расширять проект
- Добавить новую страницу:
  1. Создать `pages/<name>.html`.
  2. Добавить контекст в `pages-data/*.js` с ключом `"/<name>.html"`.
  3. При необходимости подключить новые partials секций/layout.
- Добавить новую секцию на существующую страницу:
  1. Создать `partials/sections/<section>.html`.
  2. Подключить partial в `pages/index.html`.
  3. Добавить стили в `src/scss/sections/_<section>.scss` и `@use` в `src/scss/sections/_index.scss`.
  4. Если нужна логика — создать `src/js/sections/<section>.ts` и вызвать в `src/js/sections/index.ts`.
- Добавить новую SVG-иконку:
  1. Положить файл в `src/icons`.
  2. Использовать в HTML через `<use xlink:href="#<filename-without-ext>">`.

## Наблюдения по текущему состоянию
- Проект уже подготовлен к мультистраничности, но фактически заполнена только главная.
- В коде встречаются `console.log` в секционных скриптах (`doctors.ts`, `clinicServices.ts`) и в `Validator.ts`.
- `Validator.ts` реализован полноценно (валидация + маски), но пока не импортируется/не используется из `main.ts`.

## Ограничения на изменения
- Не делать адаптивные доработки (медиа-правила, мобильные/планшетные перестроения, responsive-рефакторинг), пока об этом явно не попросят.
- Стараться не использовать `min-height` для кнопок и ссылок.
