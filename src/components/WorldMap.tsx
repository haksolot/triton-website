// src/components/RotatingGlobe.tsx
import * as d3 from "d3";
import { useEffect, useRef } from "react";

const RotatingGlobe = () => {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const width = 600;
    const height = 600;

    const svg = d3
      .select(svgRef.current)
      .attr("viewBox", `0 0 ${width} ${height}`)
      .attr("preserveAspectRatio", "xMidYMid meet");

    const projection = d3
      .geoOrthographic()
      .scale(250)
      .translate([width / 2, height / 2])
      .clipAngle(90);

    const path = d3.geoPath().projection(projection);

    const globe = svg.append("g");

    d3.json(
      "https://raw.githubusercontent.com/holtzy/D3-graph-gallery/master/DATA/world.geojson"
    ).then((geojson: any) => {
      const features = globe
        .selectAll("path")
        .data(geojson.features)
        .enter()
        .append("path")
        .attr("fill", (d: any) =>
          ["FRA", "GAB"].includes(d.id) ? "#15803d" : "#f3f4f6"
        )
        // .attr("stroke", "#e5e7eb")
        .attr("stroke", "#908f8f")
        .attr("stroke-width", 0.5);

      const rotateGlobe = () => {
        const now = Date.now();
        const rotationSpeed = 0.015; // radians/ms
        const rotation = [(now * rotationSpeed) % 360, -10] as [number, number];

        projection.rotate(rotation);
        features.attr("d", path as any);
        requestAnimationFrame(rotateGlobe);
      };

      rotateGlobe();
    });
  }, []);

  return (
    <div className="bg-transparent p-4 rounded-xl w-full">
      <svg ref={svgRef} className="w-full h-auto" />
    </div>
  );
};

export default RotatingGlobe;
