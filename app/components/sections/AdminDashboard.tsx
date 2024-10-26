"use client";
import React from "react";
import PointfinderMap from "../dashboard/PointfinderMap";
import SidePanelList from "../dashboard/SidePanelList";
import LineChart from "../dashboard/LineChartComponent";
import HeroPanel from "../dashboard/HeroPanel";

export default function AdminDashboard() {
  return (
    <div className="w-full m-4 max-w-[1400px] ">

      <div className="flex flex-col md:flex-row items-center justify-center mt-6 gap-4 ">
        <div className="w-full md:w-1/3"> {/* First chart takes 2/3 on medium screens and up */}
          <HeroPanel/>
        </div>
        <div className="w-full md:w-2/3"> {/* Second chart takes 1/3 on medium screens and up */}
          <LineChart />
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-center mt-6 gap-4 ">
        <div className="w-full md:w-2/3"> {/* First chart takes 2/3 on medium screens and up */}
          <PointfinderMap/>
        </div>
        <div className="w-full md:w-1/3"> {/* Second chart takes 1/3 on medium screens and up */}
          <SidePanelList/>
        </div>
      </div>

    </div>
  );
}
