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
import SocialKaggle from "../extras/socialkaggle/SocialKaggle";
import SocialKaggle2 from "../extras/socialkaggle/SocialKaggle2";
import Image from "next/image";

export default function Kaggle() {
  return (
    <div>
      <Card className="max-w-[1200px] mt-6 mb-6">
        <CardHeader className="flex gap-3">
          <div className="flex flex-col">
            <p className="text-md">
              Sub-classifying Ovarian Cancer with TensorFlow2
            </p>
            <p className="text-small text-default-500">Kaggle.com</p>
          </div>
        </CardHeader>
        <Divider />
        <CardBody>
          <p>
            In this cancer classification project using TensorFlow2 and Keras,
            the primary challenge is to accurately classify ovarian cancer types
            in tissue samples, which often involve massive images. Rather than
            scaling down these images, the proposed approach involves image
            segmentation to divide large images into smaller, more manageable
            segments (225x225 pixel tiles). This segmentation allows the model
            to focus on finer details within the tissue samples, potentially
            improving the accuracy of cancer detection. Additionally, I plan to
            implement CUDA GPU acceleration to further enhance the processing
            speed once the model is trained on a smaller dataset.
          </p>
        </CardBody>
      </Card>
      <div className="flex flex-col md:flex-row items-center justify-center mt-6 gap-4 max-w-[1200px]">
        <SocialKaggle />
        <SocialKaggle2 />
      </div>
      <Card className="max-w-[1200px] mt-6 mb-6">
        <CardHeader className="flex gap-3">
          <Image
            alt="nextui logo"
            height={40}
            className="rounded"
            src="https://github.com/justinmatthewnewman.png"
            width={40}
            />
          <div className="flex flex-col">
            <p className="text-md">
              Computer Science and Data Analytics Graduate
            </p>
            <p className="text-small text-default-500">Justin Newman</p>
          </div>
        </CardHeader>
        <Divider />
        <CardBody>
          <p>
            In this project to classify ovarian cancer types using TensorFlow2
            and Keras, I have encountered a set of significant challenges. One
            of the primary hurdles is dealing with the immense size of cell
            tissue sample images, some of which can exceed several gigabytes in
            size. These memory constraints present a formidable obstacle,
            demanding innovative strategies to work effectively within such
            limitations. Moreover, the task of finding the most adequate
            segments within these massive images for extraction and model
            training is a meticulous process. It necessitates the development of
            algorithms to identify the most informative portions of the tissue
            samples, ensuring that our model can effectively focus on the vital
            details required for accurate cancer type classification. Throughout
            this journey, I am truly grateful for the incredible support and
            appreciation from the Kaggle community, whose insights and
            contributions have been invaluable in overcoming these challenges
            and advancing our mission.
          </p>
        </CardBody>
        <Divider />
        <CardFooter>
          <Link
            isExternal
            showAnchorIcon
            href="https://www.kaggle.com/code/justinmnewman/sub-classifying-ovarian-cancer-with-tensorflow2"
            >
            Visit notebook on Kaggle.
          </Link>
        </CardFooter>
      </Card>
    </div>
  );
}
