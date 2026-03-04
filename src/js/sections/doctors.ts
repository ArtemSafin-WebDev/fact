import Swiper from "swiper";
import { Navigation } from "swiper/modules";

export default function doctors() {
  const elements = Array.from(
    document.querySelectorAll<HTMLElement>(".doctors"),
  );
  elements.forEach((element) => {
    const tabsBtns = Array.from(
      element.querySelectorAll<HTMLButtonElement>(".tabs-nav__btn"),
    );
    const tabsItems = Array.from(
      element.querySelectorAll<HTMLElement>(".doctors__tabs-item"),
    );

    let instance: Swiper | null = null;

    const setActive = (index: number) => {
      tabsBtns.forEach((btn) => btn.classList.remove("active"));
      tabsItems.forEach((item) => item.classList.remove("active"));
      tabsBtns[index]?.classList.add("active");
      tabsItems[index]?.classList.add("active");

      if (instance) {
        instance.destroy(true);
        instance = null;
      }

      const container = tabsItems[index]?.querySelector<HTMLElement>(".swiper");
      if (!container) return;
      instance = new Swiper(container, {
        speed: 600,
        slidesPerView: "auto",
        watchOverflow: true,
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
    };

    setActive(0);

    tabsBtns.forEach((btn, btnIndex) => {
      btn.addEventListener("click", (event) => {
        event.preventDefault();
        setActive(btnIndex);
      });
    });
  });
}
