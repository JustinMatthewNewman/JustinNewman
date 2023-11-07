"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import data from "../../../public/images/science/data-pro.png";
import { useTheme } from "next-themes";

function FullWidthBannerPhoto() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false)
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className="w-full">
      <div style={{ borderBottom: resolvedTheme === "dark" ? "1px rgb(70, 70, 70) solid" : "1px rgb(210, 210, 210) solid" }} className="w-screen h-[50vh] relative">
        <div
          className="absolute top-0 left-0 w-full h-[60vh]"
        />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src={data}
          alt="/"
          style={
            resolvedTheme === "dark"
              ? { filter: "" }
              : { filter: "invert(1) hue-rotate(100deg)" }
          }
        />
        {/* <div className="absolute top-[40%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%]  text-slate z-10 p-2">
          <h2 style={{ color: "white" }} className="py-2">
            Additional Skills
          </h2>
          <h3 style={{ color: "white" }}>
            Fine Art / Video Production / Audio Engineering / 3D Modeling
          </h3>
        </div> */}
      </div>
    </div>
  );
}

export default FullWidthBannerPhoto;
