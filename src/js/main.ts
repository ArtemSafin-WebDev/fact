import "virtual:svg-icons-register";
import "../scss/style.scss";
import licenses from "./licenses";
import fancybox from "./fancybox";
import accordions from "./accordions";
import promo from "./promo";

document.addEventListener("DOMContentLoaded", () => {
  fancybox();
  licenses();
  accordions();
  promo();
});

window.addEventListener("load", () => {
  document.body.classList.add("loaded");
});
