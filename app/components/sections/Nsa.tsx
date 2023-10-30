'use client'
import { Accordion, AccordionItem } from "@nextui-org/react";

import Image from "next/image";
import React from "react";
import Link from "next/link";
import { Card, CardHeader, CardBody, CardFooter, Divider } from "@nextui-org/react";
import encrypt from "../../../public/images/home/encypt.jpeg";


function Nsa() {

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
                "IDA Pro is another popular multi-processor disassembler and debugger for analyzing binary programs.",
            icon: "🛠️",
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
                        }}>Digital forensics</h2>
                    </CardHeader>
                    <Divider />
                    <CardBody>

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
                            <Image src={encrypt} alt="slowInternet" />
                        </div>
                    </CardBody>
                </Card>
            </div>


            <div className="lg:mt-12">

                <Card>
                    <CardHeader className="flex gap-3">
                        <div className="flex flex-col">
                            <p className="text-md">NSA Ghidra</p>
                            <p className="text-small text-default-500">NSA.gov</p>
                        </div>
                    </CardHeader>
                    <Divider />
                    <CardBody>
                        <Accordion >
                            {reverseEngineering.map((concept, index) => (
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
                            href="https://github.com/NationalSecurityAgency/ghidra"
                        >
                            Visit source code on GitHub.
                        </Link>
                    </CardFooter>
                </Card>



            </div>
        </div>
    )
}

export default Nsa