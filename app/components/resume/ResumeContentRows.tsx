import React from "react";

import { Card, CardHeader, CardBody, Divider, Badge, Link } from "@nextui-org/react";
import CheckBoxRow from "../extras/checkboxrow/CheckBoxRow";
import CheckBoxRowMeta from "../extras/checkboxrow/CheckBoxRowMeta";
import CheckBoxRowECS from "../extras/checkboxrow/CheckBoxRowECS";
import AmazonCard from "./AmazonCard";
import MassCard from "./MassCard";
import ChefCard from "./ChefCard";
import Image from "next/image";
// import LifeCard from "./LifeCard";

import ghidra from '../../../public/images/resume/g.avif'
import metalinguist from '../../../public/images/resume/logo.avif'
import tele from '../../../public/images/resume/tele.webp'
import ecs from '../../../public/images/resume/ecs.jpg'

export default function ResumeContentRows() {
  return (
    <div>
      <Card>
        <CardHeader className="justify-between">
          <div className="flex flex-col">
            <p className="text-md">COMPUTER SYSTEMS</p>
            <p className="text-small text-default-500">CONFIDENTIAL</p>

          </div>
          <Card className="p-2 bg-slate-200">
            <Link   href="https://ghidra-sre.org" isExternal>
            <Image width={80} src={ghidra} alt={""} className="justify-right"/>
            </Link>
          </Card>
        </CardHeader>
        <Divider />
        <CardBody>
          <p>
            I maintain a remarkably comprehensive understanding of cybersecurity
            and computer systems, I adeptly employ the analytical skills
            required to pinpoint and exploit security vulnerabilities within
            various encryption strategies. Through meticulous reverse software
            engineering, utilizing open source solutions like the NSA’s Ghidra
            software, I am more than capable of infiltrating susceptible systems
            and recovering vital information for digital forensics
            investigations.
          </p>
        </CardBody>
      </Card>

      <Card className="mt-6">
        <CardHeader className="justify-between">
          <div className="flex flex-col">
            <p className="text-md">ECS APPLICATION SUPPORT TEAM</p>

            <div className="flex flex-col  ">
              <p className="text-small text-default-500 items-left">
                Jr Software Developer
              </p>
              <p className="text-small text-default-500 items-right">
                12/04/2023 - Present
              </p>

            </div>
          </div>
          <Card className="p-2 bg-slate-200">
          <Link   href="https://ecslimited.com" isExternal>
          <Image width={120} src={ecs} alt={""} className="justify-right"/>
          </Link>
          </Card>

        </CardHeader>
        <Divider />
        <CardBody>
          <div className="mt-1 mb-4">
            <CheckBoxRowECS />
          </div>

          <p>We offer dynamic, multi-disciplinary solutions. Our geotechnical, construction materials, environmental and facilities teams collaborate to add value across the project lifecycle. During my time at ECS I have:</p>
          <ul className="p-4">
            <li className="mt-2 mb-2">
              Resolved hundreds of <span className="font-bold">user requests</span>, ensuring efficient and in depth support for various applications across ECS.
            </li>
            <li className="mt-2 mb-2">
              Collected and implemented <span className="font-bold">custom reports</span> by creating refined SQL queries and stored procedures to meet client-specific reporting needs.
            </li>
            <li className="mt-2 mb-2">
              Implemented <span className="font-bold">clean and reusable solutions</span> for urgent and high-priority requests, mitigating issues and improving system stability.
            </li>
            <li className="mt-2 mb-2">
              Refactored dozens of convoluted legacy components,<span className="font-bold"> enhancing code readability, maintainability, and performance </span>across the system.
            </li>
            <li className="mt-2 mb-2">
              Actively contribute to <span className="font-bold">team discussions</span>, working collaboratively to improve processes and share best practices across the Team.
              Coordinated meetings with principal engineers and senior software developers to help expedite bug fixes and feature requests, ensuring <span className="font-bold">efficient communication and faster delivery of solutions.</span>
            </li>
            <li className="mt-2 mb-2">
              Play a key role in <span className="font-bold">consistently contributing to ECS’s growth</span>,  through technical and process-related contributions.
            </li>
          </ul>
        </CardBody>
      </Card>

      <Card className="mt-6">
        <CardHeader className="justify-between">
          <div className="flex flex-col">
            <p className="text-md">AGILE DEVELOPMENT EXPERIENCE</p>

            <div className="flex flex-col  ">
              <p className="text-small text-default-500 items-left">
                Jr Software Engineer
              </p>
              <p className="text-small text-default-500 items-right">
                2/22/2023 - 12/04/2023
              </p>

            </div>
          </div>
          <Card className="p-2 bg-slate-200">
          <Link   href="https://metalinguist.com" isExternal>
          <Image width={120} src={metalinguist} alt={""} className="justify-right"/>
          </Link>
          </Card>

        </CardHeader>
        <Divider />
        <CardBody>
          <div className="mt-1 mb-4">
            <CheckBoxRowMeta />
          </div>
          <h4>
            Metalinguist is a client portal/digital storefront for the
            translation industry with CAT tool integrations.
          </h4>
          <p>During my time contracted by Metalinguist LLC I have:</p>
          <ul className="p-4">
            <li className="mt-2 mb-2">
              Implemented multiple <span className="font-bold">dynamic data visualization components</span> on
              administrative and client dashboards.
            </li>
            <li className="mt-2 mb-2">
              Implemented various  <span className="font-bold">automated Playwright tests </span> for Order creation, login, and account entitlements. {" "}
            </li>
            <li className="mt-2 mb-2">
              Enhanced field validation, ensuring data integrity and
              mitigating duplicate entries by implementing text field validation
              logic employing  <span className="font-bold"> efficient DynamoDB queries </span> for secure, precise,
              and effective validation.{" "}
            </li>
            <li className="mt-2 mb-2">
              Contributed various additional solutions and features to the
              Metalinguist dev team, leveraging best practices such
              as well  <span className="font-bold"> organized functional components, higher-order functions,
              and React.js hooks. </span>
            </li>
          </ul>
        </CardBody>
      </Card>

      <Card className="mt-6">
        <CardHeader className="justify-between">
          <div className="flex flex-col  ">

            <p className="text-small text-default-500 items-left">
              Technical Operations
            </p>
            <p className="text-small text-default-500 items-right">
              9/20/2018 - Present
            </p>
          </div>
          <Badge content="LIVE" color="danger" shape="circle" placement="top-left">

          <Card className="p-2 bg-slate-200">
          <Link   href="https://telemediaproductions.com" isExternal>
          <Image width={180} src={tele} alt={""} className="justify-right"/>
          </Link>
          </Card>
          </Badge>

        </CardHeader>
        <Divider />
        <CardBody>
          <p>
            During my employment I have had the priviledge to be a part of <span className="font-bold">
            over 100 success Live Video Productions
            </span> and provided diverse forms of technical
            assistance to various broadcast crews including <span className="font-bold">iPhone screen repair, freelance
            software engineering, camera operation, replay-unit operation, and
            statistical graphics rendering.</span>
          </p>
          <div className="mt-4 mb-4">
            <CheckBoxRow />
          </div>

          <ul className="">

            <li className="mt-2 mb-2">
              Also I developed an automated <span className="font-bold">  open source ESPN-Inspired Athletic
              Statistical Graphics Rendering software </span> that gathers individual
              player data for each athlete and generates ESPN-style
              informational graphics. Leveraged Java and Jsoup library,
              processing team roster URLs to efficiently collect and present the
              statistics. <span className="font-bold"> Generates graphics for entire team’s in seconds
              </span> including sideline personnel, for all sports, for almost all
              universities.
            </li>
              <Link  className="p-4" href="https://stars-2.vercel.app" isExternal showAnchorIcon> LIVE APP </Link>
          </ul>
        </CardBody>
      </Card>

      <AmazonCard/>
      <MassCard/>
      <ChefCard/>
      {/* <LifeCard/> */}
    </div>
  );
}