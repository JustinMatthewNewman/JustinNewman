import React from "react";
import LandingHero from "../dashboard/LandingHero";
import SkillsRow from "../dashboard/SkillsRow";

const Main = () => {
  return (
    <div className="w-full">
      <LandingHero />
      <div className="flex flex-col md:flex-row items-center justify-center m-6 gap-4">
        <SkillsRow />
      </div>
    </div>
  );
};

export default Main;
