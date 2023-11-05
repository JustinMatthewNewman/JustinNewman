'use client'
import { Accordion, AccordionItem } from "@nextui-org/react";

import Image from "next/image";
import React, { useState } from "react";
import Link from "next/link";
import quantum from "../../../public/images/home/quan.png";

import { Card, CardHeader, CardBody, Skeleton, Divider } from "@nextui-org/react";


function PostQuantum() {

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
            }}>PQC</h2>
          </CardHeader>
          <Divider />
          <CardBody>

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
              <div>
              <Skeleton isLoaded={imageLoaded} className="rounded-lg">
                <Image
                  src={quantum}
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
              <p className="text-md">Concepts</p>
              <p className="text-small text-default-500">newmanjustin.com</p>
            </div>
          </CardHeader>
          <Divider />
          <CardBody>
            <Accordion >
              {postQuantumCrypto.map((concept, index) => (
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

export default PostQuantum