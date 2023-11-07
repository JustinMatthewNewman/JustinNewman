import React from "react";
import MainText from "./MainText";
import MainContent from "./MainContent";

export default function SuperHero() {
  return (
    <div>
      <div className="container lg:h-screen h-auto flex flex-col md:flex-row items-center justify-center mt-12 gap-4 max-w-[1200px]">
        <MainText />
        {/* <MainContent /> */}
      </div>
    </div>
  );
}
