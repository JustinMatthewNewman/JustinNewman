import React from "react";
import { Card, CardHeader, CardBody, CardFooter, Divider, Link, Image } from "@nextui-org/react";

export default function Infocard2() {
  return (
    <Card className="max-w-[1200px]">
      <CardHeader className="flex gap-3">
        <Image
          alt="Justin Newman"
          height={40}
          radius="sm"
          src="https://github.com/justinmatthewnewman.png"
          width={40}
        />
        <div className="flex flex-col">
          <p className="text-md">Justin Newman</p>
          <p className="text-small text-default-500">Woodbridge, VA</p>
        </div>
      </CardHeader>
      <Divider />
      <CardBody>
        <h3 className="font-extrabold	">SKILLS AND PROFICIENCIES</h3>
        <p>Git, Linux, Java, JavaScript, Python3, C, HTML, CSS, PHP, mySQL, R, React.js, DynamoDB, Firebase, Ghidra.</p>
      </CardBody>
      <CardBody>
        <h3 className="font-extrabold	">INDUSTRY-RELEVANT COURSES</h3>
        <p>Applied Algorithms, Software Engineering, Computer Systems II, Discrete Structures II, Calculus II, Database Systems, Parallel and Distributed systems, Statistics, Web Development, Linear-Algebra, Machine Learning. </p>

      </CardBody>
      <CardBody>
        <h3 className="font-extrabold	">JAMES MADISON UNIVERSITY</h3>
        <p>Bachelor of Science in Computer Science. Minor study in Data Analytics</p>
        <p>Graduation - May 2023</p>
      </CardBody>
      <CardBody>
        <h3 className="font-extrabold	">BEST AWARDS AND HONORS</h3>
        <p>President’s List.</p>
      </CardBody>
      
      <Divider />
      <CardFooter>
        <Link showAnchorIcon href="/resume">
          Visit Full Resume.
        </Link>
      </CardFooter>
    </Card>
  );
}
