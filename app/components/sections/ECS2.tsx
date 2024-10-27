"use client";
import React, { useState } from "react";

import {
  Card,
  CardHeader,
  CardBody,
  Divider
} from "@nextui-org/react";

function Ecs2() {
  return (
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
          Adaptability is at the core of everything we do at ECS. 
          With thousands of projects completed across diverse markets, 
          we understand the unique demands of each sector. Our team of professional engineers, 
          scientists, and certified technicians combine their expertise with cutting-edge tools, 
          technology, and financial strength to deliver tailored solutions that work. 
          Whether it’s geotechnical engineering, construction materials testing, 
          or environmental assessments, our full-service team provides value at every step, 
          ensuring projects run smoothly and efficiently.
        </p>
        <p style={{ padding: "5px" }}>
          In today’s fast-paced world of project development, 
          ECS offers a seamless “one-stop shop” experience. 
          Our National Accounts division provides real-time communications 
          and centralized project management, streamlining the process 
          from start to finish. Each project is supported by a 
          National Account Manager (NAM) with technical expertise 
          and project-management skills, acting as your advocate to 
          achieve compliance, sustainability, and performance. 
          Whether you’re tackling geotechnical challenges or facility management, 
          we ensure that our services meet your project’s unique needs while delivering timely, 
          actionable insights.
        </p>
      </CardBody>
    </Card>
  );
}

export default Ecs2;
