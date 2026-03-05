import { createCards } from "./shared/pageHelpers";

const catalogDoctorsPageData = {
  "/catalog-doctors.html": {
    title: "Каталог врачей",
    catalogDoctors: {
      title: "Наши врачи",
      breadcrumbs: [
        {
          title: "Главная",
          href: "/",
        },
        {
          title: "Наши врачи",
          isCurrent: true,
        },
      ],
      leadLines: [
        "Над вашим зрением работают",
        "лучшие офтальмологи со всей россии",
      ],
      clinics: [
        {
          title: "Все клиники",
          active: true,
        },
        {
          title: "Пятигорск",
        },
        {
          title: "Краснодар",
        },
      ],
      specialties: [
        {
          title: "Все специальности",
          value: "",
          checked: true,
        },
        {
          title: "Врач-офтальмолог",
          value: "ophthalmologist",
        },
        {
          title: "Детский офтальмолог",
          value: "pediatric-ophthalmologist",
        },
        {
          title: "Офтальмохирург",
          value: "ophthalmic-surgeon",
        },
      ],
      cards: createCards([1, 2, 3, 4, 1, 2, 3, 4]),
    },
  },
};

export default catalogDoctorsPageData;
