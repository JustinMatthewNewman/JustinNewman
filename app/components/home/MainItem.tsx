import React from 'react'
import dynamic from 'next/dynamic';
function MainItem() {
  const DefaultGlobe = dynamic(() => import('../data/DefaultGlobe'), {
    ssr: false,
  });
  return (
    <div className='hidden container max-w-200 md:block'>
      <DefaultGlobe/>
    </div>
  )
}

export default MainItem