type ServiceStagesTabButton = HTMLButtonElement & {
  dataset: DOMStringMap & { serviceStagesTabBtn?: string };
};

type ServiceStagesPanel = HTMLElement & {
  dataset: DOMStringMap & { serviceStagesPanel?: string };
};

export default function serviceStages() {
  const sections = Array.from(
    document.querySelectorAll<HTMLElement>(".service-stages"),
  );

  sections.forEach((section) => {
    const tabButtons = Array.from(
      section.querySelectorAll<ServiceStagesTabButton>(
        "[data-service-stages-tab-btn]",
      ),
    );
    const panels = Array.from(
      section.querySelectorAll<ServiceStagesPanel>(
        "[data-service-stages-panel]",
      ),
    );

    if (!tabButtons.length || !panels.length) return;

    const setActiveTab = (target: string) => {
      tabButtons.forEach((button) => {
        const isActive = button.dataset.serviceStagesTabBtn === target;
        button.classList.toggle("active", isActive);
        button.setAttribute("aria-selected", isActive ? "true" : "false");
        button.tabIndex = isActive ? 0 : -1;
      });

      panels.forEach((panel) => {
        const isActive = panel.dataset.serviceStagesPanel === target;
        panel.classList.toggle("is-active", isActive);
        panel.hidden = !isActive;
      });
    };

    const initialTarget =
      tabButtons.find((button) => button.classList.contains("active"))?.dataset
        .serviceStagesTabBtn ?? tabButtons[0]?.dataset.serviceStagesTabBtn;

    if (!initialTarget) return;
    setActiveTab(initialTarget);

    tabButtons.forEach((button) => {
      button.addEventListener("click", () => {
        const target = button.dataset.serviceStagesTabBtn;
        if (!target) return;
        setActiveTab(target);
      });
    });
  });
}
