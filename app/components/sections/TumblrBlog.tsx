"use client";

import { useEffect, useState } from "react";

const iframeStyle = {
  width: '100%',
  height: '110vh', // Set the iframe height to the viewport height
  border: 'none',
  background: 'transparent',
};

export default function TumblrBlog() {
  const [mounted, setMounted] = useState(false)
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null
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
