import intro from "./intro";
import doctors from "./doctors";
import catalogServices from "./catalogServices";
import equipment from "./equipment";
import patients from "./patients";
import promo from "./promo";
import clinic from "./clinic";
import licenses from "./licenses";
import ratings from "./ratings";
import reviews from "./reviews";
import doctorDetails from "./doctorDetails";
import blog from "./blog";
import newsArticleRelated from "./newsArticleRelated";
import aboutClinic from "./aboutClinic";
import aboutAtmosphere from "./aboutAtmosphere";
import serviceBenefits from "./serviceBenefits";
import serviceStages from "./serviceStages";
import serviceEquipment from "./serviceEquipment";
import serviceSpecialists from "./serviceSpecialists";
import serviceMethods from "./serviceMethods";
import tax from "./tax";
import pricesHero from "./pricesHero";

const initContactsHero = () => {
  if (!document.querySelector(".contacts-hero")) return;

  void import("./contactsHero")
    .then(({ default: contactsHero }) => {
      contactsHero();
    })
    .catch((error) => {
      console.error("Contacts hero init error", error);
    });
};

export default function sections() {
  doctorDetails();
  catalogServices();
  intro();
  doctors();
  equipment();
  patients();
  promo();
  blog();
  newsArticleRelated();
  clinic();
  aboutClinic();
  aboutAtmosphere();
  serviceMethods();
  serviceSpecialists();
  serviceStages();
  serviceBenefits();
  serviceEquipment();
  tax();
  pricesHero();
  initContactsHero();
  licenses();
  ratings();
  reviews();
}
