import Image from "next/image";
import React, { useEffect } from "react";
import Link from "next/link";
import { Collapse, Text, Grid } from "@nextui-org/react";
import { useTheme } from "../contexts/ThemeContext";
import { lightTheme, darkTheme } from "../contexts/themes";
import dynamic from "next/dynamic";

// import header from "../public/assets/datascience-min.png";

const USAPage = () => {
  const { theme, toggleTheme } = useTheme();
  const USA = dynamic(() => import("../components/USA"));

  useEffect(() => {
    // Here you need to update your styles based on the theme
    document.body.style.backgroundColor = theme.body;
    document.body.style.color = theme.text;
    // add other style updates as needed
  }, [theme]);

  const conceptList = [
    {
      title: "Observable",

      description:
        "Observable is a JavaScript library for reactive programming that allows creating data streams and declaring dependencies between them. It has useful operators for transforming, filtering, and combining streams.",

      source: "JavaScript frameworks course",
    },

    {
      title: "RapidAPI",

      description:
        "RapidAPI is a leading API marketplace that allows developers to find, test, and connect to thousands of APIs. It provides tools for managing the API lifecycle including mocking, documenting, testing, monitoring and securing.",

      source: "Web development course",
    },

    {
      title: "d3",

      description:
        "D3.js is a JavaScript library for data visualization and interactive graphics in the browser. It allows binding data to DOM elements and animating them based on data changes using SVG, HTML and CSS.",

      source: "Data visualization course",
    },

    {
      title: "JavaScript",

      description:
        "JavaScript is a high-level programming language used to build interactive websites and web applications. Some key features are dynamic typing, prototype-based object orientation, first-class functions and asynchronous programming.",

      source: "Web development course",
    },
  ];

  return (
    <div className="w-full">
      <div className="w-screen h-[50vh] relative top-5rem">
        <div className="absolute top-0 left-0 w-full h-[50vh] bg-black/30 z-10" />
        {/* <Image
          style={{ filter: "blur(2px)" }}
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src={header}
          alt="/"
        /> */}
        <div className="absolute top-[40%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%]  text-white z-10 p-2">
          <Text h2 style={{ color: "white" }} className="py-2">
            United States Choropleth
          </Text>
          <Text h3 style={{ color: "#e1e1e1" }}>
            Gas price state, October 2021. Data: Rapid API Gas prices
          </Text>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-2 py-8">
        <div style={{ padding: "7px" }} className="col-span-full md:col-span-4">
          <USA />

          <p style={{ padding: "5px" }}>
            I created an interactive choropleth map using JavaScript and D3 that
            visualizes the average gas prices in each state. This project allows
            users to explore the fluctuations in fuel costs across the United
            States, offering valuable insights into regional pricing trends.
          </p>
          <p style={{ padding: "5px" }}>
            To kickstart this endeavor, we gathered the most recent gas price
            data for each state, ensuring the information was accurate and
            up-to-date. The next step involved processing and formatting the
            data for seamless integration into the D3 framework. D3&apos;s robust
            capabilities for handling geographic data and rendering interactive
            visuals played a crucial role in this project.
          </p>
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

export default USAPage;
