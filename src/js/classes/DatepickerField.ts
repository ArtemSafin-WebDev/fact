import AirDatepicker, { type AirDatepickerOptions } from "air-datepicker";
import localeRu from "air-datepicker/locale/ru";

type DatepickerFieldConfig = {
  wrapper?: HTMLElement | null;
  openClass?: string;
  separator?: string;
  options?: AirDatepickerOptions<HTMLInputElement>;
};

class DatepickerField {
  private readonly input: HTMLInputElement;
  private readonly wrapper: HTMLElement | null;
  private readonly openClass: string;
  private readonly separator: string;
  private readonly datepicker: AirDatepicker<HTMLInputElement>;

  constructor(input: HTMLInputElement, config: DatepickerFieldConfig = {}) {
    this.input = input;
    this.wrapper = config.wrapper ?? input.parentElement;
    this.openClass = config.openClass ?? "is-open";
    this.separator = config.separator ?? " — ";

    const userOptions = config.options ?? {};
    const userOnShow = userOptions.onShow;
    const userOnHide = userOptions.onHide;
    const userOnSelect = userOptions.onSelect;
    const mergedPopupClasses = ["datepicker-popup", userOptions.classes]
      .filter(Boolean)
      .join(" ");

    this.datepicker = new AirDatepicker(this.input, {
      locale: localeRu,
      showEvent: "none",
      offset: 0,
      autoClose: true,
      ...userOptions,
      classes: mergedPopupClasses,
      onShow: (isAnimationComplete) => {
        this.wrapper?.classList.add(this.openClass);
        userOnShow?.(isAnimationComplete);
      },
      onHide: (isAnimationComplete) => {
        this.wrapper?.classList.remove(this.openClass);
        userOnHide?.(isAnimationComplete);
      },
      onSelect: (payload) => {
        this.applyFormattedValue(payload.formattedDate);
        this.input.dispatchEvent(new Event("input", { bubbles: true }));
        userOnSelect?.(payload);
      },
    });

    this.input.addEventListener("click", this.handleInputClick);
  }

  public open() {
    this.datepicker.show();
  }

  public close() {
    this.datepicker.hide();
  }

  public toggle() {
    if (this.datepicker.visible) {
      this.close();
      return;
    }

    this.open();
  }

  public destroy() {
    this.input.removeEventListener("click", this.handleInputClick);
    this.datepicker.destroy();
    this.wrapper?.classList.remove(this.openClass);
  }

  private readonly handleInputClick = (event: MouseEvent) => {
    event.preventDefault();
    this.toggle();
  };

  private applyFormattedValue(formattedDate: string | string[]) {
    if (Array.isArray(formattedDate)) {
      this.input.value = formattedDate.filter(Boolean).join(this.separator);
      return;
    }

    this.input.value = formattedDate;
  }
}

export type { DatepickerFieldConfig };
export default DatepickerField;
