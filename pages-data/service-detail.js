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
