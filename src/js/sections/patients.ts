import Swiper from "swiper";
import { Navigation, Pagination } from "swiper/modules";

export default function patients() {
  const elements = Array.from(
    document.querySelectorAll<HTMLElement>(".patients"),
  );
  elements.forEach((element) => {
    const createFractionConfig = (fractionElement: HTMLElement | null) => {
      if (!fractionElement) return undefined;
      const totalLimit = Number(fractionElement.dataset.patientsTotal);

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

    const reviewsContainer = element.querySelector<HTMLElement>(
      ".patients__reviews-swiper",
    );
    const reviewsFraction = element.querySelector<HTMLElement>(
      ".patients__reviews-fraction",
    );
    if (reviewsContainer) {
      new Swiper(reviewsContainer, {
        speed: 600,
        slidesPerView: "auto",
        modules: [Navigation, Pagination],
        watchSlidesProgress: true,
        navigation: {
          prevEl: element.querySelector<HTMLButtonElement>(
            ".patients__reviews-nav .slider-nav__arrow--prev",
          ),
          nextEl: element.querySelector<HTMLButtonElement>(
            ".patients__reviews-nav .slider-nav__arrow--next",
          ),
        },
        pagination: createFractionConfig(reviewsFraction),
      });
    }

    const ratingsContainer = element.querySelector<HTMLElement>(
      ".patients__ratings-swiper",
    );
    const ratingsFraction = element.querySelector<HTMLElement>(
      ".patients__ratings-fraction",
    );
    if (!ratingsContainer) return;

    new Swiper(ratingsContainer, {
      speed: 600,
      slidesPerView: "auto",
      modules: [Navigation, Pagination],
      watchSlidesProgress: true,
      navigation: {
        prevEl: element.querySelector<HTMLButtonElement>(
          ".patients__ratings-nav .slider-nav__arrow--prev",
        ),
        nextEl: element.querySelector<HTMLButtonElement>(
          ".patients__ratings-nav .slider-nav__arrow--next",
        ),
      },
      pagination: createFractionConfig(ratingsFraction),
    });
  });
}
