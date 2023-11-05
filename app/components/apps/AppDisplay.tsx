import React from "react";
import Image from "next/image";
import iphonestars from  '../../../public/images/apps/iphone_stars.png'
import { Link } from "@nextui-org/react";

export default function AppDisplay() {
  return (
    <div>
      <Link href="https://stars-2.vercel.app" isExternal>
      <Image
        src={iphonestars}
        alt="Background"
        quality={100}
        width={1000}
        priority
        style={{
          zIndex: -1,
        }}
        />
        </Link>
    </div>
  );
}
