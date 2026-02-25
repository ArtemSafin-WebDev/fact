import Swiper from "swiper";
import { Navigation } from "swiper/modules";

export default function promo() {
  const elements = Array.from(document.querySelectorAll<HTMLElement>(".promo"));
  elements.forEach((element) => {
    const container = element.querySelector<HTMLElement>(".swiper");
    if (!container) return;
    new Swiper(container, {
      speed: 600,
      slidesPerView: "auto",
      modules: [Navigation],
      navigation: {
        prevEl: element.querySelector<HTMLButtonElement>(
          ".slider-nav__arrow--prev",
        ),
        nextEl: element.querySelector<HTMLButtonElement>(
          ".slider-nav__arrow--next",
        ),
      },
    });
  });
}
