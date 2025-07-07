import gsap from "gsap";
import { useEffect, useRef, useState } from "react";
import { CurveDimension } from "./types";
import { useGSAP } from "@gsap/react";

const useCurve = () => {
  const [dimension, setDimension] = useState<CurveDimension>({
    height: 0,
    width: 0,
  });

  useEffect(() => {
    const resize = () => {
      setDimension({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    resize();

    window.addEventListener("resize", resize);

    return () => window.removeEventListener("resize", resize);
  }, []);

  return { dimension };
};

const useCurveAnimation = ({ width, height }: CurveDimension) => {
  const svgRef = useRef(null);
  const pathRef = useRef(null);

  const initialPath = `
        M0 300 
        Q${width / 2} 0 ${width} 30
        L${width} ${height + 300}
        Q${width / 2} ${height + 600} 0 ${height + 300}
        L0 300
    `;
  const targetPath = `
        M0 300 
        Q${width / 2} 0 ${width} 30
        L${width} ${height}
        Q${width / 2} ${height} 0 ${height}
        L0 300
    `;

  useGSAP(() => {
    const el: any = svgRef.current;

    gsap.fromTo(
      el,
      { top: "-300px" },
      {
        top: "-100vh",
        duration: 0.75,
        // delay: 0.3,
        ease: "power2.inOut",
        onComplete: () => {
          gsap.set(el, { display: "none" });
        },
      }
    );
  }, [width, height]);

  useGSAP(() => {
    if (pathRef.current) {
      gsap.to(pathRef.current, {
        attr: { d: targetPath },
        duration: 1,
        ease: "power2.inOut",
      });
    }
  }, [width, height]);

  return { pathRef, svgRef, initialPath };
};

export { useCurve, useCurveAnimation };
