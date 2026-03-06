import { createCards } from "./shared/pageHelpers";

const indexPageData = {
  "/index.html": {
    title: "Главная страница",
    clinicServices: {
      sliderCards: [
        {
          href: "#",
          bgImage: "/images/clinic-service-card/1.webp",
          bgImageAlt: "",
          doctors: [
            { src: "/images/clinic-service-card/doctors/1.webp", alt: "" },
            { src: "/images/clinic-service-card/doctors/2.webp", alt: "" },
            { src: "/images/clinic-service-card/doctors/3.webp", alt: "" },
          ],
          price: "от 2200 ₽",
          title: "Диагностика",
          description: "Комплексное обследование на новейшем оборудовании",
          buttonText: "Записаться",
        },
        {
          href: "#",
          bgImage: "/images/clinic-service-card/1.webp",
          bgImageAlt: "",
          doctors: [
            { src: "/images/clinic-service-card/doctors/1.webp", alt: "" },
            { src: "/images/clinic-service-card/doctors/2.webp", alt: "" },
          ],
          price: "от 600 ₽",
          title: "Детское отделение",
          description:
            "Диагностика и консультация ведущих детских офтальмологов РФ",
          buttonText: "Записаться",
        },
        {
          href: "#",
          bgImage: "/images/clinic-service-card/1.webp",
          bgImageAlt: "",
          doctors: [
            { src: "/images/clinic-service-card/doctors/1.webp", alt: "" },
            { src: "/images/clinic-service-card/doctors/2.webp", alt: "" },
          ],
          price: "от 27 500 ₽",
          title: "Кератоконус",
          description:
            "Комплексное обследование на новейшем оборудовании с учетом возраста",
          buttonText: "Записаться",
        },
      ],
      horizontalCards: [
        {
          href: "#",
          doctors: [
            { src: "/images/clinic-service-card/doctors/1.webp", alt: "" },
            { src: "/images/clinic-service-card/doctors/2.webp", alt: "" },
          ],
          title: "Катаракта",
          description:
            "Передовые лазерные системы от ведущих мировых производителей",
          price: "от 29 500 ₽",
        },
        {
          href: "#",
          doctors: [
            { src: "/images/clinic-service-card/doctors/1.webp", alt: "" },
            { src: "/images/clinic-service-card/doctors/2.webp", alt: "" },
          ],
          title: "Лазерная коррекция",
          description:
            "Только лучшие и безопасные технологии, проверенные опытом и временем",
          price: "от 27 500 ₽",
        },
        {
          href: "#",
          doctors: [
            { src: "/images/clinic-service-card/doctors/1.webp", alt: "" },
            { src: "/images/clinic-service-card/doctors/3.webp", alt: "" },
            { src: "/images/clinic-service-card/doctors/2.webp", alt: "" },
          ],
          title: "Глаукома",
          description:
            "Заболевание глаз, характеризующееся повышением внутриглазного давления",
          price: "от 10 500 ₽",
        },
        {
          href: "#",
          doctors: [
            { src: "/images/clinic-service-card/doctors/1.webp", alt: "" },
            { src: "/images/clinic-service-card/doctors/2.webp", alt: "" },
            { src: "/images/clinic-service-card/doctors/3.webp", alt: "" },
          ],
          title: "Кератоконус",
          description:
            "Комплексное обследование на новейшем оборудовании с учетом возраста",
          price: "от 27 500 ₽",
        },
      ],
    },
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
};

export default indexPageData;
