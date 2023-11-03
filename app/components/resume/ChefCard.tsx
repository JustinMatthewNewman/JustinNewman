import { Card, CardBody, CardHeader, Divider } from "@nextui-org/react";
import React from "react";

function ChefCard() {
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
                Chef at Aramark
              </p>
              <p className="text-small text-default-500 items-right">
                First semester of College
              </p>
            </div>
          </CardHeader>
          <Divider />
          <CardBody>
            <p>
              Working as a Chef at the university dining hall at JMU was a
              rewarding experience that taught me the value of empathy and
              patience. I wanted to set an example for my peers and display my
              strong work ethic. It was during this role that I had the
              opportunity of meeting a friend, Salal, who had immigrated to the
              United States from Iraq with his wife. Salal became not just a
              colleague but also a source of inspiration. As we worked together,
              especially during our post-shift hood cleaning duties, he shared
              his remarkable life journey, experiences, and goals. Through these
              conversations, I gained a deeper understanding of the challenges
              and resilience of immigrants. My experience as a Chef at
              JMU&apos;s dining hall, coupled with my friendship with Salal,
              made me a more compassionate and patient individual. It served as
              a reminder that the most enriching life lessons often come from
              meaningful connections with people who have very different
              backgrounds and experiences. This experience has left a mark on my
              character to this day.
            </p>
          </CardBody>
        </Card>
      </Card>
    </div>
  );
}

export default ChefCard;
