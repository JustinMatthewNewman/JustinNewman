'use client'

import NavLogo from '../../public/images/logo/navLogo.png'
import NavLogoDark from '../../public/images/logo/justin_white.png'

import Image from "next/image"; // Import next/image
import { useTheme } from 'next-themes'

function LogoImage() {
    const { resolvedTheme } = useTheme();

    let bgImg;
  
    switch(resolvedTheme) {
      case 'light':
        bgImg = NavLogo;
        break;
      case 'dark': 
        bgImg = NavLogoDark;
        break;
      default:
        bgImg = 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7'; 
    }
  
    return (
        <div style={{pointerEvents: 'none'}}>
            <Image
              src={bgImg}
              alt='/'
              width='125'
              height='50'
              className='cursor-pointer'
            />
        </div>
    );
}

export default LogoImage;
