"use client";
import { BentoTilt } from "@/components/bento";
import Image from "next/image";
import React from "react";

const index = () => {
  return (
    <div className="min-h-screen w-full">
      <div className="max-w-[68rem] mx-auto">
        <p className="text-white font-extralight text-6xl tracking-tight leading-tight">
          I specialize in building scalable, maintainable web applications using
          modern frontend and backend technologies.
        </p>
        <span className="block w-full h-20" />
        <div>
          <p className="text-white font-light text-sm ">This is me.</p>
          <span className="block w-full h-3" />
          <span className="block h-[.5px] w-full bg-white/50" />
        </div>

        <span className="block w-full h-9" />
        <div className="flex flex-col md:flex-row gap-20 p-6 text-white ">
          <div className="max-w-[26rem] md:flex-shrink-0 flex flex-col">
            <p className={`text-4xl md:text-5xl font-semibold `}>
              Hi, I'm <span className="text-amber-400">Ivan</span>.
            </p>
          </div>
          <span className="block w-20 h-full" />
          <div className="space-y-4 text-base font-extralight leading-relaxed tracking-wide max-w-4xl">
            <p className=" w-full">
              I'm a software developer with a strong foundation in
              Object-Oriented Programming (OOP), design patterns, version
              control, and practical experience using Object-Relational Mapping
              (ORM) tools.
            </p>
            <p>
              I work across the full development lifecycle—from API design and
              database management to building scalable system architecture. I
              also have cross-domain experience in automation, AR, OCR, web
              scraping, and machine learning using tools like Selenium,
              Tesseract, OpenCV, and TensorFlow.
            </p>
          </div>
          <span className="block w-28 h-full" />
        </div>
      </div>
    </div>
  );
};

export default index;
