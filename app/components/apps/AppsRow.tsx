"use client";
import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Link,
} from "@nextui-org/react";

export default function AppsRow() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center gap-4 max-w-[1200px]">
      <Card className="mt-6 mb-6">
        <CardHeader className="flex gap-3">
          <div className="flex flex-col">
            <p className="text-md">Haskell-Graphite</p>
            <p className="text-small text-default-500">CS 430 Project</p>
          </div>
        </CardHeader>
        <Divider />
        <CardBody>
          <p className="py-2">
            I am thrilled to share with you a command-line program that I&apos;ve
            crafted in Haskell, a labor of love dedicated to the world of data
            visualization. Leveraging the powerful Haskell-Graphite library, my
            creation takes raw data from a CSV file and, with a touch of magic,
            transforms it into a mesmerizing network of interconnected nodes and
            edges. This is a testament to the beauty of graph theory. What makes
            it even more extraordinary is the incredible collaboration with Dr.
            Chris Johnson, whose expertise enabled us to tackle even the most
            massive input files with ease. Together, we&apos;ve unlocked the
            potential for anyone to see their data in a whole new light with
            ease, turning it into stunning directed or undirected graph PNG
            files that captivate and inspire.
          </p>
        </CardBody>
        <Divider />
        <CardFooter>
          <Link showAnchorIcon href="/apps/haskell">
            More Details
          </Link>
        </CardFooter>
      </Card>
      <Card className="mt-6 mb-6">
        <CardHeader className="flex gap-3">
          <div className="flex flex-col">
            <p className="text-md">Ruby-on-Rails</p>
            <p className="text-small text-default-500">CS 430 Project</p>
          </div>
        </CardHeader>
        <Divider />
        <CardBody>
          <p className="py-2">
            Koincidence, your brilliant Ruby on Rails project, is a shining
            example of simplicity meeting functionality. With the grace of a
            well-orchestrated programming, Koincidence effortlessly retrieves data
            from the Coin API, transforming it into a visual masterpiece. This
            elegant display not only showcases my technical ability but also
            exemplifies the beauty of well-designed software. In a world often
            plagued by complexity, Koincidence stands as a beacon of simplicity,
            proving that even in the most intricate data streams, clarity and
            elegance can prevail. This project is a true testament to my
            ability to harmonize technology and user experience, creating a
            captivating and informative platform that will undoubtedly leave a
            lasting impression on its users.
          </p>
        </CardBody>
        <Divider />
        <CardFooter>
          <Link showAnchorIcon href="/apps/ruby">
            More Details
          </Link>
        </CardFooter>
      </Card>
    </div>
  );
}
