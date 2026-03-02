import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function clinic() {
  const elements = Array.from(document.querySelectorAll<HTMLElement>(".clinic"));

  elements.forEach((element) => {
    const toggle = element.querySelector<HTMLButtonElement>("[data-clinic-toggle]");
    const hiddenText = element.querySelector<HTMLElement>("[data-clinic-hidden]");

    if (!toggle || !hiddenText) return;

    const defaultText = toggle.dataset.defaultText || "Показать полностью";
    const expandedText = toggle.dataset.expandedText || "Скрыть";

    toggle.addEventListener("click", () => {
      const isExpanded = element.classList.toggle("is-expanded");
      hiddenText.hidden = !isExpanded;
      toggle.textContent = isExpanded ? expandedText : defaultText;
      toggle.setAttribute("aria-expanded", String(isExpanded));

      requestAnimationFrame(() => {
        ScrollTrigger.refresh();
      });
    });
  });
}
