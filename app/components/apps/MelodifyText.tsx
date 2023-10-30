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
        className="hover:scale-110 ease-in duration-300"
          style={{
            backgroundImage:
            "linear-gradient(240deg, rgba(122,230,212,1) 0%, rgba(38,240,227,1) 27%, rgba(0,212,255,1) 100%)",
            WebkitBackgroundClip: "text",
            color: "transparent",
            display: "inline-block",
          }}
          >
          dreams
        </span>
        {" "}, and voices merge to{" "}
        <span
        className="hover:scale-110 ease-in duration-300"
          style={{
            backgroundImage:
            "linear-gradient(327deg, rgba(122,230,222,1) 0%, rgba(92,38,240,1) 50%, rgba(0,181,255,1) 100%)",
            WebkitBackgroundClip: "text",
            color: "transparent",
            display: "inline-block",
          }}
          >
            inspire
        </span>
        {" "}the world through the universal language of{" "}
        <span
        className="hover:scale-110 ease-in duration-300"
          style={{
            backgroundImage:
            "linear-gradient(345deg, rgba(230,122,122,1) 0%, rgba(139,38,240,1) 50%, rgba(255,0,249,1) 100%)",
            WebkitBackgroundClip: "text",
            color: "transparent",
            display: "inline-block",
          }}
          >
            music
        </span>
        .
      </h2>
    </div>
  );
}

