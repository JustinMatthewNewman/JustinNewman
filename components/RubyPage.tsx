import Image from "next/image";
import React, { useEffect } from "react";
import Link from "next/link";
import { Collapse, Text, Grid } from "@nextui-org/react";
import { useTheme } from "../contexts/ThemeContext";
import { lightTheme, darkTheme } from "../contexts/themes";
import { Card7 } from "./Card7";

import header from "../public/assets/datascience-min.png";

const RubyPage = () => {
  const { theme, toggleTheme } = useTheme();
  useEffect(() => {
    // Here you need to update your styles based on the theme
    document.body.style.backgroundColor = theme.body;
    document.body.style.color = theme.text;
    // add other style updates as needed
  }, [theme]);

  const rubyConceptList = [
    {
      title: "Dynamic and Object-Oriented Language",
      description:
        "Ruby is a dynamic and object-oriented programming language known for its elegant syntax and focus on simplicity. It supports both procedural and object-oriented programming paradigms.",
      source: "CS 430",
    },
    {
      title: "Ruby on Rails Framework",
      description:
        "Ruby on Rails (Rails) is a web application framework written in Ruby. It follows the Model-View-Controller (MVC) architectural pattern and provides conventions to streamline web development.",
      source: "CS 430",
    },
    {
      title: "Gems and Package Management",
      description:
        "RubyGems is Ruby's package manager, allowing developers to easily install and manage libraries and tools, known as gems. Gems extend Ruby's functionality and speed up development.",
      source: "CS 430",
    },
    {
      title: "Active Record",
      description:
        "Active Record is Rails' object-relational mapping (ORM) system. It enables developers to work with databases using Ruby classes, reducing the need to write raw SQL queries.",
      source: "CS 430",
    },
    {
      title: "RESTful API Development",
      description:
        "Rails emphasizes building RESTful APIs, providing a standardized and intuitive way to design and implement APIs that adhere to the principles of Representational State Transfer (REST).",
      source: "CS 430",
    },
    {
      title: "Convention over Configuration (CoC)",
      description:
        "Rails follows the CoC principle, reducing configuration by providing sensible default conventions. This boosts developer productivity and maintains consistent project structures.",
      source: "CS 430",
    },
    {
      title: "Model-View-Controller (MVC) Pattern",
      description:
        "Rails' architecture is based on MVC, which separates concerns within an application. Models handle data logic, views control presentation, and controllers manage the interaction between them.",
      source: "CS 430",
    },
    {
      title: "Active Record Associations",
      description:
        "Active Record simplifies database relationships through associations like has_many, belongs_to, and has_and_belongs_to_many. These associations streamline querying and manipulation.",
      source: "CS 430",
    },
    {
      title: "Routing and RESTful Resourceful Routing",
      description:
        "Rails' routing maps URLs to controller actions. RESTful resourceful routing provides a structured way to define routes that correspond to CRUD operations on resources.",
      source: "CS 430",
    },
    {
      title: "Asset Pipeline",
      description:
        "The asset pipeline manages and compiles CSS, JavaScript, and other assets. It optimizes assets for performance and organizes them to reduce load times.",
      source: "CS 430",
    },
    {
      title: "Testing with RSpec and Capybara",
      description:
        "RSpec is a popular testing framework for Ruby. Capybara is used for acceptance testing and simulating user interactions in web applications, contributing to test-driven development.",
      source: "CS 430",
    },
    {
      title: "Deployment and Heroku",
      description:
        "Heroku is a cloud platform that simplifies deploying Rails applications. It provides tools for deployment, scaling, and managing production environments.",
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
            Advanced Ruby Project
          </Text>
          <Text h3 style={{ color: "#e1e1e1" }}>
            API&apos;s / Ruby on Rails
          </Text>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-2 py-8">
        <div style={{ padding: "7px" }} className="col-span-full md:col-span-4">
          <p>Comprehensive</p>
          <h2>Overview</h2>

          <p style={{ padding: "5px" }}>
            Introducing Koincidence, a cutting-edge Ruby on Rails application
            that serves as a dynamic API frontend for the Coin API. Designed
            with both crypto enthusiasts and data enthusiasts in mind,
            Koincidence provides an intuitive interface to access real-time
            cryptocurrency data, historical trends, and essential market
            statistics. By seamlessly interacting with the Coin API, Koincidence
            enables users to stay up-to-date with the ever-evolving world of
            cryptocurrencies, empowering informed decisions.
          </p>
          <p style={{ padding: "5px" }}>
            During the app&apos;s development journey, an intriguing challenge
            emerged when interfacing with the Coin API. A particular issue
            raised its head, causing data discrepancies and raising concerns
            among users. In an earnest pursuit of delivering accurate and
            reliable data, I promptly reached out to the Coin API&apos;s support
            team. This collaborative effort allowed me to not only address the
            issue at hand but also contribute to enhancing the API&apos;s overall
            functionality. Koincidence stands as a
            testament to the resilience of Ruby on Rails and its ability to
            facilitate seamless interactions with external APIs, while also
            showcasing the spirit of problem-solving and collaboration that
            drives the tech community forward.
          </p>

          {/* EMBED YOUTUBE VIDEO HERE */}
          <div className="video-container">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/SZfzKIi7jHo?si=cFcMvyvjKzfNrsAP"
              title="YouTube video player"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
          <Grid.Container gap={2} justify="center">
                <Card7 link="/elevationGlobe" />
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
              {rubyConceptList.map((concept, index) => (
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

export default RubyPage;
