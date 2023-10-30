import React from "react";
import AppsHero from "../apps/AppsHero";

import StarsInfo from "../apps/StarsInfo";

import Image from "next/image";
import bgLines from "../../../public/images/background/looper-pattern.svg";
import MacDisplay from "../apps/MacDisplay";
import AppsHero2 from "../apps/AppsHero2";
import CSCodeCard from "../apps/CSCodeCard";
import AppsRow from "../apps/AppsRow";
import JavaCard from "../apps/JavaCard";
import Link from "next/link";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";

export default function AppsPage() {
  return (
    <div className="w-full">

      <AppsHero/>

      <div style={{backdropFilter: 'blur(5px'}}  className="border-none bg-blur bg-background/60 dark:bg-black-100/50 w-full mb-12">
        <div className="container flex flex-col md:flex-row items-center justify-center mt-12 gap-4 max-w-[1200px]">
          <MacDisplay/>
          <StarsInfo/>
        </div>
      </div>

      <AppsHero2/>

      <Image
      className="hidden md:block"
        fill={true}
        src={bgLines}
        alt="Background"
        quality={100}
        priority
        style={{
          zIndex: -1,
          marginTop: 70
        }}
      />

      <CSCodeCard/>

      <div className="border-none bg-background/60 dark:bg-black-100/50 w-full mb-12">
        <div className="container flex flex-col md:flex-row items-center justify-center mt-6 gap-4">
          <AppsRow/>
        </div>
      </div>

      <JavaCard/>

      <div className="flex justify-center py-12">
        <Link href="/apps">
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


