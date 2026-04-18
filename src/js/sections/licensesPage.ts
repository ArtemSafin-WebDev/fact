export default function licensesPage() {
  const sections = Array.from(
    document.querySelectorAll<HTMLElement>("[data-licenses-page]"),
  );

  sections.forEach((section) => {
    const button = section.querySelector<HTMLButtonElement>(
      "[data-licenses-page-more]",
    );

    if (!button) return;

    const getHiddenCards = () =>
      Array.from(
        section.querySelectorAll<HTMLElement>("[data-license-page-card][hidden]"),
      );

    const cards = Array.from(
      section.querySelectorAll<HTMLElement>("[data-license-page-card]"),
    );
    const revealStep = Number(button.dataset.step) || 10;
    const desktopInitialVisible = cards.findIndex((card) => card.hidden);
    const mobileInitialVisible = Number(button.dataset.mobileInitial) || 8;
    const mobileQuery = window.matchMedia("(max-width: 640px)");
    const visibleByMode = {
      desktop: desktopInitialVisible === -1 ? cards.length : desktopInitialVisible,
      mobile: Math.min(mobileInitialVisible, cards.length),
    };
    const getMode = (): "mobile" | "desktop" =>
      mobileQuery.matches ? "mobile" : "desktop";
    const updateCards = () => {
      const visibleCount = visibleByMode[getMode()];

      cards.forEach((card, index) => {
        card.hidden = index >= visibleCount;
      });

      button.hidden = visibleCount >= cards.length;
    };

    if (getHiddenCards().length === 0) {
      button.hidden = true;
      return;
    }

    updateCards();

    button.addEventListener("click", () => {
      const mode = getMode();

      visibleByMode[mode] = Math.min(cards.length, visibleByMode[mode] + revealStep);

      updateCards();
    });

    mobileQuery.addEventListener("change", updateCards);
  });
}
