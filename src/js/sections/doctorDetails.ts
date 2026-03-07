import gsap from "gsap";
import Swiper from "swiper";
import { Navigation } from "swiper/modules";

function initSlider(root: HTMLElement, selector: string) {
  const section = root.querySelector<HTMLElement>(selector);
  if (!section) return;

  const container = section.querySelector<HTMLElement>(".swiper");
  if (!container) return;

  new Swiper(container, {
    speed: 600,
    slidesPerView: "auto",
    watchOverflow: true,
    modules: [Navigation],
    watchSlidesProgress: true,
    navigation: {
      prevEl: section.querySelector<HTMLButtonElement>(
        ".slider-nav__arrow--prev",
      ),
      nextEl: section.querySelector<HTMLButtonElement>(
        ".slider-nav__arrow--next",
      ),
    },
  });
}

function initFoldableBlocks(root: HTMLElement) {
  const blocks = Array.from(
    root.querySelectorAll<HTMLElement>("[data-doctor-foldable]"),
  );

  blocks.forEach((block) => {
    const toggle = block.querySelector<HTMLButtonElement>(
      "[data-doctor-toggle]",
    );
    const hiddenItems = Array.from(
      block.querySelectorAll<HTMLElement>("[data-doctor-hidden]"),
    );

    if (!toggle || !hiddenItems.length) return;

    const defaultText = toggle.dataset.defaultText || "Показать полностью";
    const expandedText = toggle.dataset.expandedText || "Скрыть";

    toggle.addEventListener("click", () => {
      const isExpanded = block.classList.toggle("is-expanded");
      hiddenItems.forEach((item) => {
        item.hidden = !isExpanded;
      });
      toggle.textContent = isExpanded ? expandedText : defaultText;
      toggle.setAttribute("aria-expanded", String(isExpanded));
    });
  });
}

function initMobileFoldableBlocks(root: HTMLElement) {
  const blocks = Array.from(
    root.querySelectorAll<HTMLElement>("[data-doctor-mobile-foldable]"),
  );

  blocks.forEach((block) => {
    const toggle = block.querySelector<HTMLButtonElement>(
      "[data-doctor-mobile-toggle]",
    );
    const list = block.querySelector<HTMLElement>("[data-doctor-mobile-items]");
    const items = list
      ? Array.from(list.querySelectorAll<HTMLElement>("p"))
      : [];

    if (!toggle || items.length < 2) {
      if (toggle) toggle.hidden = true;
      return;
    }

    const mediaQuery = window.matchMedia("(max-width: 640px)");
    const defaultText = toggle.dataset.defaultText || "Показать полностью";
    const expandedText = toggle.dataset.expandedText || "Скрыть";

    const applyState = () => {
      if (mediaQuery.matches) {
        block.classList.remove("is-mobile-expanded");
        toggle.hidden = false;
        toggle.textContent = defaultText;
        toggle.setAttribute("aria-expanded", "false");
        return;
      }

      block.classList.add("is-mobile-expanded");
      toggle.hidden = true;
      toggle.setAttribute("aria-expanded", "true");
    };

    toggle.addEventListener("click", () => {
      if (!mediaQuery.matches) return;

      const isExpanded = block.classList.toggle("is-mobile-expanded");
      toggle.textContent = isExpanded ? expandedText : defaultText;
      toggle.setAttribute("aria-expanded", String(isExpanded));
    });

    mediaQuery.addEventListener("change", applyState);
    applyState();
  });
}

function initLicensesSlider(root: HTMLElement) {
  const block = root.querySelector<HTMLElement>(
    ".doctor-details__info-block--licenses",
  );
  if (!block) return;

  const container = block.querySelector<HTMLElement>(".swiper");
  if (!container) return;

  const mm = gsap.matchMedia();

  mm.add("(max-width: 640px)", () => {
    const slider = new Swiper(container, {
      speed: 600,
      slidesPerView: "auto",
      watchOverflow: true,
      spaceBetween: 0,
      modules: [Navigation],
      watchSlidesProgress: true,
      navigation: {
        prevEl: block.querySelector<HTMLButtonElement>(
          ".slider-nav__arrow--prev",
        ),
        nextEl: block.querySelector<HTMLButtonElement>(
          ".slider-nav__arrow--next",
        ),
      },
    });

    return () => {
      slider.destroy(true, true);
    };
  });
}

export default function doctorDetails() {
  const sections = Array.from(
    document.querySelectorAll<HTMLElement>(".doctor-details"),
  );

  sections.forEach((section) => {
    initSlider(section, ".doctor-details__articles");
    initSlider(section, ".doctor-details__reviews");
    initSlider(section, ".doctor-details__colleagues");
    initLicensesSlider(section);
    initFoldableBlocks(section);
    initMobileFoldableBlocks(section);
  });
}
