import intro from "./intro";
import doctors from "./doctors";
import equipment from "./equipment";
import patients from "./patients";
import promo from "./promo";
import clinic from "./clinic";
import licenses from "./licenses";
import ratings from "./ratings";
import doctorDetails from "./doctorDetails";
import blog from "./blog";
import aboutClinic from "./aboutClinic";

export default function sections() {
  doctorDetails();
  intro();
  doctors();
  equipment();
  patients();
  promo();
  blog();
  clinic();
  aboutClinic();
  licenses();
  ratings();
}
