import Swiper from "swiper";
import gsap from "gsap";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

export default function equipment() {
  const elements = Array.from(
    document.querySelectorAll<HTMLElement>(".equipment"),
  );
  elements.forEach((element) => {
    const equipmentContainer = element.querySelector<HTMLElement>(
      ".equipment__slider .swiper",
    );
    if (equipmentContainer) {
      new Swiper(equipmentContainer, {
        speed: 4000,
        slidesPerView: "auto",
        modules: [Autoplay],
        watchSlidesProgress: true,
        loop: true,
        centeredSlides: true,
        centeredSlidesBounds: false,
        allowTouchMove: false,
        autoplay: {
          delay: 0,
        },
      });
    }

    const featuresContainer = element.querySelector<HTMLElement>(
      ".equipment__features-slider .swiper",
    );
    const fractionElement = element.querySelector<HTMLElement>(
      ".equipment__features-fraction",
    );
    if (!featuresContainer || !fractionElement) return;

    const matchMedia = gsap.matchMedia();
    matchMedia.add("(max-width: 640px)", () => {
      const instance = new Swiper(featuresContainer, {
        speed: 600,
        slidesPerView: "auto",
        modules: [Navigation, Pagination],
        navigation: {
          prevEl: element.querySelector<HTMLButtonElement>(
            ".equipment__features-slider-nav .slider-nav__arrow--prev",
          ),
          nextEl: element.querySelector<HTMLButtonElement>(
            ".equipment__features-slider-nav .slider-nav__arrow--next",
          ),
        },
        pagination: {
          el: fractionElement,
          type: "fraction",
          renderFraction: (currentClass, totalClass) =>
            `<span class="${currentClass}"></span><span class="${totalClass}"></span>`,
          formatFractionTotal: (total) => `/ ${total}`,
        },
      });

      return () => {
        instance.destroy(true, true);
      };
    });
  });
}
