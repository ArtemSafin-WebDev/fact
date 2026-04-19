const works = Array.from({ length: 4 }, () => ({
  title: "Наименование научной работы",
  description:
    "Современные методы диагностики инфекционных, дистрофических заболеваний роговой оболочки и переднего отрезка глаза, а также инновационные подходы и новые способы их консервативного и хирургического лечения",
  period: "2024-2025",
}));

const mobileInitialVisibleGroups = 2;
const groups = Array.from({ length: 4 }, () => ({
  title: "Работы по хирургии и катаракты",
  items: works,
}));

const scientificWorksPageData = {
  "/scientific-works.html": {
    title: "Научные работы",
    scientificWorks: {
      breadcrumbs: [
        { title: "Главная", href: "/" },
        { title: "О клинике", href: "/about.html" },
        { title: "Научные работы", isCurrent: true },
      ],
      title: "научные работы",
      groups,
      hasMore: groups.length > mobileInitialVisibleGroups,
    },
  },
};

export default scientificWorksPageData;
