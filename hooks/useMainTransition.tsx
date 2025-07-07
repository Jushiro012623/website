import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

const useMainTransition = () => {
  const contentRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!contentRef.current) return;
    gsap.fromTo(
      contentRef.current,
      { y: 100 },
      {
        y: 0,
        duration: 0.75,
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: contentRef.current,
          start: "top 80%",
        },
      }
    );
  }, []);
  return contentRef;
};

export {useMainTransition};
