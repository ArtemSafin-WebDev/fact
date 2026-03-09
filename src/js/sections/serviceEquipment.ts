import Swiper from "swiper";
import { Navigation } from "swiper/modules";

export default function serviceEquipment() {
  const elements = Array.from(
    document.querySelectorAll<HTMLElement>(".service-equipment"),
  );

  elements.forEach((element) => {
    const container = element.querySelector<HTMLElement>(
      ".service-equipment__slider .swiper",
    );
    if (!container) return;

    new Swiper(container, {
      speed: 600,
      slidesPerView: 2,
      watchSlidesProgress: true,
      modules: [Navigation],
      navigation: {
        prevEl: element.querySelector<HTMLButtonElement>(
          ".service-equipment__slider-nav .slider-nav__arrow--prev",
        ),
        nextEl: element.querySelector<HTMLButtonElement>(
          ".service-equipment__slider-nav .slider-nav__arrow--next",
        ),
      },
    });
  });
}
