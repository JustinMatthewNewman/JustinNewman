import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Link,
} from "@nextui-org/react";

export default function ScienceInfo3() {
  return (
    <Card className="max-w-[800px]">
      <CardHeader className="flex gap-3">
        <div className="flex flex-col">
          <p className="text-md">Contact me</p>
          <p className="text-small text-default-500">newmanjustin.com/resume</p>
        </div>
      </CardHeader>
      <Divider />
      <CardBody>
        <p>
          I&apos;m excited to connect and explore potential collaboration
          opportunities! If your skills and interests seem to align with my own,
          and you believe we could create something amazing together. I&apos;m eager
          to discuss potential projects. Don&apos;t hesitate to reach out – I&apos;m just
          a message away, and I&apos;m sure our combined expertise could lead to some
          fantastic results. Let&apos;s make it happen!
        </p>
      </CardBody>
      <Divider />
      <CardFooter>
        <Link
          showAnchorIcon
          href="/resume"
        >
          Contact Info
        </Link>
      </CardFooter>
    </Card>
  );
}
