import Swiper from "swiper";
import { Navigation, Pagination } from "swiper/modules";

export default function promo() {
  const elements = Array.from(document.querySelectorAll<HTMLElement>(".promo"));
  elements.forEach((element) => {
    const container = element.querySelector<HTMLElement>(".swiper");
    if (!container) return;
    const fractionElement = element.querySelector<HTMLElement>(".promo__fraction");
    new Swiper(container, {
      speed: 600,
      slidesPerView: "auto",
      modules: [Navigation, Pagination],
      navigation: {
        prevEl: element.querySelector<HTMLButtonElement>(
          ".slider-nav__arrow--prev",
        ),
        nextEl: element.querySelector<HTMLButtonElement>(
          ".slider-nav__arrow--next",
        ),
      },
      pagination: fractionElement
        ? {
            el: fractionElement,
            type: "fraction",
            renderFraction: (currentClass, totalClass) =>
              `<span class="${currentClass}"></span><span class="${totalClass}"></span>`,
            formatFractionTotal: (total) => `/ ${total}`,
          }
        : undefined,
    });
  });
}
