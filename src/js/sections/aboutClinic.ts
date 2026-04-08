import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Swiper from "swiper";
import { Navigation, Pagination } from "swiper/modules";

gsap.registerPlugin(ScrollTrigger);

export default function aboutClinic() {
  const sections = Array.from(
    document.querySelectorAll<HTMLElement>(".about-clinic"),
  );
  const hasPricesHero = Boolean(document.querySelector(".prices-hero"));

  sections.forEach((section) => {
    const circle = section.querySelector<HTMLElement>(".about-clinic__circle");
    const slider = section.querySelector<HTMLElement>(".about-clinic__slider");
    const list = section.querySelector<HTMLElement>(".about-clinic__list");
    const slides = Array.from(
      section.querySelectorAll<HTMLElement>(".about-clinic__list-item"),
    );
    const fraction = section.querySelector<HTMLElement>(
      ".about-clinic__fraction",
    );

    const mm = gsap.matchMedia();

    if (circle && !hasPricesHero) {
      mm.add("(min-width: 641px)", () => {
        const tween = gsap.to(circle, {
          y: -56,
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: "top bottom",
            end: "bottom top",
            scrub: 0.8,
          },
        });

        return () => {
          tween.kill();
        };
      });
    }

    if (!slider || !list || slides.length === 0) return;

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
