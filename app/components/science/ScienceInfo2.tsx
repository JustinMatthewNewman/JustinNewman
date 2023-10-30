import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Link,
} from "@nextui-org/react";

export default function ScienceInfo2() {
  return (
    <Card className="max-w-[800px]">
      <CardHeader className="flex gap-3">
        <div className="flex flex-col">
          <p className="text-md">Deck.gl</p>
          <p className="text-small text-default-500">3D Data</p>
        </div>
      </CardHeader>
      <Divider />
      <CardBody>
        <p>
          I really love working with deck.gl and Plotly. There&apos;s something so
          rewarding about transforming raw data into interactive and engaging 3D
          visualizations. deck.gl&apos;s power and flexibility make it an ideal tool
          for crafting immersive experiences, and Plotly&apos;s knack for creating
          dynamic and insightful charts adds an extra layer of magic to my
          projects. Whether I&apos;m mapping out geospatial data, creating intricate
          3D graphs, or constructing interactive dashboards, these tools enable
          me to bring data to life, and I absolutely love the creative process
          it involves.
        </p>
      </CardBody>
    </Card>
  );
}
