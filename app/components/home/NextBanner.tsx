"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import head from '../../../public/images/background/header-min.png'
import { useTheme } from "next-themes";

export default function NextBanner() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false)
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className="w-full">
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src={head}
          alt="/"
          style={
            resolvedTheme === "dark"
              ? { filter: "", zIndex: -3, opacity: 0.5 }
              : { filter: "invert(1) saturate(0)", zIndex: -3, opacity: 0.3 }
          }
        />
    </div>
  );
}


