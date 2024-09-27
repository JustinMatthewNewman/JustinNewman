import React from "react";

export default function MathText2() {
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
        Discover the fundamental building blocks of computer science and problem-solving with {" "}
        <span className="text-gradient hover:scale-110 ease-in duration-300" >
          Discrete Structures
        </span>
        , the mathematical backbone of {" "}
        <span className="text-gradient hover:scale-110 ease-in duration-300"  >
          algorithms
        </span>
        {" "}and{" "}
        <span className="text-gradient hover:scale-110 ease-in duration-300" >
          data analysis
        </span>
        .
      </h2>
    </div>
  );
}
