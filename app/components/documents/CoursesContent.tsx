"use client";
import React from "react";
import { Accordion, AccordionItem } from "@nextui-org/react";

import { Card, CardHeader, CardBody, Divider } from "@nextui-org/react";

export default function CoursesContent() {
  const courses = [
    {
      title: "Applied Algorithms",
      description:
        "Applied Algorithms focuses on designing and analyzing algorithms for real-world problems. It covers techniques like dynamic programming, greedy methods, graph algorithms and more. I took this as an upper level computer science elective.",
      icon: "📏",
      source: "James Madison University CS",
    },
    {
      title: "Software Engineering",
      description:
        "Software Engineering teaches concepts like requirements analysis, system design, Agile development, testing, and maintenance. My group developed a mixed fractions calculator. The program was complete with features such as, type settings for LaTeX format, history playback, farey neighbor calculation, pie chart display panel, tutorial mode supporting various languages and much more.",
      icon: "📱",
      source: "James Madison University CS",
    },
    {
      title: "Computer Systems II",
      description:
        "Computer Systems II builds on Computer Systems I with topics such as multi-threading, and system-level programming.",
      icon: "💻",
      source: "James Madison University CS",
    },
    {
      title: "Discrete Structures II",
      description:
        "Discrete Structures II covers mathematical concepts like recurrence relations, generating functions, number theory, discrete probability, and graph theory algorithms.",
      icon: "📈",
      source: "James Madison University CS",
    },
    {
      title: "Calculus II",
      description:
        "Calculus II expands integration techniques, covers sequences and series, parametric equations, polar coordinates, and multivariate calculus.",
      icon: "✏️",
      source: "James Madison University CS",
    },
    {
      title: "Database Systems",
      description:
        "Database Systems teaches relational data modeling, SQL querying, database design, transactions, normalization, and physical system implementation.",
      icon: "🗄️",
      source: "James Madison University CS",
    },
    {
      title: "Parallel & Distributed Systems",
      description:
        "Parallel and Distributed Systems covers architectural principles, parallel programming, distributed algorithms, MapReduce, scalability, and more.",
      icon: "➕",
      source: "James Madison University CS",
    },
    {
      title: "Statistics",
      description:
        "Statistics provides an introduction to statistical reasoning, descriptive statistics, probability, statistical inference, regression, and more.",
      icon: "📊",
      source: "James Madison University Math",
    },
    {
      title: "Web Development",
      description:
        "Web Development covers languages like HTML, CSS, and JavaScript and frameworks for building interactive websites and web apps.",
      icon: "🌐",
      source: "James Madison University CS",
    },
    {
      title: "Linear Algebra",
      description:
        "Linear Algebra includes topics like vector spaces, matrices, linear transformations, eigenvalues, diagonalization, and orthogonality.",
      icon: "📏",
      source: "James Madison University Math",
    },
    {
      title: "Machine Learning",
      description:
        "Machine Learning is an introduction to predictive modeling techniques like regression, classification, clustering, neural networks, and more.",
      icon: "🤖",
      source: "James Madison University Math",
    },
  ];

  return (
    <div>
      <Card>
        <CardHeader className="flex gap-3">
          <div className="flex flex-col">
            <p
              style={{
                fontSize: "1rem",
                fontWeight: "700",
                fontFamily:
                  "ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji",
              }}
              className="text-md"
            >
              Course Work
            </p>
          </div>
        </CardHeader>
        <Divider />
        <CardBody>
          <Accordion>
            {courses.map((concept, index) => (
              <AccordionItem
                aria-label={concept.title}
                title={
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <h4
                      style={{
                        fontSize: "1rem",
                        fontWeight: "700",
                        fontFamily:
                          "ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji",
                        marginLeft: "4px",
                      }}
                    >
                      {concept.title}
                    </h4>
                  </div>
                }
                
                key={index}
                style={{
                  width: "100%",
                }}
              >
                <h4
                  className="p-1 text-default-500"
                  style={{ marginLeft: "4px" }}
                >
                  {concept.description}
                </h4>
              </AccordionItem>
            ))}
          </Accordion>
        </CardBody>
      </Card>
    </div>
  );
}
