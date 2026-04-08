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
    const defaultEmptyMessage =
      emptyState?.textContent?.trim() ?? "Нет найденных результатов";
    const otherTabsEmptyMessage =
      "В этом разделе ничего не найдено. Результаты есть в других разделах.";

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

    const hideEmptyState = () => {
      section.classList.remove("is-empty-results");
      if (emptyState) {
        emptyState.textContent = defaultEmptyMessage;
        emptyState.setAttribute("hidden", "");
      }
    };

    const showEmptyState = (message: string) => {
      section.classList.add("is-empty-results");
      if (emptyState) {
        emptyState.textContent = message;
        emptyState.removeAttribute("hidden");
      }
    };

    const applySearch = () => {
      const query = searchInput?.value.trim().toLowerCase() ?? "";
      let hasMatchesInAnyTab = false;
      let activePanelHasMatch = false;
      let hasMatchesInOtherTabs = false;

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
            hasMatchesInAnyTab = true;
          }
        });

        const target = panel.dataset.pricesPanel ?? "";
        const isActivePanel = target === activeTarget;

        if (isActivePanel && panelHasMatch) {
          activePanelHasMatch = true;
        }

        if (!isActivePanel && panelHasMatch) {
          hasMatchesInOtherTabs = true;
        }
      });

      if (query.length === 0) {
        hideEmptyState();
        if (activeTarget) {
          setActiveTab(activeTarget);
        }
        return;
      }

      if (activePanelHasMatch) {
        hideEmptyState();
        return;
      }

      if (hasMatchesInAnyTab) {
        showEmptyState(otherTabsEmptyMessage);
        return;
      }

      showEmptyState(defaultEmptyMessage);
    };

    if (activeTarget) {
      setActiveTab(activeTarget);
    }

    tabButtons.forEach((button) => {
      button.addEventListener("click", () => {
        const target = button.dataset.pricesTabBtn;
        if (!target) return;
        setActiveTab(target);
        applySearch();
      });
    });

    searchInput?.addEventListener("input", () => applySearch());
    searchForm?.addEventListener("submit", (event) => {
      event.preventDefault();
    });
  });
}
