"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { HiArrowSmLeft } from "react-icons/hi";

const iframeStyle = {
  width: '100%',
  height: '110vh', // Set the iframe height to the viewport height
  border: 'none',
  background: 'transparent',
};

export default function TumblrBlog() {


  return (
    <div>
      <iframe
        title="Tumblr Blog"
        src="https://infinitesimallife.tumblr.com/"
        style={iframeStyle}
      />
    </div>
  );
}
