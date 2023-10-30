import React from "react";

import Hero from "../about/AboutHero";
import AboutContent from "../about/AboutContent";
import Link from "next/link";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";

function AboutPage() {
  return (
    <div className="w-full">
      <div className="container">
        <Hero />
      </div>

      <div>
        <AboutContent />
      </div>

      <div className="flex justify-center py-12">
        <Link href="/about">
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

export default AboutPage;
