"use client";

import React from "react";
import gsap from "gsap";

import { useFadeTransition } from "@/hooks/useFadeTransition";

const About = () => {
const {containerRef, textRef} = useFadeTransition()
  return (
    <div
      ref={containerRef}
      className="relative h-screen text-white flex items-center justify-center">
      <p ref={textRef} className="text-4xl font-bold">
        ABOUT ME
      </p>
    </div>
  );
};

export default About;
