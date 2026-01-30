import "virtual:svg-icons-register";
import "../scss/style.scss";
import licenses from "./licenses";
import fancybox from "./fancybox";
import accordions from "./accordions";
import promo from "./promo";
import ratings from "./ratings";
import patients from "./patients";
import equipment from "./equipment";
import doctors from "./doctors";
import clinicServices from "./clinicServices";

document.addEventListener("DOMContentLoaded", () => {
  fancybox();
  licenses();
  accordions();
  promo();
  ratings();
  patients();
  equipment();
  doctors();
  clinicServices();
});

window.addEventListener("load", () => {
  document.body.classList.add("loaded");
});
