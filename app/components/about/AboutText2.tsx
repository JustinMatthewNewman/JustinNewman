import React from "react";

function AboutText2() {
  return (
    <div>
      <h2
        style={{
          marginLeft: "12px",
          fontSize: "1.8rem",
          fontWeight: "700",
          fontFamily:
          "ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji",
        }}
        className="leading-tight"
        >
        Unlocking the power of big data to drive{" "}
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
          insights
        </span>
        ,{" "}
        <span
        className="hover:scale-110 ease-in duration-300"
          style={{
            backgroundImage:
            "linear-gradient(45deg, rgba(51, 173, 255,1) 0%, rgba(51, 160, 255,1) 50%, rgba(68, 157, 235,1) 100%)",
            WebkitBackgroundClip: "text",
            color: "transparent",
            display: "inline-block",
          }}
          >
          innovation
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
          informed 
        </span>
        {" "}decision-making.
      </h2>
    </div>
  );
}

export default AboutText2;
