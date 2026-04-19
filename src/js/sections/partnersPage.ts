export default function partnersPage() {
  const sections = Array.from(
    document.querySelectorAll<HTMLElement>("[data-partners-page]"),
  );

  sections.forEach((section) => {
    const button = section.querySelector<HTMLButtonElement>(
      "[data-partners-page-more]",
    );

    if (!button) return;

    const cards = Array.from(
      section.querySelectorAll<HTMLElement>("[data-partners-page-card]"),
    );

    const hasHiddenCards = () => cards.some((card) => card.hidden);

    button.hidden = !hasHiddenCards();

    button.addEventListener("click", () => {
      cards.forEach((card) => {
        card.hidden = false;
      });

      button.hidden = true;
    });
  });
}
