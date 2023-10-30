'use client'
import { Accordion, AccordionItem } from "@nextui-org/react";
import { Card, CardHeader, CardBody, CardFooter, Divider } from "@nextui-org/react";

import Image from "next/image";
import React from "react";
import Link from "next/link";
import secure from "../../../public/images/home/dataDriver-min.jpg";

export default function Audio() {
    const musicSoftware = [
        {
          title: "Ableton Live",
          description:
            "Ableton Live is a digital more workstation (DAW) used for music production, live performances, and electronic music creation.",
          source: "Ableton AG",
        //   icon: ableton,
        },
        {
          title: "Xfer Serum",
          description:
            "Xfer Serum is a popular wavetable synthesizer plugin used by music producers to create and manipulate electronic sounds and music.",
          source: "Xfer Records",
        //   icon: serum,
        },
        {
          title: "Sylenth1",
          description:
            "Lennar Digital Sylenth1 is a virtual analog synthesizer known for its high-quality sound synthesis and wide range of sonic possibilities.",
          source: "Lennar Digital",
        //   icon: sylenth,
        },
        {
          title: "Massive",
          description:
            "Native Instruments Massive is a software synthesizer used for sound design, electronic music production, and creating unique more textures.",
          source: "Native Instruments",
        //   icon: native,
        },
        {
          title: "Arturia Lab",
          description:
            "Arturia Lab is a collection of virtual instruments and synthesizers used for music production and sound exploration.",
          source: "Arturia",
        //   icon: art,
        },
      ];
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
            }}>Audio Engineering</h2>

          </CardHeader>
          <Divider />
          <CardBody>


          <p style={{ padding: "5px" }}>
            Diving into the captivating world of audio engineering, my passion
            finds its home in crafting music using Ableton Live as my canvas.
            Inspired by an interview with the esteemed producer Tim Bergling,
            widely known as Avicii, I found myself drawn to the intricate art of
            sound manipulation. With an unwavering love for music and a penchant
            for blending acoustic guitars with cutting-edge synthesizers, my
            creative journey took flight. Embracing Avicii&apos;s recommendations
            like Xfer Serum, Lennar Digital Sylenth1, and Native Instruments
            Massive, I purchased my authorization keys and embarked on a sonic
            voyage, sculpting melodies and harmonies that blend the organic with
            the futuristic.
          </p>
          <p style={{ padding: "5px" }}>
            From the early days of high school, my interest in audio engineering
            started as simple mashups using the free program Audacity. As my
            skills evolved, so did my arsenal, and I eagerly embraced more
            complex software like Ableton Live and FL Studio. The intricate
            sound design capabilities of Serum, the warmth of Sylenth&apos;s analog
            emulations, and the expansive textures of Massive have allowed me to
            transform mere ideas into intricate musical tapestries. It&apos;s not
            just about crafting sounds; it&apos;s about creating emotions and stories
            through the language of music.
          </p>

          <p style={{ padding: "5px" }}>
            My dedication to this craft bore fruit in the form of a Christmas music mashup
            {/* &nbsp;
            <a
              style={{color: 'blue'}}
              href="https://www.youtube.com/watch?v=xGBDeEpg83A"
              target="_blank"
              rel="noopener noreferrer"
            > */}
              
            {/* </a> */}
            , which has garnered over 34,000 views on YouTube. This milestone
            serves as a testament to the harmonious blend of my technical skills
            and heartfelt passion for music. From humble beginnings with
            Audacity to navigating the complexities of advanced software, my
            journey in audio engineering has transformed from a simple hobby
            into an art form that allows me to weave together different musical
            elements, crafting compositions that resonate with listeners on a
            profound level.
          </p>
          </CardBody>

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
              {musicSoftware.map((concept, index) => (
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

