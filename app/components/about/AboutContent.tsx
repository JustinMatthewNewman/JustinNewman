import React from "react";

import AboutText from "./AboutText2";
import AboutInfo from "./AboutInfo2";

import AboutCards from "./AboutCards";

import Image from "next/image";
import bgLines from "../../../public/images/background/looper-pattern.svg";
import AboutText3 from "./AboutText3";
import AboutImages from "./AboutImages";


function AboutContent() {
  return (
    <div>
      <div  className="container mt-6 max-w-[1400px] md:mt-64">
        <AboutCards />
        <Image
          fill={true}
          src={bgLines}
          alt="Background"
          quality={100}
          priority
          style={{
            zIndex: -1,
            marginTop: 140,
            transform: "scaleX(-1)",
          }}
        />
         
      </div>
      <div className="container flex flex-col md:flex-row items-center justify-center gap-4 max-w-[1200px] p-6 mt-12 mb-12">
      <AboutText3/>
      </div>

        <div className="container flex flex-col md:flex-row items-center justify-center gap-4 max-w-[1200px] p-6 ">
          <AboutInfo />
          <AboutText />
        </div>

        <div className="container flex flex-col md:flex-row items-center justify-center gap-4 max-w-[1200px] p-6 ">
          <AboutImages/>
        </div>
      </div>
  );
}

export default AboutContent;
