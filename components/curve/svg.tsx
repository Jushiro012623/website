
import { useCurveAnimation } from "./hooks";
import { CurveDimension } from "./types";

export const SVG = ({ width, height }: CurveDimension) => {
  const {svgRef, pathRef,initialPath} = useCurveAnimation({ width, height })

  return (
    <svg ref={svgRef} className="svg">
      <path ref={pathRef} d={initialPath} fill="#fff"></path>
    </svg>
  );
};
