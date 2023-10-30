"use client";
import { Accordion, AccordionItem } from "@nextui-org/react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
} from "@nextui-org/react";

import Image from "next/image";
import React from "react";
import Link from "next/link";
import secure from "../../../public/images/home/dataDriver-min.jpg";

export default function Broadcasting() {
  const videoSoftware = [
    {
      title: "NewTek 3play",
      description:
        "NewTek 3Play is a sports video replay system used in live broadcasting. It allows instant replay, slow motion, and highlight creation during sports events.",
      source: "NewTek",
      //   icon: newtek3play,
    },
    {
      title: "Xpression",
      description:
        "Microsoft Expression is a suite of web and graphics design tools that includes applications for creating websites, graphics, and interactive content.",
      source: "Microsoft",
      //   icon: xpression,
    },
    {
      title: "OBS studio",
      description:
        "OBS Studio is free and open-source software used for live streaming and recording video and more content from your computer.",
      source: "Open-source community",
      //   icon: obs,
    },
  ];
  return (
    <div className="max-w-[1380px] mx-auto p-2 grid lg:grid-cols-5 gap-2 py-8">
      

      <div className="lg:mt-16">
        <Card>
          <CardHeader className="flex gap-3">
            <div className="flex flex-col">
              <p className="text-md">Broadcasting Software</p>
              <p className="text-small text-default-500">Proficiencies</p>
            </div>
          </CardHeader>
          <Divider />
          <CardBody>
            <Accordion>
              {videoSoftware.map((concept, index) => (
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
        </Card>
      </div>
      <div
        style={{
          borderRadius: "20px",
          padding: "7px",
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
              Broadcasting
            </h2>
          </CardHeader>
          <Divider />
          <CardBody>
            <p style={{ padding: "5px" }}>
              My journey as a Camera Operator at Telemedia Productions under the
              mentorship of John Salem has been nothing short of transformative.
              From the outset of my freshman year in college, I was welcomed
              into John&apos;s team with open arms, and this marked the
              beginning of an incredible learning curve. John&apos;s unwavering
              support exposed me to a myriad of opportunities that took me to
              the heart of video broadcasting. Countless broadcasts at esteemed
              institutions like JMU, VMI, UVA, W&M, and UNCW became my
              classroom, each event a chance to hone my skills and delve deeper
              into the world of video production.
            </p>
            <p style={{ padding: "5px" }}>
              One of the highlights of my experience was the exposure to
              cutting-edge technology. At VMI, I had the privilege of working
              with the xpression graphics system and the newtek 3play replay
              controller, gaining hands-on proficiency that set me apart.
              Concurrently, I was also engaged in the STARS program, a personal
              achievement that fills me with pride. The guidance I received from
              luminaries such as JMU&apos;s Director of Live Productions and the
              Director of Broadcast Services Emeritus was instrumental.
              Moreover, learning from stalwarts like Technology Manager and
              Instructor John Hodges, as well as building a strong rapport with
              VMI&apos;s Coordinator of Athletic Multimedia, added layers to my
              growth.
            </p>

            <p style={{ padding: "5px" }}>
              Through this enriching journey, I have imbibed invaluable life
              lessons. Communication, a skill I thought I knew well, took on new
              dimensions as I worked in a fast-paced, high-pressure environment.
              Time management became second nature as I balanced academics with
              broadcasts, and attention to detail evolved from a trait to a
              habit. All in all, my time as a Camera Operator with Telemedia
              Productions and John Salem has provided me with not just technical
              acumen, but a holistic understanding of teamwork, adaptability,
              and dedication that will undoubtedly shape my future endeavors in
              the world of video broadcasting and beyond.
            </p>
          </CardBody>
        </Card>
      </div>
    </div>
  );
}
