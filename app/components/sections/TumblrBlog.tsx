"use client";

import { useEffect, useState } from "react";

const iframeStyle = {
  width: '100%',
  height: '110vh',
  border: 'none',
  backgroundColor: 'transparent',
  colorScheme: "normal",
  overflow: 'auto',
  marginTop: -6
};

const centerStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  height: "100vh",
};

export default function TumblrBlog() {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    window.scrollTo(0, 0);
    setLoading(false);
    return () => {
      document.body.style.overflow = "scroll";
    };
  }, []);

  const [isLoading, setLoading] = useState(true);

  return (
    <div style={{ overflow: "hidden" }}>
      {isLoading ? (
        <div style={centerStyle}>
          <div className="container">
      <h2
        style={{
          marginLeft: "12px",
          fontSize: "3rem",
          fontWeight: "700",
          fontFamily:
          "ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji",
        }}
        className="leading-tight"
        >
        Inspire...
      </h2>
    </div>
        </div>
      ) : (
        <iframe
          title="Tumblr Blog"
          src="https://infinitesimallife.tumblr.com/"
          style={iframeStyle}
        />
      )}
    </div>
  );
}
