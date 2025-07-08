"use client";
import React from "react";
import { LeftText, MidText } from "./text";
import { useMainTransition } from "@/hooks/useMainTransition";
import MyImage from "./my-image";
import Orbit from "./orbit";
const Hero = () => {
  const contentRef = useMainTransition();
  return (
    <div
      ref={contentRef}
      className="relative flex text-white  items-center justify-center w-full h-screen">
      <LeftText />
      <MidText />
      {/* <MyImage /> */}
      <Orbit />
    </div>
  );
};

export default Hero;
