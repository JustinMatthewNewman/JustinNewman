import React from "react";
import Hero from "../math/MathHero";
import MathContent from "../math/MathContent";
import DiscreteHero from "../math/DiscreteHero";
import Link from "next/link";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";

function MathPage() {
  return (
    <div className="w-full">
      <Hero />
      <MathContent />
      <DiscreteHero/>
      <div className="flex justify-center py-12">
        <Link href="/math">
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

export default MathPage;
