"use client";
import React, { useState } from "react";

import {
  Card,
  CardHeader,
  CardBody,
  Divider
} from "@nextui-org/react";
import FloatingText from "../extras/FloatingText";
import LandingHero from "../dashboard/LandingHero";

function Ecs() {
  return (
    <Card className="p-4"> 
      <LandingHero />
    </Card>
  );
}

export default Ecs;
