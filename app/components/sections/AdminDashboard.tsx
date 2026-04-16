"use client";
import React from "react";
import PointfinderMap from "../dashboard/PointfinderMap";
import SidePanelList from "../dashboard/SidePanelList";
import LineChart from "../dashboard/LineChartComponent";
import SchedulePanel from "../dashboard/SchedulePanel";
import Ecs from "./ECS";
import Ecs2 from "./ECS2";
import SkillsRow from "../dashboard/SkillsRow";

export default function AdminDashboard() {
  return (
    <div className="w-full max-w-[1400px]">

      <SkillsRow/>
{/* 
      <div className="flex flex-col md:flex-row items-center justify-center mt-6 gap-6">
        <div className="w-full md:w-2/3">
          <PointfinderMap/>
        </div>
        <div className="w-full md:w-1/3"> 
          <SidePanelList/>
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-center mt-5 gap-6">
        <div className="w-full md:w-1/4">
          <SchedulePanel/>
        </div>
        <div className="w-full md:w-3/4">
          <LineChart/>
        </div>
      </div> */}


    </div>
  );
}
