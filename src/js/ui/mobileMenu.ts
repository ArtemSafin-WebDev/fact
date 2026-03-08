import syncMenuScrollLock from "./menuScrollLock";

export default function mobileMenu() {
  const header = document.querySelector<HTMLElement>(".page-header");
  const burger = header?.querySelector<HTMLButtonElement>(".page-header__burger");

  if (!header || !burger) return;

  const mobileMediaQuery = window.matchMedia("(width <= 640px)");
  const servicesToggle = header.querySelector<HTMLButtonElement>(
    "[data-services-menu-toggle]",
  );
  const servicesMenu = header.querySelector<HTMLElement>("[data-services-menu]");
  const closeOnClickLinks = Array.from(
    header.querySelectorAll<HTMLAnchorElement>(
      ".page-header__nav-link, .page-header__callback-btn",
    ),
  );

  const setBurgerState = (isOpen: boolean) => {
    burger.setAttribute("aria-expanded", isOpen ? "true" : "false");
    burger.setAttribute("aria-label", isOpen ? "Закрыть меню" : "Открыть меню");
  };

  const openMenu = () => {
    header.classList.add("is-mobile-menu-open");
    header.classList.remove("is-services-open");
    servicesToggle?.setAttribute("aria-expanded", "false");
    servicesMenu?.setAttribute("aria-hidden", "true");
    setBurgerState(true);
    syncMenuScrollLock(header);
  };

  const closeMenu = () => {
    header.classList.remove("is-mobile-menu-open");
    setBurgerState(false);
    syncMenuScrollLock(header);
  };

  burger.addEventListener("click", () => {
    if (!mobileMediaQuery.matches) return;

    if (header.classList.contains("is-mobile-menu-open")) {
      closeMenu();
      return;
    }

    openMenu();
  });

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
}
