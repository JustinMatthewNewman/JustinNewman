import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Link,
} from "@nextui-org/react";

export default function ScienceInfo() {
  return (
    <Card className="max-w-[800px]">
      <CardHeader className="flex gap-3">
        <div className="flex flex-col">
          <p className="text-md">Data Science</p>
          <p className="text-small text-default-500">newmanjustin.com</p>
        </div>
      </CardHeader>
      <Divider />
      <CardBody>
        <p className="py-2">
          My passion for computer science, data analysis, and machine learning
          has driven me to engage in impactful projects. I&apos;ve dedicated my
          efforts to subclassifying cancers using TensorFlow, utilizing its
          capabilities to predict cancer subtypes and their response to
          treatments.
        </p>
        <p>
          Additionally, I&apos;ve explored a wide array of machine learning
          techniques, including decision trees, support vector machines, random
          forests, neural networks, k-nearest neighbors, and lasso/ridge
          regression. These experiences have deepened my commitment to advancing
          these fields and have reinforced my enthusiasm for leveraging
          data-driven solutions.
        </p>
      </CardBody>
      
    </Card>
  );
}
