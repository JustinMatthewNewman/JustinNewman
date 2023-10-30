import React from "react";

import HaskellHero from "../haskell/HaskellHero";
import HaskellContent from "../haskell/HaskellContent";
import HaskellHero2 from "../haskell/HaskellHero2";
import Link from "next/link";
import { HiArrowSmLeft } from "react-icons/hi";

export default function HaskellPage() {
  return (
    <div className="w-full">
      <HaskellHero/>
      <HaskellContent/>
      <HaskellHero2/>
      <div className="flex justify-center py-12">
        <Link href="/apps">
          <div className="rounded-full shadow-lg p-4 cursor-pointer hover:scale-110 ease-in duration-300">
            <HiArrowSmLeft
              size={30}
            />
          </div>
        </Link>
      </div>
    </div>
  );
}
