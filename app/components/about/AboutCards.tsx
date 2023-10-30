'use client'

import React from "react";
import {Card, CardBody, CardFooter, Link} from "@nextui-org/react";
import Image from "next/image";

import food from "../../../public/images/projects/food.webp";
import travel from "../../../public/images/projects/travel.webp";
import blog from "../../../public/images/projects/blog_light.jpeg";
import more from "../../../public/images/projects/cs-min.jpeg";



export default function AboutCards() {
  const list = [
    {
      title: "Food",
      img: food,
      price: "Blog",
      href: 'https://www.jmufood.com/',
    },
    {
      title: "Travel",
      img: travel,
      price: "Blog",
      href: 'https://www.wanderva.site/',
    },
    // {
    //   title: "Inspire",
    //   img: blog,
    //   price: "Image Blog",
    //   href: '/about/tumblr',
    // },
    {
      title: "More",
      img: more,
      price: "Additional Skills",
      href: '/more',
    },
  ];

  return (
    <div className="gap-4 grid grid-cols-1 md:grid-cols-3">
      {list.map((item, index) => (
        <Card shadow="sm" key={index} isHoverable isBlurred isPressable onPress={() => window.open(item.href)}>
          <CardBody className="overflow-visible p-2">
            <Image
              alt={item.title}
              className="w-full object-cover h-[240px] rounded-xl"
              src={item.img}
            />
          </CardBody>
          <CardFooter className="text-small justify-between">
            <b>{item.title}</b>
            <p className="text-default-500">{item.price}</p>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
