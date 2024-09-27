import React from "react";
export default function ScienceText() {
  return (
    <div className="">
      <h2
        style={{
          marginLeft: "12px",
          fontSize: "2rem",
          fontWeight: "700",
          fontFamily:
          "ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji",
        }}
        className="leading-tight"
        >
        Pushing the boundaries of {" "}
        <span
        className="text-gradient hover:scale-110 ease-in duration-300"

          >
          knowledge
        </span>
        , uncovering new{" "}
        <span className="text-gradient hover:scale-110 ease-in duration-300">
           insights
        </span>
        , and solving complex problems to contribute to a brighter and more informed {" "}
        <span
        className="text-gradient hover:scale-110 ease-in duration-300"
          >
           future
        </span>
        .
      </h2>
    </div>
  );
}

