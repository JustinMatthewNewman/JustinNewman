import React from "react";

import HeroText from "./MathText";
import HeroInfo from "./MathInfo";

function MathHero() {
  return (
    <div>
      <div className=" container flex flex-col md:flex-row items-center justify-center mt-12 gap-4 max-w-[1200px]">
        <HeroInfo />
        <HeroText />
      </div>
    </div>
  );
}

export default MathHero;
