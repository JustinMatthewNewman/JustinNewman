import dynamic from 'next/dynamic';
import React from 'react'


function USACarsPage() {
    const Map = dynamic(() => import('../data/DeckGLMapCars'), { ssr: false });
return (
    <div>
        <Map data={undefined}/>
    </div>
  )
}

export default USACarsPage