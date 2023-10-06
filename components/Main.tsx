import Image from "next/image";
import React, { useEffect } from "react";
import Link from "next/link";
import dynamic from "next/dynamic";

import { HiOutlineChevronDoubleUp } from "react-icons/hi";

import { Collapse, Text, Grid } from "@nextui-org/react";

import { useTheme } from "../contexts/ThemeContext";
import { lightTheme, darkTheme } from "../contexts/themes";

import cuda from "../public/assets/cuda-min.png";
import secure from "../public/assets/dataDriver-min.jpg";
import future from "../public/assets/encypt.jpeg";
import quantum from "../public/assets/quan.png";

// import { Canvas, useFrame } from "@react-three/fiber";

const Main = () => {
  const AnimatedText = dynamic(() => import("../components/FloatingText"));
  // const ParallelLines = dynamic(() => import("../components/WavyLines"));

  const { theme, toggleTheme } = useTheme();
  useEffect(() => {
    // Here you need to update your styles based on the theme
    document.body.style.backgroundColor = theme.body;
    document.body.style.color = theme.text;
    // add other style updates as needed
  }, [theme]);

  const cudaConcepts = [
    {
      title: "Kernels",
      description:
        "Kernels are functions that execute in parallel across many CUDA threads. Kernels contain the algorithms and computations to be run on the GPU.",
      icon: "🧠",
    },
    {
      title: "Threads",

      description:
        "Threads are the basic units of parallelism in CUDA. A kernel launch configures the number of threads that will execute the kernel code concurrently.",
      icon: "🧵",
    },
    {
      title: "Thread Blocks",
      description:
        "Thread blocks organize groups of threads that can cooperate together using fast shared memory. Blocks are assigned to GPU cores for execution.",
      icon: "📦",
    },
    {
      title: "Grids",
      description:
        "Grids contain and organize thread blocks, allowing execution of kernels across the entire GPU. Each thread block is uniquely assigned to a grid coordinate.",
      icon: "🗺️",
    },
    {
      title: "Cores",
      description:
        "CUDA cores are processing units on the GPU that execute threads. Modern GPUs contain thousands of cores to enable massively parallel computation.",
      icon: "⚙️",
    },
  ];

  const reverseEngineering = [
    {
      title: "Disassembler",
      description:
        "A disassembler translates executable machine code into human-readable assembly language source code.",
      icon: "📜",
    },
    {
      title: "Decompiler",
      description:
        "A decompiler analyzes executable code and attempts to recreate the original high-level source code in a language like C/C++.",
      icon: "🔙",
    },
    {
      title: "Debugger",
      description:
        "A debugger allows stepping through code instruction by instruction, monitoring registers and memory, setting breakpoints, etc.",
      icon: "🐞",
    },
    {
      title: "Hex Editor",
      description:
        "A hex editor enables viewing and editing the raw hexadecimal bytes of a binary file.",
      icon: "🔢",
    },
    {
      title: "IDA Pro",
      description:
        "IDA Pro is a popular multi-processor disassembler and debugger for analyzing binary programs.",
      icon: "🛠️",
    },
  ];

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

  const postQuantumCrypto = [
    {
      title: "Lattice-based",
      description:
        "Lattice-based cryptography relies on the hardness of problems like finding the shortest vector in a lattice. Algorithms like NTRU are quantum-resistant.",
      icon: "🪜",
    },
    {
      title: "Code-based",
      description:
        "Code-based cryptography uses error-correcting codes to construct public-key encryption schemes like McEliece which can resist quantum attacks.",
      icon: "📡",
    },
    {
      title: "Multivariate",
      description:
        "Multivariate cryptography is based on solving systems of quadratic polynomial equations over finite fields. Schemes like Rainbow provide signature algorithms.",
      icon: "📐",
    },
    {
      title: "Hash-based",
      description:
        "Hash-based cryptography uses hash functions with properties like collision resistance to enable digital signatures secure against quantumcomputers.",
      icon: "✏️",
    },
    {
      title: "Symmetric",
      description:
        "Symmetric algorithms like AES-256 with strong security proofs against quantum queries will likely remain secure in the post-quantum era.",
      icon: "🔑",
    },
  ];

  return (
    <div className="w-full">
      <div className="w-screen h-[50vh] relative top-5rem">
        <div className="absolute top-[40%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%]  text-slate z-10 p-2">
          <AnimatedText />
        </div>
      </div>

      {/* <Canvas style={{ position: "fixed", top: 0, left: 0, zIndex: -1 }}>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <ParallelLines />
      </Canvas> */}

      <div className="max-w-[1380px] mx-auto p-2 grid lg:grid-cols-5 gap-2 py-8">
        {/*ART*/}

        <div
          style={{
            borderRadius: "20px",
            padding: "7px",
            backgroundColor: `${theme.sidenav}`,
            //backdropFilter: 'blur(7px)'
          }}
          className="col-span-full lg:col-span-4"
        >
          <h2 style={{ marginLeft: "12px" }}>NVIDIA CUDA</h2>

          <p style={{ padding: "5px" }}>
            With over 5 years of experience in advanced programming, I have a
            proven track record of delivering substantial performance gains. By
            harnessing the parallel processing power of NVIDIA GPUs, I can
            optimize code to execute up to 20x faster than on CPUs alone.
          </p>
          <p style={{ padding: "5px" }}>
            My CUDA expertise has enabled me to accelerate key workloads. For
            example, in a recent project I used CUDA to parallelize a pixel
            sorting algorithm written in C. By efficiently mapping image data
            across thousands of GPU cores, I reduced processing times from
            several minutes to under 10 seconds. The optimized CUDA kernel cut
            costs and improved the user experience.
          </p>

          <p style={{ padding: "5px" }}>
            As a strong developer, I can identify bottlenecks in your pipeline
            and apply parallel programming techniques to overcome them. My CUDA
            proficiency can slash processing times, reduce costs, and improve
            product performance. If you&apos;re looking for someone to unify the
            power of your GPUs and spark innovation, I have the parallel
            programming skills to rapidly accelerate your business.
          </p>
          <Link
            href="/assets/Parallel_Image_Processing_with_CUDA.pdf"
            target="_blank"
            style={{ cursor: "pointer" }}
          >
            <div style={{ cursor: "pointer" }} className="video-container">
              <Image src={cuda} alt="slowInternet" />
            </div>
          </Link>

          <p>
            Image Source: https://www.nvidia.com/en-us/data-center/grace-cpu/
          </p>
        </div>

        <div className="lg:mt-5">
          <Grid.Container gap={2} justify="center">
            <Grid style={{ zIndex: 2 }}>
              <Collapse.Group splitted>
                {cudaConcepts.map((concept, index) => (
                  <Collapse
                    title={
                      <div style={{ display: "flex", alignItems: "center" }}>
                        {/* <Image
                          height={30}
                          width={30}
                          src={concept.icon}
                          alt={`${concept.title} Icon`}
                          style={{ width: "24px", height: "24px" }}
                        /> */}
                        {/* <Text
                          h4
                          style={{ color: `${theme.text}`, marginLeft: "4px" }}
                        >
                          {concept.icon}
                        </Text> */}
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
                      backgroundColor: `${theme.sidenav}`,
                      color: `${theme.text}`,
                      //backdropFilter: 'blur(7px)'
                    }}
                  >
                    <Text style={{ color: `${theme.text}` }}>
                      {concept.description}
                    </Text>
                    {/* <Text
                      style={{
                        fontSize: "0.8rem",
                        marginTop: "0.5rem",
                        color: `${theme.text}`,
                      }}
                    >
                      Source: {concept.source}
                    </Text> */}
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
            backgroundColor: `${theme.sidenav}`,
            //backdropFilter: 'blur(7px)'
          }}
          className="col-span-full lg:col-span-4"
        >
          <h2 style={{ marginLeft: "12px" }}>Digital forensics</h2>

          <p style={{ padding: "5px" }}>
            With experience using Ghidra for software reverse engineering, I
            have developed robust skills in analyzing executable files and
            disassembling code. I have leveraged Ghidra&apos;s disassembler and
            decompiler to gain deep insights into proprietary software and
            malware.
          </p>
          <p style={{ padding: "5px" }}>
            In addition to software reversing, I have expertise applying Ghidra
            for digital forensic investigations. My background disassembling
            binaries, inspecting memory, and statically analyzing code with
            Ghidra allows me to support a wide range of cybersecurity use cases.
            I enjoy tackling complex reverse engineering challenges, and look
            forward to applying my Ghidra skills to unlock insights from
            compiled programs and binaries.
          </p>

          <p style={{ padding: "5px" }}>
            Although early in my career, I have demonstrated skills optimizing
            code for parallelism and also showcased my deep understanding of
            computer systems.
          </p>

          {/* EMBED YOUTUBE VIDEO HERE */}
          <div className="video-container">
            {/* <Image src={future} layout="" alt="slowInternet" /> */}
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/08DW8gEMjpQ?si=wgbBgUSgDjIbL8a9"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
        </div>

        <div className="lg:mt-5">
          <Grid.Container gap={2} justify="center">
            <Grid style={{ zIndex: 2 }}>
              <Collapse.Group splitted>
                {reverseEngineering.map((concept, index) => (
                  <Collapse
                    title={
                      <div style={{ display: "flex", alignItems: "center" }}>
                        {/* <Image
                          height={30}
                          width={30}
                          src={concept.icon}
                          alt={`${concept.title} Icon`}
                          style={{ width: "24px", height: "24px" }}
                        /> */}
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
                      backgroundColor: `${theme.sidenav}`,
                      color: `${theme.text}`,
                      //backdropFilter: 'blur(7px)'
                    }}
                  >
                    <Text style={{ color: `${theme.text}` }}>
                      {concept.description}
                    </Text>
                    {/* <Text
                      style={{
                        fontSize: "0.8rem",
                        marginTop: "0.5rem",
                        color: `${theme.text}`,
                      }}
                    >
                      Source: {concept.source}
                    </Text> */}
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
            backgroundColor: `${theme.sidenav}`,
            //backdropFilter: 'blur(7px)'
          }}
          className="col-span-full lg:col-span-4"
        >
          <h2 style={{ marginLeft: "12px" }}>3D interactive Data.</h2>

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
          <div className="video-container">
            <Link href="/usacars" target="_blank" style={{ cursor: "pointer" }}>
              <Image
                style={{ padding: "12px", cursor: "pointer" }}
                src={secure}
                alt="slowInternet"
              />
            </Link>
          </div>
        </div>

        <div className="lg:mt-5">
          <Grid.Container gap={2} justify="center">
            <Grid style={{ zIndex: 2 }}>
              <Collapse.Group splitted>
                {dataViz.map((concept, index) => (
                  <Collapse
                    title={
                      <div style={{ display: "flex", alignItems: "center" }}>
                        {/* <Image
                          height={30}
                          width={30}
                          src={concept.icon}
                          alt={`${concept.title} Icon`}
                          style={{ width: "24px", height: "24px" }}
                        /> */}
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
                      backgroundColor: `${theme.sidenav}`,
                      color: `${theme.text}`,
                      //backdropFilter: 'blur(7px)'
                    }}
                  >
                    <Text style={{ color: `${theme.text}` }}>
                      {concept.description}
                    </Text>
                    {/* <Text
                      style={{
                        fontSize: "0.8rem",
                        marginTop: "0.5rem",
                        color: `${theme.text}`,
                      }}
                    >
                      Source: {concept.source}
                    </Text> */}
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
            backgroundColor: `${theme.sidenav}`,
            //backdropFilter: 'blur(7px)'
          }}
          className="col-span-full lg:col-span-4"
        >
          <h2 style={{ marginLeft: "12px" }}>Post Quantum Encryption</h2>

          <p style={{ padding: "5px" }}>
            With the advent of quantum computing on the horizon, organizations
            must start preparing for the cryptographic upheaval it will bring.
            Quantum computers will render many standard public-key cryptosystems
            like RSA and elliptic curves insecure. To future-proof encryption,
            companies should begin migrating to quantum-safe algorithms
            resistant to attack by both classical and quantum algorithms.
          </p>
          <p style={{ padding: "5px" }}>
            The most promising post-quantum public-key candidates are
            lattice-based and multivariate cryptosystems. In particular, lattice
            schemes like NTRU have efficiently implementable key exchange and
            digital signatures ideal for TLS and authentication. Code-based
            cryptography like McEliece offers an alternative approach using
            error-correcting codes. On the symmetric side, algorithms with
            security proofs against quantum queries like AES-256 will likely
            remain viable. To ease the transition, hybrid schemes are emerging
            which run post-quantum crypto alongside traditional public-key. By
            incrementally adding support for algorithms like CRYSTALS-Kyber and
            SIKE, organizations can guard their systems against quantum threats.
            With prudent preparation, we can work to ensure sensitive data
            remains secure even in a world of quantum advantage.
          </p>

          {/* EMBED YOUTUBE VIDEO HERE */}
<Link href="https://github.com/JustinMatthewNewman/PostQuantumCryptography" target="_blank" style={{ cursor: "pointer" }}>
          <div className="video-container">
           
            <Image
              style={{ padding: "12px" }}
              src={quantum}
              alt="slowInternet"
            />
          </div>
  </Link>
        </div>

        <div className="lg:mt-5">
          <Grid.Container gap={2} justify="center">
            <Grid style={{ zIndex: 2 }}>
              <Collapse.Group splitted>
                {postQuantumCrypto.map((concept, index) => (
                  <Collapse
                    title={
                      <div style={{ display: "flex", alignItems: "center" }}>
                        {/* <Image
                          height={30}
                          width={30}
                          src={concept.icon}
                          alt={`${concept.title} Icon`}
                          style={{ width: "24px", height: "24px" }}
                        /> */}
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
                      backgroundColor: `${theme.sidenav}`,
                      color: `${theme.text}`,
                      //backdropFilter: 'blur(7px)'
                    }}
                  >
                    <Text style={{ color: `${theme.text}` }}>
                      {concept.description}
                    </Text>
                    {/* <Text
                      style={{
                        fontSize: "0.8rem",
                        marginTop: "0.5rem",
                        color: `${theme.text}`,
                      }}
                    >
                      Source: {concept.source}
                    </Text> */}
                  </Collapse>
                ))}
              </Collapse.Group>
            </Grid>
          </Grid.Container>
        </div>

        <div className="flex justify-center py-12">
          <Link href="/">
            <a>
              <div className="rounded-full shadow-lg p-4 cursor-pointer hover:scale-110 ease-in duration-300">
                <HiOutlineChevronDoubleUp
                  className="text-[#5651e5]"
                  size={30}
                />
              </div>
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Main;
