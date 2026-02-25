import "virtual:svg-icons-register";
import "../scss/style.scss";
import ui from "./ui";
import sections from "./sections";

document.addEventListener("DOMContentLoaded", () => {
  ui();
  sections();
});

window.addEventListener("load", () => {
  document.body.classList.add("loaded");
});
