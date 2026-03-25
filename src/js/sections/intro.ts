import Swiper from "swiper";
import gsap from "gsap";
import { Grid, Navigation } from "swiper/modules";

const LIGHT_NUMBERS_CARD_BG = "var(--green-200)";
const DARK_NUMBERS_CARD_BG = "var(--green-300)";

function applyMobileNumbersPattern(instance: Swiper) {
  const rows = instance.params.grid?.rows ?? 2;
  const slidesPerView =
    typeof instance.params.slidesPerView === "number"
      ? instance.params.slidesPerView
      : 0;
  const columns = Math.max(Math.ceil(instance.slides.length / rows), slidesPerView);
  const orderedSlides = Array.from(instance.slides)
    .map((slideEl, index) => {
      const slide = slideEl as HTMLElement;
      const orderValue = Number.parseInt(slide.style.order || "0", 10);

      return {
        slide,
        index,
        order: Number.isNaN(orderValue) ? 0 : orderValue,
      };
    })
    .sort((a, b) => a.order - b.order || a.index - b.index);

  orderedSlides.forEach(({ slide }, visualIndex) => {
    const row = Math.floor(visualIndex / columns);
    const column = visualIndex % columns;
    const isLightCell = (row + column) % 2 === 1;

    slide.style.setProperty(
      "--numbers-card-bg",
      isLightCell ? LIGHT_NUMBERS_CARD_BG : DARK_NUMBERS_CARD_BG,
    );
  });
}

function resetMobileNumbersPattern(container: HTMLElement) {
  const slides = Array.from(container.querySelectorAll<HTMLElement>(".swiper-slide"));
  slides.forEach((slide) => {
    slide.style.removeProperty("--numbers-card-bg");
  });
}

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
        slidesPerGroup: 4,
        speed: 600,
        modules: [Navigation, Grid],
        grid: {
          rows: 2,
          fill: "row",
        },
        longSwipesRatio: 0.2,
        spaceBetween: 0,
        navigation: {
          prevEl: element.querySelector<HTMLButtonElement>(
            ".slider-nav__arrow--prev",
          ),
          nextEl: element.querySelector<HTMLButtonElement>(
            ".slider-nav__arrow--next",
          ),
        },
      });
      applyMobileNumbersPattern(instance);
      instance.on("update", () => {
        applyMobileNumbersPattern(instance);
      });
      instance.on("slidesLengthChange", () => {
        applyMobileNumbersPattern(instance);
      });
      instance.on("resize", () => {
        applyMobileNumbersPattern(instance);
      });

      return () => {
        resetMobileNumbersPattern(container);
        instance.destroy();
      };
    });
  });
}
