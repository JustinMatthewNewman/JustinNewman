'use client'
import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import Map from 'react-map-gl/maplibre';
// import { AmbientLight, PointLight, LightingEffect } from "@deck.gl/core";
import { HexagonLayer } from "@deck.gl/aggregation-layers/typed";
import {ScatterplotLayer} from '@deck.gl/layers/typed';
import { PickingInfo } from '@deck.gl/core/typed';
import { useTheme } from 'next-themes'

import DeckGL from "@deck.gl/react/typed";
import { csv } from "d3-request";

import toast, { Toaster } from 'react-hot-toast';

// Source data CSV
const DATA_URL =
  "https://raw.githubusercontent.com/JustinMatthewNewman/geoJson/main/dc_crimes.csv"; // eslint-disable-line

  const DATA_URL2 =
  "https://raw.githubusercontent.com/JustinMatthewNewman/geoJson/main/dc_schools.csv"; // eslint-disable-line
  
// const ambientLight = new AmbientLight({
//   color: [255, 255, 255],
//   intensity: 1.0,
// });

// const pointLight1 = new PointLight({
//   color: [255, 255, 255],
//   intensity: 0.8,
//   position: [-0.144528, 49.739968, 80000],
// });

// const pointLight2 = new PointLight({
//   color: [255, 255, 255],
//   intensity: 0.8,
//   position: [-3.807751, 54.104682, 8000],
// });

// const lightingEffect = new LightingEffect({
//   ambientLight,
//   pointLight1,
//   pointLight2,
// });

// const material = {
//   ambient: 0.64,
//   diffuse: 0.6,
//   shininess: 32,
//   specularColor: [51, 51, 51],
// };

const INITIAL_VIEW_STATE = {
  longitude: -77.01,
  latitude: 38.89,
  zoom: 12,
  pitch: 50,
  bearing: 20,
  minZoom: 11,
  maxZoom: 15,
};

const controllerSettings = {
  doubleClickZoom: true, // Enable or disable double-click zoom
  touchRotate: true, // Enable or disable touch-based rotation
  // inertia: 1000,
};
  

type DataPoint = [longitude: number, latitude: number];
type Color = [number, number, number];

const colorRange2: Color[] = [
  [1, 152, 189],
  [73, 227, 206],
  [216, 254, 181],
  [254, 237, 177],
  [254, 173, 84],
  [209, 55, 78],
];

const colorRange: Color[] = [
  [17, 255, 0],
  [179, 255, 0],
  [255, 247, 0],
  [255, 170, 0],
  [255, 98, 0],
  [199, 0, 0],
];



// purple
// export const colorRange2 = [
//   [255, 0, 255],   // Magenta
//   [128, 0, 128],   // Purple
//   [192, 0, 192],   // Darker Magenta
//   [160, 32, 240],  // Bright Purple
//   [224, 0, 224],   // Dark Magenta
//   [128, 0, 160],   // Dark Purple
// ];


function getTooltip(info: PickingInfo): string | null {

  if (!info.object || !info.object.position) {
    return null;
  }

  console.log(info)

  const lat = Number(info.object.position[1]);
  const lng = Number(info.object.position[0]);
  const count = info.object?.points.length || 0;

  const formattedLat = Number.isFinite(lat) ? lat.toFixed(6) : "N/A";
  const formattedLng = Number.isFinite(lng) ? lng.toFixed(6) : "N/A";

  return `
    latitude: ${formattedLat} 
    longitude: ${formattedLng}
    ${count} Crimes
  `;

}


/* eslint-disable react/no-deprecated */
export default function DeckGLMapDC({
  data: initialData,
  radius = 20,
  upperPercentile = 100,
  coverage = 1,
}: {
  data: any
  radius?: number;
  upperPercentile?: number;
  coverage?: number;
}) {
  let [data, setData] = useState(initialData);
  let [data2, setData2] = useState(initialData);

  const { resolvedTheme } = useTheme()
  const MAP_STYLE = resolvedTheme === "light" ? "https://basemaps.cartocdn.com/gl/positron-gl-style/style.json" : "https://basemaps.cartocdn.com/gl/dark-matter-gl-style/style.json";
  const COLOR = resolvedTheme === "light" ? colorRange2 : colorRange;
  let sem = 0;

  useEffect(() => {
    if (initialData) {
      // If initialData is provided, update the data state
      setData(initialData);
      setData2(initialData);

    } else {
      // Fetch data from DATA_URL
      csv(DATA_URL, (error, response) => {
        if (!error) {
          const parsedData: DataPoint[] = response.map((d) => [
            Number(d.Long),
            Number(d.Lat),
          ]);
          setData(parsedData);
        }
      });

      // Fetch data from DATA_URL
      csv(DATA_URL2, (error, response) => {
        if (!error) {
          const parsedData = response.map((d) => [
            Number(d.Long),
            Number(d.Lat),
          ]);
          setData2(parsedData);
        }
      });

      if (sem < 1) {

        toast((t) => (
          <span>
             <b>NEW:</b> Zoom in and tap a roadway on the map to launch Google Streetview.
            {/* <button onClick={() => toast.dismiss(t.id)}>
              Dismiss
            </button> */}
          </span>
        ),
        {
          duration: 9000,
          position: 'bottom-center',
          icon: '🎉',
        });
        sem++
      }

    }
  }, [initialData, sem]);
  console.log(data);
  const layers = [
    new HexagonLayer<DataPoint>({
      id: "heatmap",
      colorRange: COLOR,
      coverage,
      data,
      elevationRange: [0, 3000],
      elevationScale: data && data.length ? 4 : 0,
      extruded: true,
      getPosition: (d: DataPoint) => d,
      pickable: true,
      radius,
      upperPercentile,
      // material,
      opacity: 0.2,
      transitions: {
        elevationScale: 3000,
      },
    }),

    new ScatterplotLayer({
      data: data2,
      upperPercentile: 99,
      pickable: true,
      opacity: 0.8,
      stroked: true,
      filled: false,
      radiusScale: 100,
      radiusMinPixels: 1,
      radiusMaxPixels: 100,
      lineWidthMinPixels: 1,
      getColor: resolvedTheme === 'light' ? [255, 25, 20] : [252, 89, 252],
      elevationScale: 3,
      getPosition: (d) => [d[0], d[1]],
      // onHover: ({ object, x, y }) => {
      //   const tooltip = `${object.centroid.join(", ")}\nCount: ${
      //     object.points.length
      //   }`;
      // }
    })
  ];

  return (
<div>
<Toaster
  toastOptions={{
    className: '',
    style: {
      borderRadius: '10px',
      background: '#333',
      color: '#fff',
    },
  }}
  />
    <DeckGL
      layers={layers}
      // effects={[lightingEffect]}
      initialViewState={INITIAL_VIEW_STATE}
      controller={controllerSettings}
      getTooltip={getTooltip}
      onClick={(info, event) => {
        if (info && info.coordinate) {
          const lat = info.coordinate[1];
          const long = info.coordinate[0];
          window.location.href = `/science/StreetView?lat=${lat}&lng=${long}`;
        }
      }}
      >
      <Map
        reuseMaps
        mapStyle={MAP_STYLE}
        />
    </DeckGL>
        </div>
  );
}

export function renderToDOM(container: HTMLElement) {
  const root = createRoot(container);
  root.render(<DeckGLMapDC data={{}} />);

  csv(DATA_URL, (error, response) => {
    if (!error) {
      const data = response.map((d) => [Number(d.Long), Number(d.Lat)]);
      console.log(data);
      root.render(<DeckGLMapDC data={data} />);
    }
  });
}