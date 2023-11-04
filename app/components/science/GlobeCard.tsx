import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Link,
} from "@nextui-org/react";
import GlobeBackup from "../data/GlobeBackup";

export default function GlobeCard() {
  return (
    <Card className="max-w-[800px]">
      <CardHeader className="flex gap-3">
        <div className="flex flex-col">
          <p className="text-md">Global BTC Node Density 2021</p>
          <p className="text-small text-default-500">newmanjustin.com</p>
        </div>
      </CardHeader>
      <Divider />
      <CardBody>
        <p className="py-2">
          In my Discrete Structures II computer science course, I embarked on a
          data-driven journey by using Python to analyze the geographic
          distribution of Bitcoin nodes across the globe. To achieve this, I
          used a PyGeo IP library to determine the country of origin for each
          Bitcoin node&apos;s IP address in a massive adjaceny list of IP
          addresses.
        </p>
        <p className="py-2">
          Subsequently, I used my JavaScript skills to create a stunning 3D
          globe data visualization. By leveraging geographic polygons representing countries, I
          mapped each country&apos;s count on the globe, effectively
          revealing the global density of the network. 
        </p>
      </CardBody>
      <Divider />
      <CardFooter>
        <GlobeBackup />
      </CardFooter>
    </Card>
  );
}
