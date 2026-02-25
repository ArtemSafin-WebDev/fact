import Swiper from "swiper";
import "swiper/css";
import { Navigation } from "swiper/modules";

export default function ratings() {
  const elements = Array.from(
    document.querySelectorAll<HTMLElement>(".ratings"),
  );
  elements.forEach((element) => {
    const container = element.querySelector<HTMLElement>(".swiper");
    if (!container) return;
    new Swiper(container, {
      speed: 600,
      slidesPerView: "auto",
      modules: [Navigation],
      watchSlidesProgress: true,
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
