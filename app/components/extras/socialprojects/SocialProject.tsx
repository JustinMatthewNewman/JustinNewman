import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Divider,
  CardFooter,
  Link,
} from "@nextui-org/react";

import Image from "next/image";
import globe from '../../../../public/images/science/j1-min.png'
export default function SocialProject() {
  return (
    <Card>
      <CardHeader className="flex gap-3">
        <div className="flex flex-col">
          <p className="text-md">3D Choropleth Globe</p>
          <p className="text-small text-default-500">Three.js</p>
        </div>
      </CardHeader>
      <Divider />
      <CardBody>
      <div className="flex flex-col md:flex-row items-center justify-center mt-6 gap-4">
        <Image className="rounded-xl" src={globe} alt={""}/>
      </div>
        {/* <p>
          In pursuit of an extra credit challenge in Discrete Structures II, I
          harnessed the power of Three.js to craft a captivating 3D choropleth
          globe, designed to visualize the intricate network of Bitcoin (BTC)
          nodes. This project involved the intricate task of counting and
          correlating the number of BTC nodes per country with their respective
          Gross Domestic Product (GDP). By skillfully leveraging Three.js, I
          brought the globe to life, enabling it to dynamically depict this data
          in an engaging and informative manner. This innovative fusion of
          technology and discrete mathematical concepts not only provided a
          fascinating insight into the BTC network but also showcased the
          practical applications of complex mathematical theories in the real
          world.
        </p> */}
      </CardBody>
      <Divider />
      <CardFooter>
        <Link
          showAnchorIcon
          href="/science/ChoroplethGlobe"
        >
          Interactive Data
        </Link>
      </CardFooter>
    </Card>
  );
}
