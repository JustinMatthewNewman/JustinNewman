import React from "react";
import Image from "next/image";
import mac from  '../../../public/images/apps/mac-stars-min.png'

export default function MacDisplay() {
  return (
    <div>
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
    </div>
  );
}
