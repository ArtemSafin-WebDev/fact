import { createCards } from "./shared/pageHelpers";

const indexPageData = {
  "/index.html": {
    title: "Главная страница",
    intro: {
      background: {
        src: "/images/intro/bg-desktop.webp",
        mobileSrc: "/images/intro/bg-mobile.webp",
        alt: "",
      },
      title: "Лучшее<br> расставание<br> в жизни",
      text: "Лазерная коррекция зрения",
      button: {
        text: "Записаться на приём",
        href: "#feedback-modal",
      },
      showSliderNav: true,
      social: [{ icon: "whatsapp" }, { icon: "telegram" }],
      numbers: [
        {
          amount: "40 000+",
          text: "проведенных операций",
        },
        {
          amount: "60 000+",
          text: "довольных пациентов",
        },
        {
          amount: "1000+",
          text: "положительных отзывов",
        },
        {
          amount: "300+",
          text: "офтальмологических услуг",
        },
        {
          amount: "40 000+",
          text: "проведенных операций",
        },
        {
          amount: "60 000+",
          text: "довольных пациентов",
        },
      ],
    },
    clinicServices: {
      sliderCards: [
        {
          href: "#feedback-modal",
          bgImage: "/images/doctor-detail/article-main.webp",
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
          href: "#feedback-modal",
          bgImage: "/images/doctor-detail/article-main.webp",
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
          href: "#feedback-modal",
          bgImage: "/images/doctor-detail/article-main.webp",
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
      title: "Наши врачи",
      subtitle: "С заботой о вашем зрении",
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
    contactsSocials: {
      title: "Социальные сети",
      lead: "Мы максимально открыты и подтверждаем экспертность в соц.сетях",
      items: [
        {
          name: "YouTube",
          href: "#",
          followers: "2 500 подписчиков",
          iconType: "youtube",
        },
        {
          name: "ВКонтакте",
          href: "#",
          followers: "2 500 подписчиков",
          iconType: "vk",
        },
        {
          name: "RuTube",
          href: "#",
          followers: "2 500 подписчиков",
          iconType: "rutube",
        },
        {
          name: "Telegram",
          href: "#",
          followers: "2 500 подписчиков",
          iconType: "telegram",
        },
      ],
    },
  },
};

export default indexPageData;
