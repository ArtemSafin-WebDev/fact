export default function syncMenuScrollLock(header: HTMLElement) {
  const shouldLock =
    header.classList.contains("is-services-open") ||
    header.classList.contains("is-mobile-menu-open");
  const lockAttr = "data-menu-scroll-lock-y";
  const lockPosition = document.body.getAttribute(lockAttr);

  if (shouldLock) {
    document.body.classList.add("menu-open");

    if (lockPosition !== null) return;

    const scrollY = window.scrollY;

    document.body.setAttribute(lockAttr, String(scrollY));
    document.body.style.position = "fixed";
    document.body.style.top = `-${scrollY}px`;
    document.body.style.left = "0";
    document.body.style.right = "0";
    document.body.style.width = "100%";

    return;
  }

  document.body.classList.remove("menu-open");

  if (lockPosition === null) return;

  const scrollY = Number(lockPosition) || 0;

  document.body.removeAttribute(lockAttr);
  document.body.style.position = "";
  document.body.style.top = "";
  document.body.style.left = "";
  document.body.style.right = "";
  document.body.style.width = "";

  window.scrollTo(0, scrollY);
}
