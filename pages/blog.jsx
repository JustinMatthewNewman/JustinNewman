import React from "react";
import dynamic from "next/dynamic";

const blog = () => {
  const Blog = dynamic(() => import("../components/Blog"), { ssr: false });
  return (
    <div style={{ overflowX: "hidden" }}>
      <Blog />
    </div>
  );
};

export default blog;
