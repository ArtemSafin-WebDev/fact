import { createCards } from "./shared/pageHelpers";

const stageTemplate = {
  image: "/images/service-stages/stage-1.webp",
  imageAlt: "Комплексная диагностика зрения перед лазерной коррекцией",
  duration: "10 минут",
  durationLabel: "длительность процедуры",
  price: "от 2 990 р",
  priceLabel: "стоимость",
  title: "Комплексная диагностика зрения",
  description:
    "Тщательное обследование глаз по 20 параметрам, прогноз будущего зрения, определение риска развития синдрома сухого глаза (ССГ) и предварительное лечение ССГ перед выполнением лазерной коррекции, при необходимости, для достижения наивысших результатов после лазерной коррекции.",
};

const stageTabs = ["Этап 1", "Этап 2", "Этап 3", "Этап 4", "Этап 5"];

const serviceMethodsTabs = [
  {
    id: "all-methods",
    label: "Все методы",
    note: "",
    isActive: false,
  },
  {
    id: "cear",
    label: "CEAR",
    note: "Самый бережный",
    isActive: false,
  },
  {
    id: "femto-super-lasik",
    label: "Femto Super LASIK",
    note: "Золотой стандарт",
    isActive: false,
  },
  {
    id: "lasik",
    label: "LASIK",
    note: "",
    isActive: true,
  },
  {
    id: "frk",
    label: "ФРК",
    note: "Для сложных случаев",
    isActive: false,
  },
];

const serviceMethodsItems = [
  {
    id: "all-methods",
    title: "Все методы коррекции",
    description:
      "На консультации врач оценивает состояние роговицы, остроту зрения и образ жизни пациента, чтобы подобрать метод лазерной коррекции, который даст прогнозируемый результат и комфортное восстановление.",
    price: "от 35 000 р",
    priceLabel: "за коррекцию одного глаза",
    image: "/images/service-methods/method-lasik.webp",
    imageAlt:
      "Пациент проходит обследование зрения на офтальмологическом оборудовании",
    indications: [
      {
        title: "близорукость",
        value: "до -10 диоптрий",
      },
      {
        title: "астигматизм",
        value: "до 6 диоптрий",
      },
    ],
    isActive: false,
  },
  {
    id: "cear",
    title: "Метод CEAR",
    description:
      "CEAR (ReLEx SMILE) — микроинвазивная технология коррекции зрения через микропрокол роговицы. Метод помогает быстро вернуться к привычной активности и подходит пациентам, которым важна максимально щадящая реабилитация.",
    price: "от 70 000 р",
    priceLabel: "за коррекцию одного глаза",
    image: "/images/service-methods/method-lasik.webp",
    imageAlt:
      "Пациент проходит обследование зрения на офтальмологическом оборудовании",
    indications: [
      {
        title: "близорукость",
        value: "от -1 до -10 диоптрий",
      },
      {
        title: "астигматизм",
        value: "до 5 диоптрий",
      },
    ],
    isActive: false,
  },
  {
    id: "femto-super-lasik",
    title: "Метод Femto Super LASIK",
    description:
      "Femto Super LASIK сочетает высокую точность фемтосекундного и эксимерного лазеров, что позволяет персонализировать профиль коррекции. Технология относится к «золотому стандарту» и обеспечивает стабильный визуальный результат.",
    price: "от 65 000 р",
    priceLabel: "за коррекцию одного глаза",
    image: "/images/service-methods/method-lasik.webp",
    imageAlt:
      "Пациент проходит обследование зрения на офтальмологическом оборудовании",
    indications: [
      {
        title: "близорукость",
        value: "от -1 до -10 диоптрий",
      },
      {
        title: "астигматизм",
        value: "до 6 диоптрий",
      },
    ],
    isActive: false,
  },
  {
    id: "lasik",
    title: "Метод LASIK",
    description:
      "LASIK — современная лазерная методика коррекции зрения, которая эффективно устраняет близорукость, дальнозоркость и астигматизм. Процедура безболезненна, занимает несколько минут и позволяет быстро восстановить зрение с минимальным дискомфортом.",
    price: "от 60 000 р",
    priceLabel: "за коррекцию одного глаза",
    image: "/images/service-methods/method-lasik.webp",
    imageAlt:
      "Пациент проходит обследование зрения на офтальмологическом оборудовании",
    indications: [
      {
        title: "близорукость",
        value: "от -1 до -10 диоптрий",
      },
      {
        title: "астигматизм",
        value: "до 6 диоптрий",
      },
    ],
    isActive: true,
  },
  {
    id: "frk",
    title: "Метод ФРК",
    description:
      "ФРК применяется в случаях, когда требуется поверхностная лазерная коррекция без формирования роговичного лоскута. Метод подходит для сложных клинических ситуаций и проводится по индивидуальному плану лечения.",
    price: "от 45 000 р",
    priceLabel: "за коррекцию одного глаза",
    image: "/images/service-methods/method-lasik.webp",
    imageAlt:
      "Пациент проходит обследование зрения на офтальмологическом оборудовании",
    indications: [
      {
        title: "близорукость",
        value: "от -1 до -6 диоптрий",
      },
      {
        title: "астигматизм",
        value: "до 3 диоптрий",
      },
    ],
    isActive: false,
  },
];

const serviceDetailPageData = {
  "/service-detail.html": {
    title: "Детальная страница услуги",
    serviceMethods: {
      title: "Методы коррекции",
      subtitle: "Лазерная коррекция — инвестиция в свободу от очков и линз",
      description:
        "Стоимость лазерной коррекции в нашей клинике в несколько раз меньше ваших трат на линзы в течение нескольких лет. Видеть мир четко — это комфорт, который доступен каждому. Запишитесь на консультацию, чтобы оценить преимущества жизни с идеальным зрением без ежедневных забот.",
      cta: {
        href: "#feedback-modal",
        label: "Записаться на прием",
      },
      tabs: serviceMethodsTabs,
      items: serviceMethodsItems,
    },
    serviceSpecialists: {
      title: "врачи специалисты",
      featuredDoctor: {
        imageDesktop: "/images/service-specialists/main.webp",
        imageMobile: "/images/service-specialists/main.webp",
        imageAlt: "Сергиенко Алексей Анатольевич",
        nameLines: ["Сергиенко Алексей", "Анатольевич"],
        position:
          "Врач-офтальмолог, детский офтальмохирург, врач высшей категории, кандидат медицинских наук",
        shortDescription:
          "2012 Член европейского общества специалистов сетчатки European Society of Retina Specialists (EURETINA)",
        fullDescription: [
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
      },
      cards: createCards([1, 2, 3, 4]),
    },
    serviceStages: {
      title: "Этапы проведения лазерной коррекции зрения",
      cta: {
        href: "#feedback-modal",
        label: "Нужна консультация",
      },
      items: stageTabs.map((tabLabel, index) => ({
        ...stageTemplate,
        id: `stage-${index + 1}`,
        tabLabel,
        isActive: index === 0,
      })),
    },
  },
};

export default serviceDetailPageData;
