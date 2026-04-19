export default function partnersPage() {
  const sections = Array.from(
    document.querySelectorAll<HTMLElement>("[data-partners-page]"),
  );

  sections.forEach((section) => {
    const button = section.querySelector<HTMLButtonElement>(
      "[data-partners-page-more]",
    );

    if (!button) return;

    const cardsCount = section.querySelectorAll(".partners-page__item").length;

    if (cardsCount <= 8) return;

    button.addEventListener("click", () => {
      section.classList.add("partners-page--expanded");
    });
  });
}
