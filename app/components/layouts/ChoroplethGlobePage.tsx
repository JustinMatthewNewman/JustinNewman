
import React from 'react';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import { HiArrowSmLeft } from 'react-icons/hi';
import GlobeCard2 from '../science/GlobeCard2';
import GlobeCard from '../science/GlobeCard';
import Image from 'next/image';
import loading from '../../../public/images/loading/loading.gif'

function ChoroplethGlobePage() {

  const Globe = dynamic(() => import('@/app/components/data/ChoroplethGlobeComponent'), {
    ssr: false,
    loading: () => (
      <div className="flex items-center justify-center h-100 mt-12 mb-12">
        <Image src={loading} alt={''}/>
      </div>
    ),
  });

  return (
    <div>
        <div className="container flex flex-col lg:flex-row items-center justify-center relative mt-4">
          <div className="lg:w-2/3 relative">
            <Globe />
          </div>
          <div className="lg:w-1/3">
            <GlobeCard />
          </div>
        </div>
      <GlobeCard2 />
      <div className="flex justify-center py-12">
        <Link href="/science">
          <div className="rounded-full shadow-lg p-4 cursor-pointer hover:scale-110 ease-in duration-300">
            <HiArrowSmLeft size={30} />
          </div>
        </Link>
      </div>
    </div>
  );
}

export default ChoroplethGlobePage;
