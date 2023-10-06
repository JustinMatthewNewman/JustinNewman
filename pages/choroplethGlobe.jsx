import Image from "next/image";
import React from "react";
// import choroplethGlobeImg from '../public/assets/soccer.webp';
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";
import dynamic from "next/dynamic";

const choroplethGlobe = () => {
  const Globe = dynamic(() => import("../components/ChoroplethGlobe"), {
    ssr: false,
  });

  return (
    <div className="w-full">
      <div className="w-screen h-[50vh] relative">
        {/* <Image
          className='absolute z-1'
          layout='fill'
          objectFit='cover'
          src={choroplethGlobeImg}
          alt='/'
        /> */}
        <div className="absolute top-[150px] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-slate z-10 p-2">
          <h2 className="py-2">Data Visualization</h2>
          <h3>BTC Node Count correlation with GDP.</h3>
          <h3>CS 327 Extra Credit.</h3>
        </div>
      </div>

      <div
        style={{
          marginTop: "-200px",
          zIndex: 100,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Globe />
      </div>
    </div>
  );
};

export default choroplethGlobe;
