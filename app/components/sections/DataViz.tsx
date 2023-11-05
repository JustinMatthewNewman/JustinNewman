'use client'
import { Accordion, AccordionItem } from "@nextui-org/react";
import { Card, CardHeader, CardBody, Skeleton, Divider } from "@nextui-org/react";

import Image from "next/image";
import React, { useState } from "react";
import Link from "next/link";
import secure from "../../../public/images/home/dataDriver-min.jpg";

function DataViz() {
  const dataViz = [
    {
      title: "Plotly",
      description:
        "Plotly.js is a JavaScript graphing library for creating interactive charts, graphs, and data visualizations for the web.",
      icon: "📈",
    },
    {
      title: "D3.js",
      description:
        "D3.js is a JavaScript library for manipulating documents based on data. It allows creating dynamic and interactive data visualization.",
      icon: "📊",
    },
    {
      title: "Deck.gl",
      description:
        "Deck.gl is a WebGL-powered framework for visual exploratory data analysis of large datasets.",
      icon: "🗺️",
    },
    {
      title: "matplotlib",
      description:
        "Matplotlib is a popular Python 2D plotting library used for data analysis and visualization.",
      icon: "📉",
    },
    {
      title: "R Studio",
      description:
        "RStudio is an integrated development environment for the R programming language commonly used for statistical analysis and visualization.",
      icon: "📈",
    },
    {
      title: "Observable",
      description:
        "Observable is a JavaScript runtime for interactive data visualization and analysis using reactive notebooks.",
      icon: "📝",
    },
  ];
  const [imageLoaded, setImageLoaded] = useState(false);
  return (
    <div className='max-w-[1380px] mx-auto p-2 grid lg:grid-cols-5 gap-2 py-8'>

      <div
        style={{
          borderRadius: "20px",
          padding: "7px",
        }}
        className="col-span-full lg:col-span-4"
      >
        <Card>
          <CardHeader>

            <h2 style={{
              marginLeft: "12px", fontSize: '3rem',
              fontWeight: '700',
              fontFamily:
                'ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji'
            }}>3D Data.</h2>

          </CardHeader>
          <Divider />
          <CardBody>


            <p style={{ padding: "5px" }}>
              With over 2 years of experience building interactive 3D data
              visualizations using JavaScript, I have honed my skills in creating
              engaging, dynamic representations of complex information. Most
              recently, I developed a React-based application for exploring
              multivariate data in 3D scatter plots. By leveraging WebGL and the
              three.js library, I was able to render performant 3D visuals that
              users could pan, zoom, and rotate fluidly. Click events and hover
              interactivity brought the data to life. Using Deck.gl for adjustable
              parameters, users could dynamically filter the data points and
              transform the graphs in real time. My background developing
              immersive 3D data visualization experiences allows me to make data
              insights accessible and intuitive through interactivity. I enjoy
              crafting novel ways of representing information in interactive 3D,
              and am excited to continue innovating in data visualization.
            </p>

            {/* EMBED YOUTUBE VIDEO HERE */}
              <Link href="https://observablehq.com/@justinmatthewnewman" target="_blank" style={{ cursor: "pointer" }}>
            <div>
              <Skeleton isLoaded={imageLoaded} className="rounded-lg">

                <Image
                  src={secure}
                  alt="slowInternet"
                  onLoad={() => setImageLoaded(true)}
                  className="rounded-lg" 
                  />
                  </Skeleton>
            </div>
              </Link>
          </CardBody>

        </Card>

      </div>

      <div className="lg:mt-16">

        <Card>
          <CardHeader className="flex gap-3">
            <div className="flex flex-col">
              <p className="text-md">Data Visualization</p>
              <p className="text-small text-default-500">newmanjustin.com</p>

            </div>
          </CardHeader>
          <Divider />
          <CardBody>
            <Accordion>
              {dataViz.map((concept, index) => (
                <AccordionItem
                aria-label={concept.title}
                  title={
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <h4
                        style={{ marginLeft: "4px" }}
                      >
                        {concept.title}
                      </h4>
                    </div>
                  }
                  key={index}
                  style={{
                    width: "100%",
                  }}
                >
                  <p>
                    {concept.description}
                  </p>
                </AccordionItem>
              ))}
            </Accordion>
          </CardBody>
          
        </Card>


      </div>
    </div>
  )
}

export default DataViz