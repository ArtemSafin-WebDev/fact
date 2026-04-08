import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { shouldSkipScrollReveal } from "./revealUtils";

gsap.registerPlugin(ScrollTrigger, SplitText);

const TITLE_SELECTORS = [
  ".clinic-services__title",
  ".doctors__title",
  ".help__heading",
  ".about-clinic__fluid-title",
  ".about-clinic__subheading",
  ".service__title",
  ".equipment__large-heading",
  ".equipment__subheading",
  ".patients__heading",
  ".patients__ratings-heading",
  ".first-visit__title",
  ".promo__large-heading",
  ".promo__subheading",
  ".faq__heading",
  ".blog__title",
  ".clinic__title",
  ".licenses__title",
  ".team-fact__title",
  ".about-atmosphere__title",
  ".service-equipment__title",
  ".contacts-socials__title",
  ".service-indications__title",
  ".service-benefits__title",
  ".service-stages__title",
  ".ratings__heading",
  ".service-specialists__title",
  ".dms__title",
  ".dms__block-title",
  ".news-article-related__title",
  ".news-article__title",
  ".not-found__title",
  ".service-contraindications__title",
  ".doctor-details__name",
  ".doctor-details__block-title",
  ".doctor-details__section-title",
  ".catalog-doctors-hero__title",
  ".news__title",
  ".patients-memo__title",
  ".reviews__title",
  ".reviews__heading",
  ".service-comparison__title",
  ".catalog-services__title",
  ".catalog-services__group-title",
  ".maintenance__title",
  ".contacts-hero__title",
  ".tax__title",
].join(", ");

export default function titleReveal() {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  const titles = Array.from(
    document.querySelectorAll<HTMLElement>(TITLE_SELECTORS),
  );

  titles.forEach((title) => {
    if (title.dataset.titleRevealReady === "true") return;

    const content = title.textContent?.trim();
    const triggerSection = title.closest<HTMLElement>("section");
    const triggerElement = triggerSection ?? title;

    if (!content) return;
    if (triggerSection && shouldSkipScrollReveal(triggerSection)) {
      title.dataset.titleRevealReady = "true";
      return;
    }

    title.dataset.titleRevealReady = "true";

    SplitText.create(title, {
      type: "lines",
      linesClass: "title-reveal__line",
      mask: "lines",
      autoSplit: true,
      onSplit(split) {
        return gsap.timeline({
          scrollTrigger: {
            trigger: triggerElement,
            start: "top 80%",
            once: true,
          },
        }).from(split.lines, {
          yPercent: 110,
          duration: 0.9,
          ease: "power3.out",
          stagger: 0.08,
          willChange: "transform",
          clearProps: "willChange",
        });
      },
    });
  });
}
