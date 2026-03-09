import intro from "./intro";
import doctors from "./doctors";
import catalogServices from "./catalogServices";
import equipment from "./equipment";
import patients from "./patients";
import promo from "./promo";
import clinic from "./clinic";
import licenses from "./licenses";
import ratings from "./ratings";
import doctorDetails from "./doctorDetails";
import blog from "./blog";
import aboutClinic from "./aboutClinic";
import serviceBenefits from "./serviceBenefits";
import serviceStages from "./serviceStages";
import serviceEquipment from "./serviceEquipment";
import serviceSpecialists from "./serviceSpecialists";
import serviceMethods from "./serviceMethods";

export default function sections() {
  doctorDetails();
  catalogServices();
  intro();
  doctors();
  equipment();
  patients();
  promo();
  blog();
  clinic();
  aboutClinic();
  serviceMethods();
  serviceSpecialists();
  serviceStages();
  serviceBenefits();
  serviceEquipment();
  licenses();
  ratings();
}
