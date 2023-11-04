'use client'
import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import Map from 'react-map-gl/maplibre';

import { AmbientLight, PointLight, LightingEffect } from "@deck.gl/core/typed";
import { HexagonLayer } from "@deck.gl/aggregation-layers/typed";
// import {ScatterplotLayer} from '@deck.gl/layers/typed';
import { PickingInfo } from '@deck.gl/core/typed';

import DeckGL from "@deck.gl/react/typed";
import { csv } from "d3-request";
import Image from "next/image";
import Loading from "../../../public/images/loading/loading2.gif";
import { Card, CardBody } from "@nextui-org/react";
import { useTheme } from 'next-themes'

import toast, { Toaster } from 'react-hot-toast';

// Source data CSV
const DATA_URL_0 =
  "https://raw.githubusercontent.com/JustinMatthewNewman/data200_database/371ba005f1dffb6dad0716a9b4d27c77066979f8/file_0.csv"; // eslint-disable-line

  const DATA_URL_1 =
  "https://raw.githubusercontent.com/JustinMatthewNewman/data200_database/371ba005f1dffb6dad0716a9b4d27c77066979f8/file_1.csv"; // eslint-disable-line

  const DATA_URL_2 =
  "https://raw.githubusercontent.com/JustinMatthewNewman/data200_database/371ba005f1dffb6dad0716a9b4d27c77066979f8/file_2.csv"; // eslint-disable-line

  const DATA_URL_3 =
  "https://raw.githubusercontent.com/JustinMatthewNewman/data200_database/371ba005f1dffb6dad0716a9b4d27c77066979f8/file_3.csv"; // eslint-disable-line

  const DATA_URL_4 =
  "https://raw.githubusercontent.com/JustinMatthewNewman/data200_database/371ba005f1dffb6dad0716a9b4d27c77066979f8/file_4.csv"; // eslint-disable-line

  const DATA_URL_5 =
  "https://raw.githubusercontent.com/JustinMatthewNewman/data200_database/371ba005f1dffb6dad0716a9b4d27c77066979f8/file_5.csv"; // eslint-disable-line

  
const ambientLight = new AmbientLight({
  color: [255, 255, 255],
  intensity: 1.0,
});

const pointLight1 = new PointLight({
  color: [255, 255, 255],
  intensity: 0.8,
  position: [-0.144528, 49.739968, 80000],
});

const pointLight2 = new PointLight({
  color: [255, 255, 255],
  intensity: 0.8,
  position: [-3.807751, 54.104682, 8000],
});

const lightingEffect = new LightingEffect({
  ambientLight,
  pointLight1,
  pointLight2,
});

const material = {
  ambient: 0.64,
  diffuse: 0.6,
  shininess: 32,
  specularColor: [51, 51, 51],
};

const INITIAL_VIEW_STATE = {
    longitude: -95.9712,
    latitude: 39.7831,
    zoom: 4,
    pitch: 50,
    bearing: -20,
};


  

type Color = [number, number, number];

// blue
export const colorRange2: Color[] = [
  [1, 152, 189],
  [73, 227, 206],
  [216, 254, 181],
  [254, 237, 177],
  [254, 173, 84],
  [209, 55, 78],
];


// green
export const colorRange: Color[]  = [
  [17, 255, 0],
  [179, 255, 0],
  [255, 247, 0],
  [255, 170, 0],
  [255, 98, 0],
  [199, 0, 0]
]


// purple
// export const colorRange = [
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

  const lat = Number(info.object.position[1]);
  const lng = Number(info.object.position[0]);
  const count = info.object.points && Array.isArray(info.object.points) ? info.object.points.length : 0;

  const formattedLat = Number.isFinite(lat) ? lat.toFixed(6) : "N/A";
  const formattedLng = Number.isFinite(lng) ? lng.toFixed(6) : "N/A";

  return `\
    latitude: ${formattedLat}
    longitude: ${formattedLng}
    ${count} Wrecks`;
}


