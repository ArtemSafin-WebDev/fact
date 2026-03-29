import DatepickerField from "../classes/DatepickerField";
import Validator from "../classes/Validator";

export default function tax() {
  const forms = Array.from(
    document.querySelectorAll<HTMLFormElement>(".tax__form.js-form"),
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
    new DatepickerField(input, {
      wrapper,
      options: {
        container: wrapper ?? undefined,
        range: true,
        view: "years",
        minView: "years",
        dateFormat: "yyyy",
        multipleDatesSeparator: " — ",
        maxDate: new Date(),
        buttons: ["clear"],
      },
    });
  });
}
