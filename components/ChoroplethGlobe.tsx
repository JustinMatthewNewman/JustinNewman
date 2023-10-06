import React, { useEffect, useState, useRef } from 'react';
import Globe from 'react-globe.gl';
import * as d3 from 'd3';
import countriesData from '../public/assets/earth.json';

function ChoroplethGlobe() {
  const globeref = useRef<any>();
  const [hoverD, setHoverD] = useState<object | null>(null); 

  useEffect(() => {
    if (globeref.current) {
      globeref.current.controls({ throttleMs: 100 });
      globeref.current.controls().autoRotate = true;
      globeref.current.controls().autoRotateSpeed = 0.3;
      globeref.current.pointOfView({ altitude: 1.7 }, 5000);
      globeref.current.controls().enableZoom = false;
    }
  }, []);

  const colorScale = d3.scaleSequentialSqrt(d3.interpolateRdYlGn);

  // Add type annotation for 'feat' parameter
  const getVal = (feat: any) => feat.properties.BTC_DEGREE / Math.max(1e5, feat.properties.BTC_DEGREE);

  const maxVal = d3.max(countriesData.features.map(getVal)) || 0;

  colorScale.domain([0, maxVal]);

  // Define the accessor function for polygonLabel
  const polygonLabelAccessor = (obj: any) => {
    const { ADMIN, GDP_MD_EST, BTC_DEGREE } = obj.properties;
    return `
      <b>${ADMIN}</b> <br />
      GDP: $<i>${GDP_MD_EST}</i> M<br/>
      BTC Nodes: <i>${BTC_DEGREE}</i>
    `;
  };

  

  return (
    <div style={{ overflow: 'hidden', width: '100%', height: '100vh' }}>
      <Globe
        ref={globeref}
        globeImageUrl="//cdn.jsdelivr.net/npm/three-globe/example/img/earth-night.jpg"
        backgroundColor="rgba(0,0,0,0)"
        polygonsData={countriesData.features.filter(d => d.properties.ISO_A2 !== 'AQ')}
        polygonAltitude={d => d === hoverD ? 0.12 : 0.05}
        polygonCapColor={d => d === hoverD ? 'steelblue' : colorScale(getVal(d))}
        polygonSideColor={() => 'rgba(0, 100, 0, 0.15)'}
        polygonStrokeColor={() => '#111'}
        polygonLabel={polygonLabelAccessor}
        onPolygonHover={(polygon, prevPolygon) => setHoverD(polygon)}
        polygonsTransitionDuration={300}
      />
    </div>
  );
}

export default ChoroplethGlobe;
