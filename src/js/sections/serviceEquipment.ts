import Swiper from "swiper";
import { Navigation, Pagination } from "swiper/modules";

export default function serviceEquipment() {
  const elements = Array.from(
    document.querySelectorAll<HTMLElement>(".service-equipment"),
  );

  elements.forEach((element) => {
    const container = element.querySelector<HTMLElement>(
      ".service-equipment__slider .swiper",
    );
    const fraction = element.querySelector<HTMLElement>(
      ".service-equipment__fraction",
    );

    if (!container) return;

    new Swiper(container, {
      speed: 600,
      slidesPerView: "auto",
      watchSlidesProgress: true,
      modules: [Navigation, Pagination],
      navigation: {
        prevEl: element.querySelector<HTMLButtonElement>(
          ".service-equipment__slider-nav .slider-nav__arrow--prev",
        ),
        nextEl: element.querySelector<HTMLButtonElement>(
          ".service-equipment__slider-nav .slider-nav__arrow--next",
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
