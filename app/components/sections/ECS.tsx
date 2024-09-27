"use client";
import React, { useState } from "react";
import { Accordion, AccordionItem, Skeleton} from "@nextui-org/react";
import ecs from "../../../public/images/home/ecs.jpeg";
import Image from "next/image";

import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider, Link
} from "@nextui-org/react";

function Ecs() {
    const ecsConcepts = [
        {
          title: "Geotechnical Engineering",
          description:
            "Geotechnical engineering involves analyzing the physical properties of soil and rock to provide critical data for the design and construction of foundations, tunnels, and other infrastructure projects.",
          icon: "🌍",
        },
        {
          title: "Construction Materials Testing",
          description:
            "Testing of structural materials like concrete, asphalt, and steel to ensure they meet safety and performance standards. Results are delivered with real-time reporting systems for timely decision-making.",
          icon: "🏗️",
        },
        {
          title: "Environmental Assessments",
          description:
            "Environmental assessments evaluate potential impacts of construction projects, helping clients comply with environmental regulations and sustainability goals.",
          icon: "🌱",
        },
        {
          title: "Facilities Engineering",
          description:
            "Facilities engineering ensures that buildings and infrastructure meet compliance, sustainability, and performance standards through expert evaluations by engineers, architects, and building scientists.",
          icon: "🏢",
        },
        {
          title: "Project Management",
          description:
            "ECS provides centralized project management and real-time communication to streamline projects from start to finish, offering clients efficient and reliable service across all project stages.",
          icon: "📊",
        },
      ];
  const [imageLoaded, setImageLoaded] = useState(false);


  return (
    <div className="max-w-[1380px] mx-auto p-2 grid lg:grid-cols-5 gap-2 py-8">
      
      <div
        style={{
          borderRadius: "20px",
          padding: "7px",
          //backdropFilter: 'blur(7px)'
        }}
        className="col-span-full lg:col-span-4"
      >
        <Card>
          <CardHeader>
            <h2
              style={{
                marginLeft: "12px",
                fontSize: "3rem",
                fontWeight: "700",
                fontFamily:
                  "ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji",
              }}
            >
              ECS Limited
            </h2>
          </CardHeader>
          <Divider />
          <CardBody>
            <p style={{ padding: "5px" }}>
            Adaptability is at the core of everything we do at ECS. With thousands of projects completed across diverse markets, we understand the unique demands of each sector. Our team of professional engineers, scientists, and certified technicians combine their expertise with cutting-edge tools, technology, and financial strength to deliver tailored solutions that work. Whether it’s geotechnical engineering, construction materials testing, or environmental assessments, our full-service team provides value at every step, ensuring projects run smoothly and efficiently.
            </p>
            <p style={{ padding: "5px" }}>
            In today’s fast-paced world of project development, ECS offers a seamless “one-stop shop” experience. Our National Accounts division provides real-time communications and centralized project management, streamlining the process from start to finish. Each project is supported by a National Account Manager (NAM) with technical expertise and project-management skills, acting as your advocate to achieve compliance, sustainability, and performance. Whether you’re tackling geotechnical challenges or facility management, we ensure that our services meet your project’s unique needs while delivering timely, actionable insights.
            </p>

            <Link
              href="https://ecslimited.com"
              isExternal
            >
              <div style={{ cursor: "pointer" }} className="video-container">
              <Skeleton isLoaded={imageLoaded} className="rounded-lg">
                <Image  className="rounded-lg" onLoad={() => setImageLoaded(true)} src={ecs} alt="slowInternet" />
              </Skeleton>
              </div>
            </Link>

            <p>
              Image Source: https://getimg.ai/
            </p>
          </CardBody>
        </Card>
      </div>

      <div className="lg:mt-12">
        <Card>
          <CardHeader className="flex gap-3">
            <div className="flex flex-col">
              <p className="text-md">Impacted Markets</p>
              <p className="text-small text-default-500">ecslimited.com</p>
            </div>
          </CardHeader>
          <Divider />
          <CardBody>
            <Accordion>
              {ecsConcepts.map((concept, index) => (
                <AccordionItem
                  aria-label={concept.title}
                  title={
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <h4 style={{ marginLeft: "4px" }}>{concept.title}</h4>
                    </div>
                  }
                  key={index}
                  style={{
                    width: "100%",
                  }}
                >
                  <p>{concept.description}</p>
                </AccordionItem>
              ))}
            </Accordion>
          </CardBody>
          <Divider />
          <CardFooter>
            <Link href="https://ecslimited.com">
              ECS Limited
            </Link>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}

export default Ecs;
