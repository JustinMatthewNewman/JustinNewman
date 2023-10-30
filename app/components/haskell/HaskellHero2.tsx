import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Link,
  Image,
} from "@nextui-org/react";

export default function HaskellHero2() {
  return (
    <div className="container flex flex-col md:flex-row items-center justify-center mt-12 gap-4 max-w-[1200px]">
      <Card>
        <CardHeader className="flex gap-3">
          
          <div className="flex flex-col">
            <p className="text-md">Haskell</p>
            <p className="text-small text-default-500">Graphite</p>
          </div>
        </CardHeader>
        <Divider />
        <CardBody>
          <p>A commandline interface to simplify the creation of stunning, scalable, network visualizations.</p>
        </CardBody>
        {/* <Divider />
        <CardFooter>
          <Link
            isExternal
            showAnchorIcon
            href="https://github.com/nextui-org/nextui"
          >
            Visit source code on GitHub.
          </Link>
        </CardFooter> */}
      </Card>
    </div>
  );
}
