import Swiper from "swiper";
import { Navigation } from "swiper/modules";

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
    initTabs(element);

    const slider = element.querySelector<HTMLElement>(".reviews__ratings-swiper");
    if (!slider) return;

    new Swiper(slider, {
      speed: 600,
      slidesPerView: "auto",
      modules: [Navigation],
      watchSlidesProgress: true,
      navigation: {
        prevEl: element.querySelector<HTMLButtonElement>(
          ".reviews__ratings-nav .slider-nav__arrow--prev",
        ),
        nextEl: element.querySelector<HTMLButtonElement>(
          ".reviews__ratings-nav .slider-nav__arrow--next",
        ),
      },
    });
  });
}
