import React, {useRef, useEffect} from "react";
// @ts-ignore
import {Runtime, Inspector} from "@observablehq/runtime";
// @ts-ignore
import notebook from "@justinmatthewnewman/state-choropleth-gas-prices";

import { useTheme } from "../contexts/ThemeContext";
import { lightTheme, darkTheme } from "../contexts/themes";

function USA() {
  const chartRef = useRef<HTMLDivElement | null>(null); // Initialize with null
  const viewofXRef = useRef<HTMLDivElement | null>(null); // Initialize with null
  const viewofYRef = useRef<HTMLDivElement | null>(null); // Initialize with null
  const viewofBinsRef = useRef<HTMLDivElement | null>(null); // Initialize with null

  const { theme, toggleTheme } = useTheme();


  useEffect(() => {
    const runtime = new Runtime();
    runtime.module(notebook, (name: string) => {
      if (name === "chart") return new Inspector(chartRef.current);
      if (name === "viewof x") return new Inspector(viewofXRef.current);
      if (name === "viewof y") return new Inspector(viewofYRef.current);
      if (name === "viewof bins") return new Inspector(viewofBinsRef.current);


      return ["color"].includes(name);
    });
    return () => runtime.dispose();
  }, []);

  useEffect(() => {
    // Here you need to update your styles based on the theme
    document.body.style.backgroundColor = theme.body;
    document.body.style.color = theme.text;

    // add other style updates as needed
  }, [theme]);
  

  return (
    <>
      <div ref={chartRef} />
      <div ref={viewofXRef} style={{color: 'grey'}} />
      <div ref={viewofYRef} style={{color: 'grey'}}/>
      <div ref={viewofBinsRef} style={{color: 'grey'}} />
    </>
  );
}

export default USA;


