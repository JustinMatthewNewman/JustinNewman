import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Divider,
} from "@nextui-org/react";

export default function SocialKaggle() {
  return (
    <Card>
      <CardHeader className="flex gap-3">
        <div className="flex flex-col">
          <p className="text-md">TensorFlow</p>
          <p className="text-small text-default-500">Keras</p>
        </div>
      </CardHeader>
      <Divider />
      <CardBody>
        <p>
          The classification model itself is a neural network model built using
          TensorFlow and Keras. This model will be trained on the segmented
          image tiles to classify each segment according to the type of cancer
          it represents. The aggregated result of these individual segment
          classifications will be determined through a majority voting
          mechanism, ultimately classifying the entire tissue sample. The
          proposed approach offers benefits such as improved accuracy, efficient
          processing, and interpretability, as it allows for visualizing
          predictions on individual segments to gain insights into the regions
          classified as cancerous.
        </p>
      </CardBody>
    </Card>
  );
}
