const COMPACT_CLASS = "is-compact";

export default function headerCompact() {
  const header = document.querySelector<HTMLElement>(".page-header");
  const bottom = header?.querySelector<HTMLElement>(".page-header__bottom");

  if (!header || !bottom) return;
  let compactThreshold = 0;
  let isTicking = false;

  const setCompactState = (isCompact: boolean) => {
    header.classList.toggle(COMPACT_CLASS, isCompact);
  };

  const recalculateThreshold = () => {
    const wasCompact = header.classList.contains(COMPACT_CLASS);

    if (wasCompact) {
      header.classList.remove(COMPACT_CLASS);
    }

    compactThreshold = bottom.getBoundingClientRect().top + window.scrollY;
  };

  const syncCompactState = () => {
    setCompactState(window.scrollY >= compactThreshold);
  };

  const onScroll = () => {
    if (isTicking) return;

    isTicking = true;
    window.requestAnimationFrame(() => {
      syncCompactState();
      isTicking = false;
    });
  };

  const onViewportChange = () => {
    recalculateThreshold();
    syncCompactState();
  };

  recalculateThreshold();
  syncCompactState();

  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", onViewportChange);
  window.addEventListener("load", onViewportChange);
}
