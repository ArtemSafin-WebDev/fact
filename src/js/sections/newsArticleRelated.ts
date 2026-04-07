import gsap from "gsap";
import Swiper from "swiper";
import { Navigation, Pagination } from "swiper/modules";

export default function newsArticleRelated() {
  const elements = Array.from(
    document.querySelectorAll<HTMLElement>(".news-article-related"),
  );

  elements.forEach((element) => {
    const container = element.querySelector<HTMLElement>(".swiper");
    const fractionElement = element.querySelector<HTMLElement>(
      ".news-article-related__fraction",
    );
    if (!container || !fractionElement) return;

    const mm = gsap.matchMedia();

    mm.add("(max-width: 640px)", () => {
      const instance = new Swiper(container, {
        speed: 600,
        slidesPerView: "auto",
        watchOverflow: true,
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
          formatFractionTotal: (total) => `/ ${total}`,
        },
      });

      return () => {
        instance.destroy(true, true);
      };
    });
  });
}
