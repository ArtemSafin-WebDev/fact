import Swiper from "swiper";
import { Navigation, Pagination } from "swiper/modules";

export default function serviceBenefits() {
  const sections = Array.from(
    document.querySelectorAll<HTMLElement>(".service-benefits"),
  );

  sections.forEach((section) => {
    const container = section.querySelector<HTMLElement>(
      ".service-benefits__slider .swiper",
    );
    const fraction = section.querySelector<HTMLElement>(
      ".service-benefits__fraction",
    );

    if (!container) return;

    new Swiper(container, {
      modules: [Navigation, Pagination],
      speed: 600,
      slidesPerView: 1,
      navigation: {
        prevEl: section.querySelector<HTMLButtonElement>(
          ".service-benefits__slider-nav .slider-nav__arrow--prev",
        ),
        nextEl: section.querySelector<HTMLButtonElement>(
          ".service-benefits__slider-nav .slider-nav__arrow--next",
        ),
      },
      pagination: fraction
        ? {
            el: fraction,
            type: "fraction",
            renderFraction: (currentClass, totalClass) =>
              `<span class="${currentClass}"></span><span class="${totalClass}"></span>`,
            formatFractionTotal: (total) => `/ ${total}`,
          }
        : undefined,
    });
  });
}
