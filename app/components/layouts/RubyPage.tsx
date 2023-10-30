import React from "react";

import RubyHero from "../ruby/RubyHero";
import RubyContent from "../ruby/RubyContent";
import Link from "next/link";
import { HiArrowSmLeft } from "react-icons/hi";

export default function RubyPage() {
  return (
    <div className="w-full">
      <RubyHero/>
      <RubyContent/>
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
