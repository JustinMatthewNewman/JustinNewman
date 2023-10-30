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

export default function LinearAlgebra() {
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
            <p className="text-md">Linear Algebra</p>
            <p className="text-small text-default-500">
              James Madison University
            </p>
          </div>
        </CardHeader>
        <Divider />
        <CardBody>
          <p>
            Linear algebra is a branch of mathematics that focuses on vector
            spaces and linear transformations, providing fundamental tools for
            understanding and solving systems of linear equations and exploring
            geometric properties in multi-dimensional spaces.
          </p>
        </CardBody>
        
      </Card>
    </div>
  );
}
