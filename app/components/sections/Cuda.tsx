'use client'
import React from 'react'
import { Accordion, AccordionItem } from "@nextui-org/react";
import cuda from "../../../public/images/home/cuda-min.png";
import Image from "next/image";
import Link from "next/link";

import { Card, CardHeader, CardBody, CardFooter, Divider } from "@nextui-org/react";


function Cuda() {
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


    return (


        <div className='max-w-[1380px] mx-auto p-2 grid lg:grid-cols-5 gap-2 py-8'>

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

                        <h2 style={{
                            marginLeft: "12px", fontSize: '3rem',
                            fontWeight: '700',
                            fontFamily:
                                'ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji'
                        }}>NVIDIA CUDA</h2>


                    </CardHeader>
                    <Divider />
                    <CardBody>

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
                    </CardBody>
                </Card>

            </div>



            <div className="lg:mt-12">
                <Card>
                    <CardHeader className="flex gap-3">
                        <div className="flex flex-col">
                            <p className="text-md">Concepts</p>
                            <p className="text-small text-default-500">nvidia.com/cuda</p>
                        </div>
                    </CardHeader>
                    <Divider />
                    <CardBody>
                        <Accordion>
                            {cudaConcepts.map((concept, index) => (
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
                    <Divider />
                    <CardFooter>
                        <Link
                            href="https://docs.nvidia.com/cuda/cuda-c-programming-guide/index.html"
                        >
                            Cuda &apos;C&apos; programming-guide.
                        </Link>
                    </CardFooter>
                </Card>

            </div>
        </div>

    )
}

export default Cuda