import React from "react";
import dynamic from "next/dynamic";

const usacars = () => {
  const UsaCars = dynamic(() => import("../components/UsaCars"), { ssr: false });
  return (
    <div style={{ overflowX: "hidden" }}>
      <UsaCars />
    </div>
  );
};

export default usacars;
