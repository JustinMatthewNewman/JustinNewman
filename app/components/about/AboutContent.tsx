import React from "react";

import AboutText from "./AboutText2";
import AboutInfo from "./AboutInfo2";

import AboutCards from "./AboutCards";

import Image from "next/image";
import bgLines from "../../../public/images/background/looper-pattern.svg";
import AboutText3 from "./AboutText3";
import AboutImages from "./AboutImages";
import Nsa from "../sections/Nsa";
import Infocard from "../extras/info/InfoCard";
import DataViz from "../sections/DataViz";
import Infocard2 from "../extras/info/InfoCard2";
import PostQuantum from "../sections/PostQuantum";
import Kaggle from "../sections/Kaggle";
import Cuda from "../sections/Cuda";


function AboutContent() {
  return (
    <div>
      <div className="container mt-6 max-w-[1400px] md:mt-64">
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
        <AboutText3 />
      </div>

      <div className="container flex flex-col md:flex-row items-center justify-center gap-4 max-w-[1200px] p-6 ">
        <AboutInfo />
        <AboutText />
      </div>

      <div className="container flex flex-col md:flex-row items-center justify-center gap-4 max-w-[1200px] p-6 ">
        <AboutImages />
      </div>
      <div className="flex flex-col md:flex-row items-center justify-center m-5 gap-4">
        <Kaggle />
      </div>

      <div className="border-none bg-background/60 dark:bg-black-100/50 w-full mt-5">
        <Cuda />
      </div>


      <Image
        fill={true}
        src={bgLines}
        alt="Background"
        quality={100}
        priority
        style={{
          zIndex: -1,
          marginTop: -195,
        }}
      />



      <div className="border-none bg-background/60 dark:bg-black-100/50 w-full mt-5">
        <Nsa />
      </div>

      <div className="flex flex-col md:flex-row items-center justify-center m-5">
        <Infocard />
      </div>

      <div className="border-none bg-background/60 dark:bg-black-100/50 w-full mt-5">
        <DataViz />
      </div>

      <div className="flex flex-col md:flex-row items-center justify-center m-5 gap-4">
        <Infocard2 />
      </div>

      <div className="border-none bg-background/60 dark:bg-black-100/50 w-full mt-5">
        <PostQuantum />
      </div>
    </div>
  );
}

export default AboutContent;
