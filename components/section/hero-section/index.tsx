"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef } from "react";
import MyImage from "./my-image";
import TextHero from "./text";
import Orbit from "./orbit";
// import QuoteHero from "./quote";

const Hero = () => {
  const contentRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!contentRef.current) return;
    gsap.fromTo(
      contentRef.current,
      { y: 100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.75,
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: contentRef.current,
          start: "top 80%",
        },
      }
    );
  }, []);
  return (
    <div
      ref={contentRef}
      className="relative flex text-white  items-center justify-center w-full h-screen">
      <MyImage />
      <Orbit />
      <TextHero />
      {/* <QuoteHero /> */}
    </div>
  );
};

export default Hero;
