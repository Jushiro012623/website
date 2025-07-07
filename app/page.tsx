"use client";
import Curve from "@/components/curve";
import Navbar from "@/components/navbar";
import Hero from "@/components/section/hero-section";
import React from "react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useOnPageLoad, useSmoothScoll } from "./hooks";
import ParticleCanvas from "@/components/particle";

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  useSmoothScoll();
//   const { boxRef, targetRef } = useOnPageLoad();
  return (
    <Curve>
      <Navbar />
      <div
        className="main  w-full h-screen ">
        <Hero />
      </div>
      <div className="relative h-screen">
        asdasd
      </div>
      <div className="relative h-screen  z-[10]">asdasd</div>
      <ParticleCanvas />
    </Curve>
  );
};

export default Home;
