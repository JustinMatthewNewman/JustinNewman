"use client";
import { Accordion, AccordionItem } from "@nextui-org/react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Skeleton,
} from "@nextui-org/react";
import YouTube, { YouTubeProps } from "react-youtube";

import React, { useState } from "react";

export default function Art() {
  const artSoftware = [
    {
      title: "Photoshop",
      description:
        "Adobe Photoshop is a powerful image editing software used for graphic design, photo editing, and digital art creation.",
      source: "Adobe Inc.",
      //   icon: ps,
    },
    {
      title: "After Effects",
      description:
        "Adobe After Effects is a motion graphics and visual effects software used to create animations, video effects, and cinematic visual content.",
      source: "Adobe Inc.",
      //   icon: ae,
    },
    {
      title: "Illustrator",
      description:
        "Adobe Illustrator is a vector graphics software used for creating scalable illustrations, logos, icons, and other graphic design elements.",
      source: "Adobe Inc.",
      //   icon: ai,
    },
    {
      title: "Blender3d",
      description:
        "Blender is a free and open-source 3D computer graphics software used for creating animations, visual effects, and 3D models.",
      source: "Blender Foundation",
      //   icon: blender,
    },
  ];
  const [imageLoaded, setImageLoaded] = useState(false);
  const videoOptions = {
    height: "390",
    width: "640",
    playerVars: {
      // Set any additional options or parameters here
    },
  };

  const onVideoReady = () => {
    // The video is now ready, you can remove the skeleton
    setImageLoaded(true);
  };

  return (
    <div className="max-w-[1380px] mx-auto p-2 grid lg:grid-cols-5 gap-2 py-8">
      <div
        style={{
          borderRadius: "20px",
          padding: "7px",
        }}
        className="col-span-full lg:col-span-4"
      >
        <Card>
          <CardHeader>
            <h2
              style={{
                marginLeft: "12px",
                fontSize: "3rem",
                fontWeight: "700",
                fontFamily:
                  "ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji",
              }}
            >
              Art
            </h2>
          </CardHeader>
          <Divider />
          <CardBody>
            <p style={{ padding: "5px" }}>
              My passion for art ignited in elementary school and grew
              intensely. By third grade, I was utilizing advanced techniques
              such as two-point perspective. In middle school, I excelled in
              both traditional watercolors and digital art, earning a reputation
              for my unique blend of skills.
            </p>
            <p style={{ padding: "5px" }}>
              During a middle school trade show, my watercolor animal pieces
              sold remarkably well, earning me the title of highest revenue
              generator. This recognition spilled into academics, landing me a
              vice president role in the student council. In later years, I
              continued to evolve, transitioning to acrylics and creating a pen
              and ink piece that won a blue ribbon for best student art.
            </p>

            <Skeleton isLoaded={imageLoaded} className="mt-2 rounded-lg">
              {/* EMBED YOUTUBE VIDEO HERE */}
              <div className="video-container">
                <YouTube
                  videoId="-C7AmjNzqQc"
                  opts={videoOptions}
                  onReady={onVideoReady}
                />
              </div>
            </Skeleton>
          </CardBody>

          <CardFooter>
            <p style={{ padding: "5px" }}>
              Art isn&apos;t just a hobby; it&apos;s my core. A way to convey
              emotions, thoughts, and stories. From elementary school to these
              moments, my artistic journey has been defined by unwavering
              dedication and boundless passion.
            </p>
          </CardFooter>
        </Card>
      </div>

      <div className="lg:mt-16">
        <Card>
          <CardHeader className="flex gap-3">
            <div className="flex flex-col">
              <p className="text-md">Software</p>
              <p className="text-small text-default-500">Proficiencies</p>
            </div>
          </CardHeader>
          <Divider />
          <CardBody>
            <Accordion>
              {artSoftware.map((concept, index) => (
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
