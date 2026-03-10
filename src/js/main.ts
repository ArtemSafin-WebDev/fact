import "virtual:svg-icons-register";
import "../scss/style.scss";
import ui from "./ui";
import sections from "./sections";
import Validator from "./classes/Validator";

declare global {
  interface Window {
    Validator: typeof Validator;
  }
}

window.Validator = Validator;

document.addEventListener("DOMContentLoaded", () => {
  ui();
  sections();
});

window.addEventListener("load", () => {
  document.body.classList.add("loaded");
});
