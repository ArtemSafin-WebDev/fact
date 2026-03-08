const catalogServicesPageData = {
  "/catalog-services.html": {
    title: "Каталог услуг",
    catalogServices: {
      breadcrumbs: [
        {
          title: "Главная",
          href: "/",
        },
        {
          title: "Услуги",
          isCurrent: true,
        },
      ],
      titleLines: ["все услуги для взрослых", "и детей в одном месте"],
      lead: "Помогаем даже в тех случаях, когда другие клиники бессильны",
      tabs: [
        {
          title: "Популярные услуги",
          target: "popular",
          active: true,
        },
        {
          title: "Экспертная хирургия",
          target: "expert",
        },
        {
          title: "Полный список услуг",
          target: "full",
        },
      ],
      popular: {
        title: "Популярные услуги",
        cards: [
          {
            href: "#",
            bgImage: "/images/catalog-services/bg.webp",
            bgImageAlt: "Диагностическое оборудование в клинике Факт",
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
            bgImage: "/images/catalog-services/bg.webp",
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
            bgImage: "/images/catalog-services/bg.webp",
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
        list: [
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
      expert: {
        title: "Экспертная хирургия",
        cards: [
          {
            href: "#",
            bgImage: "/images/catalog-services/bg.webp",
            bgImageAlt: "Диагностическое оборудование в клинике Факт",
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
            bgImage: "/images/catalog-services/bg.webp",
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
            bgImage: "/images/catalog-services/bg.webp",
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
        list: [
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
      full: {
        title: "Полный список услуг",
        items: [
          {
            title: "Лазерная коррекция",
            doctors: [
              { src: "/images/clinic-service-card/doctors/1.webp", alt: "" },
              { src: "/images/clinic-service-card/doctors/2.webp", alt: "" },
            ],
            subservices: [
              "Лечение близорукости",
              "Лечение астигматизма",
              "Лечение дальнозоркости",
              "Лечение пресбиопии",
            ],
          },
          {
            title: "Диагностика зрения",
            doctors: [
              { src: "/images/clinic-service-card/doctors/1.webp", alt: "" },
              { src: "/images/clinic-service-card/doctors/2.webp", alt: "" },
            ],
            expanded: true,
            subservices: [
              "Лечение близорукости",
              "Лечение астигматизма",
              "Лечение дальнозоркости",
              "Лечение пресбиопии",
            ],
          },
          {
            title: "Глаукома",
            doctors: [
              { src: "/images/clinic-service-card/doctors/1.webp", alt: "" },
              { src: "/images/clinic-service-card/doctors/3.webp", alt: "" },
              { src: "/images/clinic-service-card/doctors/2.webp", alt: "" },
            ],
            subservices: [
              "Диагностика глаукомы",
              "Лазерное лечение глаукомы",
              "Хирургическое лечение глаукомы",
              "Послеоперационное наблюдение",
            ],
          },
          {
            title: "Кератоконус",
            doctors: [
              { src: "/images/clinic-service-card/doctors/1.webp", alt: "" },
              { src: "/images/clinic-service-card/doctors/2.webp", alt: "" },
              { src: "/images/clinic-service-card/doctors/3.webp", alt: "" },
            ],
            subservices: [
              "Диагностика кератоконуса",
              "Кросслинкинг роговицы",
              "Имплантация роговичных сегментов",
              "Подбор контактной коррекции",
            ],
          },
          {
            title: "Глаукома",
            doctors: [
              { src: "/images/clinic-service-card/doctors/1.webp", alt: "" },
              { src: "/images/clinic-service-card/doctors/3.webp", alt: "" },
              { src: "/images/clinic-service-card/doctors/2.webp", alt: "" },
            ],
            subservices: [
              "Диагностика глаукомы",
              "Лазерное лечение глаукомы",
              "Хирургическое лечение глаукомы",
              "Послеоперационное наблюдение",
            ],
          },
          {
            title: "Кератоконус",
            doctors: [
              { src: "/images/clinic-service-card/doctors/1.webp", alt: "" },
              { src: "/images/clinic-service-card/doctors/2.webp", alt: "" },
              { src: "/images/clinic-service-card/doctors/3.webp", alt: "" },
            ],
            subservices: [
              "Диагностика кератоконуса",
              "Кросслинкинг роговицы",
              "Имплантация роговичных сегментов",
              "Подбор контактной коррекции",
            ],
          },
          {
            title: "Глаукома",
            doctors: [
              { src: "/images/clinic-service-card/doctors/1.webp", alt: "" },
              { src: "/images/clinic-service-card/doctors/3.webp", alt: "" },
              { src: "/images/clinic-service-card/doctors/2.webp", alt: "" },
            ],
            subservices: [
              "Диагностика глаукомы",
              "Лазерное лечение глаукомы",
              "Хирургическое лечение глаукомы",
              "Послеоперационное наблюдение",
            ],
          },
          {
            title: "Кератоконус",
            doctors: [
              { src: "/images/clinic-service-card/doctors/1.webp", alt: "" },
              { src: "/images/clinic-service-card/doctors/2.webp", alt: "" },
              { src: "/images/clinic-service-card/doctors/3.webp", alt: "" },
            ],
            subservices: [
              "Диагностика кератоконуса",
              "Кросслинкинг роговицы",
              "Имплантация роговичных сегментов",
              "Подбор контактной коррекции",
            ],
          },
          {
            title: "Кератоконус",
            doctors: [
              { src: "/images/clinic-service-card/doctors/1.webp", alt: "" },
              { src: "/images/clinic-service-card/doctors/2.webp", alt: "" },
              { src: "/images/clinic-service-card/doctors/3.webp", alt: "" },
            ],
            subservices: [
              "Диагностика кератоконуса",
              "Кросслинкинг роговицы",
              "Имплантация роговичных сегментов",
              "Подбор контактной коррекции",
            ],
          },
        ],
      },
    },
  },
};

export default catalogServicesPageData;
