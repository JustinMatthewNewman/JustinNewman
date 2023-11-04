'use client'

import dark from "../../../public/images/background/dark-background.png";
import light from "../../../public/images/background/light-background.png";


import Image from "next/image"; // Import next/image
import { useTheme } from 'next-themes'

function BackgroundImage() {
  const { resolvedTheme } = useTheme();

  let bgImg;

  switch (resolvedTheme) {
    case 'light':
      bgImg = light;
      break;
    case 'dark':
      bgImg = dark;
      break;
    default:
      bgImg = '';
  }

  return (
    <div style={{ pointerEvents: 'none', overflow: 'hidden' }}>
      <Image
        objectFit="cover"
        src={bgImg}
        alt="Background"
        quality={100}
        priority
        style={{
          zIndex: -1,
          position: 'fixed'

        }}
      />
    </div>
  );
}

export default BackgroundImage;
