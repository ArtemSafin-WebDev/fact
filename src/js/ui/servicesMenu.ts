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

  const toggle = header.querySelector<HTMLButtonElement>(
    "[data-services-menu-toggle]",
  );
  const menu = header.querySelector<HTMLElement>("[data-services-menu]");
  const tabs = Array.from(
    header.querySelectorAll<ServicesMenuTab>("[data-services-menu-tab]"),
  );
  const panes = Array.from(
    header.querySelectorAll<ServicesMenuPane>("[data-services-menu-pane]"),
  );

  if (!toggle || !menu || !tabs.length || !panes.length) return;

  const syncBodyMenuState = () => {
    document.body.classList.toggle(
      "menu-open",
      header.classList.contains("is-mobile-menu-open") ||
        header.classList.contains("is-services-open"),
    );
  };

  const setActiveTab = (target?: string) => {
    if (!target) return;

    tabs.forEach((tab) => {
      tab.classList.toggle("is-active", tab.dataset.servicesMenuTab === target);
    });

    panes.forEach((pane) => {
      pane.classList.toggle(
        "is-active",
        pane.dataset.servicesMenuPane === target,
      );
    });
  };

  const openMenu = () => {
    header.classList.add("is-services-open");
    syncBodyMenuState();
    toggle.setAttribute("aria-expanded", "true");
    menu.setAttribute("aria-hidden", "false");
  };

  const closeMenu = () => {
    header.classList.remove("is-services-open");
    syncBodyMenuState();
    toggle.setAttribute("aria-expanded", "false");
    menu.setAttribute("aria-hidden", "true");
  };

  const initialTab = tabs.find((tab) => tab.classList.contains("is-active"));
  setActiveTab(initialTab?.dataset.servicesMenuTab ?? tabs[0].dataset.servicesMenuTab);

  toggle.addEventListener("click", () => {
    if (mobileMediaQuery.matches) return;

    if (header.classList.contains("is-services-open")) {
      closeMenu();
      return;
    }

    openMenu();
  });

  tabs.forEach((tab) => {
    const activateTab = () => {
      setActiveTab(tab.dataset.servicesMenuTab);
    };

    tab.addEventListener("mouseenter", activateTab);
    tab.addEventListener("focus", activateTab);
    tab.addEventListener("click", activateTab);
  });

  menu.addEventListener("click", (event) => {
    if (event.target === menu) {
      closeMenu();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && header.classList.contains("is-services-open")) {
      closeMenu();
    }
  });

  mobileMediaQuery.addEventListener("change", (event) => {
    if (event.matches) {
      closeMenu();
    }
  });
}
