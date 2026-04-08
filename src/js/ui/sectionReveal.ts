import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { shouldSkipScrollReveal } from "./revealUtils";

gsap.registerPlugin(ScrollTrigger);

const CONTENT_SUFFIXES = ["__content", "__inner", "__top-content", "__bottom-content"];

function hasRevealClass(element: Element) {
  return Array.from(element.classList).some((className) =>
    CONTENT_SUFFIXES.some((suffix) => className.endsWith(suffix)),
  );
}

function getDepthFromSection(element: HTMLElement, section: HTMLElement) {
  let depth = 0;
  let current: HTMLElement | null = element;

  while (current && current !== section) {
    depth += 1;
    current = current.parentElement;
  }

  return current === section ? depth : Number.POSITIVE_INFINITY;
}

function getSectionTargets(section: HTMLElement) {
  const candidates = Array.from(section.querySelectorAll<HTMLElement>("*")).filter(
    (element) => {
      if (!hasRevealClass(element)) return false;
      if (element.matches(".about-clinic__content")) return false;
      if (element.closest("section") !== section) return false;
      if (getDepthFromSection(element, section) > 2) return false;

      let ancestor = element.parentElement;

      while (ancestor && ancestor !== section) {
        if (hasRevealClass(ancestor)) return false;
        ancestor = ancestor.parentElement;
      }

      return true;
    },
  );

  return candidates;
}

function getSectionStaggerTargets(section: HTMLElement) {
  return Array.from(
    section.querySelectorAll<HTMLElement>(".swiper-slide, li"),
  ).filter((element) => {
    if (element.closest("section") !== section) return false;
    if (element.hidden) return false;

    const styles = window.getComputedStyle(element);

    return styles.display !== "none" && styles.visibility !== "hidden";
  });
}

export default function sectionReveal() {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  const sections = Array.from(document.querySelectorAll<HTMLElement>("section"));

  sections.forEach((section) => {
    if (section.dataset.sectionRevealReady === "true") return;
    if (shouldSkipScrollReveal(section)) {
      section.dataset.sectionRevealReady = "true";
      return;
    }

    const targets = getSectionTargets(section);
    const staggerTargets = getSectionStaggerTargets(section);

    if (!targets.length) return;

    section.dataset.sectionRevealReady = "true";

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top 70%",
        once: true,
      },
    });

    timeline.from(targets, {
      autoAlpha: 0,
      y: 72,
      duration: 1.2,
      ease: "power4.out",
      stagger: 0.18,
      clearProps: "transform,opacity,visibility",
    });

    if (staggerTargets.length) {
      timeline.from(
        staggerTargets,
        {
          autoAlpha: 0,
          duration: 0.8,
          ease: "power2.out",
          stagger: 0.08,
          clearProps: "opacity,visibility",
        },
        0.22,
      );
    }
  });
}
