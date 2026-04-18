const partnerLogo = {
  src: "/images/partners/svoimi-glazami.webp",
  alt: "Логотип благотворительного фонда «Своими глазами»",
};

const partner = {
  logo: partnerLogo,
  title: "Благотворительный фонд «Своими глазами»",
  description:
    "Если вашему ребенку требуется сложное хирургическое лечение и вам необходима финансовая поддержка, вы можете обратиться к нашему партнеру - в Благотворительный Фонд «Своими глазами».",
};

const partnersPageData = {
  "/partners.html": {
    title: "Партнеры",
    partnersPage: {
      breadcrumbs: [
        { title: "Главная", href: "/" },
        { title: "О клинике", href: "/about.html" },
        { title: "Партнеры", isCurrent: true },
      ],
      title: "партнеры",
      items: Array.from({ length: 16 }, () => ({ ...partner })),
    },
  },
};

export default partnersPageData;
