import React from "react";

export default function MathText() {
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
        Exploring the beauty and depth of mathematics through the lens of{" "}
        <span className="text-gradient hover:scale-110 ease-in duration-300" >
          calculus
        </span>
        , where{" "}
        <span className="text-gradient hover:scale-110 ease-in duration-300" >
           precision
        </span>
        {" "}meets{" "}
        <span className="text-gradient hover:scale-110 ease-in duration-300" >
           elegance
        </span>
        .
      </h2>
    </div>
  );
}


