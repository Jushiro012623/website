import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Lenis from "lenis";
import { useEffect, useRef } from "react";

const useOnPageLoad = () => {
  const boxRef = useRef(null);
  const targetRef = useRef(null);
  useGSAP(
    () => {
      gsap.to(boxRef.current, {
        scale: 0.8,
        rotate: -5,
        ease: "none",
        scrollTrigger: {
          trigger: boxRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
    },
    { scope: boxRef }
  );

  useGSAP(
    () => {
      gsap.fromTo(
        targetRef.current,
        { scale: 0.8, rotate: 5 },
        {
          scale: 1,
          rotate: 0,
          ease: "none",
          scrollTrigger: {
            trigger: targetRef.current,
            start: "top bottom",
            end: "top top",
            scrub: true,
          },
        }
      );
    },
    { scope: targetRef }
  );


  return {targetRef, boxRef}
};


const useSmoothScoll = () => {
    useEffect(() => {
    const lenis = new Lenis();
    function raf(time: any) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }, []);
}
export {useOnPageLoad,useSmoothScoll};
