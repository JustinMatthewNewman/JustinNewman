import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Divider,
  CardFooter,
  Link,
} from "@nextui-org/react";
export default function CSCodeCard() {
  return (
    <div className=" container flex flex-col md:flex-row items-center justify-center mt-12 gap-4 max-w-[1200px]">
      <Card className="max-w-[1200px] mt-6 mb-6">
        <CardHeader className="flex gap-3">
          <div className="flex flex-col">
            <p className="text-md">Socical Media platform for Developers.</p>
            <p className="text-small text-default-500">CS-Code</p>
          </div>
        </CardHeader>
        <Divider />
        <CardBody>
          <p>
            Introducing an Instagram clone meticulously designed with
            programmers and developers in mind. This cutting-edge platform
            reimagines the social media experience, offering a unique space
            where tech enthusiasts can connect, collaborate, and showcase their
            coding prowess. With a sleek and intuitive interface, this clone
            prioritizes showcasing lines of code and project snapshots,
            fostering a vibrant coding community. It encourages the exchange of
            knowledge, projects, and insights, providing a playground for
            tech-savvy individuals to grow and learn from one another. Whether
            it&apos;s sharing code snippets, discussing the latest programming
            languages, or collaborating on innovative projects, this Instagram
            clone offers a haven for those passionate about the world of coding.
          </p>
        </CardBody>
        <Divider />
        <CardFooter>
          <Link
            isExternal
            showAnchorIcon
            href="https://CSCODE.org"
          >
            LIVE APP
          </Link>
        </CardFooter>
      </Card>
    </div>
  );
}
