import Lenis from "lenis";
import { useEffect } from "react";

export const useSmoothScoll = () => {
    useEffect(() => {
    const lenis = new Lenis();
    function raf(time: any) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }, []);
}