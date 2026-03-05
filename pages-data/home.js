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

const createFoldableItems = (items, visibleCount = 2) =>
  items.map((text, index) => ({ text, hidden: index >= visibleCount }));

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
          title: "Сергиенко Алексей Анатольевич",
          isCurrent: true,
        },
      ],
      photoDesktop: "/images/doctor-detail/doctor-main.webp",
      photoMobile: "/images/doctor-detail/doctor-main.webp",
      photoAlt: "Сергиенко Алексей Анатольевич",
      cta: {
        href: "#",
        text: "Записаться",
      },
      clinics: [
        {
          title: "Пятигорск",
          active: true,
        },
        {
          title: "Краснодар",
          active: true,
        },
      ],
      rating: {
        logo: "/images/doctor-detail/prodoctorov.webp",
        value: "5.0",
      },
      nameLines: ["Сергиенко Алексей", "Анатольевич"],
      position:
        "Врач-офтальмолог, детский офтальмохирург, врач высшей категории, кандидат медицинских наук",
      achievements: [
        "2012 Член европейского общества специалистов сетчатки European Society of Retina Specialists (EURETINA)",
        "2020 - 2025 Ведущий специалист по Краснодарскому краю в неинтервенционном исследовании «Регистр пациентов с наследственными дистрофиями сетчатки, вызванными подтвержденными биаллельными мутациями генов RPE65 и RLBP1 в России (Российский регистр НДС, REGINA)»",
      ],
      stats: [
        {
          label: "Стаж:",
          value: "26 лет",
        },
        {
          label: "Консультация:",
          value: "от 2 990 ₽",
        },
        {
          label: "Кол-во операций:",
          value: "20 000",
        },
      ],
      servicesTitle: "Услуги :",
      services: [
        {
          title: "Детская хирургия",
          href: "#",
        },
        {
          title: "Диагностика зрения детям",
          href: "#",
        },
        {
          title: "Пересадка хрусталика",
          href: "#",
        },
        {
          title: "Лазерная коррекция зрения",
          href: "#",
        },
      ],
      specialization: {
        title: "Специализация :",
        items: createFoldableItems([
          "Хирургия врожденной катаракты любой степени сложности у детей",
          "Лазерная и витреоретинальная хирургия детям, хирургия глаукомы (в том числе с дренажная)",
          "Диагностика, лечение и наблюдение детей с редкими наследственными заболеваниями сетчатки",
          "Современные подходы к хирургии глаукомы у детей раннего возраста",
        ]),
      },
      education: {
        title: "Образование :",
        items: createFoldableItems([
          "1997 Окончил Кубанскую государственную медицинскую академию по специальности “Лечебное дело”",
          "1998 Окончил интернатуру Кубанской государственной медицинской академии на базе Детской краевой больницы г.Краснодара.",
          "2003 Защитил кандидатскую диссертацию по вопросам хирургии врожденной катаракты у детей.",
          "2018 Прошел сертификационный цикл повышения квалификации по детской офтальмохирургии.",
        ]),
      },
      experience: {
        title: "Опыт работы :",
        items: createFoldableItems([
          "1998 - 2020 Врач-офтальмолог в Детской краевой больнице г.Краснодара",
          "2020 - 2021 Врач-офтальмолог краевого перинатального центра, г.Краснодар",
          "2021 - 2024 Руководитель направления детской офтальмологии в профильном центре Южного федерального округа",
          "С 2024 Врач-офтальмолог клиники «Факт»",
        ]),
      },
      papers: {
        title: "Научные работы :",
        items: createFoldableItems([
          "Выпущено методическое пособие “Применение антиоксидантов при отслойке сетчатки у детей”, г.Краснодар",
          "Разработано учебное пособие для студентов мед. специальностей по курсу «Офтальмология» и клинических ординаторов по специальности «Глазные болезни». – Майкоп: АО «Полиграф-ЮГ», 2023. – 104 стр. ISBN987-5-7992-1101-1. А.В.Малышев, А.А.Сергиенко, А.Ф.Тешев.",
          "Автор и соавтор более 30 публикаций в отечественных и зарубежных профильных изданиях.",
          "Регулярный участник международных офтальмологических конгрессов и образовательных программ.",
        ]),
      },
      licenses: {
        title: "Дипломы и сертификаты :",
        items: [
          {
            src: "/images/license-card/1.webp",
            alt: "Диплом врача",
          },
          {
            src: "/images/license-card/4.webp",
            alt: "Сертификат врача",
          },
          {
            src: "/images/license-card/2.webp",
            alt: "Сертификат о повышении квалификации",
          },
          {
            src: "/images/license-card/3.webp",
            alt: "Сертификат специалиста",
          },
        ],
      },
      articles: {
        title: "Статьи доктора",
        cards: [
          {
            href: "#",
            modClass: "doctor-details__article-card doctor-details__article-card--text",
            tag: "# методическое пособие",
            title:
              "методическое пособие: применение антиоксидантов при отслойке сетчатки у детей",
            description:
              "Учебное пособие для студентов мед специальностей по курсу «офтальмология» и клинических ординаторов по специальности ...",
          },
          {
            href: "#",
            modClass: "doctor-details__article-card doctor-details__article-card--media",
            isMedia: true,
            imageDesktop: "/images/doctor-detail/article-main.webp",
            imageAlt: "Работа офтальмологического оборудования",
            showPlay: true,
          },
          {
            href: "#",
            modClass: "doctor-details__article-card doctor-details__article-card--text",
            tag: "# методическое пособие",
            title:
              "методическое пособие: применение антиоксидантов при отслойке сетчатки у детей",
            description:
              "Учебное пособие для студентов мед специальностей по курсу «офтальмология» и клинических ординаторов по специальности ...",
          },
        ],
      },
      reviews: {
        title: "Отзывы об Алексее",
        cards: [
          {
            name: "Марина",
            date: "18 марта 2026",
            text: "Были в клинике с сыном. Остались очень довольны. Особенно хотелось бы отметить администратора Ангелину. Очень спокойная.",
            buttonText: "Читать полностью",
            href: "#",
          },
          {
            name: "Марина",
            date: "18 марта 2026",
            text: "Были в клинике с сыном. Остались очень довольны. Особенно хотелось бы отметить администратора Ангелину. Очень спокойная.",
            buttonText: "Читать полностью",
            href: "#",
          },
          {
            name: "Марина",
            date: "18 марта 2026",
            text: "Были в клинике с сыном. Остались очень довольны. Особенно хотелось бы отметить администратора Ангелину. Очень спокойная.",
            buttonText: "Читать полностью",
            href: "#",
          },
          {
            name: "Марина",
            date: "18 марта 2026",
            text: "Были в клинике с сыном. Остались очень довольны. Особенно хотелось бы отметить администратора Ангелину. Очень спокойная.",
            buttonText: "Читать полностью",
            href: "#",
          },
        ],
      },
      colleagues: {
        title: "Коллеги по специальности",
        cards: createCards([1, 2, 3, 4]),
      },
    },
  },
};

export default home;
