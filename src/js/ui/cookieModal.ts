const COOKIE_MODAL_SELECTOR = "#cookie-modal";
const COOKIE_ACCEPT_BTN_SELECTOR = ".js-cookie-accept";
const COOKIE_DISMISS_BTN_SELECTOR = ".js-cookie-dismiss";

const getCookieModal = () =>
  document.querySelector<HTMLElement>(COOKIE_MODAL_SELECTOR);

const openCookieModal = (modal: HTMLElement) => {
  modal.classList.add("active");
  modal.setAttribute("aria-hidden", "false");
};

const closeCookieModal = (modal: HTMLElement) => {
  modal.classList.remove("active");
  modal.setAttribute("aria-hidden", "true");
};

export default function cookieModal() {
  const modal = getCookieModal();
  if (!modal) return;

  window.addEventListener("load", () => {
    openCookieModal(modal);
  });

  document.addEventListener("click", (event) => {
    const target = event.target as HTMLElement;
    if (!target.closest(COOKIE_ACCEPT_BTN_SELECTOR)) return;

    event.preventDefault();
    closeCookieModal(modal);
  });

  document.addEventListener("click", (event) => {
    const target = event.target as HTMLElement;
    if (!target.closest(COOKIE_DISMISS_BTN_SELECTOR)) return;

    event.preventDefault();
    closeCookieModal(modal);
  });
}
