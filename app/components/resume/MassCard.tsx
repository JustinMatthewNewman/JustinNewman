import { Card, CardBody, CardHeader, Divider } from "@nextui-org/react";
import React from "react";

function MassCard() {
  return (
    <div>
      <Card
        className="mt-6 p-2"
        style={{
          backgroundImage:
            "linear-gradient(103deg, rgba(184,92,0,1) 0%, rgba(255,209,163,1) 35%, rgba(222,114,47,1) 52%, rgba(255,231,213,1) 69%, rgba(161,75,0,1) 100%)",
        }}
      >
        <Card>
          <CardHeader className="flex gap-3">
            <div className="flex flex-col  ">
              <p className="text-small text-default-500 items-left">
                Park Attendant at Massanutten Resort
              </p>
              <p className="text-small text-default-500 items-right">
                Summer 2021
              </p>
            </div>
          </CardHeader>
          <Divider />
          <CardBody>
            <p>
              Working as a Zipline Attendant at Massanutten Family Adventure
              Park was a transformative experience. In this role, I had the
              opportunity to interact with a diverse array of visitors from
              various backgrounds, rekindling a sense of community that had been
              somewhat lost during the isolation of the COVID-19 pandemic. This
              exposure allowed me to relate to people from various walks of life
              and improve my communication skills. I discovered the power of
              connection and making friends with individuals seeking adventure.
              This role offered a refreshing escape from the isolation of
              coursework during the pandemic, reminding me of the intrinsic
              human need for social interaction and outdoor engagement. The
              bonds I formed during my time as a Zipline Attendant were not only
              personally enriching but also contributed to the overall enjoyment
              and positive experience of our guests. It was a reminder that
              personal growth and fulfillment can be found in stepping outside
              of one&apos;s comfort zone, embracing new challenges, and building
              meaningful connections with others.
            </p>
          </CardBody>
        </Card>
      </Card>
    </div>
  );
}

export default MassCard;
