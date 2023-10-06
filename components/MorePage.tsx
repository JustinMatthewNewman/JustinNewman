import Image from "next/image";
import React, { useEffect } from "react";
// import moreImg from '../public/assets/more.jpg';
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";
import { Collapse, Text, Grid } from "@nextui-org/react";
import { useTheme } from "../contexts/ThemeContext";
import { lightTheme, darkTheme } from "../contexts/themes";

import ps from "../public/assets/softwares/ps-min.png";
import ai from "../public/assets/softwares/ai-min.png";
import ae from "../public/assets/softwares/ae-min.png";
import obs from "../public/assets/softwares/obs-min.png";
import blender from "../public/assets/softwares/blender.ico";
import native from "../public/assets/softwares/native-min.png";
import overleaf from "../public/assets/softwares/overleaf-min.png";
import sylenth from "../public/assets/softwares/Sylenth1.webp";
import art from "../public/assets/softwares/arturia-min.jpeg";
import serum from "../public/assets/softwares/serum.webp";
import ableton from "../public/assets/softwares/ableton-min.png";
import vscode from "../public/assets/softwares/vscode-min.png";
import eclipse from "../public/assets/softwares/eclipse-min.png";
import arduino from "../public/assets/softwares/arduino-min.png";
import xcode from "../public/assets/softwares/xcode-min.png";
import vim from "../public/assets/softwares/vim-min.png";
import virtualBox from "../public/assets/softwares/virtualbox-min.png";
import newtek3play from "../public/assets/softwares/newtek-min.png";
import xpression from "../public/assets/softwares/xpression-min.jpeg";
import belenaEtcher from "../public/assets/softwares/balenaetcher-min.png";
import ghidra from "../public/assets/softwares/ghidra-min.png";

import crew from "../public/assets/crew-min.png";
import music from "../public/assets/music.jpg";
import sr from "../public/assets/screenrepair-min.gif";

import header from "../public/assets/skills.png";


