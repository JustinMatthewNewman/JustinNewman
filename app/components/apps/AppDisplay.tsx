import React from "react";
import Image from "next/image";
import iphonestars from  '../../../public/images/apps/iphone_stars.png'

export default function AppDisplay() {
  return (
    <div>
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
    </div>
  );
}
