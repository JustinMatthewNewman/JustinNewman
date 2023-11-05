import { Card, CardBody, CardHeader, Divider } from "@nextui-org/react";
import React from "react";
import Image from "next/image";
import a from '../../../public/images/resume/ara.png'

function ChefCard() {
  return (
    <div>
      <Card className="mt-6">
        <CardHeader className="justify-between">
          <div className="flex flex-col  ">
            <p className="text-small text-default-500 items-left">
              Chef at Aramark
            </p>
            <p className="text-small text-default-500 items-right">
              First semester of College
            </p>
          </div>
          <Card className="p-2 bg-slate-200">
          <Image width={100} src={a} alt={""} className="justify-right mt-2 mb-2"/>
          </Card>

        </CardHeader>
        <Divider />
        <CardBody>
          <p>
            During my freshman year of college, I wanted to set a positive
            example and took a job at the university dining hall to work as a
            chef, an experience that would introduce me to Salal, a remarkable
            coworker and friend. Salal&apos;s story was one of courage and
            resilience, as he had immigrated from Iraq in search of a better
            life. Salal&apos;s journey to the United States was marked by
            significant challenges and hardships. Fleeing a war-torn homeland,
            he sought refuge and a chance for a brighter future for himself and
            his family. His struggles included adapting to a new culture,
            learning a new language, and navigating the complexities of
            immigration. Our paths crossed in the kitchen of the dining hall,
            where we both worked tirelessly to prepare meals for the college
            community. Despite the demanding nature of our job, &apos;s spirit
            remained unbroken. He was unfailingly kind and gracious. One of the
            memorable aspects of our friendship was our shared responsibility
            for cleaning the hoods after long shifts. This tedious task required
            teamwork and attention to detail, and it provided us with a quiet
            opportunity to bond. As we scrubbed away the remnants of the
            day&apos;s cooking, we often shared stories of our respective
            journeys, dreams, and hopes for the future. Salal&apos;s friendship
            and example served as a constant reminder of the importance of
            empathy and understanding. Despite the challenges he faced and the
            prejudices he occasionally encountered, he always treated others
            with respect and kindness. Our time working together in that college
            dining hall left a lasting impression on me. Salal&apos;s story of
            perseverance and our enduring friendship served as a powerful
            reminder of the strength of the human spirit.
          </p>
        </CardBody>
      </Card>
    </div>
  );
}

export default ChefCard;
