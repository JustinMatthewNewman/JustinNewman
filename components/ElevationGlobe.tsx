import React, { useEffect, useState, useRef } from 'react';
import Globe from 'react-globe.gl';
import countriesData from '../public/assets/earth.json';

function ElevationGlobe() {
  const globeref = useRef<any>();
  const [altitude, setAltitude] = useState(0.1);
  const [transitionDuration, setTransitionDuration] = useState(1000);


  useEffect(() => {
    if (globeref.current) {
      globeref.current.controls().autoRotate = true;
      globeref.current.controls().autoRotateSpeed = 0.3;
      globeref.current.pointOfView({ altitude: 4 }, 5000);
      globeref.current.controls().enableZoom = false;

    }
  }, []);

  const polygonLabelAccessor = (obj: any) => {
    const { ADMIN, GDP_MD_EST, BTC_DEGREE } = obj.properties;
    return `
      <b>${ADMIN}</b> <br />
      GDP: $<i>${GDP_MD_EST}</i> M<br/>
      BTC Nodes: <i>${BTC_DEGREE}</i>
    `;
  };

  return (
    <div className="w-full h-screen flex items-center justify-center overflow-hidden" style={{ width: '100%', height: '100%' }}>
      <Globe
        ref={globeref}
        height={1000}
        width={1000}
        globeImageUrl="//unpkg.com/three-globe/example/img/earth-dark.jpg"
        polygonsData={countriesData.features.filter(
          (d) => d.properties.ISO_A2 !== 'AQ'
        )}
        polygonAltitude={(d: any) => Math.max(0.1, Math.round(+d.properties.BTC_DEGREE) * 7e-6)}
        polygonCapColor={() => 'rgba(0, 200, 0, 0.6)'}
        polygonSideColor={() => 'rgba(0, 100, 0, 0.15)'}
        polygonLabel={polygonLabelAccessor}
        polygonsTransitionDuration={transitionDuration}
        backgroundColor="rgba(0,0,0,0)"
      />
    </div>
  );
}

export default ElevationGlobe;
