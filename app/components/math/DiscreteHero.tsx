import React from "react";

import MathText2 from "./MathText2";
import DiscreteInfo from "./DiscreteInfo";

function DiscreteHero() {
  return (
    <div className=" container flex flex-col md:flex-row items-center justify-center mt-12 gap-4 max-w-[1200px]">
      <DiscreteInfo />
      <MathText2 />
    </div>
  );
}

export default DiscreteHero;
