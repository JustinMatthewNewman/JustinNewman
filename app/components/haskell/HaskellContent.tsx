import React from "react";
import Image from "next/image";
import Haskell from "../sections/Haskell";


export default function MathContent() {
  return (
    <div className="w-full">
      <div className="container flex flex-col md:flex-row items-center justify-center mt-12 gap-4 max-w-[1200px]">
        {/* CONVERT THIS TO A NETWORK IMAGE */}
        {/* <Image
          src={triangles}
          alt="Background"
          quality={100}
          priority
          style={{
            zIndex: -1,
            marginTop: 1,
            opacity: "50%",
          }}
        /> */}
      </div>
      <div  className="border-none bg-background/60 dark:bg-black-100/50 w-full">
        <div className="container flex flex-col md:flex-row items-center justify-center mt-12 gap-4 max-w-[1200px]">
          <Haskell/>
        </div>
      </div>
    </div>
  );
}


