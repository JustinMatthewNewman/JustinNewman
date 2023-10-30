import React from "react";
import ScienceHero from "../science/ScienceHero";
import Kaggle from "../sections/Kaggle";
import ScienceHero2 from "../science/ScienceHero2";
import Projects from "../sections/Projects";
import SOLAnalysisCard from "../science/SOLAnalysisCard";
import GasPriceCard from "../science/GasPriceCard";
import ScienceHero3 from "../science/ScienceHero3";
import Image from "next/image";
import bgLines from "../../../public/images/background/looper-pattern.svg";
import Link from "next/link";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";

function SciencePage() {
  return (
    <div className="w-full">

      <ScienceHero />

      <div style={{backdropFilter: 'blur(5px'}} className="border-none bg-background/60 dark:bg-black-100/50 w-full mb-12">
        <div className="container flex flex-col md:flex-row items-center justify-center mt-12 gap-4 max-w-[1200px]">
          <Kaggle />
        </div>
      </div>

      <ScienceHero2 />
      <Image
        fill={true}
        src={bgLines}
        alt="Background"
        quality={100}
        priority
        style={{
          zIndex: -1,
          marginTop: 32
        }}
      />

      <SOLAnalysisCard/>

      <div className="border-none bg-background/60 dark:bg-black-100/50 w-full mb-12">
        <div className="container flex flex-col md:flex-row items-center justify-center mt-12 gap-4 max-w-[1200px]">
          <Projects />
        </div>
      </div>

      <GasPriceCard/>
      <ScienceHero3 />
      <div className="flex justify-center py-12">
        <Link href="/science">
          <div className="rounded-full shadow-lg p-4 cursor-pointer hover:scale-110 ease-in duration-300">
            <HiOutlineChevronDoubleUp
              size={30}
            />
          </div>
        </Link>
      </div>
    </div>
  );
}

export default SciencePage;
