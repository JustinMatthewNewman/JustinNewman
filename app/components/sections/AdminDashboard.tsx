"use client";
import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Link,
} from "@nextui-org/react";
import Image from "next/image";
import PointfinderMap from "../dashboard/PointfinderMap";
import GraphHero from "../dashboard/GraphHero";
import Spacer from "../dashboard/Spacer";
import LineChart from "../dashboard/LineChartComponent";

export default function AdminDashboard() {
  return (
    <div className="w-full m-4 max-w-[1400px] ">
      <div className="flex flex-col md:flex-row items-center justify-center mt-6 gap-4 ">
        <Spacer />
        <PointfinderMap/>
      </div>
      <LineChart/>
    </div>
  );
}
