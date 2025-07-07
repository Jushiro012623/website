import gsap from "gsap";
import { useEffect, useRef } from "react";

import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export const useFadeTransition = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        containerRef.current,
        { opacity: 0, },
        {
          opacity: 1,
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top bottom", // start fading in when the section enters
            end: "top top", // fully visible at top of viewport
            scrub: true, // makes animation follow scroll
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return { containerRef };
};
