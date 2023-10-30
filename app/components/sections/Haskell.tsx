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

export default function Haskell() {
  const haskellConceptList = [
    {
      title: "Functional Programming Paradigm",
      description:
        "Functional programming is a paradigm that treats computation as the evaluation of mathematical functions and avoids changing state and mutable data. Haskell is known for its strong adherence to the functional programming paradigm.",
      source: "CS 430",
    },
    {
      title: "Immutability and Pure Functions",
      description:
        "Haskell encourages immutability, where data is not modified after creation. Pure functions, which produce the same output for the same input and have no side effects, are a fundamental concept in Haskell.",
      source: "CS 430",
    },
    {
      title: "Pattern Matching",
      description:
        "Pattern matching allows you to match data structures against patterns and destructure them. It's a powerful tool in Haskell for handling different cases and extracting values from complex data.",
      source: "CS 430",
    },
    {
      title: "Type System and Type Inference",
      description:
        "Haskell has a strong and expressive type system. Type inference allows the compiler to deduce the types of expressions automatically, ensuring type safety and reducing the need for explicit type annotations.",
      source: "CS 430",
    },
    {
      title: "List Comprehensions",
      description:
        "List comprehensions provide a concise way to generate and manipulate lists. They're a common feature in Haskell that allows you to express operations on lists in a clear and compact manner.",
      source: "CS 430",
    },
    {
      title: "Higher-Order Functions",
      description:
        "Higher-order functions can accept other functions as arguments or return functions as results. They enable you to create more abstract and reusable code by treating functions as values.",
      source: "CS 430",
    },
    {
      title: "Recursion and Tail Recursion",
      description:
        "Recursion is a fundamental technique in Haskell for solving problems by breaking them down into smaller subproblems. Tail recursion optimizes recursive functions to avoid stack overflow.",
      source: "CS 430",
    },
    {
      title: "Type Classes and Polymorphism",
      description:
        "Type classes define interfaces for types, allowing you to write code that works across different data types. Polymorphism enables writing generic functions that can operate on various types.",
      source: "CS 430",
    },
    {
      title: "Concurrency and Parallelism",
      description:
        "Haskell provides abstractions for managing concurrency and parallelism, allowing you to write concurrent and parallel programs safely and efficiently.",
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
            My Haskell graph visualization program stands as a testament to the
            powerful combination of functional programming and data
            visualization. Designed to operate from the command line, this
            program accommodates both directed and undirected networks. Upon
            specifying the graph type, the program deftly reads in CSV files,
            housing adjacency lists that represent intricate relationships. The
            key innovation of the project is the seamless integration of the
            Haskell Graphite library, which effortlessly renders these networks
            in a visually digestible manner.
          </p>
          <p style={{ padding: "5px" }}>
            The overarching goal of the endeavor was to streamline the process
            of translating diverse CSV formats into coherent and visually
            informative graph structures. By providing the capability to discern
            between directed and undirected networks, the program showcases its
            adaptability to various scenarios. The project&apos;s fruition was made
            possible through the collaborative efforts of a remarkable
            individual, Dr. Chris Johnson. His guidance and mentorship have been
            remarkable throughout the development process, enabling the
            realization of a novel approach to graph visualization using the
            Haskell programming language. This project stands as a testament to
            the potential of functional programming in simplifying complex data
            manipulation and visualization tasks, and I am deeply grateful to
            Dr. Chris Johnson for his instrumental role in its success.
          </p>

            <div className="video-container">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/rDpaP3QQJUs?si=nIeMHlX-0SONcZmh"
              title="YouTube video player"
              allowFullScreen
            ></iframe>
            </div>
          </CardBody>
          <Divider />
          <CardFooter>
            <h4>Haskell Project</h4>
          </CardFooter>
        </Card>
      </div>

      <div className="lg:mt-12">
        <Card>
          <CardHeader className="flex gap-3">
            <div className="flex flex-col">
              <p className="text-md">Haskell</p>
              <p className="text-small text-default-500">Skills</p>
            </div>
          </CardHeader>
          <Divider />
          <CardBody>
            <Accordion>
              {haskellConceptList.map((concept, index) => (
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
