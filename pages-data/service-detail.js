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

const serviceDetailPageData = {
  "/service-detail.html": {
    title: "Детальная страница услуги",
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
