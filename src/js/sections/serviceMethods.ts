import Swiper from "swiper";
import { Navigation } from "swiper/modules";

type ServiceMethodsTabButton = HTMLButtonElement & {
  dataset: DOMStringMap & { serviceMethodsTabBtn?: string };
};

type ServiceMethodsPanel = HTMLElement & {
  dataset: DOMStringMap & { serviceMethodsPanel?: string };
};

export default function serviceMethods() {
  const sections = Array.from(
    document.querySelectorAll<HTMLElement>(".service-methods"),
  );

  sections.forEach((section) => {
    const slider = section.querySelector<HTMLElement>(
      ".service-methods__tabs-slider",
    );
    const tabButtons = Array.from(
      section.querySelectorAll<ServiceMethodsTabButton>(
        "[data-service-methods-tab-btn]",
      ),
    );
    const panels = Array.from(
      section.querySelectorAll<ServiceMethodsPanel>(
        "[data-service-methods-panel]",
      ),
    );

    if (!tabButtons.length || !panels.length) return;

    slider &&
      new Swiper(slider, {
        modules: [Navigation],
        speed: 500,
        slidesPerView: "auto",
        watchSlidesProgress: true,
        navigation: {
          prevEl: section.querySelector<HTMLButtonElement>(
            ".service-methods__slider-nav .slider-nav__arrow--prev",
          ),
          nextEl: section.querySelector<HTMLButtonElement>(
            ".service-methods__slider-nav .slider-nav__arrow--next",
          ),
        },
      });

    const setActiveTab = (target: string) => {
      tabButtons.forEach((button) => {
        const isActive = button.dataset.serviceMethodsTabBtn === target;
        button.classList.toggle("active", isActive);
        button.setAttribute("aria-selected", isActive ? "true" : "false");
        button.tabIndex = -1;
      });

      panels.forEach((panel) => {
        const isActive = panel.dataset.serviceMethodsPanel === target;
        panel.classList.toggle("is-active", isActive);
        panel.hidden = !isActive;
      });
    };

    const initialTarget =
      tabButtons.find((button) => button.classList.contains("active"))?.dataset
        .serviceMethodsTabBtn ?? tabButtons[0]?.dataset.serviceMethodsTabBtn;

    if (!initialTarget) return;
    setActiveTab(initialTarget);

    tabButtons.forEach((button) => {
      button.addEventListener("click", () => {
        const target = button.dataset.serviceMethodsTabBtn;

        if (!target) return;

        setActiveTab(target);
      });
    });
  });
}
