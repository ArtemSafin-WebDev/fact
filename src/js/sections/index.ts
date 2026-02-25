import intro from "./intro";
import doctors from "./doctors";
import equipment from "./equipment";
import clinicServices from "./clinicServices";
import patients from "./patients";
import ratings from "./ratings";
import promo from "./promo";
import licenses from "./licenses";

export default function sections() {
  intro();
  doctors();
  equipment();
  clinicServices();
  patients();
  ratings();
  promo();
  licenses();
}
