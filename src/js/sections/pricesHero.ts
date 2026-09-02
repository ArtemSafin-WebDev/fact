export default function pricesHero() {
  const sections = Array.from(
    document.querySelectorAll<HTMLElement>(".prices-hero"),
  );

  sections.forEach((section) => {
    const directionChoices = Array.from(
      section.querySelectorAll<HTMLInputElement>("[data-prices-direction]"),
    );
    const panels = Array.from(
      section.querySelectorAll<HTMLElement>("[data-prices-panel]"),
    );
    const searchForm = section.querySelector<HTMLFormElement>(".prices-hero__search");
    const searchInput =
      section.querySelector<HTMLInputElement>("[data-prices-search]");
    const emptyState =
      section.querySelector<HTMLElement>("[data-prices-empty]");
    const resetButton =
      section.querySelector<HTMLButtonElement>("[data-prices-reset]");
    const defaultEmptyMessage =
      emptyState?.textContent?.trim() ?? "Нет найденных результатов";
    const otherDirectionsEmptyMessage =
      "В этом разделе ничего не найдено. Результаты есть в других разделах.";

    let activeTarget =
      directionChoices.find((choice) => choice.checked)?.value ??
      directionChoices[0]?.value ??
      "";

    const setActiveDirection = (target: string) => {
      activeTarget = target;

      directionChoices.forEach((choice) => {
        choice.checked = choice.value === target;
      });

      panels.forEach((panel) => {
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
      let hasMatchesInAnyDirection = false;
      let activePanelHasMatch = false;

      panels.forEach((panel) => {
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
            hasMatchesInAnyDirection = true;
          }
        });

        const target = panel.dataset.pricesPanel ?? "";
        const isActivePanel = target === activeTarget;

        if (isActivePanel && panelHasMatch) {
          activePanelHasMatch = true;
        }
      });

      if (query.length === 0) {
        hideEmptyState();
        if (activeTarget) {
          setActiveDirection(activeTarget);
        }
        return;
      }

      if (activePanelHasMatch) {
        hideEmptyState();
        return;
      }

      if (hasMatchesInAnyDirection) {
        showEmptyState(otherDirectionsEmptyMessage);
        return;
      }

      showEmptyState(defaultEmptyMessage);
    };

    if (activeTarget) {
      setActiveDirection(activeTarget);
    }

    directionChoices.forEach((choice) => {
      choice.addEventListener("change", () => {
        if (!choice.checked) return;
        setActiveDirection(choice.value);
        applySearch();
      });
    });

    resetButton?.addEventListener("click", () => {
      const defaultDirection = directionChoices[0];
      if (!defaultDirection) return;

      if (searchInput) {
        searchInput.value = "";
      }

      defaultDirection.checked = true;
      defaultDirection.dispatchEvent(new Event("change", { bubbles: true }));
    });

    searchInput?.addEventListener("input", () => applySearch());
    searchForm?.addEventListener("submit", (event) => {
      event.preventDefault();
    });
  });
}
