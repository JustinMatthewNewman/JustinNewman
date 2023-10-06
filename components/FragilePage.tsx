import Image from "next/image";
import React, { useEffect } from "react";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";
import { Collapse, Text, Grid, Card, Button } from "@nextui-org/react";
import { useTheme } from "../contexts/ThemeContext";
import { lightTheme, darkTheme } from "../contexts/themes";
// import soccer from "../public/assets/soccer.webp";

import frag2 from "../public/assets/fragile_demo-min.gif";
import farey from "../public/assets/farey.png";

import justin from "../public/assets/fragileTeam/justin.png";
import junior from "../public/assets/fragileTeam/junior.png";
import abdallah from "../public/assets/fragileTeam/abdallah.png";
import dylan from "../public/assets/fragileTeam/dylan.png";
import easton from "../public/assets/fragileTeam/easton.png";
import bernstein from "../public/assets/fragileTeam/bernstein.png";

// import formula from "../public/assets/formula/farey/formula.svg";
// import med from "../public/assets/formula/farey/med.svg";
// import fnminusone from "../public/assets/formula/farey/fnminusone.svg";
// import fn from "../public/assets/formula/farey/fn.svg";

// import rec from "../public/assets/formula/farey/recursive.png";

// import rec1 from "../public/assets/formula/farey/rec1.svg";
// import rec2 from "../public/assets/formula/farey/rec2.svg";
// import rec3 from "../public/assets/formula/farey/rec3.svg";
// import rec4 from "../public/assets/formula/farey/rec4.svg";
// import rec5 from "../public/assets/formula/farey/rec5.svg";



// import header from "../public/assets/star_example-min.png";

