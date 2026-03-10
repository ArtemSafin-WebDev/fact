export default function contactsHero() {
  const sections = Array.from(
    document.querySelectorAll<HTMLElement>(".contacts-hero"),
  );

  sections.forEach((section) => {
    const tabButtons = Array.from(
      section.querySelectorAll<HTMLButtonElement>("[data-contacts-tab-btn]"),
    );
    const cityPanels = Array.from(
      section.querySelectorAll<HTMLElement>("[data-contacts-city-panel]"),
    );

    if (!tabButtons.length || !cityPanels.length) return;

    const setActiveCity = (cityId: string) => {
      tabButtons.forEach((button) => {
        const isActive = button.dataset.contactsTabBtn === cityId;
        button.classList.toggle("active", isActive);
        button.setAttribute("aria-selected", isActive ? "true" : "false");
      });

      cityPanels.forEach((panel) => {
        const isActive = panel.dataset.contactsCityPanel === cityId;
        panel.classList.toggle("is-active", isActive);
      });
    };

    const initialCityId =
      tabButtons.find((button) => button.classList.contains("active"))?.dataset
        .contactsTabBtn ?? tabButtons[0]?.dataset.contactsTabBtn;

    if (initialCityId) {
      setActiveCity(initialCityId);
    }

    tabButtons.forEach((button) => {
      button.addEventListener("click", () => {
        const cityId = button.dataset.contactsTabBtn;
        if (!cityId) return;
        setActiveCity(cityId);
      });
    });
  });
}
