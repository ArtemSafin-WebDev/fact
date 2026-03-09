type ModalDetail = {
  modal: HTMLElement;
};

export default function modals() {
  const OPEN_BTN_SELECTOR = "a[href^='#']";
  const OPEN_BY_DATA_SELECTOR = "[data-modal-target]";
  const CLOSE_BTN_SELECTOR = ".js-modal-close";

  const openModal = (modal: HTMLElement) => {
    modal.classList.add("active");
    document.body.classList.add("modal-open");
    document.dispatchEvent(
      new CustomEvent<ModalDetail>("modal:open", {
        bubbles: true,
        detail: {
          modal,
        },
      }),
    );
  };

  const closeModal = (modal: HTMLElement) => {
    modal.classList.remove("active");
    document.body.classList.remove("modal-open");
    document.dispatchEvent(
      new CustomEvent<ModalDetail>("modal:close", {
        bubbles: true,
        detail: {
          modal,
        },
      }),
    );
  };

  const closeCurrentActiveModals = () => {
    const currentActiveModals = Array.from(
      document.querySelectorAll<HTMLElement>(".js-modal.active"),
    );
    if (!currentActiveModals.length) return;
    document.body.classList.remove("menu-open");
    currentActiveModals.forEach((modal) => {
      closeModal(modal);
    });
  };

  document.addEventListener("click", (event) => {
    const target = event.target as HTMLElement;
    if (target?.closest(OPEN_BY_DATA_SELECTOR)) {
      const trigger = target.matches(OPEN_BY_DATA_SELECTOR)
        ? target
        : target.closest<HTMLElement>(OPEN_BY_DATA_SELECTOR);
      if (!trigger) return;
      const modalHash = trigger.dataset.modalTarget;
      if (!modalHash) return;
      const modal = document.querySelector<HTMLElement>(`.js-modal${modalHash}`);
      if (!modal) return;
      event.preventDefault();
      closeCurrentActiveModals();
      openModal(modal);
      return;
    }

    if (target?.closest(OPEN_BTN_SELECTOR)) {
      const btn = target.matches(OPEN_BTN_SELECTOR)
        ? (target as HTMLAnchorElement)
        : target.closest<HTMLAnchorElement>(OPEN_BTN_SELECTOR);
      if (!btn) return;
      const hash = btn.hash;
      if (!hash) return;
      const modal = document.querySelector<HTMLElement>(`.js-modal${hash}`);
      if (!modal) return;
      event.preventDefault();
      closeCurrentActiveModals();
      openModal(modal);
    }
  });
  document.addEventListener("click", (event) => {
    const target = event.target as HTMLElement;
    if (target.closest(CLOSE_BTN_SELECTOR)) {
      event.preventDefault();
      closeCurrentActiveModals();
    }
  });

  document.addEventListener("click", (event) => {
    const target = event.target as HTMLElement;
    if (target.matches(".js-modal")) {
      closeModal(target);
    }
  });

  window.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeCurrentActiveModals();
    }
  });
}
