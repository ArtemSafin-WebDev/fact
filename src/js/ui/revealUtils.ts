function getPageMainSection(section: HTMLElement) {
  const pageMain = section.closest("main");

  if (!pageMain) return null;

  return pageMain.querySelector<HTMLElement>("section");
}

export function isFirstPageSection(section: HTMLElement) {
  return getPageMainSection(section) === section;
}

export function isInitiallyVisible(section: HTMLElement) {
  const rect = section.getBoundingClientRect();

  return rect.top < window.innerHeight && rect.bottom > 0;
}

export function shouldSkipScrollReveal(section: HTMLElement) {
  return isFirstPageSection(section) || isInitiallyVisible(section);
}
