import React from "react";
import MoreHero from "../more/MoreHero";
import Art from "../sections/Art";
import MoreText from "../more/MoreText";
import Broadcasting from "../sections/Broadcasting";
import Audio from "../sections/Audio";
import Hardware from "../sections/Hardware";
import AdditionalSoftware from "../more/AdditionalSoftware";
import Image from "next/image";
import lines from "../../../public/images/background/bitmap.svg";
import MoreText2 from "../more/MoreText2";
import MoreText3 from "../more/MoreText3";
import MoreText4 from "../more/MoreText4";
import Link from "next/link";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";
function MorePage() {
  return (
    <div className="w-full">
      <MoreHero />

      <div style={{backdropFilter: 'blur(5px'}}  className="border-none bg-background/60 dark:bg-black-100/50 w-full mt-5">
        <Art />
      </div>

      <div className=" container flex flex-col md:flex-row items-center justify-center mt-12 mb-12 gap-4 max-w-[1200px]">
        {/* <MoreInfo/> */}
        <MoreText2 />
      </div>

      <div style={{backdropFilter: 'blur(5px'}}  className="border-none bg-background/60 dark:bg-black-100/50 w-full mt-5">
        <Broadcasting />
      </div>

      <div className=" container flex flex-col md:flex-row items-center justify-center mt-12 mb-12 gap-4 max-w-[1200px]">
        {/* <MoreInfo/> */}
        <MoreText3 />
      </div>

      <div style={{backdropFilter: 'blur(5px'}}  className="border-none bg-background/60 dark:bg-black-100/50 w-full mt-5">
        <Audio />
      </div>

      <div className=" container flex flex-col md:flex-row items-center justify-center mt-12 mb-12 gap-4 max-w-[1200px]">
        {/* <MoreInfo/> */}
        <MoreText4 />
      </div>

      <div style={{backdropFilter: 'blur(5px'}}  className="border-none bg-background/60 dark:bg-black-100/50 w-full mt-5">
        <Hardware />
      </div>
      <Image
          src={lines}
          alt="Background"
          quality={100}
          fill={true}
          priority
          style={{
            zIndex: -1,
            opacity: "30%",
            marginTop: 1100
          }}
        />
      <div className=" container items-center justify-center mt-12 max-w-[1200px]">
        <AdditionalSoftware />

        
        <div className="flex justify-center py-12">
        <Link href="/more">
          <div className="rounded-full shadow-lg p-4 cursor-pointer hover:scale-110 ease-in duration-300">
            <HiOutlineChevronDoubleUp
              size={30}
            />
          </div>
        </Link>
      </div>
      </div>
    </div>
  );
}

export default MorePage;
