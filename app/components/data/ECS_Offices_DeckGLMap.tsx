'use client'
import { useTheme } from 'next-themes'
import Map from 'react-map-gl/maplibre';
import DeckGL from "@deck.gl/react/typed";
import { createRoot } from "react-dom/client";
import { PickingInfo } from '@deck.gl/core/typed';
import React, { useEffect, useState } from "react";
import { ScatterplotLayer } from '@deck.gl/layers/typed';
import locationData from '../../../public/data/ecs-offices.json';


const INITIAL_VIEW_STATE = {
    longitude: -83.01,
    latitude: 33.89,
    bearing: -10,
    minZoom: 1,
    maxZoom: 8,
    pitch: 50,
    zoom: 4.2,
};

const controllerSettings = {
    doubleClickZoom: true, // Enable or disable double-click zoom
    touchRotate: true, // Enable or disable touch-based rotation
    // inertia: 1000,
};

type EcsOfficeDataPoint = {
    position: [longitude: number, latitude: number];
    title: string | undefined;
    popup: Popup | null
  };
  
type Color = [number, number, number];

interface Popup {
    header_text: string;
    images: string[]; // Array of image URLs or paths
    body_text: string; // HTML content for display
    button_text: string; // Text displayed on the button
    button_action: string; // Action type for the button
    permalink: string; // URL for the 'Get Directions' link
}

function buildTooltipHTML(popup: Popup, theme: string) {
    const backgroundColor = theme === "light" ? "#f7f7f7" : "#212121";
    const textColor = theme === "light" ? "#212121" : "#f7f7f7";
    const headerColor = theme === "light" ? "#82b2ff" : "#007acc";
    const borderColor = theme === "light" ? "#e6e6e6" : "#2e2e2e";

    return `
        <div style="
            background-color: ${backgroundColor};
            color: ${textColor};
            padding: 10px;
            border-radius: 8px;
            max-width: 250px;
            font-family: 'Calibri', Arial, sans-serif;
            border: 1px solid ${borderColor};
            margin: -15px; /* Adjust this value to control how much it overflows */
        ">
            <h3 style="margin-top: 0; font-size: 1.2em; color: ${headerColor};">${popup.header_text}</h3>
            <div style="padding: 5px 0;">
                ${popup.body_text}
            </div>
        </div>
    `;
}

function getTooltip(info: any, theme: string | undefined) {
    if (!info.object || !info.object.popup) return null;

    if (theme === undefined) return "";

    return {
        html: buildTooltipHTML(info.object.popup, theme),
    };
}

export default function DeckGLMap({
    data: initialData,
}: {
    data: any
}) {
    let [data2, setData2] = useState(initialData);

    const { resolvedTheme } = useTheme()
    const MAP_STYLE = resolvedTheme === "light"
        ? "https://basemaps.cartocdn.com/gl/positron-gl-style/style.json"
        : "https://basemaps.cartocdn.com/gl/dark-matter-gl-style/style.json";

    //const COLOR = resolvedTheme === "light" ? lightMode : darkMode;

    useEffect(() => {

        if (initialData) {
            setData2(initialData);
            console.log("Location Data input")
            const coordinatesArray = locationData.map((item) => ({
                position: [
                    Number(item.data.location.coordinates[0]),
                    Number(item.data.location.coordinates[1]),
                ],
                title: item.title, // Add the title for the tooltip
                popup: item.data.popup
            }));
            console.log(coordinatesArray);
            setData2(coordinatesArray);

        } else {
            const coordinatesArray = locationData.map((item) => ({
                position: [
                    Number(item.data.location.coordinates[0]),
                    Number(item.data.location.coordinates[1]),
                ],
                title: item.title, // Add the title for the tooltip
                popup: item.data.popup
            }));
            console.log(coordinatesArray);
            setData2(coordinatesArray);
        }
    }, [initialData]);

    const layers = [
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
            lineWidthMinPixels: 10,
            getColor: resolvedTheme === 'light'
                ? [1, 152, 199]
                : [1, 152, 189],
            elevationScale: 3,
            getPosition: (d) => d.position,
            
        })
    ];

    return (
        <div>
            <DeckGL
                layers={layers}
                getTooltip={(info) => getTooltip(info, resolvedTheme)}
                controller={controllerSettings}
                initialViewState={INITIAL_VIEW_STATE}
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
    root.render(<DeckGLMap data={{}} />);
}