import React from 'react';
import DeckGL from '@deck.gl/react/typed';
import {HexagonLayer} from '@deck.gl/aggregation-layers/typed';
import type {PickingInfo} from '@deck.gl/core/typed';

type BikeRack = {
  ADDRESS: string;
  SPACES: number;
  COORDINATES: [longitude: number, latitude: number];
};

export default function MapLayer() {
  const layer = new HexagonLayer<BikeRack>({
    id: 'HexagonLayer',
    data: 'https://raw.githubusercontent.com/visgl/deck.gl-data/master/website/sf-bike-parking.json',

    extruded: true,
    getPosition: (d: BikeRack) => d.COORDINATES,
    getColorWeight: (d: BikeRack) => d.SPACES,
    getElevationWeight: (d: BikeRack) => d.SPACES,
    elevationScale: 4,
    radius: 200,
    pickable: true
  });

  return <DeckGL
    initialViewState={{
      longitude: -122.4,
      latitude: 37.74,
      zoom: 11
    }}
    controller
    //getTooltip={({object}: PickingInfo<BikeRack>) => object && `Count: ${object.elevationValue}`}
    layers={[layer]}
  />;
}