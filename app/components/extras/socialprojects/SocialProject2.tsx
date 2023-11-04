import React from "react";
import { Card, CardHeader, CardBody, Divider, CardFooter, Link } from "@nextui-org/react";

import Image from "next/image";
import globe from '../../../../public/images/science/js5.png'

export default function SocialProject2() {
  return (
    <Card isHoverable isPressable onPress={() => window.open("/science/USACars", '_self')}>


      <CardHeader className="flex gap-3">
        <div className="flex flex-col">
          <p className="text-md">Car Accidents across the USA.</p>
          <p className="text-small text-default-500">Give this one some time. Big data.</p>
        </div>
      </CardHeader>
      <Divider />
      <CardBody>
      <div className="flex flex-col md:flex-row items-center justify-center mt-6 gap-4">
        <Image className="rounded-xl" src={globe} alt={""}/>
      </div>
        {/* <p>
          For my work at Metalinguist LLC, I embarked on a journey that began
          with the development of a 3D choropleth globe. This component, initially
          implemented for extra credit in Discrete Structures II, grew to become
          a valuable asset for the company. Building upon this foundation, I
          tailored the globe to showcase data mapping countries to specific
          counts of orders from the company's order data. Implementing this custom
          3D visualization enabled Metalinguist LLC to gain a comprehensive
          overview of their global operations, highlighting the distribution of
          orders per country in a visually engaging and informative manner.
        </p> */}
      </CardBody>
      <Divider/>
        <CardFooter>
        <Link
          showAnchorIcon
          href="/science/USACars"
        >
          Interactive Data
        </Link>
        </CardFooter>
    </Card>
  );
}
