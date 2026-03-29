import Swiper from "swiper";
import { Navigation, Pagination } from "swiper/modules";

function initTabs(element: HTMLElement) {
  const buttons = Array.from(
    element.querySelectorAll<HTMLButtonElement>("[data-reviews-filter]"),
  );
  const cards = Array.from(
    element.querySelectorAll<HTMLElement>("[data-reviews-card]"),
  );

  if (!buttons.length || !cards.length) return;

  const applyFilter = (filter: string) => {
    buttons.forEach((button) => {
      const isActive = button.dataset.reviewsFilter === filter;
      button.classList.toggle("active", isActive);
      button.setAttribute("aria-pressed", String(isActive));
    });

    cards.forEach((card) => {
      const category = card.dataset.reviewsCategory || "";
      const isVisible = filter === "all" || filter === category;
      card.hidden = !isVisible;
    });
  };

  const defaultButton =
    buttons.find((button) => button.classList.contains("active")) || buttons[0];
  const defaultFilter = defaultButton.dataset.reviewsFilter || "all";
  applyFilter(defaultFilter);

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const filter = button.dataset.reviewsFilter || "all";
      applyFilter(filter);
    });
  });
}

export default function reviews() {
  const elements = Array.from(document.querySelectorAll<HTMLElement>(".reviews"));

  elements.forEach((element) => {
    const createFractionConfig = (fractionElement: HTMLElement | null) => {
      if (!fractionElement) return undefined;
      const totalLimit = Number(fractionElement.dataset.reviewsTotal);

      return {
        el: fractionElement,
        type: "fraction" as const,
        renderFraction: (currentClass: string, totalClass: string) =>
          `<span class="${currentClass}"></span><span class="${totalClass}"></span>`,
        formatFractionCurrent: (current: number) => {
          if (Number.isFinite(totalLimit) && totalLimit > 0) {
            return String(((current - 1) % totalLimit) + 1);
          }

          return String(current);
        },
        formatFractionTotal: (total: number) => {
          if (Number.isFinite(totalLimit) && totalLimit > 0) {
            return `/ ${totalLimit}`;
          }

          return `/ ${total}`;
        },
      };
    };

    initTabs(element);

    const slider = element.querySelector<HTMLElement>(".reviews__ratings-swiper");
    const ratingsFraction = element.querySelector<HTMLElement>(
      ".reviews__ratings-fraction",
    );
    if (!slider) return;

    new Swiper(slider, {
      speed: 600,
      slidesPerView: "auto",
      modules: [Navigation, Pagination],
      watchSlidesProgress: true,
      navigation: {
        prevEl: element.querySelector<HTMLButtonElement>(
          ".reviews__ratings-nav .slider-nav__arrow--prev",
        ),
        nextEl: element.querySelector<HTMLButtonElement>(
          ".reviews__ratings-nav .slider-nav__arrow--next",
        ),
      },
      pagination: createFractionConfig(ratingsFraction),
    });
  });
}
