export default function scientificWorks() {
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
    const revealStep = Number(button.dataset.step) || 2;
    const mobileInitialVisible = Math.min(
      Number(button.dataset.mobileInitial) || groups.length,
      groups.length,
    );
    let visibleGroups = mobileInitialVisible;

    const updateGroups = () => {
      if (!mobileQuery.matches) {
        groups.forEach((group) => {
          group.hidden = false;
        });
        button.hidden = true;
        return;
      }

      groups.forEach((group, index) => {
        group.hidden = index >= visibleGroups;
      });

      button.hidden = visibleGroups >= groups.length;
    };

    updateGroups();

    button.addEventListener("click", () => {
      visibleGroups = Math.min(groups.length, visibleGroups + revealStep);
      updateGroups();
    });

    mobileQuery.addEventListener("change", updateGroups);
  });
}
