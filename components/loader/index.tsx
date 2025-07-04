import React, { forwardRef } from "react";
import "./style.css";

const Loader = forwardRef<HTMLDivElement>((_, ref) => {
  return (
    <div
      ref={ref}
      className="flex justify-center items-center absolute z-[100] h-dvh w-screen overflow-hidden bg-white">
      <div className="loader">
        <div className="inner one"></div>
        <div className="inner two"></div>
        <div className="inner three"></div>
      </div>
    </div>
  );
});

Loader.displayName = "Loader";

export default Loader;
