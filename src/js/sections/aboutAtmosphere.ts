const MOBILE_MEDIA_QUERY = "(max-width: 640px)";

export default function aboutAtmosphere() {
  const sections = Array.from(
    document.querySelectorAll<HTMLElement>(".about-atmosphere"),
  );

  sections.forEach((section) => {
    const list = section.querySelector<HTMLElement>("[data-about-atmosphere-list]");
    const toggle = section.querySelector<HTMLButtonElement>(
      "[data-about-atmosphere-toggle]",
    );
    const items = list
      ? Array.from(list.querySelectorAll<HTMLElement>(".about-atmosphere__item"))
      : [];

    if (!toggle || items.length <= 4) {
      if (toggle) toggle.hidden = true;
      return;
    }

    const mediaQuery = window.matchMedia(MOBILE_MEDIA_QUERY);
    const defaultText = toggle.dataset.defaultText || "Показать еще фото";
    const expandedText = toggle.dataset.expandedText || "Скрыть";

    const applyState = () => {
      if (mediaQuery.matches) {
        section.classList.remove("is-mobile-expanded");
        toggle.hidden = false;
        toggle.textContent = defaultText;
        toggle.setAttribute("aria-expanded", "false");
        return;
      }

      section.classList.add("is-mobile-expanded");
      toggle.hidden = true;
      toggle.setAttribute("aria-expanded", "true");
    };

    toggle.addEventListener("click", () => {
      if (!mediaQuery.matches) return;

      const isExpanded = section.classList.toggle("is-mobile-expanded");

      toggle.textContent = isExpanded ? expandedText : defaultText;
      toggle.setAttribute("aria-expanded", String(isExpanded));
    });

    mediaQuery.addEventListener("change", applyState);
    applyState();
  });
}
