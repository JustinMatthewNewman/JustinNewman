import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Divider,
  CardFooter,
  Link,
  Image,
} from "@nextui-org/react";
export default function JavaCard() {
  return (
    <div className=" container flex flex-col md:flex-row items-center justify-center mt-12 gap-4 max-w-[1200px]">
      <Card className="max-w-[1200px] mt-6 mb-6">
        <CardHeader className="flex gap-3">
          <Image
            alt="nextui logo"
            height={40}
            src="https://github.com/justinmatthewnewman.png"
            width={40}
          />
          <div className="flex flex-col">
            <p className="text-md">
              Advanced Mixed Fractions Arithmetic Software.
            </p>
            <p className="text-small text-default-500">
              CS 345 - Software Engineering
            </p>
          </div>
        </CardHeader>
        <Divider />
        <CardBody>
          <p>
            Our Advanced Calculator project aims to create a comprehensive
            application with features for both basic arithmetic and specialized
            mathematical functions. The user-friendly interface includes buttons
            for standard operations, error correction, and specialized functions
            like generating the next number in the Farey sequence by recursively
            calculating mediant values. The development team, led by Justin
            Newman, Abdallah Derbala, Dylan Ballard, Easton Rupe, and Junior
            Garmendia, each contributed their expertise to different aspects of
            the project. Dr. David Bernstein served as the product owner,
            providing valuable guidance and leadership for the successful
            development of the calculator application.
          </p>
        </CardBody>
        <Divider />
        <CardFooter>
          <Link
            
            showAnchorIcon
            href="/apps/java"
          >
            More Details
          </Link>
        </CardFooter>
      </Card>
    </div>
  );
}
