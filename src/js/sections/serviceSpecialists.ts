import Swiper from "swiper";

function initMobileDescription(section: HTMLElement) {
  const blocks = Array.from(
    section.querySelectorAll<HTMLElement>("[data-service-specialists-foldable]"),
  );

  blocks.forEach((block) => {
    const shortText = block.querySelector<HTMLElement>(
      "[data-service-specialists-short]",
    );
    const fullText = block.querySelector<HTMLElement>(
      "[data-service-specialists-full]",
    );
    const toggle = block.querySelector<HTMLButtonElement>(
      "[data-service-specialists-toggle]",
    );

    if (!shortText || !fullText || !toggle) return;

    const mediaQuery = window.matchMedia("(max-width: 640px)");
    const defaultText = toggle.dataset.defaultText || "Показать полностью";
    const expandedText = toggle.dataset.expandedText || "Скрыть";

    const setExpandedState = (isExpanded: boolean) => {
      block.classList.toggle("is-mobile-expanded", isExpanded);
      shortText.hidden = isExpanded;
      fullText.hidden = !isExpanded;
      toggle.textContent = isExpanded ? expandedText : defaultText;
      toggle.setAttribute("aria-expanded", String(isExpanded));
    };

    const applyState = () => {
      if (mediaQuery.matches) {
        toggle.hidden = false;
        setExpandedState(false);
        return;
      }

      toggle.hidden = true;
      block.classList.add("is-mobile-expanded");
      shortText.hidden = true;
      fullText.hidden = false;
      toggle.setAttribute("aria-expanded", "true");
    };

    toggle.addEventListener("click", () => {
      if (!mediaQuery.matches) return;

      const isExpanded = !block.classList.contains("is-mobile-expanded");
      setExpandedState(isExpanded);
    });

    mediaQuery.addEventListener("change", applyState);
    applyState();
  });
}

function initMobileCardsSlider(section: HTMLElement) {
  const container = section.querySelector<HTMLElement>(
    ".service-specialists__cards .swiper",
  );
  if (!container) return;

  const mediaQuery = window.matchMedia("(max-width: 640px)");
  let slider: Swiper | null = null;

  const enableSlider = () => {
    if (slider) return;

    slider = new Swiper(container, {
      speed: 600,
      slidesPerView: 1.08,
      spaceBetween: 0,
      watchOverflow: true,
    });
  };

  const disableSlider = () => {
    if (!slider) return;

    slider.destroy(true, true);
    slider = null;
  };

  const applyState = () => {
    if (mediaQuery.matches) {
      enableSlider();
      return;
    }

    disableSlider();
  };

  mediaQuery.addEventListener("change", applyState);
  applyState();
}

export default function serviceSpecialists() {
  const sections = Array.from(
    document.querySelectorAll<HTMLElement>(".service-specialists"),
  );

  sections.forEach((section) => {
    initMobileDescription(section);
    initMobileCardsSlider(section);
  });
}
