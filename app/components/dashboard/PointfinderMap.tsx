import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Divider, 
  Link
} from "@nextui-org/react";

import MapLayer from './MapLayer';
import ECS_Offices_DeckGLMap from "../data/ECS_Offices_DeckGLMap";
import {Input} from "@nextui-org/react";
import {SearchIcon} from "./SearchIcon";
import Image from "next/image";
import ecs from "../../../public/images/background/ECS_logo.png"

export default function PointfinderMap() {
  return (
    <Card className="w-full h-[30rem] p-4 z-10 ">
      <CardHeader className="flex gap-3">
      
      <Card className="p-2">
          <Link   href="https://ecslimited.com" isExternal>
          <Image width={69} src={ecs} alt={""} className="justify-right"/>
          </Link>
      </Card>

      <Input
        label="Search"
        isClearable
        radius="lg"
        classNames={{
          label: "text-black/50 dark:text-white/90",
          input: [
            "bg-transparent",
            "text-black/90 dark:text-white/90",
            "placeholder:text-default-700/50 dark:placeholder:text-white/60",
          ],
          innerWrapper: "bg-transparent",
          inputWrapper: [
            "shadow-xl",
            "bg-default-200/50",
            "dark:bg-default/60",
            "backdrop-blur-xl",
            "backdrop-saturate-200",
            "hover:bg-default-200/70",
            "dark:hover:bg-default/70",
            "group-data-[focus=true]:bg-default-200/50",
            "dark:group-data-[focus=true]:bg-default/60",
            "!cursor-text",
          ],
        }}
        placeholder="Type to search..."
        startContent={
          <SearchIcon className="text-black/50 mb-0.5 dark:text-white/90 text-slate-400 pointer-events-none flex-shrink-0" />
        }
      />
      

      </CardHeader>
      <CardBody className="rounded-lg border border-transparent overflow-hidden">

        <div>
            <ECS_Offices_DeckGLMap data={undefined} />
        </div>
      </CardBody>
    </Card>
  );
}
