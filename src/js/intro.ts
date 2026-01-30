import Swiper from "swiper";
import "swiper/css";
import gsap from "gsap";
import { Grid, Navigation } from "swiper/modules";

export default function intro() {
  const elements = Array.from(document.querySelectorAll<HTMLElement>(".intro"));
  elements.forEach((element) => {
    const container = element.querySelector<HTMLElement>(".swiper");

    if (!container) return;
    let mm = gsap.matchMedia();

    mm.add("(width > 640px)", () => {
      const instance = new Swiper(container, {
        slidesPerView: "auto",
        speed: 600,
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

      return () => {
        instance.destroy();
      };
    });
    mm.add("(width <= 640px)", () => {
      const instance = new Swiper(container, {
        slidesPerView: 2,
        speed: 600,
        modules: [Navigation, Grid],
        navigation: {
          prevEl: element.querySelector<HTMLButtonElement>(
            ".slider-nav__arrow--prev",
          ),
          nextEl: element.querySelector<HTMLButtonElement>(
            ".slider-nav__arrow--next",
          ),
        },
      });

      return () => {
        instance.destroy();
      };
    });
  });
}
