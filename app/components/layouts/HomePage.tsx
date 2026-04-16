import React from "react";
import Link from "next/link";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";

import AdminDashboard from "../sections/AdminDashboard";
import SocialCards from "../extras/social/SocialCards";
import LandingHero from "../dashboard/LandingHero";

const Main = () => {
  return (
    <div className="w-full">

      <LandingHero />
      
      <div className="flex flex-col md:flex-row items-center justify-center m-6 gap-4">
        <AdminDashboard />
      </div>

      {/* <div>
        <SocialCards />
      </div>

      <div className="flex justify-center py-12">
        <Link href="/">
          <div className="rounded-full shadow-lg p-4 cursor-pointer hover:scale-110 ease-in duration-300">
            <HiOutlineChevronDoubleUp size={30} />
          </div>
        </Link>
      </div> */}

      
    </div>
  );
};

export default Main;
