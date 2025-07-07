"use client";
import { anton } from "@/lib/fonts";
import React from "react";
import { Magnetic } from "@/components/magnetic";
const LeftText = () => {
  return (
    <div className="absolute left-0 -rotate-90 -translate-x-28 hidden ">
      <p className="uppercase text-sm flex items-center gap-3 ">
        <span className="block w-32 h-[1px] bg-white" />
        <span>My portfolio</span>
        <span className="block w-32 h-[1px] bg-white" />
      </p>
    </div>
  );
};

const MidText = () => {
  return (
    <div className="flex flex-col items-center max-w-[550px] lg:items-start mb-auto translate-y-1/2 lg:mr-auto xl:translate-x-[72%] xl:translate-y-[72%] lg:translate-x-[30%]">
      <div className={` ${anton.className} text-[5rem]`}>
        <p className="text-amber-400 tracking-wide text-center lg:text-left">SOFTWARE</p>
        <p className="lg:ml-8 -translate-y-10 tracking-wide text-center">DEVELOPER</p>
      </div>
      <div className="w-full -translate-y-10 font-light text-center px-5 lg:text-left lg:px-0">
        <p>
          Hi, I’m{" "}
          <span className="font-bold text-amber-400">Ivan Macabontoc</span> As a
          developer, I have honed my skills in both frontend and backend
          development, creating dynamic and responsive websites.
        </p>
      </div>
      <ConnectButton />
    </div>
  );
};
const RightText = () => {
  return (
    <div className="hidden lg:block absolute right-0 -translate-x-20 bottom-0 -translate-y-1/2 ">
      <div className="flex flex-col gap-10 items-end">
        <div className="flex flex-col w-full items-end justify-center h-full">
          <div>
            <p
              className={`text-end text-4xl text-amber-400 font-bold ${anton.className}`}>
              2<span>+</span>
            </p>
            <p className="text-sm font-light tracking-wide">
              Years of Experience
            </p>
          </div>
        </div>
        <div className="flex flex-col w-full items-end justify-center h-full">
          <div>
            <p
              className={`text-end text-4xl text-amber-400 font-bold ${anton.className}`}>
              10<span>+</span>
            </p>
            <p className="text-sm font-light tracking-wide">
              Completed Projects
            </p>
          </div>
        </div>
        <div className="flex flex-col w-full items-end justify-center h-full">
          <div>
            <p
              className={`text-end text-4xl text-amber-400 font-bold ${anton.className}`}>
              8K<span>+</span>
            </p>
            <p className="text-sm font-light tracking-wide">Hours Worked</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const ConnectButton = () => {
  return (
    <Magnetic>
      <button className="border px-5 py-3 rounded-md flex items-center gap-2 active:scale-95 transition-transform">
        <span className="block w-3 h-3 bg-amber-400 rounded-full ">
          <span className="block w-3 h-3 bg-amber-400 rounded-full animate-ping"></span>
        </span>
        Let's work together
      </button>
    </Magnetic>
  );
};
export { MidText, LeftText, RightText, ConnectButton };
