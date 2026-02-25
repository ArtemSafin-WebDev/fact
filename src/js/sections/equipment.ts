import Swiper from "swiper";
import "swiper/css";
import { Autoplay } from "swiper/modules";

export default function equipment() {
  const elements = Array.from(
    document.querySelectorAll<HTMLElement>(".equipment"),
  );
  elements.forEach((element) => {
    const container = element.querySelector<HTMLElement>(".swiper");
    if (!container) return;
    new Swiper(container, {
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
  });
}
