import React from "react";

function MoreText() {
  return (
    <div className="container flex flex-col md:flex-row items-center justify-center mb-12 gap-4 max-w-[1200px] text-left">
      <h2
        style={{
          marginLeft: "12px",
          fontSize: "3.2rem",
          fontWeight: "700",
          fontFamily:
            "ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji",
        }}
        className="leading-tight"
      >
        Sculpt the product into a {" "}
        <span className="hover:scale-110 ease-in duration-300" >
          masterpiece
        </span>{" "}
        not for glory or {" "}
        <span
          className="hover:scale-110 ease-in duration-300"
          style={{
            backgroundImage:
              "linear-gradient(90deg, rgba(166,155,23,1) 0%, rgba(255,252,185,1) 35%, rgba(227,220,135,1) 100%)",
            WebkitBackgroundClip: "text",
            color: "transparent",
            display: "inline-block",
          }}
        >
          gold
        </span>
        , but to {" "}
        <span
                  className="hover:scale-110 ease-in duration-300"

          style={{
            backgroundImage:
              "linear-gradient(1deg, rgba(64,11,11,1) 0%, rgba(253,29,29,1) 25%, rgba(252,176,69,1) 54%)",
            WebkitBackgroundClip: "text",
            color: "transparent",
            display: "inline-block",
          }}
        >
          ignite
        </span>{" "}
        the light within and {" "}
        <span
                  className="hover:scale-110 ease-in duration-300" >
          illuminate
        </span>{" "}
        the darkness without.
      </h2>
    </div>
  );
}

export default MoreText;
