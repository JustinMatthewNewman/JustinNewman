"use client";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
} from "@nextui-org/react";

import React from "react";


export default function Hardware() {
  return (
    <div className="container flex flex-col md:flex-row items-center justify-center mt-12 gap-4 max-w-[1200px]">
      <div
        style={{
          borderRadius: "20px",
          padding: "7px",
        }}
        className="col-span-full lg:col-span-4"
      >
        <Card className="mt-6 mb-6">
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
              iPhone Repair
            </h2>
          </CardHeader>
          <Divider />
          <CardBody>
            <p style={{ padding: "5px" }}>
              With adept proficiency in the art of iPhone screen repair, I take
              pride in a track record of accomplishment that spans successful
              repairs on over 50 devices. My expertise extends across
              various models and iterations of iPhones, allowing me to
              skillfully address cracked screens, unresponsive touch
              functionality, and other related issues. Through meticulous
              attention to detail, a solid understanding of the intricate
              components involved, and a dedication to precision, I&apos;ve
              consistently revitalized damaged iPhones, restoring them to their
              optimal functionality and visual appeal. My experience not only
              encompasses the technical finesse required for these repairs but
              also my commitment to providing reliable solutions
              that ensure the seamless performance and aesthetics of these
              essential devices.
            </p>
            <p style={{ padding: "5px" }}>
              This skill has been a part of me since high school, ignited by my
              genuine desire to offer affordable assistance. Charging just $20,
              along with the cost of the replacement screen from platforms like
              Amazon, I&apos;ve successfully resurrected more than 50 iPhones by
              addressing issues like cracked screens and touch malfunctions.
              This journey, fueled by a passion for helping others, has not only
              deepened my understanding of iPhone internals and sharpened my
              troubleshooting skills but also allowed me to make a meaningful
              contribution to individuals seeking cost-effective repairs.
            </p>
          </CardBody>
        </Card>
      </div>
    </div>
  );
}
