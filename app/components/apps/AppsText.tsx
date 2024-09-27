import React from "react";
export default function AppsText() {
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
        The nexus of innovation in sports analytics. All new automated{" "}
        <span
        className="text-gradient hover:scale-110 ease-in duration-300" >
          statistical
        </span>
        {" "}team athletic{" "}
        <span
        className="text-gradient hover:scale-110 ease-in duration-300" >
            graphic
        </span>
        {" "}rendering{" "}
        <span
        className="text-gradient hover:scale-110 ease-in duration-300" >
            software
        </span>
        {" "}transforms raw data into captivating visuals, empowering coaches, analysts, and fans to unlock the hidden stories within the game.
      </h2>
    </div>
  );
}

