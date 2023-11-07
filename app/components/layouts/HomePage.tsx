import React from "react";
import Link from "next/link";
import Kaggle from "../sections/Kaggle";

import { HiOutlineChevronDoubleUp } from "react-icons/hi";
import bgLines from "../../../public/images/background/looper-pattern2.svg";
import lines from "../../../public/images/background/bitmap7.svg";

import Cuda from "../sections/Cuda";
import Nsa from "../sections/Nsa";
import DataViz from "../sections/DataViz";
import PostQuantum from "../sections/PostQuantum";

import SocialCards from "../extras/social/SocialCards";

import Infocard from "../extras/info/InfoCard";
import Infocard2 from "../extras/info/InfoCard2";

import Image from "next/image";
import SuperHero from "../home/SuperHero";
import NextBanner from "../home/NextBanner";
import Metalinguist from "../sections/Metalinguist";

const Main = () => {
  return (
    <div className="w-full">
      {/* <FullWidthBannerPhoto /> */}
      <div className="flex flex-col md:flex-row items-center justify-center ">
      <NextBanner/>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-center m-5 gap-4 py-12">
      <SuperHero/>
      </div>


      <div style={{backdropFilter: 'blur(5px'}} className="border-none bg-background/60 dark:bg-black-100/50 w-full mb-12">
        <div className="container flex flex-col md:flex-row items-center justify-center mt-12 gap-4 max-w-[1200px]">
          <Kaggle />
        </div>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-center m-5 gap-4">
      <Metalinguist/>
      </div>
      <div className="border-none bg-background/60 dark:bg-black-100/50 w-full mt-5">
        <Cuda />
      </div>

      <div>
        <SocialCards />
      </div>

      <Image
        src={lines}
        fill={true}
        alt="Background"
        className="hidden lg:block"
        quality={100}
        priority
        style={{
          zIndex: -1,
          marginTop: 2800,
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

      <div className="flex justify-center py-12">
        <Link href="/">
          <div className="rounded-full shadow-lg p-4 cursor-pointer hover:scale-110 ease-in duration-300">
            <HiOutlineChevronDoubleUp size={30} />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Main;
