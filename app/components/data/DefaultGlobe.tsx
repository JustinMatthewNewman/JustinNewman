"use client";
import React, { useEffect, useRef } from "react";
import Globe from "react-globe.gl";
import { useTheme } from "next-themes";

export default function DefaultGlobe() {
  const globeref = useRef<any>();
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    if (globeref.current) {
      globeref.current.controls({ throttleMs: 100 });
      globeref.current.controls().autoRotate = true;
      globeref.current.controls().autoRotateSpeed = 0.3;
      globeref.current.pointOfView(3, 5000);
      globeref.current.controls().enableZoom = false;
    }
  }, []);




  return (
    <div
    style={{position: 'absolute', top: -50, left: -450}}
      className="w-full h-screen flex items-center justify-center overflow-hidden"
    >
      <Globe
        ref={globeref}
        animateIn={false}
        globeImageUrl={
          resolvedTheme === "dark"
            ? "//unpkg.com/three-globe/example/img/earth-dark.jpg"
            : "//unpkg.com/three-globe/example/img/earth-blue-marble.jpg"
        }
        backgroundColor="rgba(0,0,0,0)"
        atmosphereColor={
          resolvedTheme === "dark"
            ? "rgba(219, 44, 213, 0.4)"
            : "rgba(0, 189, 255, 0.5)"
        }
      />
    </div>
  );
}


