"use strict";

(() => {
  const FORM_SELECTOR = ".js-form";
  const ACTIVE_MODAL_SELECTOR = ".js-modal.active";
  const SUCCESS_MODAL_ID = "#feedback-success-modal";

  const closeActiveModals = () => {
    const activeModals = document.querySelectorAll(ACTIVE_MODAL_SELECTOR);
    activeModals.forEach((modal) => {
      modal.classList.remove("active");
      document.dispatchEvent(
        new CustomEvent("modal:close", {
          bubbles: true,
          detail: { modal },
        }),
      );
    });
    if (!document.querySelector(ACTIVE_MODAL_SELECTOR)) {
      document.body.classList.remove("modal-open");
    }
  };

  const openSuccessModal = () => {
    const modal = document.querySelector(SUCCESS_MODAL_ID);
    if (!modal) return;

    closeActiveModals();
    modal.classList.add("active");
    document.body.classList.add("modal-open");
    document.dispatchEvent(
      new CustomEvent("modal:open", {
        bubbles: true,
        detail: { modal },
      }),
    );
  };

  const submitForm = async (form) => {
    const action = form.getAttribute("action") || window.location.href;
    const method = (form.getAttribute("method") || "POST").toUpperCase();
    const formData = new FormData(form);

    if (method === "GET") {
      const url = new URL(action, window.location.origin);
      for (const [key, value] of formData.entries()) {
        url.searchParams.append(key, String(value));
      }
      return fetch(url.toString(), { method: "GET" });
    }

    return fetch(action, {
      method,
      body: formData,
    });
  };

  const initForms = () => {
    const Validator = window.Validator;
    if (typeof Validator !== "function") {
      console.error("Validator class is not available in window");
      return;
    }

    const forms = document.querySelectorAll(FORM_SELECTOR);
    forms.forEach((form) => {
      const validator = new Validator(form);

      form.addEventListener("submit", async (event) => {
        event.preventDefault();

        if (!validator.validate()) {
          return;
        }

        try {
          const response = await submitForm(form);
          if (!response.ok) {
            throw new Error(`Request failed with status ${response.status}`);
          }

          form.reset();
          openSuccessModal();
        } catch (error) {
          console.error("Form submit failed:", error);
        }
      });
    });
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initForms);
  } else {
    initForms();
  }
})();
