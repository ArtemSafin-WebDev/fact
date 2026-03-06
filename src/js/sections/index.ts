import intro from "./intro";
import doctors from "./doctors";
import equipment from "./equipment";
import clinicServices from "./clinicServices";
import patients from "./patients";
import promo from "./promo";
import clinic from "./clinic";
import licenses from "./licenses";
import doctorDetails from "./doctorDetails";
import blog from "./blog";

export default function sections() {
  doctorDetails();
  intro();
  doctors();
  equipment();
  clinicServices();
  patients();
  promo();
  blog();
  clinic();
  licenses();
}
