import "virtual:svg-icons-register";
import "../scss/style.scss";
import licenses from "./licenses";
import fancybox from "./fancybox";
import accordions from "./accordions";

document.addEventListener("DOMContentLoaded", () => {
  fancybox();
  licenses();
  accordions();
});

window.addEventListener("load", () => {
  document.body.classList.add("loaded");
});
