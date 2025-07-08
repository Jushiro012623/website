import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef } from "react";

const useStackAnimations = () => {
  return <div>useStackAnimations</div>;
};

const useZeroGravity = () => {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!ref.current) return;
    gsap.to(ref.current, {
      y: () => gsap.utils.random(-50, 80),
      x: () => gsap.utils.random(-50, 80),
      duration: 5,
      ease: "sine.inOut",
      repeat: -1,
      yoyo: true,
    });
  }, []);

  return { ref };
};
export { useStackAnimations, useZeroGravity };
