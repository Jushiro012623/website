"use client";
import Curve from "@/components/curve";
import Navbar from "@/components/navbar";
import Hero from "@/components/section/hero-section";
import React, { useRef } from "react";
import ParticleCanvas from "@/components/particle";
import About from "@/components/section/about";
import { useSmoothScoll } from "@/hooks/useSmoothScroll";
import { useFadeTransition } from "@/hooks/useFadeTransition";
import Project from "@/components/section/projects";

const Home = () => {
  useSmoothScoll();
  const heroRef = useRef<any>(null);
  const aboutRef = useRef<any>(null);
  useFadeTransition(heroRef, aboutRef);

  return (
    <Curve>
      <Navbar />
      <div ref={heroRef}>
        <Hero />
      </div>
      <div ref={aboutRef}>
        <About />
      </div>
      <div>
        <Project />
      </div>
      <ParticleCanvas />
    </Curve>
  );
};

export default Home;
