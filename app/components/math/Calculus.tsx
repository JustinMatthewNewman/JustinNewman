"use client";

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

export default function Calculus() {
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
            <p className="text-md">Calculus I and II</p>
            <p className="text-small text-default-500">
              James Madison University
            </p>
          </div>
        </CardHeader>
        <Divider />
        <CardBody>
          <p>
            Calculus is a branch of mathematics that deals with the concepts of
            change and motion, involving derivatives for understanding rates of
            change and integrals for finding accumulations, making it a
            foundational tool in science, engineering, and various fields.
          </p>
        </CardBody>
        
      </Card>
    </div>
  );
}
