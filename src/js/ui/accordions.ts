export default function accordions() {
  const elements = Array.from(
    document.querySelectorAll<HTMLElement>(".accordion"),
  );
  elements.forEach((element) => {
    const button = element.querySelector<HTMLButtonElement>(".accordion__btn");

    button?.addEventListener("click", (event) => {
      event.preventDefault();
      element.classList.toggle("active");
    });
  });
}