const FragilePage = () => {
  const { theme, toggleTheme } = useTheme();
  useEffect(() => {
    // Here you need to update your styles based on the theme
    document.body.style.backgroundColor = theme.body;
    document.body.style.color = theme.text;
    // add other style updates as needed
  }, [theme]);

  const redirectToGitHub = () => {
    window.location.href =
      "https://github.com/JustinMatthewNewman/MixedFractionArithmeticCalculator";
  };

  const conceptList = [
    {
      title: "Farey number computation",
      description:
        "The program uses Swing to create a graphical user interface (GUI) with various components like buttons, text fields, labels, and combo boxes.",
      source: "Justin Newman",
    },
    {
      title: "Swing GUI Components",
      description:
        "The program uses Swing to create a graphical user interface (GUI) with various components like buttons, text fields, labels, and combo boxes.",
      source: "Justin Newman",
    },
    {
      title: "Pie Chart visualization",
      description:
        "The application includes a feature for creating and displaying pie chart visualizations to represent data.",
      source: "Justin Newman + Dylan Ballard",
    },
    {
      title: "History playback",
      description:
        "Users can review the history of actions or operations performed within the application.",
      source: "Justin Newman + Easton Rupe",
    },
    {
      title: "Export history as PDF or Print",
      description:
        "Users have the ability to export the application's history log as a PDF document.",
      source: "Abdallah Derbala",
    },
    {
      title: "Export Pie chart as png/jpg",
      description:
        "Users can export the generated pie chart visualizations as PNG or JPG image files.",
      source: "Dylan Ballard",
    },
    {
      title: "Multiple languages",
      description:
        "The application supports multiple languages, allowing users to interact with it in their preferred language.",
      source: "Dylan Ballard + Abdallah Derbala",
    },
    {
      title: "Typesetting",
      description:
        "The application provides advanced typesetting capabilities for formatting text and data representation between LaTeX style and standard input style.",
      source: "Justin Newman",
    },
    {
      title: "Perform arithmetic operations on mixed fractions",
      description:
        "Users can perform arithmetic operations involving mixed fractions within the application.",
      source: "Aballah Derbala + Justin Newman",
    },
    {
      title: "Keyboard Input",
      description: "Users can use their keyboard to input calculations.",
      source: "Junior G.",
    },
    {
      title: "JAR export wizard for easy deployment",
      description:
        "The application includes a wizard that facilitates the export of the project as a JAR file for easy deployment. It allows developers to customize the executable Jar to include organization based specifics such as a Logo, and color scheme.",
      source: "Justin Newman",
    },
    {
      title: "Expandable slideout windows",
      description:
        "The user interface of the application is designed to be intuitive and user-friendly.",
      source: "Justin Newman",
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
            Mixed Fractions Calculator.
          </Text>
          <Text h3 style={{ color: "#e1e1e1" }}>
            CS 345 Software Engineering Project
          </Text>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-2 py-8">
        <div style={{ padding: "7px" }} className="col-span-full md:col-span-4">
          <p>Software Engineering Team Project</p>
          <h2>Overview</h2>

          <p style={{ padding: "5px" }}>
            The Advanced Calculator project aims to develop a feature-rich
            calculator application with a user-friendly interface. The
            calculator offers standard arithmetic operations as well as
            specialized functions. The interface includes buttons for
            exponentiation, multiplication, division, addition, and subtraction,
            represented by &quot;^&quot;, &quot;×&quot;, &quot;÷&quot;,
            &quot;+&quot;, and &quot;-&quot;, respectively. The &quot;=&quot;
            button calculates and displays results. The calculator also features
            utility buttons such as backspace (&quot;←&quot;) for error
            correction, clear (&quot;C&quot;) for clearing the current input,
            and reset (&quot;R&quot;) to return to the initial state. The negate
            (&quot;±&quot;) button changes the sign of the input. The
            &quot;Inv&quot; button calculates the inverse of the current input.
            A unique aspect of this calculator is its fraction manipulation
            capabilities. The &quot;|&quot; button allows users to cycle through
            displaying the whole number, numerator, and denominator of a
            fraction. Additionally, the &quot;ℚ&quot; button generates the next Farey
            neighbor. The &quot;↹&quot; button calculates the mediant of
            two fractions. Overall, the Advanced Calculator project combines
            standard arithmetic operations with specialized functions and
            fraction manipulation, catering to both basic and advanced
            mathematical needs. The user-friendly interface and diverse
            functionality make it a versatile tool for various mathematical
            calculations.
          </p>

          {/* EMBED YOUTUBE VIDEO HERE */}
          <div className="video-container">
            <Image
              style={{ padding: "20px" }}
              className="absolute z-1"
              layout="fill"
              objectFit="cover"
              src={frag2}
              alt="/"
            />
          </div>

          {/* <p style={{ padding: "5px" }}>
            To generate the Farey sequence of order n recursively, you can
            follow these steps:
          </p>

          <p style={{ padding: "5px" }}>
            Base Case: For order 1 (n=1), the Farey sequence is simply 0/1 and
            1/1.
          </p>

          <p style={{ padding: "5px" }}>
            Recursive Case: For order n &gt; 1, you can compute the Farey
            sequence by inserting the mediants between the fractions of the
            sequence of order n-1.
          </p>

          <p style={{ padding: "5px" }}>
            Start with the Farey sequence of order n-1:
          </p>

          <Image
            src={formula}
            alt="BASE FORMULA"
            style={theme === lightTheme ? {} : { filter: "invert(1)" }}
          />

          <p style={{ padding: "5px" }}>
            To insert mediants, consider each consecutive pair of fractions a/b
            and c/d in:
          </p>

          <Image
            src={fnminusone}
            alt="BASE FORMULA"
            style={theme === lightTheme ? {} : { filter: "invert(1)" }}
          />

          <p style={{ padding: "5px" }}>Calculate the mediant:</p>

          <Image
            src={med}
            alt="BASE FORMULA"
            style={theme === lightTheme ? {} : { filter: "invert(1)" }}
          />

          <p style={{ padding: "5px" }}>add the value to the new sequence:</p>

          <Image
            src={fn}
            alt="BASE FORMULA"
            style={theme === lightTheme ? {} : { filter: "invert(1)" }}
          />

          <p style={{ padding: "5px" }}>
            Continue this process for all pairs in:
          </p>

          <Image
            src={fnminusone}
            alt="BASE FORMULA"
            style={theme === lightTheme ? {} : { filter: "invert(1)" }}
          />

          <p style={{ padding: "5px" }}>
            This recursive algorithm builds the Farey sequence by successively
            inserting mediants between adjacent fractions in the previous
            order&apos;s sequence.
          </p>

          <p style={{ padding: "5px" }}>
            The base case ensures that the algorithm stops and returns the
            initial sequence for order 1.
          </p>

          <p style={{ padding: "5px" }}>
            My implementation of the algorithm for computing the next Farey
            sequence number is as follows:
          </p>

          <p style={{ padding: "5px" }}>
            Check if it's possible to compute the next Farey term given two
            rational numbers by comparing the ratios of their numerators and
            denominators.
          </p>

          <p style={{ padding: "5px" }}>
            If the ratio of the second is less than or equal to the ratio of the
            first, then it's not a valid Farey number.
          </p>

          <p style={{ padding: "5px" }}>
            Finally, my recursive algorithm calculates the next number in the Farey
            sequence by recursively applying the mediant operation while
            adjusting the numerator and denominator based on the provided
            rational numbers and an iterative parameter k to create an approximation of the next Farey number. The recursion ends when
            k exceeds the common denominator of the two numbers, leaving us with the resulting farey neighbor.
          </p> */}

          {/* <Image
            src={rec}
            alt="BASE FORMULA"
            style={theme === lightTheme ? {} : { filter: "invert(1)" }}
          /> */}

{/* 
          <p style={{ padding: "5px" }}> Time Complexity Analysis</p>

          <Image
            src={rec1}
            alt="BASE FORMULA"
            style={theme === lightTheme ? {} : { filter: "invert(1)" }}
          />
          <p style={{ padding: "5px" }}> </p>

        <Image
            src={rec2}
            alt="BASE FORMULA"
            style={theme === lightTheme ? {} : { filter: "invert(1)" }}
          />
          <p style={{ padding: "5px" }}> </p>

        <Image
            src={rec3}
            alt="BASE FORMULA"
            style={theme === lightTheme ? {} : { filter: "invert(1)" }}
          />
        <Image
            src={rec4}
            alt="BASE FORMULA"
            style={theme === lightTheme ? {} : { filter: "invert(1)" }}
          />
        <Image
            src={rec5}
            alt="BASE FORMULA"
            style={theme === lightTheme ? {} : { filter: "invert(1)" }}
          /> */}

          {/* <div className="video-container">
            <Image
            style={theme === lightTheme ? {} : { filter: "invert(1)" }}
            className="absolute z-1"
              layout="fill"
              objectFit="cover"
              src={farey}
              alt="/"
            />
          </div>

          <p style={{ padding: "5px" }}>
            Image source: https://en.wikipedia.org/wiki/Farey_sequence
          </p> */}

          <p style={{ padding: "5px" }}>
            The development team for the advanced calculator application
            comprised diverse experts, each contributing to specific aspects. I,
            Justin Newman, synced up with the team regularly to help with
            increasing cohesion, designed the GUI, implemented features like the
            Farey sequence and signed arithmetic, and ensured compatibility with
            physical keyboards. Abdallah Derbala focused on mathematical
            functions, including arithmetic, negation, and form specification,
            as well as implementing mediant and inverse arithmetic. Dylan
            Ballard enhanced the user interface with features like arithmetic
            operations, clear and reset buttons, and intermediate step display,
            along with introducing recording and pie chart visualization. Easton
            Rupe specialized in fraction handling, creating fraction classes,
            mixed number input, and playback control. Junior Garmendia optimized
            user input processes, integrated physical keyboard support, and
            provided history display and copy-paste functions. Dr. David
            Bernstein, the product owner, brought academic and industry
            leadership to guide the project effectively.
          </p>

          <div className="flex justify-center p-4">
            <Button
              onClick={redirectToGitHub}
            >
              Open Source
            </Button>
          </div>

          {/* <h2 className="text-center">Contributors.</h2>
          <Grid.Container gap={3} justify="center">
            <div className="flex justify-between mt-8">
              <Card
                shadow
                style={{
                  backgroundColor: `${theme.sidenav}`,
                  color: `${theme.text}`,
                  margin: "8px",
                  border: "none",
                  width: "400px", // Adjust the width as needed
                }}
              >
                <div className="text-center p-4">
                  <Image
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                    src={justin}
                    alt="/"
                  />
                  <h3 className="text-center">Justin Newman</h3>
                </div>
              </Card>
            </div>
          </Grid.Container>
          <Grid.Container gap={3} justify="center">
            <div className="flex justify-between mt-8">
              <Card
                shadow
                style={{
                  backgroundColor: `${theme.sidenav}`,
                  color: `${theme.text}`,
                  margin: "8px",
                  border: "none",
                  width: "200px", // Adjust the width as needed
                }}
              >
                <div className="text-center p-4">
                  <Image
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                    src={junior}
                    alt="/"
                  />
                  <h4 className="text-center">Junior Garmendia</h4>
                </div>
              </Card>
              <Card
                shadow
                style={{
                  backgroundColor: `${theme.sidenav}`,
                  color: `${theme.text}`,
                  margin: "8px",
                  border: "none",
                  width: "200px", // Adjust the width as needed
                }}
              >
                <div className="text-center p-4">
                  <Image
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                    src={abdallah}
                    alt="/"
                  />
                  <h4 className="text-center">Abdallah Derbala</h4>
                </div>
              </Card>
            </div>
          </Grid.Container>

          <Grid.Container gap={3} justify="center">
            <div className="flex justify-between mt-8">
              <Card
                shadow
                style={{
                  backgroundColor: `${theme.sidenav}`,
                  color: `${theme.text}`,
                  margin: "8px",
                  border: "none",
                  width: "200px", // Adjust the width as needed
                }}
              >
                <div className="text-center p-4">
                  <Image
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                    src={dylan}
                    alt="/"
                  />
                  <h4 className="text-center">Dylan Ballard</h4>
                </div>
              </Card>
              <Card
                shadow
                style={{
                  backgroundColor: `${theme.sidenav}`,
                  color: `${theme.text}`,
                  margin: "8px",
                  border: "none",
                  width: "200px", // Adjust the width as needed
                }}
              >
                <div className="text-center p-4">
                  <Image
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                    src={easton}
                    alt="/"
                  />
                  <h4 className="text-center">Easton Rupe</h4>
                </div>
              </Card>
            </div>
          </Grid.Container>
          <Grid.Container gap={3} justify="center">
            <div className="flex justify-between mt-8">
              <Card
                shadow
                style={{
                  backgroundColor: `${theme.sidenav}`,
                  color: `${theme.text}`,
                  margin: "8px",
                  border: "none",
                  width: "200px", // Adjust the width as needed
                }}
              >
                <div className="text-center p-4">
                  <Image
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                    src={bernstein}
                    alt="/"
                  />
                  <h4 className="text-center">Dr. Bernstein</h4>
                </div>
              </Card>
            </div>
          </Grid.Container> */}
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

export default FragilePage;
