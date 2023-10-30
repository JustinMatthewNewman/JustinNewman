"use client";

import React from "react";
import { Accordion, AccordionItem, Link } from "@nextui-org/react";
import Image from "next/image";

import fragile from '../../../public/images/apps/fragile_demo-min.gif';

import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
} from "@nextui-org/react";

export default function Java() {
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
              src={fragile}
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
          </CardBody>
          <Divider />
        <CardFooter>
          <Link
            isExternal
            showAnchorIcon
            href="https://github.com/JustinMatthewNewman/MixedFractionArithmeticCalculator"
          >
            View Source Code on Github.
          </Link>
        </CardFooter>
        </Card>
      </div>

      <div className="lg:mt-12">
        <Card>
          <CardHeader className="flex gap-3">
            <div className="flex flex-col">
              <p className="text-md">Java</p>
              <p className="text-small text-default-500">Skills</p>
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
