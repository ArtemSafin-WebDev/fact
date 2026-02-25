export default function accordions() {
  const elements = Array.from(
    document.querySelectorAll<HTMLElement>(".accordion"),
  );
  elements.forEach((element) => {
    const button = element.querySelector<HTMLButtonElement>(".accordion__btn");

    button?.addEventListener("click", (event) => {
      event.preventDefault();
      elements.forEach((someElement) => {
        if (someElement === element) return;
        someElement.classList.remove("active");
      });
      element.classList.toggle("active");
    });
  });
}
