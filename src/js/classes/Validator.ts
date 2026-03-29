import isAlphanumeric from "validator/es/lib/isAlphanumeric";
import isNumeric from "validator/es/lib/isNumeric";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Inputmask from "inputmask";

gsap.registerPlugin(ScrollTrigger);

interface ValidationError {
  element: HTMLInputElement | HTMLElement;
  message: string;
}

type Locale = {
  requiredField: string;
  emailField: string;
  alphanumericField: string;
  phoneField: string;
  dateField: string;
  innField: string;
  passportField: string;
  yearRangeField: string;
};

type Localization = {
  ru: Locale;
  en: Locale;
};

const defaultLocalization: Localization = {
  ru: {
    requiredField: "Обязательное поле",
    emailField: "Введите корректный E-mail",
    alphanumericField: "Разрешены только цифры и буквы",
    phoneField: "Введите правильный номер телефона",
    dateField: "Введите дату в формате ДД.ММ.ГГГГ",
    innField: "Введите корректный ИНН",
    passportField: "Введите серию и номер паспорта",
    yearRangeField: "Выберите диапазон лет",
  },
  en: {
    requiredField: "Field is required",
    emailField: "Enter correct E-mail",
    alphanumericField: "Only digits and numbers allowed",
    phoneField: "Enter correct phone number",
    dateField: "Enter a date in DD.MM.YYYY format",
    innField: "Enter valid INN",
    passportField: "Enter valid passport series and number",
    yearRangeField: "Select a year range",
  },
};

