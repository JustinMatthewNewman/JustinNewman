import React from "react";
import dynamic from "next/dynamic";

const mapcars = () => {
  const MapCars = dynamic(() => import("../components/DeckGLMapCars"), { ssr: false });
  return (
    <div style={{ overflowX: "hidden" }}>
      <MapCars />
    </div>
  );
};

export default mapcars;
