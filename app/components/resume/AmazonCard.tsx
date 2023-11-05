import { Card, CardBody, CardHeader, Divider, Badge} from "@nextui-org/react";
import React from "react";
import Image from "next/image";
import a from '../../../public/images/resume/amazon.svg';
function AmazonCard() {
  return (
    <div>
      <Card className="mt-6">
        <CardHeader className="justify-between">
          <div className="flex flex-col  ">

            <p className="text-small text-default-500 items-left">
              Fulfillment Associate
            </p>
            <p className="text-small text-default-500 items-right">
              Summer 2022
            </p>
          </div>
          <Badge content="1200+ packages" color="danger" shape="circle" placement="top-left">
          <Card className="p-2 bg-slate-200">
          <Image width={100} src={a} alt={""} className="justify-right mt-2 "/>
          </Card>
          </Badge>

        </CardHeader>
        <Divider />
        <CardBody>
          <p>
            Working as a Fulfillment Associate at an Amazon warehouse was a very
            eye-opening experience that taught me some valuable life lessons,
            including empathy and respect, as well as the importance of <span className="font-bold">taking
            initiative and working hard </span> to achieve goals. I had the opportunity
            to interact with people from various backgrounds, cultures, and
            experiences. This exposure provided a unique opportunity for me to
            put myself in other people&apos;s shoes and develop a deep appreciation
            for the people I worked with. My manager Anisa, played a huge role
            in my growth and understanding of what it means to be a  <span className="font-bold">dedicated
            team member.</span> Despite her managerial position, she didn&apos;t hesitate to
            take on the most difficult tasks around the facility which most
            likely weren&apos;t in her job description. Her commitment to her team
            and willingness to do the hard work alongside her subordinates set
            an exceptional example for everyone in the warehouse.
          </p>

          <p className="mt-2">
            Anisa&apos;s dedication inspired me and my other fellow workers to strive
            for excellence in our roles. Her actions showed me that real
            leadership is not about authority but about being a role model. I
            learned that true leaders lead by example. There were nights when I
            sorted over <span className="font-bold">1200 packages per shift </span> because I wanted Anisa to be
            proud. This demonstrates my <span className="font-bold">strong work ethic and ability </span>to take
            initiative. In my time at Amazon, I made it a personal goal to work
            as hard as Anisa, and I always did my part. This dedication not only
            helped me personally but also contributed to the overall success and
            efficiency of the warehouse operations. My experience at Amazon has
            shaped me into a more empathetic, hardworking, and proactive person.
          </p>
        </CardBody>
      </Card>
    </div>
  );
}

export default AmazonCard;
