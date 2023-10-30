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

export default function StarsInfo() {
  return (
    <Card className="mt-6 mb-6">
      <CardHeader className="flex gap-3">
        <div className="flex flex-col">
          <p className="text-md">STARS</p>
          <p className="text-small text-default-500">stars-2.vercel.app</p>
        </div>
      </CardHeader>
      <Divider />
      <CardBody>
        <p className="py-2">
          Introducing a cutting-edge statistic team athletic rendering software
          that revolutionizes the way universities like JMU and W&M manage their
          sports analytics. This groundbreaking software generates high-quality
          SVG graphics for entire men&apos;s and women&apos;s teams across a variety of
          sports, including basketball, football, and soccer, in a mere 10
          seconds or less. With its lightning-fast processing capabilities and
          user-friendly interface, coaches and analysts can effortlessly create
          insightful visual representations of their team&apos;s performance,
          enabling them to make data-driven decisions, enhance player
          development, and gain a competitive edge in the world of collegiate
          athletics. This innovative solution is poised to transform the way
          universities approach sports analysis and elevate their teams to new
          heights of success.
        </p>
      </CardBody>
      <Divider />
      <CardFooter>
        <Link
          isExternal
          showAnchorIcon
          href="https://stars-2.vercel.app"
        >
          LIVE APP
        </Link>
      </CardFooter>
    </Card>
  );
}
