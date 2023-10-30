import React, { useEffect, useState } from "react";

import x from "../../../public/images/formula/crt/base.svg";
import ai from "../../../public/images/formula/crt/ai.svg";
import mi from "../../../public/images/formula/crt/mi.svg";
import yi from "../../../public/images/formula/crt/yi.svg";
import zi from "../../../public/images/formula/crt/zi.svg";
import Image from "next/image";

import { useTheme } from "next-themes";

export default function Formula() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false)
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div>
      <div className="flex justify-center flex-col items-center">
        <Image
          src={x}
          alt="CRT BASE FORMULA"
          style={resolvedTheme === "light" ? {} : { filter: "invert(1)" }}
        />
        <Image
          src={ai}
          alt="CRT BASE FORMULA"
          style={resolvedTheme === "light" ? {} : { filter: "invert(1)" }}
        />
        <Image
          src={mi}
          alt="CRT BASE FORMULA"
          style={resolvedTheme === "light" ? {} : { filter: "invert(1)" }}
        />
        <Image
          src={yi}
          alt="CRT BASE FORMULA"
          style={resolvedTheme === "light" ? {} : { filter: "invert(1)" }}
        />
        <Image
          src={zi}
          alt="CRT BASE FORMULA"
          style={resolvedTheme === "light" ? {} : { filter: "invert(1)" }}
        />
      </div>
    </div>
  );
}
