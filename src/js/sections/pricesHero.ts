export default function pricesHero() {
  const sections = Array.from(
    document.querySelectorAll<HTMLElement>(".prices-hero"),
  );

  sections.forEach((section) => {
    const tabButtons = Array.from(
      section.querySelectorAll<HTMLButtonElement>("[data-prices-tab-btn]"),
    );
    const tabPanels = Array.from(
      section.querySelectorAll<HTMLElement>("[data-prices-panel]"),
    );
    const searchForm = section.querySelector<HTMLFormElement>(".prices-hero__search");
    const searchInput =
      section.querySelector<HTMLInputElement>("[data-prices-search]");
    const emptyState =
      section.querySelector<HTMLElement>("[data-prices-empty]");

    let activeTarget =
      tabButtons.find((button) => button.classList.contains("active"))?.dataset
        .pricesTabBtn ?? tabButtons[0]?.dataset.pricesTabBtn ?? "";

    const setActiveTab = (target: string) => {
      activeTarget = target;

      tabButtons.forEach((button) => {
        const isActive = button.dataset.pricesTabBtn === target;
        button.classList.toggle("active", isActive);
        button.setAttribute("aria-selected", isActive ? "true" : "false");
      });

      tabPanels.forEach((panel) => {
        const isActive = panel.dataset.pricesPanel === target;
        panel.classList.toggle("is-active", isActive);
        panel.setAttribute("aria-hidden", isActive ? "false" : "true");
      });
    };

    const applySearch = () => {
      const query = searchInput?.value.trim().toLowerCase() ?? "";
      let firstMatchedTarget = "";
      let hasMatches = false;

      tabPanels.forEach((panel) => {
        const items = Array.from(
          panel.querySelectorAll<HTMLElement>("[data-prices-item]"),
        );
        let panelHasMatch = false;

        items.forEach((item) => {
          const haystack = (
            item.dataset.pricesSearchText ??
            item.textContent ??
            ""
          ).toLowerCase();
          const isMatch = query.length === 0 || haystack.includes(query);
          item.hidden = !isMatch;

          if (isMatch) {
            panelHasMatch = true;
            hasMatches = true;
          }
        });

        const target = panel.dataset.pricesPanel ?? "";
        if (query.length > 0 && panelHasMatch && !firstMatchedTarget) {
          firstMatchedTarget = target;
        }
      });

      if (query.length === 0) {
        section.classList.remove("is-empty-results");
        emptyState?.setAttribute("hidden", "");
        if (activeTarget) {
          setActiveTab(activeTarget);
        }
        return;
      }

      if (firstMatchedTarget) {
        section.classList.remove("is-empty-results");
        emptyState?.setAttribute("hidden", "");
        setActiveTab(firstMatchedTarget);
        return;
      }

      if (!hasMatches) {
        section.classList.add("is-empty-results");
        emptyState?.removeAttribute("hidden");
      }
    };

    if (activeTarget) {
      setActiveTab(activeTarget);
    }

    tabButtons.forEach((button) => {
      button.addEventListener("click", () => {
        const target = button.dataset.pricesTabBtn;
        if (!target) return;
        section.classList.remove("is-empty-results");
        emptyState?.setAttribute("hidden", "");
        setActiveTab(target);
        applySearch();
      });
    });

    searchInput?.addEventListener("input", applySearch);
    searchForm?.addEventListener("submit", (event) => {
      event.preventDefault();
    });
  });
}
