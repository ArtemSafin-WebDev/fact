const CITY_PICKER_ROOT_SELECTOR = "[data-city-select-root]";
const CITY_SEARCH_INPUT_SELECTOR = "[data-city-search-input]";
const CITY_FEATURED_COLUMN_SELECTOR = "[data-city-featured-column]";
const CITY_GROUP_SELECTOR = "[data-city-letter-group]";
const CITY_ITEM_SELECTOR = "[data-city-name]";
const CITY_MASONRY_SELECTOR = "[data-city-masonry]";
const CITY_SEARCH_EMPTY_SELECTOR = "[data-city-search-empty]";
const CITY_SEARCH_SCROLL_SELECTOR = "[data-city-search-scroll]";
const CITY_SELECT_MODAL_SELECTOR = "#city-select-modal";
const DESKTOP_CITY_SELECTOR = ".page-header__schedule .city";
const CITY_MODAL_CURRENT_CITY_SELECTOR = "[data-current-city-name]";
const CITY_PICKER_RESET_EVENT = "city-picker:reset";
const CITY_PICKER_CHANGE_EVENT = "city-picker:change";
const CITY_QUERY_PARAM = "city";

type ModalOpenEventDetail = {
  modal?: HTMLElement;
};

type CityPickerResetEventDetail = {
  root?: HTMLElement;
};

const normalize = (value: string) =>
  value.trim().replace(/\s+/g, " ").toLocaleLowerCase("ru-RU");

export default function citySelectModal() {
  const pickerRoots = Array.from(
    document.querySelectorAll<HTMLElement>(CITY_PICKER_ROOT_SELECTOR),
  );
  if (!pickerRoots.length) return;

  const desktopCity = document.querySelector<HTMLElement>(DESKTOP_CITY_SELECTOR);
  const currentCityInPrimaryModal = document.querySelector<HTMLElement>(
    CITY_MODAL_CURRENT_CITY_SELECTOR,
  );

  const updateCurrentCity = (cityName: string) => {
    if (desktopCity) {
      desktopCity.textContent = cityName;
    }
    if (currentCityInPrimaryModal) {
      currentCityInPrimaryModal.textContent = cityName;
    }
  };

  const getCityHref = (cityName: string) => {
    const url = new URL(window.location.href);
    url.searchParams.set(CITY_QUERY_PARAM, cityName);
    url.hash = "";
    return `${url.pathname}${url.search}`;
  };

  pickerRoots.forEach((pickerRoot) => {
    const searchInput = pickerRoot.querySelector<HTMLInputElement>(
      CITY_SEARCH_INPUT_SELECTOR,
    );
    const featuredColumn = pickerRoot.querySelector<HTMLElement>(
      CITY_FEATURED_COLUMN_SELECTOR,
    );
    const groups = Array.from(pickerRoot.querySelectorAll<HTMLElement>(CITY_GROUP_SELECTOR));
    const cityItems = Array.from(pickerRoot.querySelectorAll<HTMLElement>(CITY_ITEM_SELECTOR));
    const masonry = pickerRoot.querySelector<HTMLElement>(CITY_MASONRY_SELECTOR);
    const emptyState = pickerRoot.querySelector<HTMLElement>(CITY_SEARCH_EMPTY_SELECTOR);
    const scrollArea = pickerRoot.querySelector<HTMLElement>(CITY_SEARCH_SCROLL_SELECTOR);

    if (!cityItems.length) return;

    cityItems.forEach((cityItem) => {
      const cityName = cityItem.dataset.cityName ?? cityItem.textContent?.trim() ?? "";
      if (!cityName || !(cityItem instanceof HTMLAnchorElement)) return;

      cityItem.setAttribute("href", getCityHref(cityName));
    });

    const modal = pickerRoot.closest<HTMLElement>(CITY_SELECT_MODAL_SELECTOR);
    const modalCloseButton = modal?.querySelector<HTMLButtonElement>(".js-modal-close");

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
        const groupCities = Array.from(
          group.querySelectorAll<HTMLElement>(CITY_ITEM_SELECTOR),
        );
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

    const resetPicker = (withFocus = false) => {
      if (searchInput) {
        searchInput.value = "";
        if (withFocus) {
          searchInput.focus();
        }
      }
      if (scrollArea) {
        scrollArea.scrollTop = 0;
      }

      updateFilteredView("");
    };

    searchInput?.addEventListener("input", () => {
      updateFilteredView(normalize(searchInput.value));
    });

    pickerRoot.addEventListener("click", (event) => {
      const target = event.target as HTMLElement;
      const cityItem = target.closest<HTMLElement>(CITY_ITEM_SELECTOR);
      if (!cityItem || !pickerRoot.contains(cityItem)) return;

      const cityName = cityItem.dataset.cityName ?? cityItem.textContent?.trim() ?? "";
      if (!cityName) return;

      updateCurrentCity(cityName);

      document.dispatchEvent(
        new CustomEvent(CITY_PICKER_CHANGE_EVENT, {
          bubbles: true,
          detail: {
            cityName,
            sourceRoot: pickerRoot,
          },
        }),
      );

      if (modal?.classList.contains("active")) {
        modalCloseButton?.click();
      }
    });

    document.addEventListener("modal:open", (event) => {
      const modalOpenEvent = event as CustomEvent<ModalOpenEventDetail>;
      if (!modal || modalOpenEvent.detail?.modal !== modal) return;
      resetPicker(true);
    });

    document.addEventListener(CITY_PICKER_RESET_EVENT, (event) => {
      const pickerResetEvent = event as CustomEvent<CityPickerResetEventDetail>;
      if (pickerResetEvent.detail?.root !== pickerRoot) return;
      resetPicker(true);
    });

    updateFilteredView("");
  });
}
