import React from "react";
import { Card, CardHeader, CardBody, Divider } from "@nextui-org/react";
function ResumeContentTwoColumn() {
  return (
    <div>
      <div className="flex flex-col md:flex-row items-center justify-center mt-6 gap-6 ">
        <Card className="max-w-[770px]">
          <CardHeader className="flex gap-3">
            <div className="flex flex-col">
              <p className="text-md">SKILLS</p>
              <p className="text-small text-default-500">PROFICIENCIES</p>
            </div>
          </CardHeader>
          <CardBody>
            <p>
              Git, Linux, Java, JavaScript, Python3, C, HTML, CSS, PHP, mySQL,
              R, React.js, DynamoDB, Firebase, Ghidra. Gaussian Elimination, CRT
              for Modular Exponentiation.
            </p>
          </CardBody>
          <Divider />

          <CardHeader className="flex gap-3">
            <div className="flex flex-col">
              <p className="text-md">INDUSTRY-RELEVANT</p>
              <p className="text-small text-default-500">COURSES</p>

            </div>
          </CardHeader>
          <CardBody>
            <p>
              Applied Algorithms, Software Engineering, Computer Systems II,
              Discrete Structures II, Calculus II, Database Systems, Parallel
              and Distributed systems, Statistics, Web Development,
              Linear-Algebra, Machine Learning.
            </p>
          </CardBody>
          <Divider />

          <CardHeader className="flex gap-3">
            <div className="flex flex-col">
              <p className="text-md">JAMES MADISON UNIVERSITY</p>
              <p className="text-small text-default-500">EDUCATION</p>

            </div>
          </CardHeader>
          <CardBody>
            <p>Bachelor of Science in Computer Science.</p>
            <p>Minor study in Data Analytics Graduation</p>
          </CardBody>
          <Divider />

          <CardHeader className="flex gap-3">
            <div className="flex flex-col">
              <p className="text-md">BEST AWARDS</p>
              <p className="text-small text-default-500">HONORS</p>

            </div>
          </CardHeader>
          <CardBody>
            <p>President&apos;s List.</p>
            <p>Dean&apos;s List.</p>
            <p>Dean&apos;s List.</p>
          </CardBody>
        </Card>
        <Card className="max-w-[430px]">

          <CardHeader className="flex gap-3">
            <div className="flex flex-col">
              <p className="text-md">SELECTED APPLICATIONS</p>
            </div>
          </CardHeader>

          <CardBody>
            <p>
              MelodifyLabs.com (Next, Firebase, Vercel) Created a full stack
              platform for converting user text prompts into songs. Deployed
              with vercel web hosting, next-generation secure authentication,
              OpenAI API lyric generation, utilized text-to-speech API for vocal
              generation. Firebase storage for mp3 file retrieval.
            </p>
          </CardBody>

          <CardBody>
            <p>
              CSCode.org (React, Next-Auth, Tailwind CSS) Created a working full
              stack social media application. Implemented cutting-edge security
              using next auth Google authentication, Firebase administration
              panel, photo uploading and deletion, commenting, sharing, and
              liking functionalities. Profile pages and user profile photos.
              Used scalable systems to account for a rapidly growing community
              and user activity surges.
            </p>
          </CardBody>

          <CardBody>
            <p>
              Web Dev Club (HTML, CSS, PHP, JS) Founded a Web Dev Club for like
              minded students and educators. We frequently held group meetings
              and discussed different techniques for front end web development
              and data visualization.
            </p>
          </CardBody>
        </Card>
      </div>
    </div>
  );
}

export default ResumeContentTwoColumn;