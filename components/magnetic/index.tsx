import React, { MouseEvent, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export function Magnetic({ children }: any) {
  const magnetic = useRef<any>(null);

  useGSAP(() => {
    const xTo = gsap.quickTo(magnetic.current, "x", {
      duration: 1,
      ease: "elastic.out(1, 0.3)",
    });
    const yTo = gsap.quickTo(magnetic.current, "y", {
      duration: 1,
      ease: "elastic.out(1, 0.3)",
    });

    const mouseMove = (e: MouseEvent<HTMLDivElement>) => {
      const { clientX, clientY } = e;
      const { height, width, left, top } =
        magnetic.current.getBoundingClientRect();
      const x = clientX - (left + width / 4);
      const y = clientY - (top + height / 4);
      xTo(x);
      yTo(y);
    };

    const mouseLeave = () => {
      gsap.to(magnetic.current, { x: 0, duration: 1 });
      gsap.to(magnetic.current, { y: 0, duration: 1 });
      xTo(0);
      yTo(0);
    };

    magnetic.current.addEventListener("mousemove", mouseMove);
    magnetic.current.addEventListener("mouseleave", mouseLeave);

    return () => {
      magnetic.current.removeEventListener("mousemove", mouseMove);
      magnetic.current.removeEventListener("mouseleave", mouseLeave);
    };
  }, []);

  return React.cloneElement(children, { ref: magnetic });
}
