const sourceLicenses = [
  {
    src: "/images/license-card/1.webp",
    alt: "Лицензия клиники Факт",
    orientation: "portrait",
  },
  {
    src: "/images/license-card/4.webp",
    alt: "Сертификат клиники Факт",
    orientation: "landscape",
  },
  {
    src: "/images/license-card/2.webp",
    alt: "Лицензия клиники Факт",
    orientation: "portrait",
  },
  {
    src: "/images/license-card/3.webp",
    alt: "Лицензия клиники Факт",
    orientation: "portrait",
  },
  {
    src: "/images/license-card/4.webp",
    alt: "Сертификат клиники Факт",
    orientation: "landscape",
  },
];

const visibleCount = 20;
const totalCount = 24;

const items = Array.from({ length: totalCount }, (_, index) => ({
  ...sourceLicenses[index % sourceLicenses.length],
  hidden: index >= visibleCount,
}));

const licensesPageData = {
  "/licenses.html": {
    title: "Лицензии и сертификаты",
    licensesPage: {
      breadcrumbs: [
        { title: "Главная", href: "/" },
        { title: "О клинике", href: "/about.html" },
        { title: "Лицензии и сертификаты", isCurrent: true },
      ],
      title: "лицензии и сертификаты",
      items,
      hasMore: items.some((item) => item.hidden),
      mobileInitialVisible: 8,
      showMoreStep: 10,
    },
  },
};

export default licensesPageData;
