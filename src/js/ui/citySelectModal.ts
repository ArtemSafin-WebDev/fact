const CITY_SELECT_MODAL_SELECTOR = "#city-select-modal";
const CITY_SEARCH_INPUT_SELECTOR = "[data-city-search-input]";
const CITY_FEATURED_COLUMN_SELECTOR = "[data-city-featured-column]";
const CITY_GROUP_SELECTOR = "[data-city-letter-group]";
const CITY_ITEM_SELECTOR = "[data-city-name]";
const CITY_MASONRY_SELECTOR = "[data-city-masonry]";
const CITY_SEARCH_EMPTY_SELECTOR = "[data-city-search-empty]";
const CITY_SEARCH_SCROLL_SELECTOR = "[data-city-search-scroll]";
const DESKTOP_CITY_SELECTOR = ".page-header__schedule .city";
const MOBILE_CITY_SELECTOR = ".page-header__mobile-city";
const CITY_MODAL_CURRENT_CITY_SELECTOR = "[data-current-city-name]";

const normalize = (value: string) =>
  value.trim().replace(/\s+/g, " ").toLocaleLowerCase("ru-RU");

export default function citySelectModal() {
  const modal = document.querySelector<HTMLElement>(CITY_SELECT_MODAL_SELECTOR);
  if (!modal) return;

  const searchInput = modal.querySelector<HTMLInputElement>(
    CITY_SEARCH_INPUT_SELECTOR,
  );
  const featuredColumn = modal.querySelector<HTMLElement>(CITY_FEATURED_COLUMN_SELECTOR);
  const groups = Array.from(modal.querySelectorAll<HTMLElement>(CITY_GROUP_SELECTOR));
  const cityItems = Array.from(modal.querySelectorAll<HTMLElement>(CITY_ITEM_SELECTOR));
  const masonry = modal.querySelector<HTMLElement>(CITY_MASONRY_SELECTOR);
  const emptyState = modal.querySelector<HTMLElement>(CITY_SEARCH_EMPTY_SELECTOR);
  const scrollArea = modal.querySelector<HTMLElement>(CITY_SEARCH_SCROLL_SELECTOR);
  const desktopCity = document.querySelector<HTMLElement>(DESKTOP_CITY_SELECTOR);
  const mobileCity = document.querySelector<HTMLElement>(MOBILE_CITY_SELECTOR);
  const currentCityInPrimaryModal = document.querySelector<HTMLElement>(
    CITY_MODAL_CURRENT_CITY_SELECTOR,
  );

  const updateCurrentCity = (cityName: string) => {
    if (desktopCity) {
      desktopCity.textContent = cityName;
    }
    if (mobileCity) {
      mobileCity.textContent = cityName;
    }
    if (currentCityInPrimaryModal) {
      currentCityInPrimaryModal.textContent = cityName;
    }
  };

  const updateFilteredView = (query: string) => {
    let visibleItemsCount = 0;

    cityItems.forEach((cityItem) => {
      const cityName = cityItem.dataset.cityName ?? cityItem.textContent ?? "";
      const shouldShow = !query || normalize(cityName).includes(query);
      cityItem.hidden = !shouldShow;
      const cityListItem = cityItem.closest<HTMLElement>("li");
      if (cityListItem) {
        cityListItem.hidden = !shouldShow;
      }
      if (shouldShow) {
        visibleItemsCount += 1;
      }
    });

    groups.forEach((group) => {
      const groupCities = Array.from(group.querySelectorAll<HTMLElement>(CITY_ITEM_SELECTOR));
      const hasVisibleCities = groupCities.some((city) => !city.hidden);
      group.hidden = !hasVisibleCities;
    });

    if (featuredColumn) {
      const featuredCities = Array.from(
        featuredColumn.querySelectorAll<HTMLElement>(CITY_ITEM_SELECTOR),
      );
      const hasVisibleFeaturedCities = featuredCities.some((city) => !city.hidden);
      featuredColumn.hidden = !hasVisibleFeaturedCities;
    }

    if (masonry) {
      const hasVisibleGroups = groups.some((group) => !group.hidden);
      masonry.hidden = !hasVisibleGroups;
    }

    if (emptyState) {
      emptyState.hidden = visibleItemsCount > 0;
    }
  };

  searchInput?.addEventListener("input", () => {
    updateFilteredView(normalize(searchInput.value));
  });

  modal.addEventListener("click", (event) => {
    const target = event.target as HTMLElement;
    const cityItem = target.closest<HTMLElement>(CITY_ITEM_SELECTOR);
    if (!cityItem) return;

    const cityName = cityItem.dataset.cityName ?? cityItem.textContent?.trim() ?? "";
    if (!cityName) return;

    updateCurrentCity(cityName);
  });

  document.addEventListener("modal:open", (event) => {
    const modalOpenEvent = event as CustomEvent<{ modal?: HTMLElement }>;
    if (modalOpenEvent.detail?.modal !== modal) return;

    if (searchInput) {
      searchInput.value = "";
      searchInput.focus();
    }
    if (scrollArea) {
      scrollArea.scrollTop = 0;
    }

    updateFilteredView("");
  });

  updateFilteredView("");
}
