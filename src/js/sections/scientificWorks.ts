export default function scientificWorks() {
  const mobileInitialVisibleGroups = 2;
  const sections = Array.from(
    document.querySelectorAll<HTMLElement>("[data-scientific-works]"),
  );

  sections.forEach((section) => {
    const button = section.querySelector<HTMLButtonElement>(
      "[data-scientific-works-more]",
    );
    const groups = Array.from(
      section.querySelectorAll<HTMLElement>("[data-scientific-works-group]"),
    );

    if (!button || groups.length === 0) return;

    const mobileQuery = window.matchMedia("(max-width: 640px)");
    let isExpanded = section.classList.contains("scientific-works--expanded");

    const updateButton = () => {
      button.hidden =
        !mobileQuery.matches ||
        isExpanded ||
        groups.length <= mobileInitialVisibleGroups;
    };

    updateButton();

    button.addEventListener("click", () => {
      isExpanded = true;
      section.classList.add("scientific-works--expanded");
      updateButton();
    });

    mobileQuery.addEventListener("change", updateButton);
  });
}
