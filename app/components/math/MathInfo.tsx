import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Link,
} from "@nextui-org/react";

export default function MathInfo() {
  return (
    <Card className="max-w-[400px]">
      <CardHeader className="flex gap-3">
        <div className="flex flex-col">
          <p className="text-md">Math</p>
          <p className="text-small text-default-500">skillset</p>
        </div>
      </CardHeader>
      <Divider />
      <CardBody>
        <p className="py-2">
          With a solid grasp of concepts like linear algebra, calculus, machine
          learning, statistics, and discrete structures, I&apos;m all set to dive
          into the exciting world of data science and AI. Whether it&apos;s cracking
          the code of complex algorithms, optimizing models using calculus, or
          finding those golden nuggets of insight in data using statistics, I&apos;m
          ready to take on the dynamic challenges in this field.
        </p>
      </CardBody>
      
    </Card>
  );
}
