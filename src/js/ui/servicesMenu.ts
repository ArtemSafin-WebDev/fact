type ServicesMenuTab = HTMLButtonElement & {
  dataset: DOMStringMap & { servicesMenuTab?: string };
};

type ServicesMenuPane = HTMLElement & {
  dataset: DOMStringMap & { servicesMenuPane?: string };
};

export default function servicesMenu() {
  const header = document.querySelector<HTMLElement>(".page-header");
  if (!header) return;
  const mobileMediaQuery = window.matchMedia("(width <= 640px)");

  const toggles = Array.from(
    header.querySelectorAll<HTMLButtonElement>("[data-services-menu-toggle]"),
  );

  if (!toggles.length) return;

  let currentActiveToggle: HTMLButtonElement | null = null;
  let currentActiveMenu: HTMLElement | null = null;

  const syncBodyMenuState = () => {
    document.body.classList.toggle(
      "menu-open",
      header.classList.contains("is-mobile-menu-open") ||
        header.classList.contains("is-services-open"),
    );
  };

  const closeMenu = () => {
    if (!currentActiveMenu || !currentActiveToggle) return;

    header.classList.remove("is-services-open");
    syncBodyMenuState();

    currentActiveToggle.setAttribute("aria-expanded", "false");
    currentActiveMenu.setAttribute("aria-hidden", "true");

    currentActiveToggle = null;
    currentActiveMenu = null;
  };

  const openMenu = (toggle: HTMLButtonElement, menu: HTMLElement) => {
    if (currentActiveMenu && currentActiveMenu !== menu) {
      closeMenu();
    }

    currentActiveToggle = toggle;
    currentActiveMenu = menu;

    header.classList.add("is-services-open");
    syncBodyMenuState();

    toggle.setAttribute("aria-expanded", "true");
    menu.setAttribute("aria-hidden", "false");
  };

  toggles.forEach((toggle) => {
    const menuId = toggle.getAttribute("aria-controls");
    if (!menuId) return;

    const menu =
      document.getElementById(menuId) ||
      header.querySelector<HTMLElement>(`#${menuId}`);
    if (!menu) return;

    const tabs = Array.from(
      menu.querySelectorAll<ServicesMenuTab>("[data-services-menu-tab]"),
    );
    const panes = Array.from(
      menu.querySelectorAll<ServicesMenuPane>("[data-services-menu-pane]"),
    );

    const setActiveTab = (target?: string) => {
      if (!target) return;

      tabs.forEach((tab) => {
        tab.classList.toggle(
          "is-active",
          tab.dataset.servicesMenuTab === target,
        );
      });

      panes.forEach((pane) => {
        pane.classList.toggle(
          "is-active",
          pane.dataset.servicesMenuPane === target,
        );
      });
    };

    if (tabs.length && panes.length) {
      const initialTab = tabs.find((tab) =>
        tab.classList.contains("is-active"),
      );
      setActiveTab(
        initialTab?.dataset.servicesMenuTab ?? tabs[0].dataset.servicesMenuTab,
      );

      tabs.forEach((tab) => {
        const activateTab = () => {
          setActiveTab(tab.dataset.servicesMenuTab);
        };

        tab.addEventListener("mouseenter", activateTab);
        tab.addEventListener("focus", activateTab);
        tab.addEventListener("click", activateTab);
      });
    }

    toggle.addEventListener("click", () => {
      if (mobileMediaQuery.matches) return;

      if (currentActiveToggle === toggle) {
        closeMenu();
      } else {
        openMenu(toggle, menu);
      }
    });

    menu.addEventListener("click", (event) => {
      if (event.target === menu) {
        closeMenu();
      }
    });
  });

  document.addEventListener("keydown", (event) => {
    if (
      event.key === "Escape" &&
      header.classList.contains("is-services-open")
    ) {
      closeMenu();
    }
  });

  mobileMediaQuery.addEventListener("change", (event) => {
    if (event.matches) {
      closeMenu();
    }
  });
}
