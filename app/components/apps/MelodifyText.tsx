import React from "react";
export default function MelodifyText() {
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
        Empowering individuals to transform their ideas into songs, creating a harmonious music where stories, {" "}
        <span
        className="text-gradient hover:scale-110 ease-in duration-300">
          dreams
        </span>
        {" "}, and voices merge to{" "}
        <span
        className="text-gradient hover:scale-110 ease-in duration-300">
            inspire
        </span>
        {" "}the world through the universal language of{" "}
        <span
        className="text-gradient hover:scale-110 ease-in duration-300">
            music
        </span>
        .
      </h2>
    </div>
  );
}

