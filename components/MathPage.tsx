import Image from "next/image";
import React, { useEffect } from "react";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";
import { Collapse, Text, Grid } from "@nextui-org/react";
import { useTheme } from "../contexts/ThemeContext";
import { lightTheme, darkTheme } from "../contexts/themes";
import x from "../public/assets/formula/crt/base.svg";
import ai from "../public/assets/formula/crt/ai.svg";
import mi from "../public/assets/formula/crt/mi.svg";
import yi from "../public/assets/formula/crt/yi.svg";
import zi from "../public/assets/formula/crt/zi.svg";

import header from "../public/assets/datascience-min.png";

const MathPage = () => {
  const { theme, toggleTheme } = useTheme();
  useEffect(() => {
    // Here you need to update your styles based on the theme
    document.body.style.backgroundColor = theme.body;
    document.body.style.color = theme.text;
    // add other style updates as needed
  }, [theme]);

  const conceptList = [
    {
      title: "Asymptotic bounding",
      description:
        "Asymptotic bounding analyzes the behavior of functions as they approach infinity. It helps us understand the growth rate of functions and their efficiency. I learned about it in my Algorithms and Data Structures course.",
      source: "Algorithms and Data Structures Course",
    },
    {
      title: "Euclidean vector spaces",
      description:
        "Euclidean vector spaces deal with geometric vectors in a multi-dimensional space. They are crucial in linear algebra and have applications in physics and computer graphics. I studied this topic in Linear Algebra course.",
      source: "Linear Algebra Course",
    },
    {
      title: "Eigenvalues and eigenvectors",
      description:
        "Eigenvalues and eigenvectors are fundamental concepts in linear algebra. They have applications in solving systems of differential equations, analyzing stability, and more. I covered this topic in my Linear Algebra course.",
      source: "Linear Algebra Course",
    },
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
    {
      title: "Hypothesis testing",
      description:
        "Hypothesis testing is a statistical method to make inferences about a population based on a sample. It's widely used in scientific research and data analysis to validate hypotheses.",
      source: "Statistics Courses",
    },
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

  return (
    <div className="w-full">
      <div className="w-screen h-[50vh] relative top-5rem">
        <div className="absolute top-0 left-0 w-full h-[50vh] bg-black/30 z-10" />
        <Image
          style={{
            filter: 'blur(2px)', opacity: 0.5 
          }}
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src={header}
          alt="/"
        />
        <div className="absolute top-[40%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%]  text-white z-10 p-2">
          <Text h2 style={{ color: "white" }} className="py-2">
            Advanced Mathematics
          </Text>
          <Text h3 style={{ color: "#e1e1e1" }}>
            Calculus II / Discrete Structures II / Linear Algebra / Statistics
          </Text>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-2 py-8">
        <div style={{ padding: "7px" }} className="col-span-full md:col-span-4">
          <p>Comprehensive</p>
          <h2>Overview</h2>

          <p style={{ padding: "5px" }}>
            I maintain a comprehensive understanding of fundamental mathematical
            concepts crucial for a software engineer. I am proficient in
            asymptotic bounding, Euclidean vector spaces,
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
            expertise equips me to tackle complex problems, optimize algorithms,
            and contribute effectively to software engineering.
          </p>

          {/* EMBED YOUTUBE VIDEO HERE */}
          <div className="video-container">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/JgxKb_1bp7I?si=J1aroGsMGycs6nfA"
              title="YouTube video player"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>

          <div className="flex justify-center flex-col items-center">
            <Text
              h4
              style={theme === lightTheme ? {} : { filter: "invert(1)" }}
            >
              Chinese Remainder Theorem for Modular Exponentiation
            </Text>
            <Image
              src={x}
              alt="CRT BASE FORMULA"
              style={theme === lightTheme ? {} : { filter: "invert(1)" }}
            />
            <Image
              src={ai}
              alt="CRT BASE FORMULA"
              style={theme === lightTheme ? {} : { filter: "invert(1)" }}
            />
            <Image
              src={mi}
              alt="CRT BASE FORMULA"
              style={theme === lightTheme ? {} : { filter: "invert(1)" }}
            />
            <Image
              src={yi}
              alt="CRT BASE FORMULA"
              style={theme === lightTheme ? {} : { filter: "invert(1)" }}
            />
            <Image
              src={zi}
              alt="CRT BASE FORMULA"
              style={theme === lightTheme ? {} : { filter: "invert(1)" }}
            />
          </div>

          {/* EMBED YOUTUBE VIDEO HERE */}
          {/* <div className="video-container">
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/M-8x3NC7iz8?si=msyorSqOJ3j7RYQA"
                title="YouTube video player"
                frameBorder="0"
                allowFullScreen
              ></iframe>
            </div> */}
        </div>
        <Grid.Container gap={2} justify="center">
          <Grid style={{ zIndex: 2 }}>
            <Collapse.Group
              shadow
              style={{
                backgroundColor: `${theme.nav}`,
                color: `${theme.text}`,
              }}
            >
              {conceptList.map((concept, index) => (
                <Collapse
                  title={
                    <Text h4 style={{ color: `${theme.text}` }}>
                      {concept.title}
                    </Text>
                  }
                  key={index}
                >
                  <Text style={{ color: `${theme.text}` }}>
                    {concept.description}
                  </Text>
                  <Text
                    style={{
                      fontSize: "0.8rem",
                      marginTop: "0.5rem",
                      color: `${theme.text}`,
                    }}
                  >
                    Source: {concept.source}
                  </Text>
                </Collapse>
              ))}
            </Collapse.Group>
          </Grid>
        </Grid.Container>
      </div>
    </div>
  );
};

export default MathPage;
