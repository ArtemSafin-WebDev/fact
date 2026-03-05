const baseDoctorCards = {
  1: {
    href: "/doctor-detail.html",
    imageDesktop: "/images/doctors/1.webp",
    imageMobile: "/images/doctors/1-mobile.webp",
    imageAlt: "Михневич Константин Викторович",
    infoItems: [{ key: "30 лет", value: "стаж работы" }],
    name: "Михневич Константин Викторович",
    positionLines: ["Главный врач.", "Врач-офтальмолог"],
    buttonText: "Записаться",
  },
  2: {
    href: "/doctor-detail.html",
    imageDesktop: "/images/doctors/2.webp",
    imageMobile: "/images/doctors/2-mobile.webp",
    imageAlt: "Михневич Константин Викторович",
    infoItems: [{ key: "14 лет", value: "стаж работы" }],
    name: "Михневич Константин Викторович",
    positionLines: ["Главный врач.", "Врач-офтальмолог"],
    buttonText: "Записаться",
  },
  3: {
    href: "/doctor-detail.html",
    imageDesktop: "/images/doctors/3.webp",
    imageMobile: "/images/doctors/3-mobile.webp",
    imageAlt: "Михневич Константин Викторович",
    infoItems: [{ key: "18 лет", value: "стаж работы" }],
    name: "Михневич Константин Викторович",
    positionLines: ["Главный врач.", "Врач-офтальмолог"],
    buttonText: "Записаться",
  },
  4: {
    href: "/doctor-detail.html",
    imageDesktop: "/images/doctors/4.webp",
    imageMobile: "/images/doctors/4-mobile.webp",
    imageAlt: "Михневич Константин Викторович",
    infoItems: [{ key: "30 лет", value: "стаж работы" }],
    name: "Михневич Константин Викторович",
    positionLines: ["Главный врач.", "Врач-офтальмолог"],
    buttonText: "Записаться",
  },
};

const createCards = (ids) => ids.map((id) => ({ ...baseDoctorCards[id] }));

const home = {
  "/index.html": {
    title: "Главная страница",
    doctors: {
      tabs: [
        {
          title: "Все клиники",
          cards: createCards([1, 2, 3, 4, 1, 2]),
        },
        {
          title: "Пятигорск",
          cards: createCards([1, 2, 3, 4]),
        },
        {
          title: "Краснодар",
          cards: createCards([1, 2, 3, 4]),
        },
      ],
      allLink: {
        href: "#",
        text: "Смотреть всех врачей",
      },
    },
  },
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
  "/doctor-detail.html": {
    title: "Карточка врача",
    doctorDetails: {
      breadcrumbs: [
        {
          title: "Главная",
          href: "/",
        },
        {
          title: "Наши врачи",
          href: "/catalog-doctors.html",
        },
        {
          title: "Михневич Константин Викторович",
          isCurrent: true,
        },
      ],
      photoDesktop: "/images/doctors/1.webp",
      photoMobile: "/images/doctors/1-mobile.webp",
      photoAlt: "Михневич Константин Викторович",
      name: "Михневич Константин Викторович",
      position: "Главный врач. Врач-офтальмолог",
      experience: "30 лет",
      degree: "Кандидат медицинских наук",
      clinic: "Клиника Факт, Пятигорск",
      directions: [
        "Диагностика и лечение катаракты",
        "Современные методы коррекции зрения",
        "Лазерная хирургия переднего отрезка глаза",
        "Подбор тактики лечения при сложных патологиях",
      ],
      buttonText: "Записаться на прием",
    },
  },
};

export default home;
