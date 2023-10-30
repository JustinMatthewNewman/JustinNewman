import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Divider,
} from "@nextui-org/react";

export default function SocialKaggle2() {
  return (
    <Card>
      <CardHeader className="flex gap-3">
        <div className="flex flex-col">
          <p className="text-md">Future steps</p>
          <p className="text-small text-default-500">updates</p>
        </div>
      </CardHeader>
      <Divider />
      <CardBody>
        <p>
          Future steps in the project include data preprocessing, where various
          techniques like data augmentation and normalization will be explored,
          model tuning involving the experimentation with different neural
          network architectures and hyperparameters, data visualization to gain
          insights into the distribution of cancer types, and model evaluation
          using metrics like accuracy, precision, recall, and F1-score.
          Ultimately, the model could be considered for deployment in real-world
          cancer diagnosis, integrating it into a medical system to assist
          pathologists in identifying and classifying ovarian cancer types in
          tissue samples.
        </p>
      </CardBody>
    </Card>
  );
}
