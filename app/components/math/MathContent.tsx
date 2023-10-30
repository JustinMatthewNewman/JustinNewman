import React from "react";
import Image from "next/image";
import triangles from "../../../public/images/background/triangles.svg";
import Math from "../sections/Math";
import LinearAlgebra from "./LinearAlgebra";
import Calculus from "./Calculus";
import DiscreteStructures from "./DiscreteStructures";

function MathContent() {
  return (
    <div className="w-full">
      <div className="container flex flex-col md:flex-row items-center justify-center mt-12 gap-4 max-w-[1200px]">
        <Image
          src={triangles}
          alt="Background"
          quality={100}
          priority
          style={{
            zIndex: -1,
            marginTop: 1,
            opacity: "50%",
          }}
        />
      </div>
      <div className="container flex flex-col md:flex-row items-center justify-center mt-12 gap-4 max-w-[1200px]">
        <LinearAlgebra/>
        <Calculus />
        <DiscreteStructures/>
      </div>
      <div  className="border-none bg-background/60 dark:bg-black-100/50 w-full">
        <div className="container flex flex-col md:flex-row items-center justify-center mt-12 gap-4 max-w-[1200px]">
          <Math />
        </div>
      </div>
    </div>
  );
}

export default MathContent;
