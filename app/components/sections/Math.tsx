"use client";

import React, { useState } from "react";
import { Accordion, AccordionItem } from "@nextui-org/react";
import YouTube, { YouTubeProps } from "react-youtube";

import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Skeleton,
} from "@nextui-org/react";
import Formula from "../math/Formula";

export default function Math() {
  const conceptList = [
    {
      title: "Asymptotic bounding",
      description:
        "Asymptotic bounding analyzes the behavior of functions as they approach infinity. It helps us understand the growth rate of functions and their efficiency. I learned about it in my Algorithms and Data Structures course.",
      source: "Algorithms and Data Structures Course",
    },
    // {
    //   title: "Euclidean vector spaces",
    //   description:
    //     "Euclidean vector spaces deal with geometric vectors in a multi-dimensional space. They are crucial in linear algebra and have applications in physics and computer graphics. I studied this topic in Linear Algebra course.",
    //   source: "Linear Algebra Course",
    // },
    // {
    //   title: "Eigenvalues and eigenvectors",
    //   description:
    //     "Eigenvalues and eigenvectors are fundamental concepts in linear algebra. They have applications in solving systems of differential equations, analyzing stability, and more. I covered this topic in my Linear Algebra course.",
    //   source: "Linear Algebra Course",
    // },
    {
      title: "Linear transformations",
      description:
        "Linear transformations are functions that preserve vector addition and scalar multiplication. They are essential in understanding how matrices represent transformations. I learned about them in Linear Algebra course.",
      source: "Linear Algebra Course",
    },
    {
      title: "Matrix inverses and determinants",
      description:
        "Matrix inverses and determinants are key operations in linear algebra. Inverses help solve systems of equations, while determinants have applications in solving differential equations. I studied this in Linear Algebra course.",
      source: "Linear Algebra Course",
    },
    {
      title: "Gaussian Elimination",
      description:
        "Gaussian Elimination is a method to solve systems of linear equations by transforming the augmented matrix into row-echelon form. It's a foundational technique in linear algebra and numerical analysis.",
      source: "Linear Algebra Course",
    },
    {
      title: "Binary Arithmetic",
      description:
        "Binary arithmetic involves addition, subtraction, multiplication, and division in the binary number system. It's crucial in computer systems and digital logic design.",
      source: "Computer Systems Courses",
    },
    {
      title: "Modular arithmetic",
      description:
        "Modular arithmetic deals with arithmetic operations on remainders after division by a fixed number called the modulus. It has applications in number theory, cryptography, and computer science.",
      source: "Discrete Math Courses",
    },
    {
      title: "Chinese Remainder Theorem",
      description:
        "The Chinese Remainder Theorem solves a system of congruences with pairwise coprime moduli. It's used in number theory and has applications in cryptography and computing.",
      source: "Discrete Math Courses",
    },
    {
      title: "Modular Exponentiation",
      description:
        "Modular exponentiation is the process of raising a number to a power modulo another number. It's used in cryptography, especially in the field of public-key cryptography.",
      source: "Discrete Math Courses",
    },
    {
      title: "Boolean Algebra",
      description:
        "Boolean algebra deals with binary variables and logic operations like AND, OR, and NOT. It's fundamental in digital circuit design, computer science, and electronic engineering.",
      source: "Discrete Math Courses",
    },
    {
      title: "Regression Analysis",
      description:
        "Regression analysis is a statistical technique to model the relationship between variables. It's used to make predictions and understand the strength of associations between variables.",
      source: "Statistics and Data Analysis Courses",
    },
    // {
    //   title: "Hypothesis testing",
    //   description:
    //     "Hypothesis testing is a statistical method to make inferences about a population based on a sample. It's widely used in scientific research and data analysis to validate hypotheses.",
    //   source: "Statistics Courses",
    // },
    {
      title: "L'Hôpital's rule",
      description:
        "L'Hôpital's rule helps evaluate limits of indeterminate forms by applying derivatives. It's a crucial tool in calculus for understanding limits of functions that approach infinity or zero.",
      source: "Calculus and Applied Algorithms Courses",
    },
    {
      title: "Differentiation",
      description:
        "Differentiation is a fundamental concept in calculus, dealing with rates of change and slopes of curves. It's used to solve optimization problems and understand functions' behavior.",
      source: "Calculus Courses",
    },
    {
      title: "Integration",
      description:
        "Integration is the reverse process of differentiation, focusing on finding areas under curves. It's used in calculus to solve problems involving accumulation and finding total quantities.",
      source: "Calculus Courses",
    },
  ];
  const [imageLoaded, setImageLoaded] = useState(false);
  const videoOptions = {
    height: "390",
    width: "640",
    playerVars: {
      // Set any additional options or parameters here
    },
  };

  const onVideoReady = () => {
    // The video is now ready, you can remove the skeleton
    setImageLoaded(true);
  };

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
              I maintain a comprehensive understanding of fundamental
              mathematical concepts crucial for a software engineer. I am
              proficient in asymptotic bounding, Euclidean vector spaces,
              eigenvalues/eigenvectors, and linear transformations. My knowledge
              extends to matrix operations, including inverses and determinants,
              as well as Gaussian Elimination for solving equations. Binary and
              modular arithmetic are second nature, and I grasp the Chinese
              Remainder Theorem&apos;s applications.
            </p>
            <p style={{ padding: "5px" }}>
              Moreover, I excel in modular exponentiation, Boolean algebra,
              regression analysis, and hypothesis testing for data-driven
              decisions. I am well-versed in calculus, including
              L&apos;Hôpital&apos;s rule, differentiation, and integration, with
              applications in optimization and scientific computing. Overall, my
              expertise equips me to develop great solutions, optimize
              algorithms, and contribute effectively to software engineering.
            </p>

            <Skeleton isLoaded={imageLoaded} className="mt-2 rounded-lg">
              <div className="video-container">
                <YouTube
                  videoId="JgxKb_1bp7I"
                  opts={videoOptions}
                  onReady={onVideoReady}
                />
              </div>
            </Skeleton>
            <div className="mt-6 mb-10">
              <Formula />
            </div>
          </CardBody>
          <Divider />
          <CardFooter>
            <h4>Chinese Remainder Theorem for Modular Exponentiation</h4>
          </CardFooter>
        </Card>
      </div>

      <div className="lg:mt-12">
        <Card>
          <CardHeader className="flex gap-3">
            <div className="flex flex-col">
              <p className="text-md">Concepts</p>
              <p className="text-small text-default-500">Math</p>
            </div>
          </CardHeader>
          <Divider />
          <CardBody>
            <Accordion>
              {conceptList.map((concept, index) => (
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
