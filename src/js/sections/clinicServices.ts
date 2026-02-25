import Swiper from "swiper";
import gsap from "gsap";

export default function clinicServices() {
  const elements = Array.from(
    document.querySelectorAll<HTMLElement>(".clinic-services"),
  );
  elements.forEach((element) => {
    const container = element.querySelector<HTMLElement>(".swiper");

    if (!container) return;
    let mm = gsap.matchMedia();

    mm.add("(max-width: 640px)", () => {
      const instance = new Swiper(container, {
        slidesPerView: "auto",
        speed: 600,
      });
      console.log(container);

      return () => {
        instance.destroy();
      };
    });
  });
}
