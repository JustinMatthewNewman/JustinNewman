"use client";

import React from "react";
import {
  Card,
  CardFooter,
  Button, Image
} from "@nextui-org/react";

export default function MainContent() {


  return (
    <Card
    isFooterBlurred
    radius="lg"
    className="border-none"
  >
    <Image
      alt="Justin"
      className="object-cover"
      height={600}
      src='/images/home/justin-min.png'
      width={600}
    />
    <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
      <p className="text-tiny text-white/80">#ComputerScience</p>
      <p className="text-tiny text-white/80">#DataAnalysis</p>
    </CardFooter>
  </Card>

  );
}