const MorePage = () => {
  const { theme, toggleTheme } = useTheme();
  useEffect(() => {
    // Here you need to update your styles based on the theme
    document.body.style.backgroundColor = theme.body;
    document.body.style.color = theme.text;
    // add other style updates as needed
  }, [theme]);

  const artSoftware = [
    {
      title: "Photoshop",
      description:
        "Adobe Photoshop is a powerful image editing software used for graphic design, photo editing, and digital art creation.",
      source: "Adobe Inc.",
      icon: ps,
    },
    {
      title: "After Effects",
      description:
        "Adobe After Effects is a motion graphics and visual effects software used to create animations, video effects, and cinematic visual content.",
      source: "Adobe Inc.",
      icon: ae,
    },
    {
      title: "Illustrator",
      description:
        "Adobe Illustrator is a vector graphics software used for creating scalable illustrations, logos, icons, and other graphic design elements.",
      source: "Adobe Inc.",
      icon: ai,
    },
    {
      title: "Blender3d",
      description:
        "Blender is a free and open-source 3D computer graphics software used for creating animations, visual effects, and 3D models.",
      source: "Blender Foundation",
      icon: blender,
    },
  ];
  const videoSoftware = [
    {
      title: "NewTek 3play",
      description:
        "NewTek 3Play is a sports video replay system used in live broadcasting. It allows instant replay, slow motion, and highlight creation during sports events.",
      source: "NewTek",
      icon: newtek3play,
    },
    {
      title: "Xpression",
      description:
        "Microsoft Expression is a suite of web and graphics design tools that includes applications for creating websites, graphics, and interactive content.",
      source: "Microsoft",
      icon: xpression,
    },
    {
      title: "OBS studio",
      description:
        "OBS Studio is free and open-source software used for live streaming and recording video and more content from your computer.",
      source: "Open-source community",
      icon: obs,
    },
  ];
  const musicSoftware = [
    {
      title: "Ableton Live",
      description:
        "Ableton Live is a digital more workstation (DAW) used for music production, live performances, and electronic music creation.",
      source: "Ableton AG",
      icon: ableton,
    },
    {
      title: "Xfer Serum",
      description:
        "Xfer Serum is a popular wavetable synthesizer plugin used by music producers to create and manipulate electronic sounds and music.",
      source: "Xfer Records",
      icon: serum,
    },
    {
      title: "Sylenth1",
      description:
        "Lennar Digital Sylenth1 is a virtual analog synthesizer known for its high-quality sound synthesis and wide range of sonic possibilities.",
      source: "Lennar Digital",
      icon: sylenth,
    },
    {
      title: "Massive",
      description:
        "Native Instruments Massive is a software synthesizer used for sound design, electronic music production, and creating unique more textures.",
      source: "Native Instruments",
      icon: native,
    },
    {
      title: "Arturia Lab",
      description:
        "Arturia Lab is a collection of virtual instruments and synthesizers used for music production and sound exploration.",
      source: "Arturia",
      icon: art,
    },
  ];
  const workSoftware = [
    {
      title: "Ghidra",
      description:
        "Ghidra is a software reverse engineering (SRE) framework used for analyzing and understanding compiled code.",
      source: "National Security Agency (NSA)",
      icon: ghidra,
    },
    {
      title: "VSCode",
      description:
        "Visual Studio Code (VS Code) is a widely used code editor known for its features, extensions, and flexibility for various programming languages.",
      source: "Microsoft",
      icon: vscode,
    },
    {
      title: "Eclipse",
      description:
        "Eclipse is an integrated development environment (IDE) used primarily for Java development, but it supports various programming languages through plugins.",
      source: "Eclipse Foundation",
      icon: eclipse,
    },
    {
      title: "Arduino IDE",
      description:
        "The Arduino IDE is a development environment for programming Arduino microcontrollers. It offers a simple interface for writing and uploading code.",
      source: "Arduino",
      icon: arduino,
    },
    {
      title: "Xcode",
      description:
        "Xcode is the integrated development environment (IDE) for macOS app development. It provides tools for coding, testing, and app deployment.",
      source: "Apple Inc.",
      icon: xcode,
    },
    {
      title: "BelenaEtcher",
      description:
        "BalenaEtcher is an open-source utility used to create bootable USB drives and SD cards. It's commonly used for flashing operating system images. I use it for creating bootable windows and linux USB's",
      source: "Balena",
      icon: belenaEtcher,
    },
    {
      title: "Virtual Box",
      description:
        "Oracle VM VirtualBox is a virtualization software that allows you to run multiple operating systems on a single machine. It's used for testing and development.",
      source: "Oracle Corporation",
      icon: virtualBox,
    },
    {
      title: "OverLeaf",
      description:
        "OverLeaf is an online collaborative platform used by researchers and academics to write, edit, and publish scientific documents and research papers.",
      source: "Overleaf Ltd.",
      icon: overleaf,
    },
  ];

  return (
    <div className="w-full">
      <div className="w-screen h-[50vh] relative top-5rem">
        <div className="absolute top-0 left-0 w-full h-[50vh] bg-black/30 z-10" />
        <Image
          style={
            theme === darkTheme
              ? { filter: 'blur(2px) hue-rotate(70deg)' }
              : { filter: 'blur(2px) invert(1) hue-rotate(270deg)' }
          }

          className='absolute z-1'
          layout='fill'
          objectFit='cover'
          src={header}
          alt='/'
        />
        <div className="absolute top-[40%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%]  text-slate z-10 p-2">
          <h2 style={{color: 'white'}} className="py-2">Additional Skills</h2>
          <h3 style={{color: 'white'}} >Fine Art / Video Production / Audio Engineering / 3D Modeling</h3>
        </div>
      </div>

      <div className="max-w-[1380px] mx-auto p-2 grid lg:grid-cols-5 gap-2 py-8">
        {/*ART*/}

        <div
          style={{
            borderRadius: "20px",
            padding: "7px",
            backgroundColor: `${theme.nav}`,
          }}
          className="col-span-full lg:col-span-4"
        >
          <h2 style={{ marginLeft: "12px" }}>Fine Art</h2>

          <p style={{ padding: "5px" }}>
            My passion for art ignited in elementary school and grew intensely.
            By third grade, I was utilizing advanced techniques such as
            two-point perspective. In middle school, I excelled in both
            traditional watercolors and digital art, earning a reputation for my
            unique blend of skills.
          </p>
          <p style={{ padding: "5px" }}>
            During a middle school trade show, my watercolor animal pieces sold
            remarkably well, earning me the title of highest revenue generator.
            This recognition spilled into academics, landing me a vice president
            role in the student council. In later years, I continued to evolve,
            transitioning to acrylics and creating a pen and ink piece that won
            a blue ribbon for best student art.
          </p>

          <p style={{ padding: "5px" }}>
            Art isn&apos;t just a hobby; it&apos;s my core identity—a way to convey
            emotions, thoughts, and stories. From elementary school to these
            moments, my artistic journey has been defined by unwavering
            dedication and boundless passion.
          </p>

          {/* EMBED YOUTUBE VIDEO HERE */}
          <div className="video-container">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/-C7AmjNzqQc?si=ooI8ONTfxBvbsTjn"
              title="YouTube video player"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
        </div>

        <div className="lg:mt-5">
        <Grid.Container gap={2} justify="center" >
          <Grid style={{zIndex: 2}}>
          <Collapse.Group splitted>
            {artSoftware.map((concept, index) => (
              <Collapse
                title={
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <Image
                      height={30}
                      width={30}
                      src={concept.icon}
                      alt={`${concept.title} Icon`}
                      style={{ width: "24px", height: "24px" }}
                    />
                    <Text
                      h4
                      style={{ color: `${theme.text}`, marginLeft: "4px" }}
                    >
                      {concept.title}
                    </Text>
                  </div>
                }
                key={index}
                style={{
                  width: "100%",
                  backgroundColor: `${theme.nav}`,
                  color: `${theme.text}`,
                }}
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

        {/*VIDEO*/}

        <div
          style={{
            borderRadius: "20px",
            padding: "7px",
            backgroundColor: `${theme.nav}`,
          }}
          className="col-span-full lg:col-span-4"
        >
          <h2 style={{ marginLeft: "12px" }}>Video and Broadcasting</h2>

          <p style={{ padding: "5px" }}>
            My journey as a Camera Operator at Telemedia Productions under the
            mentorship of John Salem has been nothing short of transformative.
            From the outset of my freshman year in college, I was welcomed into
            John&apos;s team with open arms, and this marked the beginning of an
            incredible learning curve. John&apos;s unwavering support exposed me to a
            myriad of opportunities that took me to the heart of video
            broadcasting. Countless broadcasts at esteemed institutions like
            JMU, VMI, UVA, W&M, and UNCW became my classroom, each event a
            chance to hone my skills and delve deeper into the world of video
            production.
          </p>
          <p style={{ padding: "5px" }}>
            One of the highlights of my experience was the exposure to
            cutting-edge technology. At VMI, I had the privilege of working with
            the xpression graphics system and the newtek 3play replay
            controller, gaining hands-on proficiency that set me apart.
            Concurrently, I was also engaged in the STARS program, a personal
            achievement that fills me with pride. The guidance I received from
            luminaries such as JMU&apos;s Director of Live Productions and the
            Director of Broadcast Services Emeritus was instrumental. Moreover,
            learning from stalwarts like Technology Manager and Instructor John
            Hodges, as well as building a strong rapport with VMI&apos;s Coordinator
            of Athletic Multimedia, added layers to my growth.
          </p>

          <p style={{ padding: "5px" }}>
            Through this enriching journey, I have imbibed invaluable life
            lessons. Communication, a skill I thought I knew well, took on new
            dimensions as I worked in a fast-paced, high-pressure environment.
            Time management became second nature as I balanced academics with
            broadcasts, and attention to detail evolved from a trait to a habit.
            All in all, my time as a Camera Operator with Telemedia Productions
            and John Salem has provided me with not just technical acumen, but a
            holistic understanding of teamwork, adaptability, and dedication
            that will undoubtedly shape my future endeavors in the world of
            video broadcasting and beyond.
          </p>

          {/* EMBED YOUTUBE VIDEO HERE */}
          <div className="video-container">
            <Image src={crew} alt="slowInternet"/>
          </div>
        </div>

        <div className="lg:mt-5">
        <Grid.Container gap={2} justify="center" >
          <Grid style={{zIndex: 2}}>
          <Collapse.Group splitted>
            {videoSoftware.map((concept, index) => (
              <Collapse
                title={
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <Image
                      height={30}
                      width={30}
                      src={concept.icon}
                      alt={`${concept.title} Icon`}
                      style={{ width: "24px", height: "24px" }}
                    />
                    <Text
                      h4
                      style={{ color: `${theme.text}`, marginLeft: "4px" }}
                    >
                      {concept.title}
                    </Text>
                  </div>
                }
                key={index}
                style={{
                  width: "100%",
                  backgroundColor: `${theme.nav}`,
                  color: `${theme.text}`,
                }}
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

        {/*MUSIC*/}

        <div
          style={{
            borderRadius: "20px",
            padding: "7px",
            backgroundColor: `${theme.nav}`,
          }}
          className="col-span-full lg:col-span-4"
        >
          <h2 style={{ marginLeft: "12px" }}>Audio Engineering</h2>

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

          {/* EMBED YOUTUBE VIDEO HERE */}
          <div className="video-container">
            <Image style={{ padding: "12px" }} src={music} alt="slowInternet" />
          </div>
        </div>

        <div className="lg:mt-5">
        <Grid.Container gap={2} justify="center" >
          <Grid style={{zIndex: 2}}>
          <Collapse.Group splitted>
            {musicSoftware.map((concept, index) => (
              <Collapse
                title={
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <Image
                      height={30}
                      width={30}
                      src={concept.icon}
                      alt={`${concept.title} Icon`}
                      style={{ width: "24px", height: "24px" }}
                    />
                    <Text
                      h4
                      style={{ color: `${theme.text}`, marginLeft: "4px" }}
                    >
                      {concept.title}
                    </Text>
                  </div>
                }
                key={index}
                style={{
                  width: "100%",
                  backgroundColor: `${theme.nav}`,
                  color: `${theme.text}`,
                }}
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

        {/*SOFTWARE ENGINEER */}
        <div
          style={{
            borderRadius: "20px",
            padding: "7px",
            backgroundColor: `${theme.nav}`,
          }}
          className="col-span-full lg:col-span-4"
        >
          <h2 style={{ marginLeft: "12px" }}>Screen Repair</h2>

          <p style={{ padding: "5px" }}>
            With adept proficiency in the art of iPhone screen repair, I take
            pride in a track record of accomplishment that spans successful
            repairs on over 50 devices. My hands-on expertise extends across
            various models and iterations of iPhones, allowing me to skillfully
            address cracked screens, unresponsive touch functionality, and other
            related issues. Through meticulous attention to detail, a keen
            understanding of the intricate components involved, and a dedication
            to precision, I&apos;ve consistently revitalized damaged iPhones,
            restoring them to their optimal functionality and visual appeal. My
            experience not only encompasses the technical finesse required for
            these repairs but also underscores my commitment to providing
            reliable solutions that ensure the seamless performance and
            aesthetics of these essential devices.
          </p>
          <p style={{ padding: "5px" }}>
            This skill has been a part of me since high school, ignited by my
            genuine desire to offer affordable assistance. Charging just $20,
            along with the cost of the replacement screen from platforms like
            Amazon, I&apos;ve successfully resurrected more than 50 iPhones by
            addressing issues like cracked screens and touch malfunctions. This
            journey, fueled by a passion for helping others, has not only
            deepened my understanding of iPhone internals and sharpened my
            troubleshooting skills but also allowed me to make a meaningful
            contribution to individuals seeking cost-effective repairs.
          </p>

          {/* EMBED YOUTUBE VIDEO HERE */}
          <div className="flex justify-center items-center flex-col">
            <div className="text-center">
              <Image src={sr} />
            </div>
          </div>
        </div>

        <div className="lg:mt-5">
        <Grid.Container gap={2} justify="center" >
          <Grid style={{zIndex: 2}}>
          <Collapse.Group splitted>
            {workSoftware.map((concept, index) => (
              <Collapse
                title={
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <Image
                      height={30}
                      width={30}
                      src={concept.icon}
                      alt={`${concept.title} Icon`}
                      style={{ width: "24px", height: "24px" }}
                    />
                    <Text
                      h4
                      style={{ color: `${theme.text}`, marginLeft: "4px" }}
                    >
                      {concept.title}
                    </Text>
                  </div>
                }
                key={index}
                style={{
                  width: "100%",
                  backgroundColor: `${theme.nav}`,
                  color: `${theme.text}`,
                }}
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
    </div>
  );
};

export default MorePage;
