const CITY_PICKER_RESET_EVENT = "city-picker:reset";
const CITY_PICKER_CHANGE_EVENT = "city-picker:change";

type CityPickerChangeEventDetail = {
  cityName: string;
  sourceRoot: HTMLElement;
};

const normalize = (value: string) =>
  value.trim().replace(/\s+/g, " ").toLocaleLowerCase("ru-RU");

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
  const mobileAboutToggles = Array.from(
    mobileMenu.querySelectorAll<HTMLButtonElement>("[data-mobile-about-toggle]"),
  );
  const mobileAboutList = mobileMenu.querySelector<HTMLElement>(
    "[data-mobile-about-list]",
  );
  const mobileMenuMain = mobileMenu.querySelector<HTMLElement>("[data-mobile-menu-main]");
  const mobileCitySelectToggle = mobileMenu.querySelector<HTMLButtonElement>(
    "[data-mobile-city-select-toggle]",
  );
  const mobileCitySelectPanel = mobileMenu.querySelector<HTMLElement>(
    "[data-mobile-city-select]",
  );
  const mobileCitySelectRoot = mobileMenu.querySelector<HTMLElement>(
    "[data-mobile-city-select] [data-city-select-root]",
  );
  const mobileCityTabLinks = Array.from(
    mobileMenu.querySelectorAll<HTMLAnchorElement>("[data-mobile-city-tab-link]"),
  );
  const closeOnClickLinks = Array.from(
    mobileMenu.querySelectorAll<HTMLAnchorElement>(
      ".page-header__nav-link, .page-header__mobile-services-link, .page-header__mobile-about-link, .page-header__callback-btn, [data-mobile-city-tab-link]",
    ),
  );

  let currentCityName =
    mobileCityTabLinks.find((cityLink) => cityLink.classList.contains("is-active"))
      ?.dataset.cityName ?? "";

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

  const setMobileAboutState = (isOpen: boolean) => {
    header.classList.toggle("is-mobile-about-open", isOpen);
    mobileAboutToggles.forEach((toggle) => {
      toggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });
    mobilePrimaryNav?.setAttribute("aria-hidden", isOpen ? "true" : "false");
    mobileAboutList?.setAttribute("aria-hidden", isOpen ? "false" : "true");
  };

  const syncMobileCityTabsState = () => {
    const isCitySelectOpen = header.classList.contains("is-mobile-city-select-open");
    const normalizedCurrentCity = normalize(currentCityName);

    mobileCityTabLinks.forEach((cityLink) => {
      const cityName = cityLink.dataset.cityName ?? cityLink.textContent ?? "";
      const isActiveCity =
        !isCitySelectOpen && normalize(cityName) === normalizedCurrentCity;
      cityLink.classList.toggle("is-active", isActiveCity);
    });

    mobileCitySelectToggle?.classList.toggle("is-active", isCitySelectOpen);
  };

  const setMobileCitySelectState = (isOpen: boolean) => {
    header.classList.toggle("is-mobile-city-select-open", isOpen);
    mobileCitySelectToggle?.setAttribute("aria-expanded", isOpen ? "true" : "false");
    mobileMenuMain?.setAttribute("aria-hidden", isOpen ? "true" : "false");
    mobileCitySelectPanel?.setAttribute("aria-hidden", isOpen ? "false" : "true");

    if (isOpen) {
      setMobileServicesState(false);
      setMobileAboutState(false);
      if (mobileCitySelectRoot) {
        document.dispatchEvent(
          new CustomEvent(CITY_PICKER_RESET_EVENT, {
            bubbles: true,
            detail: {
              root: mobileCitySelectRoot,
            },
          }),
        );
      }
    }

    syncMobileCityTabsState();
  };

  const openMenu = () => {
    header.classList.add("is-mobile-menu-open");
    header.classList.remove("is-services-open");
    servicesToggle?.setAttribute("aria-expanded", "false");
    servicesMenu?.setAttribute("aria-hidden", "true");
    setMobileServicesState(false);
    setMobileAboutState(false);
    setMobileCitySelectState(false);
    mobileMenu.setAttribute("aria-hidden", "false");
    setBurgerState(true);
    syncBodyMenuState();
  };

  const closeMenu = () => {
    header.classList.remove("is-mobile-menu-open");
    setMobileServicesState(false);
    setMobileAboutState(false);
    setMobileCitySelectState(false);
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

    setMobileCitySelectState(false);
    setMobileAboutState(false);
    setMobileServicesState(!header.classList.contains("is-mobile-services-open"));
  });

  mobileAboutToggles.forEach((toggle) => {
    toggle.addEventListener("click", () => {
      if (!mobileMediaQuery.matches || !header.classList.contains("is-mobile-menu-open")) {
        return;
      }

      setMobileCitySelectState(false);
      setMobileServicesState(false);
      setMobileAboutState(!header.classList.contains("is-mobile-about-open"));
    });
  });

  mobileCitySelectToggle?.addEventListener("click", () => {
    if (!mobileMediaQuery.matches || !header.classList.contains("is-mobile-menu-open")) {
      return;
    }

    setMobileCitySelectState(!header.classList.contains("is-mobile-city-select-open"));
  });

  mobileMenuClose.addEventListener("click", closeMenu);

  mobileCityTabLinks.forEach((cityLink) => {
    cityLink.addEventListener("click", () => {
      const cityName = cityLink.dataset.cityName ?? cityLink.textContent ?? "";
      if (cityName) {
        currentCityName = cityName;
      }
      syncMobileCityTabsState();
    });
  });

  closeOnClickLinks.forEach((link) => {
    link.addEventListener("click", () => {
      if (!header.classList.contains("is-mobile-menu-open")) return;
      closeMenu();
    });
  });

  document.addEventListener(CITY_PICKER_CHANGE_EVENT, (event) => {
    const detail = (event as CustomEvent<CityPickerChangeEventDetail>).detail;
    const { cityName, sourceRoot } = detail ?? {};

    if (!cityName || !sourceRoot || !mobileCitySelectPanel?.contains(sourceRoot)) return;

    currentCityName = cityName;
    setMobileCitySelectState(false);
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
  setMobileAboutState(false);
  setMobileCitySelectState(false);
  mobileMenu.setAttribute("aria-hidden", "true");
}
