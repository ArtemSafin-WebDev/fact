import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function clinic() {
  const elements = Array.from(document.querySelectorAll<HTMLElement>(".clinic"));

  elements.forEach((element) => {
    const toggle = element.querySelector<HTMLButtonElement>("[data-clinic-toggle]");
    const shortText = element.querySelector<HTMLElement>("[data-clinic-short]");
    const fullText = element.querySelector<HTMLElement>("[data-clinic-full]");

    if (!toggle || !shortText || !fullText) return;

    const defaultText = toggle.dataset.defaultText || "Показать полностью";
    const expandedText = toggle.dataset.expandedText || "Скрыть";

    toggle.addEventListener("click", () => {
      const isExpanded = !fullText.hidden;

      shortText.hidden = !isExpanded;
      fullText.hidden = isExpanded;
      toggle.textContent = isExpanded ? defaultText : expandedText;
      toggle.setAttribute("aria-expanded", String(!isExpanded));

      requestAnimationFrame(() => {
        ScrollTrigger.refresh();
      });
    });
  });
}
