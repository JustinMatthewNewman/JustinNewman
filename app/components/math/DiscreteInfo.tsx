import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Link,
} from "@nextui-org/react";

export default function DiscreteInfo() {
  return (
    <Card className="max-w-[800px]">
      <CardHeader className="flex gap-3">
        <div className="flex flex-col">
          <p className="text-md">Discrete Math</p>
          <p className="text-small text-default-500">newmanjustin.com</p>
        </div>
      </CardHeader>
      <Divider />
      <CardBody>
        <p className="py-2">
          Discrete structures are like tools in a toolbox for people who work
          with data. One tool, called &quot;graph theory,&quot; helps us understand how
          things are connected, like friends on a social network. &quot;Probability
          and statistics&quot; is another tool that helps us make predictions based
          on data, like guessing if it will rain tomorrow. Some tools, like
          &quot;number theory,&quot; keep secrets safe, like your computer password.
          There&apos;s another tool called &quot;set theory&quot; that helps organize data.
        </p>
        <p>
          Now, here&apos;s the cool part, These tools can help machines make
          decisions, like which path to take, or how to share resources fairly.
          These tools make it possible for machines to explore, understand, and
          solve all kinds of interesting problems with data. We call that
          machine learning.
        </p>
      </CardBody>
    </Card>
  );
}
