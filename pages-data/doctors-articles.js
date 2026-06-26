const longDescription =
  "Сложнейшие офтальмологические операции, сравнимые с ювелирной работой, теперь выполняются ...";

const sportDescription =
  "В минувшие выходные мы стали частью впечатляющего всероссийского забега «ЗОбег» ...";

const articleImages = [
  "/images/doctor-detail/article-main.webp",
  "/images/news-detail/body-left.png",
  "/images/news-detail/body-right.png",
];

const doctorsArticlesPageData = {
  "/doctors-articles.html": {
    title: "Статьи врачей",
    doctorsArticles: {
      title: "статьи врачей",
      breadcrumbs: [
        {
          title: "Главная",
          href: "/",
        },
        {
          title: "О клинике",
          href: "/about.html",
        },
        {
          title: "Статьи врачей",
          isCurrent: true,
        },
      ],
      categories: [
        {
          title: "Лазерная коррекция зрения",
          href: "#laser",
        },
        {
          title: "Катаракта и глаукома",
          href: "#cataract",
          isActive: true,
        },
        {
          title: "Сетчатка",
          href: "#retina",
        },
        {
          title: "Детское зрение",
          href: "#children",
        },
        {
          title: "Прочее",
          href: "#other",
        },
      ],
      cards: [
        {
          href: "/news-detail.html",
          imageDesktop: articleImages[0],
          imageAlt: "Глазная клиника «ФАКТ» — за здоровый образ жизни и спорт!",
          tag: "# справочник",
          title: "Глазная клиника «ФАКТ» — за здоровый образ жизни и спорт!",
          description: sportDescription,
          showButton: true,
          buttonText: "читать",
        },
        {
          href: "/news-detail.html",
          imageDesktop: articleImages[1],
          imageAlt: "Высокоточные операции на глазах доступны в Пятигорске",
          tag: "# новости",
          title: "Высокоточные операции на глазах доступны в Пятигорске",
          description: longDescription,
          showButton: true,
          buttonText: "читать",
        },
        {
          href: "/news-detail.html",
          imageDesktop: articleImages[2],
          imageAlt: "Глазная клиника «ФАКТ» — за здоровый образ жизни и спорт!",
          tag: "# справочник",
          title: "Глазная клиника «ФАКТ» — за здоровый образ жизни и спорт!",
          description: sportDescription,
          showButton: true,
          buttonText: "читать",
        },
        {
          href: "/news-detail.html",
          imageDesktop: articleImages[0],
          imageAlt: "Глазная клиника «ФАКТ» — за здоровый образ жизни и спорт!",
          tag: "# справочник",
          title: "Глазная клиника «ФАКТ» — за здоровый образ жизни и спорт!",
          description: sportDescription,
          showButton: true,
          buttonText: "читать",
        },
        {
          href: "/news-detail.html",
          imageDesktop: articleImages[1],
          imageAlt: "Высокоточные операции на глазах доступны в Пятигорске",
          tag: "# новости",
          title: "Высокоточные операции на глазах доступны в Пятигорске",
          description: longDescription,
          showButton: true,
          buttonText: "читать",
        },
        {
          href: "/news-detail.html",
          imageDesktop: articleImages[2],
          imageAlt: "Глазная клиника «ФАКТ» — за здоровый образ жизни и спорт!",
          tag: "# справочник",
          title: "Глазная клиника «ФАКТ» — за здоровый образ жизни и спорт!",
          description: sportDescription,
          showButton: true,
          buttonText: "читать",
        },
        {
          href: "/news-detail.html",
          imageDesktop: articleImages[0],
          imageAlt: "Глазная клиника «ФАКТ» — за здоровый образ жизни и спорт!",
          tag: "# справочник",
          title: "Глазная клиника «ФАКТ» — за здоровый образ жизни и спорт!",
          description: sportDescription,
          showButton: true,
          buttonText: "читать",
        },
        {
          href: "/news-detail.html",
          imageDesktop: articleImages[1],
          imageAlt: "Высокоточные операции на глазах доступны в Пятигорске",
          tag: "# новости",
          title: "Высокоточные операции на глазах доступны в Пятигорске",
          description: longDescription,
          showButton: true,
          buttonText: "читать",
        },
        {
          href: "/news-detail.html",
          imageDesktop: articleImages[2],
          imageAlt: "Глазная клиника «ФАКТ» — за здоровый образ жизни и спорт!",
          tag: "# справочник",
          title: "Глазная клиника «ФАКТ» — за здоровый образ жизни и спорт!",
          description: sportDescription,
          showButton: true,
          buttonText: "читать",
        },
      ],
    },
  },
};

export default doctorsArticlesPageData;
