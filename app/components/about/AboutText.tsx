import React from "react";

function AboutText() {
  return (
    <div>
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
        Quality full stack solutions,{" "}
        <span
        className="hover:scale-110 ease-in duration-300"
          style={{
            backgroundImage:
            "linear-gradient(240deg, rgba(2, 141, 222,1) 0%, rgba(2, 112, 222,1) 27%, rgba(2, 112, 222,1) 100%)",
            WebkitBackgroundClip: "text",
            color: "transparent",
            display: "inline-block",
          }}
          >
          efficient
        </span>
        ,{" "}
        <span
        className="hover:scale-110 ease-in duration-300"
          style={{
            backgroundImage:
            "linear-gradient(145deg, rgba(51, 173, 255,1) 0%, rgba(51, 160, 255,1) 50%, rgba(68, 157, 235,1) 100%)",
            WebkitBackgroundClip: "text",
            color: "transparent",
            display: "inline-block",
          }}
          >
          correct
        </span>
        , and{" "}
        <span
        className="hover:scale-110 ease-in duration-300"
          style={{
            backgroundImage:
            "linear-gradient(345deg, rgba(51, 173, 255,1) 0%, rgba(51, 160, 255,1) 50%, rgba(68, 157, 235,1) 100%)",
            WebkitBackgroundClip: "text",
            color: "transparent",
            display: "inline-block",
          }}
          >
          optimal
        </span>
        .
      </h2>
    </div>
  );
}

export default AboutText;
