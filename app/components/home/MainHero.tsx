import React from "react";

import HeroText from "./MainText";
import HeroInfo from "./MainItem";


export default function MainHero() {
  return (
    <div>
      <div className="hidden md:flex container flex flex-col md:flex-row items-center justify-center mt-12">
        <HeroInfo />
        <HeroText />
      </div>
    </div>
  );
}


