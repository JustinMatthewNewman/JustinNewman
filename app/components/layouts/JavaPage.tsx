import React from "react";

import JavaHero from "../java/JavaHero";
import JavaContent from "../java/JavaContent";
import Link from "next/link";
import { HiArrowSmLeft } from "react-icons/hi";

export default function JavaPage() {
  return (
    <div className="w-full">
      <JavaHero/>
      <JavaContent/>
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
