import intro from "./intro";
import doctors from "./doctors";
import equipment from "./equipment";
import clinicServices from "./clinicServices";
import patients from "./patients";
import promo from "./promo";
import clinic from "./clinic";
import licenses from "./licenses";

export default function sections() {
  intro();
  doctors();
  equipment();
  clinicServices();
  patients();
  promo();
  clinic();
  licenses();
}
