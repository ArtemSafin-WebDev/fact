import AirDatepicker from "air-datepicker";
import localeRu from "air-datepicker/locale/ru";
import Validator from "../classes/Validator";

export default function taxDeduction() {
  const forms = Array.from(
    document.querySelectorAll<HTMLFormElement>(".tax-deduction__form.js-form"),
  );

  forms.forEach((form) => {
    const validator = new Validator(form);

    form.addEventListener("submit", (event) => {
      if (validator.validate()) {
        return;
      }

      event.preventDefault();
    });
  });

  const pickers = Array.from(
    document.querySelectorAll<HTMLInputElement>(".js-year-range-picker"),
  );

  pickers.forEach((input) => {
    const wrapper = input.closest<HTMLElement>(".js-year-range-field");

    const datepicker = new AirDatepicker(input, {
      classes: "tax-deduction-datepicker",
      locale: localeRu,
      container: wrapper ?? undefined,
      showEvent: "none",
      offset: 0,
      autoClose: true,
      range: true,
      view: "years",
      minView: "years",
      dateFormat: "yyyy",
      multipleDatesSeparator: " — ",
      maxDate: new Date(),
      buttons: ["clear"],
      onShow() {
        wrapper?.classList.add("is-open");
      },
      onHide() {
        wrapper?.classList.remove("is-open");
      },
      onSelect({ formattedDate }) {
        if (Array.isArray(formattedDate)) {
          input.value = formattedDate.filter(Boolean).join(" — ");
          input.dispatchEvent(new Event("input", { bubbles: true }));
          return;
        }

        input.value = formattedDate;
        input.dispatchEvent(new Event("input", { bubbles: true }));
      },
    });

    input.addEventListener("click", (event) => {
      event.preventDefault();

      if (datepicker.visible) {
        datepicker.hide();
        return;
      }

      datepicker.show();
    });
  });
}
