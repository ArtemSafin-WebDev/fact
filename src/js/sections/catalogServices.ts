export default function catalogServices() {
  const sections = Array.from(
    document.querySelectorAll<HTMLElement>(".catalog-services"),
  );

  sections.forEach((section) => {
    const tabButtons = Array.from(
      section.querySelectorAll<HTMLButtonElement>("[data-services-tab-btn]"),
    );
    const tabPanels = Array.from(
      section.querySelectorAll<HTMLElement>("[data-services-panel]"),
    );

    const setActiveTab = (target: string) => {
      tabButtons.forEach((button) => {
        const isActive = button.dataset.servicesTabBtn === target;
        button.classList.toggle("active", isActive);
        button.setAttribute("aria-pressed", isActive ? "true" : "false");
      });

      tabPanels.forEach((panel) => {
        const isActive = panel.dataset.servicesPanel === target;
        panel.classList.toggle("is-active", isActive);
      });
    };

    const initialTabTarget =
      tabButtons.find((button) => button.classList.contains("active"))?.dataset
        .servicesTabBtn ?? tabButtons[0]?.dataset.servicesTabBtn;
    if (initialTabTarget) {
      setActiveTab(initialTabTarget);
    }

    tabButtons.forEach((button) => {
      button.addEventListener("click", () => {
        const target = button.dataset.servicesTabBtn;
        if (!target) return;
        setActiveTab(target);
      });
    });

    const expandableItems = Array.from(
      section.querySelectorAll<HTMLElement>("[data-services-item]"),
    ).filter((item) => item.querySelector("[data-services-expand-toggle]"));

    const closeItem = (item: HTMLElement) => {
      const button = item.querySelector<HTMLButtonElement>(
        "[data-services-expand-toggle]",
      );
      item.classList.remove("is-expanded");
      button?.setAttribute("aria-expanded", "false");
    };

    const openItem = (item: HTMLElement) => {
      const button = item.querySelector<HTMLButtonElement>(
        "[data-services-expand-toggle]",
      );
      item.classList.add("is-expanded");
      button?.setAttribute("aria-expanded", "true");
    };

    expandableItems.forEach((item) => {
      const button = item.querySelector<HTMLButtonElement>(
        "[data-services-expand-toggle]",
      );
      if (!button) return;

      button.addEventListener("click", () => {
        const shouldOpen = !item.classList.contains("is-expanded");

        expandableItems.forEach((expandableItem) => {
          if (expandableItem !== item) {
            closeItem(expandableItem);
          }
        });

        if (shouldOpen) {
          openItem(item);
        } else {
          closeItem(item);
        }
      });
    });
  });
}
