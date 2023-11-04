"use client";
import React, { useEffect, useState, useRef } from "react";
import Globe from "react-globe.gl";
import * as d3 from "d3";
import countriesData from "../../../public/data/earth.json";
import { useTheme } from "next-themes";

function ChoroplethGlobeComponent() {
  const globeref = useRef<any>();
  const [hoverD, setHoverD] = useState<object | null>(null);
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    if (globeref.current) {
      globeref.current.controls({ throttleMs: 100 });
      globeref.current.controls().autoRotate = true;
      globeref.current.controls().autoRotateSpeed = 0.3;
      const isSmallScreen = window.innerWidth <= 640;
      const altitude = isSmallScreen ? 3.5 : 2;

      globeref.current.pointOfView({ altitude }, 5000);
      globeref.current.controls().enableZoom = false;
    }
  }, []);

  const colorScale =
    resolvedTheme === "dark"
      ? d3.scaleSequentialSqrt(d3.interpolateRgb("purple", "magenta"))
      : d3.scaleSequentialSqrt(d3.interpolateRdYlGn);

  // Add type annotation for 'feat' parameter
  const getVal = (feat: any) =>
    feat.properties.BTC_DEGREE / Math.max(1e5, feat.properties.BTC_DEGREE);

  const maxVal = d3.max(countriesData.features.map(getVal)) || 0;

  colorScale.domain([0, maxVal]);

  // Define the accessor function for polygonLabel
  const polygonLabelAccessor = (obj: any) => {
    const { ADMIN, GDP_MD_EST, BTC_DEGREE } = obj.properties;
    return `
      <b>${ADMIN}</b> <br />
      GDP: $<i>${GDP_MD_EST}</i> M<br/>
      BTC Nodes: <i>${BTC_DEGREE}</i>
    `;
  };

  return (
    <div
      className="w-full h-screen flex items-center justify-center overflow-hidden"
    >
      <Globe
        ref={globeref}
        globeImageUrl={
          resolvedTheme === "dark"
            ? "//unpkg.com/three-globe/example/img/earth-dark.jpg"
            : "//unpkg.com/three-globe/example/img/earth-blue-marble.jpg"
        }
        backgroundColor="rgba(0,0,0,0)"
        polygonsData={countriesData.features.filter(
          (d) => d.properties.ISO_A2 !== "AQ"
        )}
        polygonAltitude={(d) => (d === hoverD ? 0.12 : 0.05)}
        polygonCapColor={(d) =>
          d === hoverD ? "steelblue" : colorScale(getVal(d))
        }
        polygonSideColor={() =>
          resolvedTheme === "dark"
            ? "rgba(140, 31, 136, 0.4)"
            : "rgba(20, 74, 26, 0.2)"
        }
        polygonStrokeColor={() => "rgb(220,220,220)"}
        polygonLabel={polygonLabelAccessor}
        onPolygonHover={(polygon, prevPolygon) => setHoverD(polygon)}
        polygonsTransitionDuration={300}
        atmosphereColor={
          resolvedTheme === "dark"
            ? "rgba(219, 44, 213, 0.4)"
            : "rgba(0, 189, 255, 0.5)"
        }
      />
    </div>
  );
}

export default ChoroplethGlobeComponent;
