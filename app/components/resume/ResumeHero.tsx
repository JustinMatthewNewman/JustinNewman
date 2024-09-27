import React from "react";
export default function ResumeHero() {
  return (
    <div className=" container flex flex-col md:flex-row items-center justify-center mt-12 gap-4 max-w-[1200px]">
      
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
       Justin M.{" "}
        <span
        className="text-gradient hover:scale-110 ease-in duration-300" >
          Newman
        </span>
        </h2>

    </div>
  );
}

