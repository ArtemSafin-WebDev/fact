import Swiper from "swiper";
import { Navigation } from "swiper/modules";

export default function patients() {
  const elements = Array.from(
    document.querySelectorAll<HTMLElement>(".patients"),
  );
  elements.forEach((element) => {
    const reviewsContainer = element.querySelector<HTMLElement>(
      ".patients__reviews-swiper",
    );
    if (reviewsContainer) {
      new Swiper(reviewsContainer, {
        speed: 600,
        slidesPerView: "auto",
        modules: [Navigation],
        watchSlidesProgress: true,
        navigation: {
          prevEl: element.querySelector<HTMLButtonElement>(
            ".patients__reviews-nav .slider-nav__arrow--prev",
          ),
          nextEl: element.querySelector<HTMLButtonElement>(
            ".patients__reviews-nav .slider-nav__arrow--next",
          ),
        },
      });
    }

    const ratingsContainer = element.querySelector<HTMLElement>(
      ".patients__ratings-swiper",
    );
    if (!ratingsContainer) return;

    new Swiper(ratingsContainer, {
      speed: 600,
      slidesPerView: "auto",
      modules: [Navigation],
      watchSlidesProgress: true,
      navigation: {
        prevEl: element.querySelector<HTMLButtonElement>(
          ".patients__ratings-nav .slider-nav__arrow--prev",
        ),
        nextEl: element.querySelector<HTMLButtonElement>(
          ".patients__ratings-nav .slider-nav__arrow--next",
        ),
      },
    });
  });
}
