import React from "react";
import dynamic from "next/dynamic";

const crimedata = () => {
  const DC = dynamic(() => import("../components/CrimeData"), { ssr: false });
  return (
    <div style={{ overflowX: "hidden" }}>
      <DC />
    </div>
  );
};

export default crimedata;
