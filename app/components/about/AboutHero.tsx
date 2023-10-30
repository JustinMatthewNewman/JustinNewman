import React from "react";

import HeroText from "./AboutText";
import HeroInfo from "./AboutInfo";


function AboutHero() {
  return (
    <div>
      <div className="container flex flex-col md:flex-row items-center justify-center mt-12 gap-4 max-w-[1200px]">
        <HeroText />
        <HeroInfo />
      </div>
    </div>
  );
}

export default AboutHero;
