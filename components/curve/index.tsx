"use client";
import React, { forwardRef, PropsWithChildren } from "react";
import { SVG } from "./svg";
import { useCurve } from "./hooks";

const Curve = forwardRef<HTMLDivElement, PropsWithChildren>((props, ref) => {
  const { dimension } = useCurve();

  return (
    <div ref={ref} className="page curve z-[50]">
      <div
        className="bg-white background"
        style={{ opacity: dimension.width > 0 ? 0 : 1 }}></div>
      {dimension.width > 0 && <SVG {...dimension} />}
      {props.children}
    </div>
  );
});

Curve.displayName = "Curve";
export default Curve;
