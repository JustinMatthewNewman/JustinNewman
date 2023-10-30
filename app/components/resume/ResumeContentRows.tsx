import React from "react";

import { Card, CardHeader, CardBody, Divider } from "@nextui-org/react";
import CheckBoxRow from "../extras/checkboxrow/CheckBoxRow";
import CheckBoxRowMeta from "../extras/checkboxrow/CheckBoxRowMeta";


export default function ResumeContentRows() {
  return (
    <div>
      <Card>
        <CardHeader className="flex gap-3">
          <div className="flex flex-col">
            <p className="text-md">COMPUTER SYSTEMS EXPERIENCE</p>
            <p className="text-small text-default-500">CONFIDENTIAL</p>
          </div>
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
        <CardHeader className="flex gap-3">
          <div className="flex flex-col">
            <p className="text-md">AGILE DEVELOPMENT EXPERIENCE</p>

            <div className="flex flex-col  ">
              <p className="text-small text-default-500 items-left">
                Junior Software Engineer contracted by Metalinguist LLC.
              </p>
              <p className="text-small text-default-500 items-right">
                2/22/2023 - Present
              </p>
            </div>
          </div>
        </CardHeader>
        <Divider />
        <CardBody>
          <h4>
            Metalinguist is a client portal/digital storefront for the
            translation industry with CAT tool integrations.
          </h4>
          <div className="mt-4 mb-4">
            <CheckBoxRowMeta />
          </div>
          <ul className="p-4">
            <li className="mt-1 mb-1">
              ✰ Implemented multiple dynamic data visualization components on
              administrative and client dashboards.
            </li>
            <li className="mt-1 mb-1">
              ✰ Implemented a fully functional Google OAuth2.0 Login with google
              button utilizing react-oauth/google.{" "}
            </li>
            <li className="mt-1 mb-1">
              ✰ Enhanced field validation, ensuring data integrity and
              mitigating duplicate entries by implementing text field validation
              logic employing efficient DynamoDB queries for secure, precise,
              and effective validation.{" "}
            </li>
            <li className="mt-1 mb-1">
              ✰ Contributed various additional solutions and features to the
              Metalinguist administrative team, leveraging best practices such
              as well organized functional components, higher-order functions,
              and React.js hooks.
            </li>
          </ul>
        </CardBody>
      </Card>

      <Card className="mt-6">
        <CardHeader className="flex gap-3">
          <div className="flex flex-col  ">
            <p className="text-md">
              +100 LIVE UNIVERSITY SPORTS BROADCASTING EVENTS
            </p>

            <p className="text-small text-default-500 items-left">
              Technical Operations contracted by Telemedia Productions.
            </p>
            <p className="text-small text-default-500 items-right">
              9/20/2018 - Present
            </p>
          </div>
        </CardHeader>
        <Divider />
        <CardBody>
          <p>
            During my employment I have provided diverse forms of technical
            assistance to various broadcast crews including iPhone screen repair, freelance
            software engineering, camera operation, replay-unit operation, and
            statistical graphics rendering.
          </p>

          <p className="mt-2 mb-2">
          Referenceable Broadcasting Departments
          </p>
          <div className="mt-4 mb-4">
            <CheckBoxRow />
          </div>

          <ul className="p-4">
            <li className="mt-1 mb-1">
              ✰ Developed an automated open source ESPN-Inspired Athletic
              Statistical Graphics Rendering software that gathers individual
              player data for each athlete and generates ESPN-style
              informational graphics. Leveraged Java and Jsoup library,
              processing team roster URLs to efficiently collect and present the
              statistics. Generates graphics for entire team’s in seconds
              including sideline personnel, for all sports, for almost all
              universities.
            </li>
          </ul>
        </CardBody>
      </Card>
    </div>
  );
}
