import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";
import { useTheme } from "../contexts/ThemeContext";
import { lightTheme, darkTheme } from "../contexts/themes";
import { Collapse, Text, Grid } from "@nextui-org/react";
import dynamic from 'next/dynamic';

const Resume = () => {
  const { theme, toggleTheme } = useTheme();
  const Analysis = dynamic(() => import('../components/Analysis'));


  useEffect(() => {
    // Here you need to update your styles based on the theme
    document.body.style.backgroundColor = theme.body;
    document.body.style.color = theme.text;
    // add other style updates as needed
  }, [theme]);

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
    <div className="w-full">
      <div className="w-screen h-[50vh] relative top-5rem">
        {/* <div className="absolute top-0 left-0 w-full h-[50vh] bg-black/30 z-10" />
        <Image
          style={{ filter: "blur(2px)" }}
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src={header}
          alt="/"
        /> */}
        <div className="absolute top-[40%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%]  text-white z-10 p-2">
          <Text h2 style={{ color: `${theme.text}`, }} className="py-2">
            Resume
          </Text>
          <Text h3 style={{ color: `${theme.text}`, }}>
            Publications, Papers, and Documents
          </Text>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-2 py-8">
        <div
          style={{ padding: "7px" }}
          className="col-span-full md:col-span-4"
        >
            <Analysis/>



        
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
              {courses.map((concept, index) => (
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

export default Resume;
