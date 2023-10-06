import React from "react";
import dynamic from "next/dynamic";

const map = () => {
  const Map = dynamic(() => import("../components/DeckGLMap"), { ssr: false });
  return (
    <div style={{ overflowX: "hidden" }}>
      <Map />
    </div>
  );
};

export default map;
