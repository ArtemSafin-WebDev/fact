import { createCards } from "./shared/pageHelpers";

const aboutPageData = {
  "/about.html": {
    title: "О компании",
    intro: {
      background: {
        src: "/images/about-intro/bg.webp",
        mobileSrc: "/images/about-intro/bg-mobile.webp",
        alt: "Офтальмологическое оборудование клиники Факт",
      },
      breadcrumbs: [
        { title: "Главная", href: "/" },
        { title: "О компании", isCurrent: true },
        { title: "О глазной клинике Факт", isGhost: true },
      ],
      title: "О глазной<br>клинике<br>Факт",
      text: "Наша миссия — повысить культуру и сервис сферы офтальмологии, чтобы каждый пациент мог получить качественное лечение без стресса и с первого раза",
      button: {
        text: "Записаться на диагностику",
        href: "#feedback-modal",
      },
      showSliderNav: false,
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
      ],
    },
    teamFact: {
      title: "Команда факт",
      lead: "Это доктора высочайшего уровня, известные по всей России. К нам прилетают на лечение со всего СНГ, часто с наисложнейшими случаями для того, чтобы вылечиться раз и навсегда",
    },
    aboutAtmosphere: {
      title: "Уютная атмосфера <br>и заботливый персонал",
      text: "Настроят вас на выздоровление с первой минуты",
      images: [
        {
          src: "/images/about-atmosphere/wide.webp",
          className: "about-atmosphere__item--wide",
        },
        {
          src: "/images/about-atmosphere/small-top.webp",
          className: "about-atmosphere__item--small",
        },
        {
          src: "/images/about-atmosphere/small-bottom.webp",
          className: "about-atmosphere__item--small",
        },
        {
          src: "/images/about-atmosphere/small-bottom.webp",
          className: "about-atmosphere__item--small",
        },
        {
          src: "/images/about-atmosphere/small-top.webp",
          className: "about-atmosphere__item--small",
        },
        {
          src: "/images/about-atmosphere/wide.webp",
          className: "about-atmosphere__item--wide",
        },
      ],
    },
    doctors: {
      title: "Наши врачи",
      subtitle:
        "Познакомьтесь с теми, кто позаботится о вашем зрении. Доверьте своё зрение команде профессионалов со средним стажем 21 год",
      tabs: [
        {
          title: "Все клиники",
          cards: createCards([1, 2, 3, 4]),
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
        href: "/catalog-doctors.html",
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
          iconSrc: "/images/contacts-socials/youtube.svg",
          iconAlt: "Иконка YouTube",
        },
        {
          name: "ВКонтакте",
          href: "#",
          followers: "2 500 подписчиков",
          iconType: "vk",
          iconSrc: "/images/contacts-socials/vk.svg",
          iconAlt: "Иконка ВКонтакте",
        },
        {
          name: "RuTube",
          href: "#",
          followers: "2 500 подписчиков",
          iconType: "rutube",
          iconSrc: "/images/contacts-socials/rutube.svg",
          iconAlt: "Иконка RuTube",
        },
        {
          name: "Telegram",
          href: "#",
          followers: "2 500 подписчиков",
          iconType: "telegram",
          iconSrc: "/images/contacts-socials/telegram.svg",
          iconAlt: "Иконка Telegram",
        },
      ],
    },
  },
};

export default aboutPageData;
