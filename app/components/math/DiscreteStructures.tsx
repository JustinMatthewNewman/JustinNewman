"use client"

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

export default function DiscreteStructures() {

  return (
    <div>
      <Card className="max-w-[400px]">
        <CardHeader className="flex gap-3">
          {/* <Image
            alt="nextui logo"
            height={40}
            radius="sm"
            src="https://github.com/justinmatthewnewman.png"
            width={40}
          /> */}
          <div className="flex flex-col">
            <p className="text-md">Discrete Structures I and II</p>
            <p className="text-small text-default-500">James Madison University</p>
          </div>
        </CardHeader>
        <Divider />
        <CardBody>
          <p>Discrete mathematics is a mathematical discipline that explores countable, distinct, and separate structures, providing the theoretical foundation for computer science, cryptography, and various problem-solving techniques in discrete systems.</p>
        </CardBody>
      </Card>
    </div>
  );
}
