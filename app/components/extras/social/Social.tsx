'use client'
import React from "react";
import {Card, CardHeader, CardBody, CardFooter, Avatar, Button} from "@nextui-org/react";
import confetti from 'canvas-confetti';

export default function Social() {
  const [isFollowed, setIsFollowed] = React.useState(false);
  
  const handleConfetti = () => {
    setIsFollowed(!isFollowed);
    if (isFollowed === false) {
      confetti();
    }
  };

  return (
    <Card className="max-w-[345px]">
      <CardHeader className="justify-between">
        <div className="flex gap-5">
          <Avatar isBordered radius="full" size="md" src="https://github.com/justinmatthewnewman.png" />
          <div className="flex flex-col gap-1 items-start justify-center">
            <h4 className="text-small font-semibold leading-none text-default-600">Justin Newman</h4>
            <h5 className="text-small tracking-tight text-default-400">@justin</h5>
          </div>
        </div>
        <Button
          className={isFollowed ? "bg-transparent text-foreground border-default-200" : ""}
          color="primary"
          radius="full"
          size="sm"
          variant={isFollowed ? "bordered" : "solid"}
          onPress={
            handleConfetti
          }
          
        >
          {isFollowed ? "Unfollow" : "Follow"}
        </Button>
      </CardHeader>
      <CardBody style={{pointerEvents: 'none'}} className="px-3 py-0 text-small text-default-400 h-full scrollbar-hide">
        <p>
          Software developer and UI/UX enthusiast.
        </p>
        <span className="pt-2">
          #FullStack 
          <span className="py-2" aria-label="computer" role="img">
            💻
          </span>
        </span>
      </CardBody>
      <CardFooter className="gap-3">
        <div className="flex gap-1">
          <p className="font-semibold text-default-400 text-small">1</p>
          <p className=" text-default-400 text-small">Following</p>
        </div>
        <div className="flex gap-1">
          <p className="font-semibold text-default-400 text-small">497.1K</p>
          <p className="text-default-400 text-small">Followers</p>
        </div>
      </CardFooter>
    </Card>
  );
}
