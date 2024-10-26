import { Card, CardBody, CardHeader } from "@nextui-org/card";
import React from "react";
import EcsOfficeQueue from './EcsOfficeQueue';
import SidePanelSettings from "./SidePanelSettings/SidePanelSettings";
import { Divider } from "@nextui-org/react";

export default function SidePanelList() {
  return (
    <Card className="w-full h-[30rem] p-4">
      <CardHeader className="flex justify-between items-center">
        <div className="flex flex-col">
          <p className="text-md">Subsidiary leaders</p>
          <p className="text-small text-default-500">ECS Limited</p>
        </div>
        <SidePanelSettings/>
      </CardHeader>
      <CardBody className="mt-2">
        <EcsOfficeQueue/>
      </CardBody>
    </Card>
  );
}
