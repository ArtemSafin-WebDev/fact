const baseDoctorCards = {
  1: {
    href: "#",
    imageDesktop: "/images/doctors/1.webp",
    imageMobile: "/images/doctors/1-mobile.webp",
    imageAlt: "Михневич Константин Викторович",
    infoItems: [{ key: "30 лет", value: "стаж работы" }],
    name: "Михневич Константин Викторович",
    positionLines: ["Главный врач.", "Врач-офтальмолог"],
    buttonText: "Записаться",
  },
  2: {
    href: "#",
    imageDesktop: "/images/doctors/2.webp",
    imageMobile: "/images/doctors/2-mobile.webp",
    imageAlt: "Михневич Константин Викторович",
    infoItems: [{ key: "14 лет", value: "стаж работы" }],
    name: "Михневич Константин Викторович",
    positionLines: ["Главный врач.", "Врач-офтальмолог"],
    buttonText: "Записаться",
  },
  3: {
    href: "#",
    imageDesktop: "/images/doctors/3.webp",
    imageMobile: "/images/doctors/3-mobile.webp",
    imageAlt: "Михневич Константин Викторович",
    infoItems: [{ key: "18 лет", value: "стаж работы" }],
    name: "Михневич Константин Викторович",
    positionLines: ["Главный врач.", "Врач-офтальмолог"],
    buttonText: "Записаться",
  },
  4: {
    href: "#",
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
  },
};

export default home;
