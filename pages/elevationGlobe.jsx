import Image from 'next/image';
import React from 'react';
// import elevationGlobeImg from '../public/assets/soccer.webp';
import { RiRadioButtonFill } from 'react-icons/ri';
import Link from 'next/link';
import dynamic from 'next/dynamic';


const elevationGlobe = () => {

    const Globe = dynamic(() => import('../components/ElevationGlobe'), {
        ssr: false
      });


  return (
    <div className='w-full'>
      <div className='w-screen h-[50vh] relative'>
        {/* <Image
          className='absolute z-1'
          layout='fill'
          objectFit='cover'
          src={elevationGlobeImg}
          alt='/'
        /> */}
        <div className='absolute top-[150px] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-slate z-10 p-2'>
          <h2 className='py-2'>Data Visualization</h2>
          <h3>Counting total bitcoin nodes per country. CS 327 Project</h3>
        </div>
      </div>

      <div style={{marginTop: '-300px', zIndex: 100,
      display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',}}>
        <Globe/>
      </div>
    </div>
  );
};

export default elevationGlobe;
