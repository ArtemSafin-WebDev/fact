const defaultDescription =
  "В минувшие выходные мы стали частью впечатляющего всероссийского забега «ЗОбег» ...";

const surgeryDescription =
  "Сложнейшие офтальмологические операции, сравнимые с ювелирной работой, теперь выполняются ...";

const image = "/images/promotions/diagnostics.png";

const makeCard = ({
  href = "#",
  date = "С 01.06 по 30.06",
  title = "с заботой о вас: анализы перед операцией бесплатно",
  description = defaultDescription,
  buttonText = "Подробнее",
  itemClassName = "",
  cardClassName = "",
} = {}) => ({
  href,
  date,
  title,
  description,
  buttonText,
  image,
  itemClassName,
  cardClassName,
});

const promotionsPageData = {
  "/promotions.html": {
    title: "Акции",
    promotionsPage: {
      title: "Акции",
      breadcrumbs: [
        {
          title: "Главная",
          href: "/",
        },
        {
          title: "О клинике",
          href: "#",
        },
        {
          title: "Акции",
          isCurrent: true,
        },
      ],
      cards: [
        makeCard({
          title: "«счастливые часы» - экспертная диагностика со скидкой 30%",
          description:
            "В глазной клинике «ФАКТ» применяется самый современный на сегодняшний день метод хирургии",
          itemClassName: "promotions__list-item--wide",
          cardClassName: "promo-card--wide",
        }),
        makeCard(),
        makeCard(),
        makeCard({
          description: surgeryDescription,
        }),
        makeCard(),
        makeCard({
          description: surgeryDescription,
        }),
        makeCard({
          description: surgeryDescription,
        }),
        makeCard(),
        makeCard({
          description: surgeryDescription,
        }),
        makeCard({
          description: surgeryDescription,
        }),
        makeCard(),
      ],
    },
  },
};

export default promotionsPageData;
