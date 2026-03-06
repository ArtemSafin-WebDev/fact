import Swiper from "swiper";
import { Navigation, Pagination } from "swiper/modules";

export default function licenses() {
  const elements = Array.from(
    document.querySelectorAll<HTMLElement>(".licenses"),
  );
  elements.forEach((element) => {
    const container = element.querySelector<HTMLElement>(".swiper");
    if (!container) return;

    const fractionElement = element.querySelector<HTMLElement>(
      ".licenses__fraction",
    );
    const totalLimit = Number(fractionElement?.dataset.licensesTotal);

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
      pagination: {
        el: fractionElement,
        type: "fraction",
        renderFraction: (currentClass, totalClass) =>
          `<span class="${currentClass}"></span><span class="${totalClass}"></span>`,
        formatFractionTotal: (total) => {
          if (Number.isFinite(totalLimit) && totalLimit > 0) {
            return `/ ${totalLimit}`;
          }
          return `/ ${total}`;
        },
      },
    });
  });
}
