import dynamic from 'next/dynamic';
import React from 'react'


function DCMapPage() {
    const Map = dynamic(() => import('../data/DeckGLMapDC'), { ssr: false });
return (
    <div>
        <Map data={undefined}/>
    </div>
  )
}

export default DCMapPage