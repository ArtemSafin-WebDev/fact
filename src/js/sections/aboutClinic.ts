import gsap from "gsap";
import Swiper from "swiper";
import { Navigation, Pagination } from "swiper/modules";

export default function aboutClinic() {
  const sections = Array.from(
    document.querySelectorAll<HTMLElement>(".about-clinic"),
  );

  sections.forEach((section) => {
    const slider = section.querySelector<HTMLElement>(".about-clinic__slider");
    const list = section.querySelector<HTMLElement>(".about-clinic__list");
    const slides = Array.from(
      section.querySelectorAll<HTMLElement>(".about-clinic__list-item"),
    );
    const fraction = section.querySelector<HTMLElement>(
      ".about-clinic__fraction",
    );

    if (!slider || !list || slides.length === 0) return;

    const mm = gsap.matchMedia();

    mm.add("(max-width: 640px)", () => {
      slider.classList.add("swiper");
      list.classList.add("swiper-wrapper");
      slides.forEach((slide) => slide.classList.add("swiper-slide"));

      const totalLimit = Number(fraction?.dataset.aboutClinicTotal);

      const swiper = new Swiper(slider, {
        modules: [Navigation, Pagination],
        speed: 600,
        slidesPerView: "auto",
        navigation: {
          prevEl: section.querySelector<HTMLButtonElement>(
            ".about-clinic__slider-nav .slider-nav__arrow--prev",
          ),
          nextEl: section.querySelector<HTMLButtonElement>(
            ".about-clinic__slider-nav .slider-nav__arrow--next",
          ),
        },
        pagination: fraction
          ? {
              el: fraction,
              type: "fraction",
              renderFraction: (currentClass: string, totalClass: string) =>
                `<span class="${currentClass}"></span><span class="${totalClass}"></span>`,
              formatFractionCurrent: (current: number) => String(current),
              formatFractionTotal: (total: number) => {
                if (Number.isFinite(totalLimit) && totalLimit > 0) {
                  return `/ ${totalLimit}`;
                }

                return `/ ${total}`;
              },
            }
          : undefined,
      });

      return () => {
        swiper.destroy(true, true);

        slider.classList.remove("swiper");
        list.classList.remove("swiper-wrapper");
        slides.forEach((slide) => slide.classList.remove("swiper-slide"));
      };
    });
  });
}
