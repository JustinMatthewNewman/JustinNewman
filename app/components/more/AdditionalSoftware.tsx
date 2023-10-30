"use client";
import React from "react";
import { Accordion, AccordionItem } from "@nextui-org/react";

import { Card, CardHeader, CardBody, Divider } from "@nextui-org/react";

export default function AdditionalSoftware() {
    const workSoftware = [
        {
          title: "Ghidra",
          description:
            "Ghidra is a software reverse engineering (SRE) framework used for analyzing and understanding compiled code.",
          source: "National Security Agency (NSA)",
        //   icon: ghidra,
        },
        {
          title: "VSCode",
          description:
            "Visual Studio Code (VS Code) is a widely used code editor known for its features, extensions, and flexibility for various programming languages.",
          source: "Microsoft",
        //   icon: vscode,
        },
        {
          title: "Eclipse",
          description:
            "Eclipse is an integrated development environment (IDE) used primarily for Java development, but it supports various programming languages through plugins.",
          source: "Eclipse Foundation",
        //   icon: eclipse,
        },
        {
          title: "Arduino IDE",
          description:
            "The Arduino IDE is a development environment for programming Arduino microcontrollers. It offers a simple interface for writing and uploading code.",
          source: "Arduino",
        //   icon: arduino,
        },
        {
          title: "Xcode",
          description:
            "Xcode is the integrated development environment (IDE) for macOS app development. It provides tools for coding, testing, and app deployment.",
          source: "Apple Inc.",
        //   icon: xcode,
        },
        {
          title: "BelenaEtcher",
          description:
            "BalenaEtcher is an open-source utility used to create bootable USB drives and SD cards. It's commonly used for flashing operating system images. I use it for creating bootable windows and linux USB's",
          source: "Balena",
        //   icon: belenaEtcher,
        },
        {
          title: "Virtual Box",
          description:
            "Oracle VM VirtualBox is a virtualization software that allows you to run multiple operating systems on a single machine. It's used for testing and development.",
          source: "Oracle Corporation",
        //   icon: virtualBox,
        },
        {
          title: "OverLeaf",
          description:
            "OverLeaf is an online collaborative platform used by researchers and academics to write, edit, and publish scientific documents and research papers.",
          source: "Overleaf Ltd.",
        //   icon: overleaf,
        },
      ];

  return (
    <div>
      <Card>
        <CardHeader className="flex gap-3">
          <div className="flex flex-col">
            <p
              style={{
                fontSize: "1rem",
                fontWeight: "700",
                fontFamily:
                  "ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji",
              }}
              className="text-md"
            >
              Additional Software Skills
            </p>
          </div>
        </CardHeader>
        <Divider />
        <CardBody>
          <Accordion>
            {workSoftware.map((concept, index) => (
              <AccordionItem
                aria-label={concept.title}
                title={
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <h4
                      style={{
                        fontSize: "1rem",
                        fontWeight: "700",
                        fontFamily:
                          "ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji",
                        marginLeft: "4px",
                      }}
                    >
                      {concept.title}
                    </h4>
                  </div>
                }
                subtitle={ 
                  <div style={{ display: "flex",flexDirection: 'column' }}>
                    <h4
                      className="p-1 text-default-500"
                      style={{ marginLeft: "4px" }}
                    >
                      {concept.source}
                    </h4>
                   
                  </div>
                }
                key={index}
                style={{
                  width: "100%",
                }}
              >
                <p className="p-1 text-default-500">
                  {concept.description}
                </p>
              </AccordionItem>
            ))}
          </Accordion>
        </CardBody>
      </Card>
    </div>
  );
}

