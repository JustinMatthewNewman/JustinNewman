"use client";
import React from "react";
import { Accordion, AccordionItem } from "@nextui-org/react";

import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Link,
} from "@nextui-org/react";

export default function Metalinguist() {
  const metaConcepts = [
    {
      title: "JavaScript",
      description:
        "JavaScript is a versatile programming language often used for web development and client-side scripting.",
      icon: "🧠",
    },
    {
      title: "AWS DynamoDB",
      description:
        "AWS DynamoDB is a fully managed NoSQL database service provided by Amazon Web Services.",
      icon: "🧵",
    },
    {
      title: "Express.js",
      description:
        "Express.js is a popular web application framework for Node.js.",
      icon: "📦",
    },
    {
      title: "AWS S3",
      description:
        "AWS S3, or Amazon Simple Storage Service, is an object storage service for scalable and secure data storage in the cloud.",
      icon: "🗺️",
    },
    {
      title: "Passport Auth with JWT",
      description:
        "Passport is a popular authentication middleware for Node.js, and JWT (JSON Web Tokens) is a method for securely transmitting information between parties.",
      icon: "⚙️",
    },
  ];


  return (
    <div className="max-w-[1380px] mx-auto grid lg:grid-cols-5 gap-2 mt-6 mb-6">
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
              Metalinguist
            </h2>
          </CardHeader>
          <Divider />
          <CardBody>
            <p style={{ padding: "5px" }}>
              During my time with Metalinguist LLC, I have played a pivotal role
              in developing the many components. My contributions encompassed
              the implementation of dynamic data visualizations on both
              administrative and client dashboards, as well as the creation of
              automated Playwright tests to test order creation, login
              processes, and account entitlements. Furthermore, I significantly
              improved the onboarding process by introducing efficient DynamoDB
              queries for subdomains, effectively preventing duplicate entries
              in the best way possible. As a member of the development team, I
              continuously enriched the project by employing best practices,
              including well-organized functional components, higher-order
              functions, and React.js hooks.
            </p>
            <p style={{ padding: "5px" }}>
              I am so grateful for the incredible team at Metalinguist LLC, and
              I hold immense respect and admiration for each of my colleagues.
              Veronica Hylak, our product manager and co-founder, is not only a
              design genius but also a driving force behind our success. Loren
              Lulushi, our senior developer and co-founder, has been an
              incredibly patient and kind mentor, always ready to lend a helping
              hand and offer valuable insights. Tristan Wang, a tech guru
              pursuing a master&apos;s degree, brings a wealth of knowledge and
              expertise to the table. Emil Hofseter, our backend genius and AWS
              expert, ensures our systems run smoothly, and Will Mori, our
              backend guru, has masterfully implemented a dynamic website
              builder and company page. Faith, our marketing specialist, brings
              the world of our products to our audience. And as for me, I&apos;m just
              a simple man who has a profound passion for data visualization,
              and it&apos;s an absolute priveledge to work alongside such a talented
              and dedicated team. Together, we make Metalinguist a nexus of
              innovation and excellence.
            </p>
          </CardBody>
        </Card>
      </div>

      <div className="lg:mt-12">
        <Card>
          <CardHeader className="flex gap-3">
            <div className="flex flex-col">
              <p className="text-small text-default-500">Metalinguist.com</p>
            </div>
          </CardHeader>
          <Divider />
          <CardBody>
            <Accordion>
              {metaConcepts.map((concept, index) => (
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