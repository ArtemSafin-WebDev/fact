import { createCards } from "./shared/pageHelpers";

const indexPageData = {
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
};

export default indexPageData;
