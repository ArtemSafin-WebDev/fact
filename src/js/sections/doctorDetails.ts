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

export default function doctorDetails() {
  const sections = Array.from(
    document.querySelectorAll<HTMLElement>(".doctor-details"),
  );

  sections.forEach((section) => {
    initSlider(section, ".doctor-details__articles");
    initSlider(section, ".doctor-details__reviews");
    initSlider(section, ".doctor-details__colleagues");
    initFoldableBlocks(section);
  });
}
