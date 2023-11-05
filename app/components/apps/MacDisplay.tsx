import React from "react";
import Image from "next/image";
import mac from  '../../../public/images/apps/mac-stars-min.png'
import { Link } from "@nextui-org/react";

export default function MacDisplay() {
  return (
    <div>
            <Link href="https://stars-2.vercel.app" isExternal>

      <Image
        src={mac}
        alt="Background"
        quality={100}
        width={2400}
        priority
        style={{
          zIndex: -1,
        }}
        />
        </Link>
    </div>
  );
}
