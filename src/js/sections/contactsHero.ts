import initYandexMap, { type ContactsMapPoint } from "./yandexMaps";

const DEFAULT_MAP_ZOOM = 15;

const parseCityPoint = (
  button: HTMLButtonElement,
): ContactsMapPoint | undefined => {
  const id = button.dataset.contactsTabBtn;
  const lat = Number(button.dataset.mapLat);
  const lng = Number(button.dataset.mapLng);
  const zoom = Number(button.dataset.mapZoom || DEFAULT_MAP_ZOOM);

  if (!id || Number.isNaN(lat) || Number.isNaN(lng)) return;

  return {
    id,
    lat,
    lng,
    zoom: Number.isNaN(zoom) ? DEFAULT_MAP_ZOOM : zoom,
    title:
      button.querySelector<HTMLElement>(".contacts-hero__tab-city")
        ?.textContent?.trim() ?? id,
  };
};

export default function contactsHero() {
  const sections = Array.from(
    document.querySelectorAll<HTMLElement>(".contacts-hero"),
  );

  sections.forEach((section) => {
    const tabButtons = Array.from(
      section.querySelectorAll<HTMLButtonElement>("[data-contacts-tab-btn]"),
    );
    const cityPanels = Array.from(
      section.querySelectorAll<HTMLElement>("[data-contacts-city-panel]"),
    );
    const mapContainer =
      section.querySelector<HTMLElement>("[data-contacts-map]");
    const mapWrap = section.querySelector<HTMLElement>(".contacts-hero__map");
    const panelsWrap =
      section.querySelector<HTMLElement>(".contacts-hero__panels");
    const cityPoints = tabButtons
      .map(parseCityPoint)
      .filter((point): point is ContactsMapPoint => Boolean(point));

    if (!tabButtons.length || !cityPanels.length) return;

    type MapController = Awaited<ReturnType<typeof initYandexMap>>;
    let mapController: MapController = null;
    let viewportWidth = window.innerWidth;

    const getPanelsOverlayHeight = () => {
      if (!mapWrap || !panelsWrap) return 0;

      const mapRect = mapWrap.getBoundingClientRect();
      const panelsRect = panelsWrap.getBoundingClientRect();

      const overlap = Math.max(
        0,
        Math.min(mapRect.bottom, panelsRect.bottom) -
          Math.max(mapRect.top, panelsRect.top),
      );

      return Math.round(overlap);
    };

    const setActiveCity = (cityId: string) => {
      tabButtons.forEach((button) => {
        const isActive = button.dataset.contactsTabBtn === cityId;
        button.classList.toggle("active", isActive);
        button.setAttribute("aria-selected", isActive ? "true" : "false");
      });

      cityPanels.forEach((panel) => {
        const isActive = panel.dataset.contactsCityPanel === cityId;
        panel.classList.toggle("is-active", isActive);
      });

      mapController?.focusCity(cityId);
    };

    const initialCityId =
      tabButtons.find((button) => button.classList.contains("active"))?.dataset
        .contactsTabBtn ?? tabButtons[0]?.dataset.contactsTabBtn;

    if (initialCityId) {
      setActiveCity(initialCityId);
    }

    void initYandexMap(mapContainer, cityPoints, {
      bottomMargin: getPanelsOverlayHeight(),
    })
      .then((controller) => {
        if (!controller) return;
        mapController = controller;

        mapController.setBottomMargin(getPanelsOverlayHeight());

        if (initialCityId) {
          mapController.focusCity(initialCityId);
        }
      })
      .catch((error) => {
        console.error("Yandex map init error", error);
      });

    tabButtons.forEach((button) => {
      button.addEventListener("click", () => {
        const cityId = button.dataset.contactsTabBtn;
        if (!cityId) return;
        setActiveCity(cityId);
      });
    });

    window.addEventListener("resize", () => {
      const nextViewportWidth = window.innerWidth;
      if (nextViewportWidth === viewportWidth) return;

      viewportWidth = nextViewportWidth;
      mapController?.setBottomMargin(getPanelsOverlayHeight());
    });
  });
}
