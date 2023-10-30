"use client";

import React from "react";
import { Accordion, AccordionItem } from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";

import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
} from "@nextui-org/react";

export default function Ruby() {
  const rubyConceptList = [
    {
      title: "Dynamic and Object-Oriented Language",
      description:
        "Ruby is a dynamic and object-oriented programming language known for its elegant syntax and focus on simplicity. It supports both procedural and object-oriented programming paradigms.",
      source: "CS 430",
    },
    {
      title: "Ruby on Rails Framework",
      description:
        "Ruby on Rails (Rails) is a web application framework written in Ruby. It follows the Model-View-Controller (MVC) architectural pattern and provides conventions to streamline web development.",
      source: "CS 430",
    },
    {
      title: "Gems and Package Management",
      description:
        "RubyGems is Ruby's package manager, allowing developers to easily install and manage libraries and tools, known as gems. Gems extend Ruby's functionality and speed up development.",
      source: "CS 430",
    },
    {
      title: "Active Record",
      description:
        "Active Record is Rails' object-relational mapping (ORM) system. It enables developers to work with databases using Ruby classes, reducing the need to write raw SQL queries.",
      source: "CS 430",
    },
    {
      title: "RESTful API Development",
      description:
        "Rails emphasizes building RESTful APIs, providing a standardized and intuitive way to design and implement APIs that adhere to the principles of Representational State Transfer (REST).",
      source: "CS 430",
    },
    {
      title: "Convention over Configuration (CoC)",
      description:
        "Rails follows the CoC principle, reducing configuration by providing sensible default conventions. This boosts developer productivity and maintains consistent project structures.",
      source: "CS 430",
    },
    {
      title: "Model-View-Controller (MVC) Pattern",
      description:
        "Rails' architecture is based on MVC, which separates concerns within an application. Models handle data logic, views control presentation, and controllers manage the interaction between them.",
      source: "CS 430",
    },
    {
      title: "Active Record Associations",
      description:
        "Active Record simplifies database relationships through associations like has_many, belongs_to, and has_and_belongs_to_many. These associations streamline querying and manipulation.",
      source: "CS 430",
    },
   
  ];

  return (
    <div
      style={{ marginTop: "20px", marginBottom: "20px" }}
      className="grid lg:grid-cols-5"
    >
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
                fontSize: "2rem",
                fontWeight: "700",
                fontFamily:
                  "ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji",
              }}
            >
              Overview
            </h2>
          </CardHeader>
          <Divider />
          <CardBody>
          <p style={{ padding: "5px" }}>
            Introducing Koincidence, a cutting-edge Ruby on Rails application
            that serves as a dynamic API frontend for the Coin API. Designed
            with both crypto enthusiasts and data enthusiasts in mind,
            Koincidence provides an intuitive interface to access real-time
            cryptocurrency data, historical trends, and essential market
            statistics. By seamlessly interacting with the Coin API, Koincidence
            enables users to stay up-to-date with the ever-evolving world of
            cryptocurrencies, empowering informed decisions.
          </p>
          <p style={{ padding: "5px" }}>
            During the app&apos;s development journey, an intriguing challenge
            emerged when interfacing with the Coin API. A particular issue
            raised its head, causing data discrepancies and raising concerns
            among users. In an earnest pursuit of delivering accurate and
            reliable data, I promptly reached out to the Coin API&apos;s support
            team. This collaborative effort allowed me to not only address the
            issue at hand but also contribute to enhancing the API&apos;s overall
            functionality. Koincidence stands as a
            testament to the resilience of Ruby on Rails and its ability to
            facilitate seamless interactions with external APIs, while also
            showcasing the spirit of problem-solving and collaboration that
            drives the tech community forward.
          </p>

            <div className="video-container">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/SZfzKIi7jHo?si=cFcMvyvjKzfNrsAP"
              title="YouTube video player"
              frameBorder="0"
              allowFullScreen
            ></iframe>
            </div>
          </CardBody>
          <Divider />
          <CardFooter>
            <h4>Ruby Project</h4>
          </CardFooter>
        </Card>
      </div>

      <div className="lg:mt-12">
        <Card>
          <CardHeader className="flex gap-3">
            <div className="flex flex-col">
              <p className="text-md">Ruby</p>
              <p className="text-small text-default-500">Skills</p>
            </div>
          </CardHeader>
          <Divider />
          <CardBody>
            <Accordion>
              {rubyConceptList.map((concept, index) => (
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
    </div>
  );
}
