import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Link,
} from "@nextui-org/react";

export default function MelodifyInfo() {
  return (
    <Card className="max-w-[800px]">
      <CardHeader className="flex gap-3">
        <div className="flex flex-col">
          <p className="text-md">Text-To-Song AI</p>
          <p className="text-small text-default-500">MelodifyLabs.com</p>
        </div>
      </CardHeader>
      <Divider />
      <CardBody>
        <p className="py-2">
          Melodify Labs, a groundbreaking app, redefines the creative potential
          of user-generated content by seamlessly transforming text prompts into
          fully-fledged song lyrics. By harnessing the power of the OpenAI API,
          Melodify Labs crafts intricate lyrical compositions, each uniquely
          tailored to the user&apos;s input. These lyrics are then artfully rendered
          into audio through state-of-the-art text-to-speech technology, giving
          them a vibrant voice.
        </p>
        <p>
          To complete the musical experience, Melodify Labs combines this
          synthesized vocal with a preexisting backing track, producing a
          harmonious fusion that results in a fully-fledged, personalized song.
          This innovative platform offers a novel way to bring individual
          stories, emotions, and ideas to life through the universal language of
          music, making it an invaluable tool for musicians, poets,
          storytellers, and creative minds alike.
        </p>
      </CardBody>
      <Divider />
      <CardFooter>
        <Link
          isExternal
          showAnchorIcon
          href="https://melodifylabs.com"
        >
          LIVE APP
        </Link>
      </CardFooter>
    </Card>
  );
}
