import { Card, CardHeader } from "@nextui-org/card";
import React from "react";
import SoilTicketQueue from './SoilTicketQueue';
export default function Spacer() {
  return (
    <Card className="w-full h-[30rem] p-4">
      <CardHeader className="flex gap-3">
        <div className="flex flex-col">
          <p className="text-md">Atterberg Limits Test</p>
          <p className="text-small text-default-500">ECS Limited</p>
        </div>
      </CardHeader>
      <div className="w-2lvh">
      <SoilTicketQueue/>
      </div>
    </Card>
  );
}
