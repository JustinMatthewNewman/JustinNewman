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
              Park Attendant
            </p>
            <p className="text-small text-default-500 items-right">
              Summer 2021
            </p>
          </div>
          <Image width={100} src={a} alt={""} className="justify-right mr-2 mt-2 mb-2"/>

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
            essential interpersonal skills. I honed my communication abilities
            and learned to empathize effectively with individuals from many
            different backgrounds. This experience was great, as it emphasized
            the importance of teamwork and adaptability, qualities that are
            essential. Additionally, the incentive of a free ski pass was a
            significant factor in my decision to work at the resort. It allowed
            me to enjoy the benefits of the great outdoors even during the
            winter months. During my time at the resort, I also discovered that
            when the park wasn&apos;t busy, it provided moments of reflection and
            personal growth. I used this time wisely to explore my creative side
            through poetry, allowing me to express my thoughts and emotions.
            Additionally, this summer I had also took on the challenge of
            completing calculus 2, further enhancing my problem-solving skills
            and dedication to learning.
          </p>
        </CardBody>
      </Card>
    </div>
  );
}

export default MassCard;
