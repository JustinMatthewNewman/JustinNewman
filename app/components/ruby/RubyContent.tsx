import React from "react";
import Image from "next/image";
import Haskell from "../sections/Haskell";
import Ruby from "../sections/Ruby";


export default function RubyContent() {
  return (
    <div className="w-full">
        <div className="container flex flex-col md:flex-row items-center justify-center mt-12 gap-4 max-w-[1200px]">
          <Ruby/>
        </div>
    </div>
  );
}


