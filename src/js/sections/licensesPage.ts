export default function licensesPage() {
  const sections = Array.from(
    document.querySelectorAll<HTMLElement>("[data-licenses-page]"),
  );

  sections.forEach((section) => {
    const button = section.querySelector<HTMLButtonElement>(
      "[data-licenses-page-more]",
    );
    const cards = Array.from(
      section.querySelectorAll<HTMLElement>("[data-license-page-card]"),
    );

    if (cards.length === 0) return;

    const revealStep = Number(button?.dataset.step) || 10;
    const desktopInitialVisible = cards.findIndex((card) => card.hidden);
    const mobileInitialVisible = Number(button?.dataset.mobileInitial) || 8;
    const mobileQuery = window.matchMedia("(max-width: 640px)");
    const visibleByMode = {
      desktop: desktopInitialVisible === -1 ? cards.length : desktopInitialVisible,
      mobile: button ? Math.min(mobileInitialVisible, cards.length) : cards.length,
    };
    const getMode = (): "mobile" | "desktop" =>
      mobileQuery.matches ? "mobile" : "desktop";
    const updateCards = () => {
      const visibleCount = visibleByMode[getMode()];

      cards.forEach((card, index) => {
        card.hidden = index >= visibleCount;
      });

      if (button) {
        button.hidden = visibleCount >= cards.length;
      }
    };

    updateCards();

    if (button) {
      button.addEventListener("click", () => {
        const mode = getMode();

        visibleByMode[mode] = Math.min(
          cards.length,
          visibleByMode[mode] + revealStep,
        );

        updateCards();
      });
    }

    mobileQuery.addEventListener("change", updateCards);
  });
}