/* eslint-disable react/no-deprecated */
export default function DeckGLMapCars({
  data: initialData,
  radius = 1500,
  upperPercentile = 100,
  coverage = 1,
}: {
  data: any
  radius?: number;
  upperPercentile?: number;
  coverage?: number;
}) {
  let [data, setData] = useState(initialData);
  let [data1, setData1] = useState(initialData);
  let [data2, setData2] = useState(initialData);
  let [data3, setData3] = useState(initialData);
  let [data4, setData4] = useState(initialData);
  let [data5, setData5] = useState(initialData);

  const [loading, setLoading] = useState(true);




  const { resolvedTheme } = useTheme()

  const MAP_STYLE = resolvedTheme === 'light' ? "https://basemaps.cartocdn.com/gl/positron-gl-style/style.json" : "https://basemaps.cartocdn.com/gl/dark-matter-gl-style/style.json";
  const COLOR = resolvedTheme === 'light' ? colorRange : colorRange2;
  let sem = 0;
  useEffect(() => {
    if (initialData) {
      // If initialData is provided, update the data state for all data sets
      setData(initialData);
      setData1(initialData);
      setData2(initialData);
      setData3(initialData);
      setData4(initialData);
      setData5(initialData);
    } else {
      const dataUrls = [DATA_URL_0, DATA_URL_1, DATA_URL_2, DATA_URL_3, DATA_URL_4, DATA_URL_5];
      const fetchPromises: Promise<any>[] = [];

  
      // Fetch data from all the data URLs and store the promises
      dataUrls.forEach((url, index) => {
        fetchPromises.push(
          new Promise((resolve) => {
            csv(url, (error, response) => {
              if (!error) {
                const parsedData = response.map((d) => [
                  Number(d.End_Lng),
                  Number(d.End_Lat),
                ]);
                resolve({ index, data: parsedData });
              } else {
                resolve({ index, data: [] }); // Handle errors gracefully
              }
            });
          })
        );
      });
  
      // Wait for all promises to resolve and merge the data
      Promise.all(fetchPromises).then((results) => {
        const mergedData = results.reduce((acc, { index, data }) => {
          if (index === 0) {
            return data;
          } else {
            return acc.concat(data);
          }
        }, []);
  
        // Set the merged data to the state
        setData(mergedData);
        setLoading(false);
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
            duration: 7000,
            position: 'bottom-center',
            icon: '🎉',
          });
          sem++
        }
      });
    }
  }, [initialData, sem]);
  
  console.log(data);
  const layers = [
    new HexagonLayer({
      id: "heatmap",
      colorRange: COLOR,
      coverage,
      data,
      elevationRange: [0, 3000],
      elevationScale: data && data.length ? 300 : 0,
      extruded: true,
      getPosition: (d) => d,
      pickable: true,
      radius,
      upperPercentile,
      // material,
      opacity: 0.2,
      transitions: {
        elevationScale: 3000,
      },
    }),

  ];
  const controllerSettings = {
    doubleClickZoom: true, // Enable or disable double-click zoom
    touchRotate: true, // Enable or disable touch-based rotation
    // inertia: 1000,
  };

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
  {loading ? (
    <div>
        <div className="flex justify-center items-center h-screen">
          <div>
            <Card className="max-w-md">
              <CardBody>
                <p>Fetching over 1.5 Million entries.</p>
                <p className="text-center">Please wait...</p>

              </CardBody>
            </Card>
          </div>
        </div>

         <Image
          style={{ filter: "blur(4px)", opacity: 0.3 }}
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src={Loading}
          alt="/"
        />
    </div>
  ) : (
    <DeckGL
      layers={layers}
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
  )}
</div>
  );
}

export function renderToDOM(container: HTMLElement) {
  const root = createRoot(container);
  root.render(<DeckGLMapCars data={{}}/>);

  csv(DATA_URL_0, (error, response) => {
    if (!error) {
      const data = response.map((d) => [Number(d.Long), Number(d.Lat)]);
      console.log(data);
      root.render(<DeckGLMapCars data={data} />);
    }
  });
}