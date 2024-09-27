"use client";
import React, { useState } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Avatar,
  Button,
  Skeleton
} from "@nextui-org/react";
import confetti from "canvas-confetti";
import Image from "next/image";
import pic from "../../../public/images/about/1.jpg";
import pic2 from "../../../public/images/about/2.png";
import pic3 from "../../../public/images/about/3.png";
import pic4 from "../../../public/images/about/4.png";
import pic5 from "../../../public/images/about/5.png";
import pic6 from "../../../public/images/about/6.png";

import pic7 from "../../../public/images/about/7.jpg";
// import pic8 from "../../../public/images/about/8.jpg";
// import pic9 from "../../../public/images/about/9.jpg";
import pic10 from "../../../public/images/about/10.jpg";
import pic11 from "../../../public/images/about/11.png";
// import pic12 from "../../../public/images/about/12.png";

export default function AboutImages() {
  const [isFollowed, setIsFollowed] = React.useState(false);

  const handleConfetti = () => {
    setIsFollowed(!isFollowed);
    if (isFollowed === false) {
      confetti();
    }
  };

  const list = [
    {
      title: "5 years strong with Libby Robertson. Congratulations to her in her new role as an Office Administrator.",
      img: pic,
      caption: "Blog",
    },
    {
      title: "Top of the world with my ComputerScience bros! #BestRoomies #Hike",
      img: pic2,
      caption: "Blog",
    },
    {
      title: "Gearing up for career day with the roommates. Congratulations to Nick in his new Cyber role with NorthupGrumman and Pierre in his role with Burns & McDonnel.",
      img: pic3,
      caption: "Image Blog",
    },
    {
      title: "Binary arthimetic. #IEEE754-InTheDoor",
      img: pic4,
      caption: "Additional Skills",
    },
    {
      title: "Morning Routine, #NeedCoffeeNow",
      img: pic5,
      caption: "Additional Skills",
    },
    {
      title: "#NewCut #CancerAwarenessMonth",
      img: pic6,
      caption: "Additional Skills",
    },
    {
      title:
        "I loved working alongside Kelly Bowmaster, who is now the Director of Broadcasting at JMU. Kelly's expertise is inspiring, and it's a privilege to collaborate with someone who brings such dedication and innovation to our team. The amazing job done by Ty, Kerry, Grant, and Mikey, is nothing short of outstanding. Their hard work, creativity, and commitment to excellence make our projects shine. Professor Hodges' guidance and mentorship can't go unnoticed. Special Thanks to President John Salem for making it all happen.",
      img: pic7,
      caption: "Additional Skills",
    },
    // {
    //   title: "#NewCut #CancerAwarenessMonth",
    //   img: pic8,
    //   caption: "Additional Skills",
    // },
    // {
    //   title: "Mixing it up. #FBYC #DJ",
    //   img: pic9,
    //   caption: "Additional Skills",
    // },
    {
      title:
        "Working as a sideline camera operator at JMU Football was an incredible privilege. It allowed me to be right in the heart of the action, capturing the energy, excitement, and athleticism of the game up close. Being part of the team and contributing to the fan experience in this way was a thrilling and unforgettable opportunity.",
      img: pic10,
      caption: "Additional Skills",
    },
    {
      title: "Thanks to John Salem, I was given the opportunity to work with Dan Tierney and VPM's Mobile production unit at JMU football. Dan elevated our production to a whole new level, ensuring that every aspect of the broadcast is top-notch. The state-of-the-art equipment and technical prowess of the VPM Mobile unit have enabled us to deliver a seamless and engaging viewing experience for fans. Collaborating with this talented team has been an incredible learning experience, and the camaraderie among us is truly inspiring. Together, we've brought the excitement of JMU football to life, and it's been a privilege to be a part of such a dynamic and successful production crew.",
      img: pic11,
      caption: "Additional Skills",
    },
    // {
    //   title: "#NewCut #CancerAwarenessMonth",
    //   img: pic12,
    //   caption: "Additional Skills",
    // },
  ];
  const [imageLoaded, setImageLoaded] = useState(false);
  return (
    <div className="gap-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {list.map((item, index) => (
        <Card  key={index} className="max-w-[345px]">
          <CardHeader className="justify-between">
            <div className="flex gap-5">
              <Avatar
                isBordered
                color="secondary"
                radius="full"
                size="md"
                src="https://github.com/justinmatthewnewman.png"
              />
              <div className="flex flex-col gap-1 items-start justify-center">
                <h4 className="text-small font-semibold leading-none text-default-600">
                  Justin Newman
                </h4>
                <h5 className="text-small tracking-tight text-default-400">
                  @justin
                </h5>
              </div>
            </div>
            <Button
              className={
                isFollowed
                  ? "bg-transparent text-foreground border-default-200"
                  : ""
              }
              color="primary"
              radius="full"
              size="sm"
              variant={isFollowed ? "bordered" : "solid"}
              onPress={handleConfetti}
            >
              {isFollowed ? "Unfollow" : "Follow"}
            </Button>
          </CardHeader>
          <CardBody
            style={{ pointerEvents: "none" }}
            className="px-3 py-0 text-small text-default-400 h-full scrollbar-hide"
          >
            <Skeleton isLoaded={imageLoaded} className="rounded-lg">
            <Image onLoad={() => setImageLoaded(true)} src={item.img} alt={""} />
            </Skeleton>
            <p className=" text-default-400 text-small p-2">{item.title}</p>
          </CardBody>
          <CardFooter className="gap-3">
            <div className="flex gap-1">
              <p className="font-semibold text-default-400 text-small">1</p>
              <p className=" text-default-400 text-small">Following</p>
            </div>
            <div className="flex gap-1">
              <p className="font-semibold text-default-400 text-small">
                497.1K
              </p>
              <p className="text-default-400 text-small">Followers</p>
            </div>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
