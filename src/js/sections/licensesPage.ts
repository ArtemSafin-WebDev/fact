export default function licensesPage() {
  const desktopInitialVisible = 20;
  const mobileInitialVisible = 8;
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

    const mobileQuery = window.matchMedia("(max-width: 640px)");
    let isExpanded = section.classList.contains("licenses-page--expanded");

    const getInitialVisible = () =>
      mobileQuery.matches ? mobileInitialVisible : desktopInitialVisible;

    const updateButton = () => {
      if (button) {
        button.hidden = isExpanded || cards.length <= getInitialVisible();
      }
    };

    updateButton();

    if (button) {
      button.addEventListener("click", () => {
        isExpanded = true;
        section.classList.add("licenses-page--expanded");
        updateButton();
      });
    }

    mobileQuery.addEventListener("change", updateButton);
  });
}
