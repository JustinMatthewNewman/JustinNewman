import React from "react";
import { Card, CardHeader, CardBody, Divider, CardFooter, Link } from "@nextui-org/react";

import Image from "next/image";
import globe from '../../../../public/images/science/js2-min.jpg'

export default function SocialProject4() {
  return (
    <Card>
      <CardHeader className="flex gap-3">
        <div className="flex flex-col">
          <p className="text-md">Elevation by count</p>
          <p className="text-small text-default-500">3D Globe</p>
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
            isExternal
            showAnchorIcon
            href="https://observablehq.com/@justinmatthewnewman/bitcoin-nodes-per-country"
          >
            Notebook
          </Link>
        </CardFooter>
    </Card>
  );
}
