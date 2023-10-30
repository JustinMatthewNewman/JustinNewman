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

export default function Infocard() {
  return (
    <Card className="max-w-[1200px]">
      <CardHeader className="flex gap-3">
        <Image
          alt="Justin Newman"
          height={40}
          radius="sm"
          src="https://github.com/justinmatthewnewman.png"
          width={40}
        />
        <div className="flex flex-col">
          <p className="text-md">Justin Newman</p>
          <p className="text-small text-default-500">Woodbridge, VA</p>
        </div>
      </CardHeader>

      <Divider />

      <CardBody>
        <p>
          I maintain a remarkably comprehensive understanding of cybersecurity
          and computer systems, I adeptly employ the analytical skills required
          to pinpoint and exploit security vulnerabilities within various
          encryption strategies.Through meticulous reverse software engineering,
          utilizing open-source solutions like the NSA’s Ghidra software,I am more than capable of infiltrating susceptible systems and
          recovering vital information for digital forensics investigations.
        </p>
      </CardBody>

      
    </Card>
  );
}
