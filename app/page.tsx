"use client";
import Curve from "@/components/curve";
import Navbar from "@/components/navbar";
import Hero from "@/components/section/hero-section";
import React from "react";
const Home = () => {
  return (
    <>
      <Navbar />
      <Curve>
        <div className="w-full h-[200vh]">
          <Hero />
        </div>
      </Curve>
    </>
  );
};

export default Home;
