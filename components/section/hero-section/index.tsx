"use client";
import React from "react";
import { LeftText, MidText, RightText } from "./text";
import { useMainTransition } from "@/hooks/useMainTransition";
import Orbit from "./orbit";

const Hero = () => {
  const contentRef = useMainTransition();

  return (
    <div>
      <div
        ref={contentRef}
        className="relative flex text-white  items-center justify-center w-full h-screen">
        <LeftText />
        <MidText />
        <RightText />
        <Orbit />
      </div>
    </div>
  );
};

export default Hero;
