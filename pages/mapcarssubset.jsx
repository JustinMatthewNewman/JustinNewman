import React from "react";
import dynamic from "next/dynamic";

const mapcarssubset = () => {
  const MapCars = dynamic(() => import("../components/DeckGLMapCars_subset"), { ssr: false });
  return (
    <div style={{ overflowX: "hidden" }}>
      <MapCars />
    </div>
  );
};

export default mapcarssubset;
