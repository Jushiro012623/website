"use client";
import React, { PropsWithChildren } from "react";
import { SVG } from "./svg";
import { useCurve } from "./hooks";

const Curve = ({ children }: PropsWithChildren) => {
  const { dimension } = useCurve();
  return (
    <div className="page curve z-50">
      <div
        className="bg-white background"
        style={{ opacity: dimension.width > 0 ? 0 : 1 }}></div>
      {dimension.width > 0 && <SVG {...dimension} />}
      {children}
    </div>
  );
};

export default Curve;
