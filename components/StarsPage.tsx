import Image from "next/image";
import React, { useEffect } from "react";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";
import { Collapse, Text, Grid, Card, Button } from "@nextui-org/react";
import { useTheme } from "../contexts/ThemeContext";
import { lightTheme, darkTheme } from "../contexts/themes";
// import soccer from "../public/assets/soccer.webp";

import stars from "../public/assets/stars.png";


// import header from "../public/assets/star_example-min.png";

const StarsPage = () => {
  const { theme, toggleTheme } = useTheme();
  useEffect(() => {
    // Here you need to update your styles based on the theme
    document.body.style.backgroundColor = theme.body;
    document.body.style.color = theme.text;
    // add other style updates as needed
  }, [theme]);

  const redirectToGitHub = () => {
    window.location.href = "https://github.com/JustinMatthewNewman/Stars";
  };

  const conceptList = [
    {
      title: "Swing GUI Components",
      description:
        "The program uses Swing to create a graphical user interface (GUI) with various components like buttons, text fields, labels, and combo boxes.",
      source: "CS 345: Software Engineering",
    },
    {
      title: "Graphics Rendering",
      description:
        "The program utilizes the BufferedImage and Graphics classes to create and manipulate images. It draws shapes, text, and images onto images, allowing customization of colors, fonts, and graphical elements.",
      source: "Self-Implemented",
    },
    {
      title: "Web Data Retrieval",
      description:
        "The program employs the Jsoup library to fetch HTML source code from a URL. It then extracts specific data from the HTML source using parsing techniques.",
      source: "Self-Implemented",
    },
    {
      title: "Jsoup Web Scraping",
      description:
        "Jsoup is used to scrape web content by parsing HTML documents. The program selects and extracts relevant information from the HTML structure, enabling data retrieval from websites.",
      source: "Self-Implemented",
    },
    {
      title: "File Handling",
      description:
        "Image files are read and written using the ImageIO class. The program handles file paths and file objects to manage images.",
      source: "Self-Implemented",
    },
    {
      title: "Exception Handling",
      description:
        "The program employs try-catch blocks to handle exceptions, such as network connection issues or invalid URLs, ensuring graceful error handling.",
      source: "Self-Implemented",
    },
    {
      title: "Object-Oriented Programming",
      description:
        "The program defines and utilizes classes like 'Team', 'htmlReader', and 'imageWriter'. It practices encapsulation, inheritance, and other OOP principles.",
      source: "Self-Implemented",
    },
    {
      title: "String Manipulation",
      description:
        "String manipulation is used to process and extract relevant data from HTML source. String methods are employed for formatting and information extraction.",
      source: "Self-Implemented",
    },
    {
      title: "Color Manipulation",
      description:
        "Color customization is achieved through working with Color objects to modify graphical elements. Conversions between color representations are utilized.",
      source: "Self-Implemented",
    },
    {
      title: "Network Communication",
      description:
        "The program establishes connections to URLs, fetches web content, and handles potential exceptions related to network errors.",
      source: "Self-Implemented",
    },
    {
      title: "Event Handling",
      description:
        "Action listeners are implemented to respond to user interactions, enabling specific actions to be executed when buttons are clicked.",
      source: "Self-Implemented",
    },
    // ... and so on for the rest of the concepts
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
            STARS ★★★★★
          </Text>
          <Text h3 style={{ color: "#e1e1e1" }}>
            Statistical Team Athletic Rendering Software
          </Text>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-2 py-8">
        <div style={{ padding: "7px" }} className="col-span-full md:col-span-4">
          <p>Comprehensive</p>
          <h2>Overview</h2>

          <p style={{ padding: "5px" }}>
            The software project, developed during my tenure as a Camera
            Operator at Telemedia Productions, serves as a powerful tool for
            enhancing the visual representation of athletic team statistics.
            Driven by the need to create captivating graphics that highlight the
            achievements and attributes of athletes, I embarked on the
            creation of this program. The software&apos;s primary purpose is in
            seamlessly extracting comprehensive individual player statistics
            from online team rosters, specifically tailored to the sports broadcasting industry.
            It utilizes the Jsoup library to extract data from team rosters and,
            in conjunction with Java&apos;s Swing GUI components, generates dynamic,
            customizable transparent PNG graphs. These graphics, infused with the
            team&apos;s statistics, are visually compelling and easily integrated
            into presentations, broadcasts, and digital media. The software
            effectively bridges the gap between data and aesthetics, offering an
            innovative solution for conveying sports-related information to
            audiences in an engaging and visually appealing manner. This project
            showcases the synergy between my technical skills, creative vision,
            and the real-world demands of Telemedia Productions, culminating in
            a software solution that elevates the company&apos;s sports broadcasting
            endeavors.
          </p>

          {/* EMBED YOUTUBE VIDEO HERE */}
          <div className="video-container">
            {/* <iframe
              width="560"
              height="315"
              src="https://i.imgur.com/SZ2Djoo.mp4"
              title="Video player"
              frameBorder="0"
              allowFullScreen
            ></iframe> */}
            <video className="w-screen" controls>
              <source src="https://i.imgur.com/SZ2Djoo.mp4" type="video/mp4" />
              Your browser does not support the video tag. Please check out this
              awesome demo from a newer device.
            </video>
          </div>

          <div className="video-container p-10">
          <div className="img-container">
            <Image
              style={{ padding: '20px' }}
              className="absolute z-1"
              layout="fill"
              objectFit="cover"
              src={stars}
              alt="/"
            />
          </div>
        </div>


          <div className="flex justify-center p-4">
            <Button
              onClick={redirectToGitHub}
            >
              Open Source
            </Button>
          </div>

          <Grid.Container gap={3} justify="center">
            <div className="flex justify-between mt-8">
              <Card
              >
                <div className="text-center p-4">
                  <img
                    className="w-32 mx-auto"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/512px-HTML5_logo_and_wordmark.svg.png"
                    alt="HTML"
                  />
                </div>
              </Card>
              <Card
              >
                <div className="text-center p-4">
                  <img
                    className="w-32 mx-auto"
                    src="https://classes.engineering.wustl.edu/cse231/core/images/2/26/Java.png"
                    alt="Java"
                  />
                </div>
              </Card>
              <Card
              >
                <div className="text-center p-4">
                  <img
                    className="w-32 mx-auto"
                    src="https://cdn3.iconfinder.com/data/icons/logos-and-brands-adobe/512/267_Python-512.png"
                    alt="Python"
                  />
                </div>
              </Card>
            </div>
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

export default StarsPage;
