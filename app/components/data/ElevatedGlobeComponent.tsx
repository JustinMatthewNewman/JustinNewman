'use client'
import React, { useEffect, useState, useRef } from 'react';
import Globe from 'react-globe.gl';
import countriesData from '../../../public/data/earth.json';
import { useTheme } from 'next-themes'

function ElevatedGlobeComponent() {
  const globeref = useRef<any>();
  const [altitude, setAltitude] = useState(0.1);
  const [transitionDuration, setTransitionDuration] = useState(1000);

  const { resolvedTheme } = useTheme()


  useEffect(() => {
    if (globeref.current) {
      globeref.current.controls().autoRotate = true;
      globeref.current.controls().autoRotateSpeed = 0.3;
      globeref.current.pointOfView({ altitude: 3.14 }, 5000);
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
        globeImageUrl={resolvedTheme === 'dark' ? "//unpkg.com/three-globe/example/img/earth-dark.jpg" : "//unpkg.com/three-globe/example/img/earth-blue-marble.jpg"}
        polygonsData={countriesData.features.filter(
          (d) => d.properties.ISO_A2 !== 'AQ'
        )}
        polygonAltitude={(d: any) => Math.max(0.1, Math.round(+d.properties.BTC_DEGREE) * 7e-6)}
        polygonCapColor={() => resolvedTheme === 'dark' ? 'rgba(219, 44, 213, 0.4)' : "rgba(15, 189, 90, 0.5)"}
        polygonSideColor={() => resolvedTheme === 'dark' ? 'rgba(140, 31, 136, 0.4)' : "rgba(20, 74, 26, 0.2)"}
        polygonLabel={polygonLabelAccessor}
        polygonsTransitionDuration={transitionDuration}
        backgroundColor="rgba(0,0,0,0)"
        atmosphereColor={resolvedTheme === 'dark' ? 'rgba(219, 44, 213, 0.4)' : "rgba(0, 189, 255, 0.5)"}
        polygonStrokeColor={() => '#fff'}

      />
    </div>
  );
}

export default ElevatedGlobeComponent;
