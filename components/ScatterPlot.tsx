// import React, { useEffect } from "react";

// import Plot from 'react-plotly.js';
// import { useTheme } from "../contexts/ThemeContext";
// import { lightTheme, darkTheme } from "../contexts/themes";



// function ScatterPlot() {

//     const { theme, toggleTheme } = useTheme();
//     useEffect(() => {
//       // Here you need to update your styles based on the theme
//       document.body.style.backgroundColor = theme.body;
//       document.body.style.color = theme.text;
//       // add other style updates as needed
//     }, [theme]);

//   return (
//     <div>
//         <Plot
//             data={[
//               {
//                 x: [1, 2, 3],
//                 y: [2, 6, 3],
//                 z: [9, 4, 7],
//                 type: 'scatter3d',
//                 // mode: 'lines+markers',
//                 marker: {color: 'blue'},
//               },
//               {type: 'scatter3d', x: [1, 2, 3], y: [2, 5, 3], z: [9, 4, 7],},
//             ]}
//             layout={ {plot_bgcolor:'rgba(0,0,0,0)', paper_bgcolor:'rgba(0,0,0,0)', title: '3D Scatter Plot'} }
//           />
//     </div>
//   )
// }

// export default ScatterPlot
