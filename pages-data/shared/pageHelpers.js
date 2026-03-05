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

export const createCards = (ids) => ids.map((id) => ({ ...baseDoctorCards[id] }));

export const createFoldableItems = (items, visibleCount = 2) =>
  items.map((text, index) => ({ text, hidden: index >= visibleCount }));
