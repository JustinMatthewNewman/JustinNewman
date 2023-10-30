import React from "react";
import {Card, CardHeader, CardBody, CardFooter, Divider, Link} from "@nextui-org/react";

export default function AboutInfo2() {
  return (
    <Card className="max-w-[400px]">
      <CardHeader className="flex gap-3">
        <div className="flex flex-col">
          <p className="text-md">About</p>
          <p className="text-small text-default-500">newmanjustin.com</p>
        </div>
      </CardHeader>
      <Divider/>
      <CardBody>
      <p className="py-2">
          My skill set includes frameworks and databases like React.js,
          Firebase, DynamoDB, and mySQL, as well as web technologies like HTML
          and CSS. From secure authentication systems to user-friendly
          interfaces, my technical arsenal enables me to approach problems
          innovatively and provide efficient solutions.
        </p>
      </CardBody>
      
    </Card>
  );
}
