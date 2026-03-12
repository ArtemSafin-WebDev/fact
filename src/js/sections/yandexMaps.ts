import type { YMapLocationRequest } from "ymaps3";
import type { IconName } from "@yandex/ymaps3-default-ui-theme/dist/types/icons";
import type { MarkerColorProps } from "@yandex/ymaps3-default-ui-theme/dist/types/markers/YMapDefaultMarker";
import "@yandex/ymaps3-default-ui-theme/dist/esm/index.css";

export type ContactsMapPoint = {
  id: string;
  title: string;
  lat: number;
  lng: number;
  zoom: number;
};

type ContactsMapController = {
  focusCity: (cityId: string) => void;
};

const markerColor: MarkerColorProps = {
  day: "#4BE822",
  night: "#4BE822",
};

const markerIcon: IconName = "fallback";
const YMAPS_THEME_PACKAGE = "@yandex/ymaps3-default-ui-theme";
const YMAPS_THEME_PACKAGE_VERSION = "0.0.24";

let isThemeLoaderRegistered = false;

const buildMapLocation = (
  point: ContactsMapPoint,
  duration?: number,
): YMapLocationRequest => ({
  center: [point.lng, point.lat],
  zoom: point.zoom,
  duration,
});

export default async function initYandexMap(
  container: HTMLElement | null,
  points: ContactsMapPoint[],
): Promise<ContactsMapController | null> {
  if (!container || !points.length) return null;

  await ymaps3.ready;

  if (!isThemeLoaderRegistered) {
    ymaps3.import.registerCdn("https://cdn.jsdelivr.net/npm/{package}", [
      `${YMAPS_THEME_PACKAGE}@${YMAPS_THEME_PACKAGE_VERSION}`,
    ]);
    isThemeLoaderRegistered = true;
  }

  const {
    YMap,
    YMapControls,
    YMapDefaultSchemeLayer,
    YMapDefaultFeaturesLayer,
  } = ymaps3;

  const { YMapZoomControl, YMapDefaultMarker } = (await ymaps3.import(
    YMAPS_THEME_PACKAGE,
  )) as typeof import("@yandex/ymaps3-default-ui-theme");

  const initialPoint = points[0];

  const map = new YMap(container, {
    location: buildMapLocation(initialPoint),
    behaviors: ["drag", "pinchZoom", "dblClick"],
  });

  map.addChild(new YMapDefaultSchemeLayer({}));
  map.addChild(new YMapDefaultFeaturesLayer({}));

  const controls = new YMapControls({
    position: "top right",
    orientation: "vertical",
  });
  controls.addChild(new YMapZoomControl({ easing: "linear" }));
  map.addChild(controls);

  points.forEach((point) => {
    map.addChild(
      new YMapDefaultMarker({
        coordinates: [point.lng, point.lat],
        size: "normal",
        iconName: markerIcon,
        color: markerColor,
        title: point.title,
      }),
    );
  });

  const pointsById = new Map(points.map((point) => [point.id, point]));

  return {
    focusCity(cityId: string) {
      const targetPoint = pointsById.get(cityId);
      if (!targetPoint) return;

      map.update({
        location: buildMapLocation(targetPoint, 350),
      });
    },
  };
}
