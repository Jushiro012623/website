import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

/**
 * Applies a fade transition between two sections using GSAP ScrollTrigger.
 * 
 * @param fadeOutRef - The element to fade out
 * @param fadeInRef - The element to fade in
 */
export const useFadeTransition = (fadeOutRef?: React.RefObject<HTMLElement>, fadeInRef?: React.RefObject<HTMLElement>) => {
  // Fade Out
  useGSAP(() => {
    if (!fadeOutRef?.current) return;

    gsap.to(fadeOutRef.current, {
      opacity: 0,
      y: 0,
      ease: "none",
      scrollTrigger: {
        trigger: fadeOutRef.current,
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });
  }, [fadeOutRef]);

  // Fade In
  useGSAP(() => {
    if (!fadeInRef?.current) return;

    gsap.fromTo(
      fadeInRef.current,
      { opacity: 0,y: 100 },
      {
        y: 0,
        opacity: 1,
        ease: "none",
        scrollTrigger: {
          trigger: fadeInRef.current,
          start: "top bottom",
          end: "top top",
          scrub: true,
        },
      }
    );
  }, [fadeInRef]);
};
