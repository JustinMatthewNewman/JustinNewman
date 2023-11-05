import { Card, CardBody, CardHeader, Divider } from "@nextui-org/react";
import React from "react";
import Image from "next/image";
import a from '../../../public/images/resume/mass.png';

function MassCard() {
  return (
    <div>
      <Card className="mt-6">
        <CardHeader className="justify-between">
          <div className="flex flex-col  ">
            <p className="text-small text-default-500 items-left">
              Zipline Attendant
            </p>
            <p className="text-small text-default-500 items-right">
              Summer 2021
            </p>
          </div>
          <Card className="p-2 bg-slate-200">

          <Image width={100} src={a} alt={""} className="justify-right"/>
          </Card>

        </CardHeader>
        <Divider />
        <CardBody>
          <p>
            Joining Massanutten Resort as a zipline
            attendant in the summer of 2021 was a heartfelt decision for me.
            After a particularly challenging year in college disrupted by COVID,
            marked by long hours of programming and academic stress while being
            isolated, I felt an intense desire for adventure and a break from
            solitude. The role provided the perfect opportunity to reconnect
            with nature and the community. It allowed me to step away from the
            lockdown and into the open air. The role also helped me develop
            <span className="font-bold"> essential interpersonal skills.</span> I honed my communication abilities
            and learned to empathize effectively with individuals from many
            different backgrounds. This experience was great, as it emphasized
            the importance of <span className="font-bold">teamwork and adaptability,</span> qualities that are
            essential. Additionally, the incentive of a free ski pass was a
            significant factor in my decision to work at the resort. It allowed
            me to enjoy the benefits of the great outdoors even during the
            winter months. During my time at the resort, I also discovered that
            when the park wasn&apos;t busy, it provided moments of reflection and
            personal growth. I used this time wisely to explore my creative side
            through poetry, allowing me to express my thoughts and emotions.
            Additionally, this summer I had also took on the challenge of
            <span className="font-bold"> completing calculus II, </span> further enhancing my <span className="font-bold"> problem-solving skills
            and dedication to learning. </span>
          </p>
        </CardBody>
      </Card>
    </div>
  );
}

export default MassCard;
