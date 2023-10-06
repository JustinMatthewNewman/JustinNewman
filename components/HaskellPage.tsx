import Image from "next/image";
import React, { useEffect } from "react";
import Link from "next/link";
import { Collapse, Text, Grid } from "@nextui-org/react";
import { useTheme } from "../contexts/ThemeContext";
import { lightTheme, darkTheme } from "../contexts/themes";
import { Card7 } from './Card7';


import header from "../public/assets/datascience-min.png";

const HaskellPage = () => {
  const { theme, toggleTheme } = useTheme();
  useEffect(() => {
    // Here you need to update your styles based on the theme
    document.body.style.backgroundColor = theme.body;
    document.body.style.color = theme.text;
    // add other style updates as needed
  }, [theme]);

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
      title: "Monads and Functors",
      description:
        "Monads and functors are abstractions used in Haskell to manage side effects and provide a structured way to work with computations that may have effects. They are key to handling I/O and asynchronous programming.",
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
      title: "Functional Data Structures",
      description:
        "Haskell promotes the use of functional data structures that maintain immutability and enable efficient operations. This includes persistent data structures and techniques like memoization.",
      source: "CS 430",
    },
    {
      title: "Concurrency and Parallelism",
      description:
        "Haskell provides abstractions for managing concurrency and parallelism, allowing you to write concurrent and parallel programs safely and efficiently.",
      source: "CS 430",
    },
    {
      title: "Domain-Specific Languages (DSLs)",
      description:
        "Haskell's powerful features make it an excellent choice for building domain-specific languages tailored to specific problem domains, providing a higher level of abstraction.",
      source: "CS 430",
    },
  ];

  return (
    <div className="w-full">
      <div className="w-screen h-[50vh] relative top-5rem">
        <div className="absolute top-0 left-0 w-full h-[50vh] bg-black/30 z-10" />
        <Image
          style={{ filter: "blur(2px)" }}
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src={header}
          alt="/"
        />
        <div className="absolute top-[40%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%]  text-white z-10 p-2">
          <Text h2 style={{ color: "white" }} className="py-2">
            Advanced Haskell Project
          </Text>
          <Text h3 style={{ color: "#e1e1e1" }}>
            Graph Algorithms / Network Visualization
          </Text>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-2 py-8">
        <div style={{ padding: "7px" }} className="col-span-full md:col-span-4">
          <p>Comprehensive</p>
          <h2>Overview</h2>

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

          {/* EMBED YOUTUBE VIDEO HERE */}
          <div className="video-container">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/rDpaP3QQJUs?si=nIeMHlX-0SONcZmh"
              title="YouTube video player"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
          <Grid.Container gap={2} justify="center">

          <Card7 link="/ruby" />
            </Grid.Container>

        </div>
        <Grid.Container gap={2} justify="center">
          <Grid style={{ zIndex: 2 }}>
            <Collapse.Group
              shadow
              style={{
                backgroundColor: `${theme.sidenav}`,
                color: `${theme.text}`,
              }}
            >
              {haskellConceptList.map((concept, index) => (
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

export default HaskellPage;
