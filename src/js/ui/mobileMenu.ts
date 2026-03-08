export default function mobileMenu() {
  const header = document.querySelector<HTMLElement>(".page-header");
  const burger = header?.querySelector<HTMLButtonElement>(".page-header__burger");
  const mobileMenu = header?.querySelector<HTMLElement>("[data-mobile-menu]");
  const mobileMenuClose = header?.querySelector<HTMLButtonElement>(
    "[data-mobile-menu-close]",
  );

  if (!header || !burger || !mobileMenu || !mobileMenuClose) return;

  const mobileMediaQuery = window.matchMedia("(width <= 640px)");
  const servicesToggle = header.querySelector<HTMLButtonElement>(
    "[data-services-menu-toggle]",
  );
  const servicesMenu = header.querySelector<HTMLElement>("[data-services-menu]");
  const mobileServicesToggle = mobileMenu.querySelector<HTMLButtonElement>(
    "[data-mobile-services-toggle]",
  );
  const mobilePrimaryNav = mobileMenu.querySelector<HTMLElement>(
    "[data-mobile-primary-nav]",
  );
  const mobileServicesList = mobileMenu.querySelector<HTMLElement>(
    "[data-mobile-services-list]",
  );
  const closeOnClickLinks = Array.from(
    mobileMenu.querySelectorAll<HTMLAnchorElement>(
      ".page-header__nav-link, .page-header__mobile-services-link, .page-header__callback-btn",
    ),
  );

  const syncBodyMenuState = () => {
    document.body.classList.toggle(
      "menu-open",
      header.classList.contains("is-mobile-menu-open") ||
        header.classList.contains("is-services-open"),
    );
  };

  const setBurgerState = (isOpen: boolean) => {
    burger.setAttribute("aria-expanded", isOpen ? "true" : "false");
    burger.setAttribute("aria-label", isOpen ? "Закрыть меню" : "Открыть меню");
  };

  const setMobileServicesState = (isOpen: boolean) => {
    header.classList.toggle("is-mobile-services-open", isOpen);
    mobileServicesToggle?.setAttribute("aria-expanded", isOpen ? "true" : "false");
    mobilePrimaryNav?.setAttribute("aria-hidden", isOpen ? "true" : "false");
    mobileServicesList?.setAttribute("aria-hidden", isOpen ? "false" : "true");
  };

  const openMenu = () => {
    header.classList.add("is-mobile-menu-open");
    header.classList.remove("is-services-open");
    servicesToggle?.setAttribute("aria-expanded", "false");
    servicesMenu?.setAttribute("aria-hidden", "true");
    setMobileServicesState(false);
    mobileMenu.setAttribute("aria-hidden", "false");
    setBurgerState(true);
    syncBodyMenuState();
  };

  const closeMenu = () => {
    header.classList.remove("is-mobile-menu-open");
    setMobileServicesState(false);
    mobileMenu.setAttribute("aria-hidden", "true");
    setBurgerState(false);
    syncBodyMenuState();
  };

  burger.addEventListener("click", () => {
    if (!mobileMediaQuery.matches) return;

    if (header.classList.contains("is-mobile-menu-open")) {
      closeMenu();
      return;
    }

    openMenu();
  });

  mobileServicesToggle?.addEventListener("click", () => {
    if (!mobileMediaQuery.matches || !header.classList.contains("is-mobile-menu-open")) {
      return;
    }

    setMobileServicesState(!header.classList.contains("is-mobile-services-open"));
  });

  mobileMenuClose.addEventListener("click", closeMenu);

  closeOnClickLinks.forEach((link) => {
    link.addEventListener("click", () => {
      if (!header.classList.contains("is-mobile-menu-open")) return;
      closeMenu();
    });
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && header.classList.contains("is-mobile-menu-open")) {
      closeMenu();
    }
  });

  mobileMediaQuery.addEventListener("change", (event) => {
    if (!event.matches) {
      closeMenu();
    }
  });

  setBurgerState(false);
  setMobileServicesState(false);
  mobileMenu.setAttribute("aria-hidden", "true");
}
