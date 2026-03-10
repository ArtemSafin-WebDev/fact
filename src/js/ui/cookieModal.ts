const COOKIE_MODAL_SELECTOR = "#cookie-modal";
const COOKIE_ACCEPT_BTN_SELECTOR = ".js-cookie-accept";
const COOKIE_STORAGE_KEY = "fact-cookie-consent";
const COOKIE_ACCEPTED_VALUE = "accepted";

const getCookieModal = () =>
  document.querySelector<HTMLElement>(COOKIE_MODAL_SELECTOR);

const hasAcceptedCookies = () => {
  try {
    return localStorage.getItem(COOKIE_STORAGE_KEY) === COOKIE_ACCEPTED_VALUE;
  } catch {
    return false;
  }
};

const setAcceptedCookies = () => {
  try {
    localStorage.setItem(COOKIE_STORAGE_KEY, COOKIE_ACCEPTED_VALUE);
  } catch {
    return;
  }
};

const openCookieModal = (modal: HTMLElement) => {
  modal.classList.add("active");
  document.body.classList.add("modal-open");
};

const closeCookieModal = (modal: HTMLElement) => {
  modal.classList.remove("active");
  if (!document.querySelector(".js-modal.active")) {
    document.body.classList.remove("modal-open");
  }
};

export default function cookieModal() {
  const modal = getCookieModal();
  if (!modal) return;

  window.addEventListener("load", () => {
    if (hasAcceptedCookies()) return;
    openCookieModal(modal);
  });

  document.addEventListener("click", (event) => {
    const target = event.target as HTMLElement;
    if (!target.closest(COOKIE_ACCEPT_BTN_SELECTOR)) return;

    event.preventDefault();
    setAcceptedCookies();
    closeCookieModal(modal);
  });
}