class Validator {
  private form: HTMLFormElement;
  private textFields: HTMLInputElement[];
  private selects: HTMLElement[];
  private checkboxes: HTMLInputElement[];
  private hasBeenValidated: boolean = false;
  public errors: ValidationError[] = [];
  private readonly emailRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  private readonly phoneRegex =
    /^(\+7|7|8)?[\s\-]?\(?[489][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/;
  private localization: Localization;
  private locale: keyof Localization;

  private textInputsPairs: Array<[HTMLInputElement, () => void]> = [];
  private selectInputsPairs: Array<[HTMLInputElement, () => void]> = [];

  constructor(
    form: HTMLFormElement,
    localization: Localization = defaultLocalization
  ) {
    this.form = form;
    this.form.noValidate = true;
    this.localization = localization;
    if (
      document.documentElement.lang.toLowerCase() === "ru" ||
      document.documentElement.lang.toLowerCase() === "ru_ru" ||
      document.documentElement.lang.toLowerCase() === "ru-ru"
    ) {
      this.locale = "ru";
    } else {
      console.log(
        "Setting en locale",
        document.documentElement.lang.toLowerCase()
      );
      this.locale = "en";
    }
    this.textFields = Array.from(
      form.querySelectorAll(
        'input[type="text"], input[type="email"], input[type="tel"]'
      )
    );
    this.selects = Array.from(form.querySelectorAll("[data-required-select]"));

    this.checkboxes = Array.from(
      form.querySelectorAll('input[type="checkbox"]')
    );

    this.textFields.forEach((field) => {
      const handler = () => {
        if (this.hasBeenValidated) {
          const result = this.validateTextField(field);
          this.showTextFieldMessage(field, result);
        }
      };
      field.addEventListener("input", handler);

      this.textInputsPairs.push([field, handler]);
    });

    this.checkboxes.forEach((checkbox) => {
      const handler = () => {
        if (this.hasBeenValidated) {
          const result = this.validateCheckbox(checkbox);
          this.showCheckboxFieldMessage(checkbox, result);
        }
      };
      checkbox.addEventListener("change", handler);
    });

    this.selects.forEach((select) => {
      const selectInputs = Array.from(
        select.querySelectorAll<HTMLInputElement>(
          'input[type="radio"], input[type="checkbox"]'
        )
      );

      selectInputs.forEach((input) => {
        const handler = () => {
          if (this.hasBeenValidated) {
            const result = this.validateSelect(select);
            this.showSelectFieldMessage(select, result);
          }
        };
        input.addEventListener("change", handler);
        this.selectInputsPairs.push([input, handler]);
      });
    });

    this.form.addEventListener("reset", this.reset);

    this.initializeMasks();
  }

  private initializeMasks() {
    this.textFields.forEach((field) => {
      if (field.matches('[data-mask="date"]')) {
        const instance = new Inputmask({
          mask: "99.99.9999",
          clearIncomplete: true,
          showMaskOnHover: false,
        });
        instance.mask(field);
      }

      if (field.matches('[data-mask="inn"]')) {
        const isIndividualInn = field.getAttribute("data-inn-type") === "individual";

        const instance = new Inputmask({
          mask: isIndividualInn ? "999999999999" : "9999999999[99]",
          greedy: !isIndividualInn,
          clearIncomplete: true,
          showMaskOnHover: false,
        });
        instance.mask(field);
      }

      if (field.matches('[data-mask="passport"]')) {
        const instance = new Inputmask({
          mask: "9999 999999",
          clearIncomplete: true,
          showMaskOnHover: false,
        });
        instance.mask(field);
      }

      if (field.matches('[type="tel"]')) {
        const instance = new Inputmask({ mask: "+7 (999) 999-99-99" });
        instance.mask(field);
      }

      if (field.matches('[inputmode="numeric"]')) {
        field.addEventListener("beforeinput", (event) => {
          let beforeValue = field.value;
          event.target?.addEventListener(
            "input",
            () => {
              if (field.validity.patternMismatch) {
                field.value = beforeValue;
              }
            },
            {
              once: true,
            }
          );
        });
      }
    });
  }

  private validateTextField(field: HTMLInputElement): ValidationError | null {
    const value = field.value.trim();
    this.errors = this.errors.filter((error) => error.element !== field);
    if (field.hasAttribute("required") && !value) {
      this.errors.push({
        element: field,
        message: this.localization[this.locale].requiredField,
      });
    }

    if (field.matches('[type="email"]') && value) {
      if (!value.match(this.emailRegex)) {
        this.errors.push({
          element: field,
          message: this.localization[this.locale].emailField,
        });
      }
    }

    if (field.matches('[type="tel"]') && value) {
      if (!value.match(this.phoneRegex)) {
        this.errors.push({
          element: field,
          message: this.localization[this.locale].phoneField,
        });
      }
    }

    if (value && field.matches('[data-alphanumeric=""]')) {
      const cleanedValue = value.replace(/\s/g, "");
      if (!isAlphanumeric(cleanedValue) || isNumeric(cleanedValue)) {
        this.errors.push({
          element: field,
          message: this.localization[this.locale].alphanumericField,
        });
      }
    }

    if (value && field.matches("[data-validate-date]")) {
      if (!this.isValidDate(value)) {
        this.errors.push({
          element: field,
          message: this.localization[this.locale].dateField,
        });
      }
    }

    if (value && field.matches("[data-validate-inn]")) {
      const innType = field.getAttribute("data-inn-type");
      if (!this.isValidInn(value, innType === "individual" ? "individual" : "any")) {
        this.errors.push({
          element: field,
          message: this.localization[this.locale].innField,
        });
      }
    }

    if (value && field.matches("[data-validate-passport]")) {
      if (!this.isValidPassport(value)) {
        this.errors.push({
          element: field,
          message: this.localization[this.locale].passportField,
        });
      }
    }

    if (value && field.matches("[data-validate-year-range]")) {
      if (!this.isValidYearRange(value)) {
        this.errors.push({
          element: field,
          message: this.localization[this.locale].yearRangeField,
        });
      }
    }

    const error = this.errors.find((error) => error.element === field);
    if (error) {
      field.classList.add("not-valid");
      return error;
    } else {
      field.classList.remove("not-valid");
      return null;
    }
  }

  private placeErrorMessage(
    container: HTMLElement,
    error: ValidationError | null
  ) {
    const currentMessage = container.querySelector(".validation-error");
    if (currentMessage && error === null) {
      currentMessage.remove();
    } else if (currentMessage && error !== null) {
      currentMessage.textContent = error.message;
    } else if (!currentMessage && error !== null) {
      const newMessage = document.createElement("div");
      newMessage.className = "validation-error";
      newMessage.textContent = error.message;
      container.appendChild(newMessage);
    }

    this.updateHeight();
  }

  private updateHeight() {
    ScrollTrigger.refresh();
  }

  private showTextFieldMessage(
    field: HTMLInputElement,
    error: ValidationError | null
  ): void {
    const parent = field.parentElement?.parentElement;
    if (!parent) return;
    this.placeErrorMessage(parent, error);
  }
  private showCheckboxFieldMessage(
    field: HTMLInputElement,
    error: ValidationError | null
  ): void {
    const parent = field.parentElement?.parentElement;
    if (!parent) return;
    this.placeErrorMessage(parent, error);
  }

  validateSelect(select: HTMLElement): ValidationError | null {
    const selectInputs = Array.from(
      select.querySelectorAll<HTMLInputElement>(
        'input[type="radio"], input[type="checkbox"]'
      )
    );
    const checked = selectInputs.find((input) => input.checked);

    if (!checked) {
      return {
        element: select,
        message: this.localization[this.locale].requiredField,
      };
    } else {
      return null;
    }
  }

  validateCheckbox(checkbox: HTMLInputElement): ValidationError | null {
    console.log("Validation checkkbox", checkbox);
    if (!checkbox.checked && checkbox.hasAttribute("required")) {
      console.log("Checkbox not valid");
      this.errors.push({
        element: checkbox,
        message: this.localization[this.locale].requiredField,
      });
      return {
        element: checkbox,
        message: this.localization[this.locale].requiredField,
      };
    } else {
      return null;
    }
  }

  private showSelectFieldMessage(
    select: HTMLElement,
    error: ValidationError | null
  ): void {
    this.placeErrorMessage(select, error);
  }

  private isValidDate(value: string): boolean {
    const match = value.match(/^(\d{2})\.(\d{2})\.(\d{4})$/);
    if (!match) {
      return false;
    }

    const day = Number(match[1]);
    const month = Number(match[2]);
    const year = Number(match[3]);
    const currentYear = new Date().getFullYear();

    if (year < 1900 || year > currentYear) {
      return false;
    }

    const date = new Date(year, month - 1, day);
    return (
      date.getFullYear() === year &&
      date.getMonth() === month - 1 &&
      date.getDate() === day
    );
  }

  private isValidInn(value: string, type: "any" | "individual" = "any"): boolean {
    const inn = value.replace(/\D/g, "");
    if (type === "individual" && inn.length !== 12) {
      return false;
    }

    if (type === "any" && !(inn.length === 10 || inn.length === 12)) {
      return false;
    }

    if (inn.length === 10) {
      const checksum = [2, 4, 10, 3, 5, 9, 4, 6, 8]
        .map((coef, index) => coef * Number(inn[index]))
        .reduce((acc, item) => acc + item, 0);

      return checksum % 11 % 10 === Number(inn[9]);
    }

    const checksum11 = [7, 2, 4, 10, 3, 5, 9, 4, 6, 8]
      .map((coef, index) => coef * Number(inn[index]))
      .reduce((acc, item) => acc + item, 0);

    if (checksum11 % 11 % 10 !== Number(inn[10])) {
      return false;
    }

    const checksum12 = [3, 7, 2, 4, 10, 3, 5, 9, 4, 6, 8]
      .map((coef, index) => coef * Number(inn[index]))
      .reduce((acc, item) => acc + item, 0);

    return checksum12 % 11 % 10 === Number(inn[11]);
  }

  private isValidPassport(value: string): boolean {
    const digits = value.replace(/\D/g, "");
    return digits.length === 10;
  }

  private isValidYearRange(value: string): boolean {
    const match = value.match(/^(\d{4})\s—\s(\d{4})$/);
    if (!match) {
      return false;
    }

    const fromYear = Number(match[1]);
    const toYear = Number(match[2]);

    return fromYear <= toYear;
  }

  public validate(): boolean {
    this.hasBeenValidated = true;
    this.errors = [];
    this.textFields.forEach((field) => {
      const result = this.validateTextField(field);
      this.showTextFieldMessage(field, result);
    });

    this.selects.forEach((select) => {
      const result = this.validateSelect(select);
      this.showSelectFieldMessage(select, result);
    });

    this.checkboxes.forEach((checkbox) => {
      const result = this.validateCheckbox(checkbox);
      this.showCheckboxFieldMessage(checkbox, result);
    });

    return this.errors.length === 0;
  }

  public reset = () => {
    this.errors = [];
    this.hasBeenValidated = false;
    this.form
      .querySelectorAll(".validation-error")
      .forEach((message) => message.remove());
    this.updateHeight();
  };

  public destroy() {
    this.form
      .querySelectorAll(".validation-error")
      .forEach((message) => message.remove());

    this.textInputsPairs.forEach((pair) => {
      const [input, handler] = pair;
      input.removeEventListener("input", handler);
    });

    this.selectInputsPairs.forEach((pair) => {
      const [input, handler] = pair;
      input.removeEventListener("change", handler);
    });

    this.form.removeEventListener("reset", this.reset);
  }

  get valid(): boolean {
    return this.errors.length === 0;
  }
}

export type { ValidationError, Locale, Localization };

export default Validator;
