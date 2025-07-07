"use client";
import Curve from "@/components/curve";
import Navbar from "@/components/navbar";
import Hero from "@/components/section/hero-section";
import React from "react";
import { useSmoothScoll } from "./hooks";
import ParticleCanvas from "@/components/particle";
import About from "@/components/section/about";

const Home = () => {
  useSmoothScoll();
  return (
    <Curve>
      <Navbar />
      <Hero />
      <About />
      <ParticleCanvas />
    </Curve>
  );
};

export default Home;
