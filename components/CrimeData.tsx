import Image from "next/image";
import React, { useEffect } from "react";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";
import { Collapse, Text, Grid, Card, Button } from "@nextui-org/react";
import { useTheme } from "../contexts/ThemeContext";
import { lightTheme, darkTheme } from "../contexts/themes";
// import soccer from "../public/assets/soccer.webp";

import crime from "../public/assets/dcCrime-min.png";
import arrest from "../public/assets/arrest.jpeg";
import dcpd from "../public/assets/dcpd.png";
import justin from "../public/assets/fragileTeam/justin.png";

const CrimeData = () => {
  const { theme, toggleTheme } = useTheme();
  useEffect(() => {
    // Here you need to update your styles based on the theme
    document.body.style.backgroundColor = theme.body;
    document.body.style.color = theme.text;
    // add other style updates as needed
  }, [theme]);

  const conceptList = [
    {
      title: "DC Crime Dataset",
      description:
        "All statistics presented here are based on preliminary DC criminal code offense definitions. The data do not represent official statistics submitted to the FBI under the Uniform Crime Reporting program (UCR) or National Incident Based Reporting System (NIBRS). All preliminary offenses are coded based on DC criminal code and not the FBI offense classifications.",
      source: "https://crimecards.dc.gov/",
    },
    {
      title: "DC Schools Dataset",
      description:
        "This dataset includes the location of each District of Columbia Public Schools campus. ",
      source: "OpenData.dc",
    },
    {
      title: "Deck.gl",
      description:
        "deck.gl is a WebGL-powered framework for visual exploratory data analysis of large datasets.",
      source: "deck.gl",
    },
    {
      title: "react-map-gl",
      description:
        "react-map-gl is a suite of React components designed to provide a React API for Mapbox GL JS-compatible libraries. More information in the online documentation.",
      source: "react-map-gl",
    },
  ];

  return (
    <div className="w-full">
      <div className="w-screen h-[50vh] relative top-5rem">
        <div className="absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10" />
        <Image
          style={{ filter: "blur(2px)" }}
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src={arrest}
          alt="/"
        />
        <div className="absolute top-[40%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%]  text-white z-10 p-2">
          <Text h2 style={{ color: "white" }} className="py-2">
            Interactive 3D visualization.
          </Text>
          <Text h3 style={{ color: "#e1e1e1" }}>
            Crimes in DC and school zones.
          </Text>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-2 py-8">
        <div style={{ padding: "7px" }} className="col-span-full md:col-span-4">
          <h2>Anomaly Detection</h2>

          <p style={{ padding: "5px" }}>
            In this interactive 3D data visualization, I decided to delve into public Washington D.C. crime statistics
            using a Kaggle dataset, focusing specifically on incidents within
            the Washington D.C. area. Alongside this dataset, I incorporated
            publicly available information detailing school zones in the DC
            area.
          </p>

          <h4 style={{ padding: "5px" }}>
            School zones are represented as rings.
          </h4>

          <h4 style={{ padding: "5px" }}>
            Crimes are represented as pillars, the pillars are elevated based on
            the number of occurrences in a common radius.
          </h4>

          {/* EMBED YOUTUBE VIDEO HERE */}
          <div className="video-container">
            <Link href="/map">
                <Image
                  style={{ padding: "20px" }}
                  className="absolute z-1 transition duration-300 ease-in-out hover:scale-110"
                  layout="fill"
                  objectFit="cover"
                  src={crime}
                  alt="/"
                />
            </Link>
          </div>

          <p style={{ padding: "5px" }}>
            My aim was to create an engaging visualization that would shed light
            on the distribution of crimes in proximity to neighboring schools.
            To bring this visualization to life, I turned to two pivotal
            technologies: Deck.gl and Carto, complemented by the mapping prowess
            of Mapbox. Deck.gl, being a robust WebGL-based data visualization
            library, enabled me to craft intricate and interactive
            visualizations. Leveraging its capabilities, I could effectively
            depict the crime data and its spatial relationship with school
            zones.
          </p>

          <div className="flex justify-center p-4">
            <Link href="/map">
                <Button>
                  Launch
                </Button>
            </Link>
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
                    src={dcpd}
                    alt="/"
                  />
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
                    }}
                  >
                    <div className="text-center p-4">
                      <img
                        className="w-32 mx-auto"
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1024px-React-icon.svg.png?20220125121207"
                        alt="react"
                      />
                    </div>
                  </Card>
                  <Card
                    shadow
                    style={{
                      backgroundColor: `${theme.sidenav}`,
                      color: `${theme.text}`,
                      margin: "8px",
                      border: "none",
                    }}
                  >
                    <div className="text-center p-4">
                      <img
                        className="w-32 mx-auto"
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/640px-JavaScript-logo.png"
                        alt="js"
                      />
                    </div>
                  </Card>
                  <Card
                    shadow
                    style={{
                      backgroundColor: `${theme.sidenav}`,
                      color: `${theme.text}`,
                      margin: "8px",
                      border: "none",
                    }}
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

export default CrimeData;
