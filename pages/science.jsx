import React from "react";
import Image from "next/image";
import Link from 'next/link';

import styles from "../styles/Science.module.css";

import img1 from "../public/assets/img/j1-min.png";
import img2 from "../public/assets/img/js2-min.jpg";
import img3 from "../public/assets/img/dc-min.png";
import img4 from "../public/assets/img/js4-min.jpg";

import img5 from "../public/assets/img/js5.png";
import img6 from "../public/assets/img/js6.png";
import img7 from "../public/assets/img/math268_1.png";
import img8 from "../public/assets/img/va.png";

import loading from "../public/assets/loading.gif";

import { TypeAnimation } from "react-type-animation";
import { Spacer } from "@nextui-org/react";

// const FloatingText = React.memo(() => {
//   const style = {
//     position: "absolute",
//     top: "200px",
//     left: "50%",
//     transform: `translate(-50%, -50%)`,
//     transition: "transform 0.3s",
//     fontSize: "2em",
//     zIndex: 3,
//     animation: "fade-in 4s", // 2s is the duration of the animation
//     lineHeight: "1",
//     width: '90%',
//     alignItems: "right",
//   };

//   return (
//     <div style={style}>
//       <TypeAnimation
//         sequence={[
//           // Same substring at the start will only be typed once, initially
//           "Unique Solutions.",
//           1000,
//           "Machine Learning.",
//           1000,
//           "Regression Analysis.",
//           1000,
//           "Data in 3D Space.",
//           1000,
//           "Innovation for the Future.",
//           1000,
//         ]}
//         speed={50}
//         style={{
//           fontSize: "2rem",
//           fontWeight: "700",
//           fontFamily:
//             "ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji",
//         }}
//         repeat={Infinity}
//       />
//     </div>
//   );
// });
// FloatingText.displayName = "FloatingText";

const science = () => {
  return (
    <div className={styles.teamContainer}>
      {/* <FloatingText /> */}
      <Spacer y={2} />

      {/* ROW 1 */}
      <div
        className="flex-col lg:flex-row items-center justify-center"
        style={{ marginTop: "64px", display: "flex" }}
      >
        <div className={styles.imgLink}>
          <Link href="/choroplethGlobe">
            <Image src={img1} className={styles.image} alt="slowInternet"/>
          </Link>
        </div>

        <div className={styles.imgLink}>
          <Link href="/elevationGlobe">
            <Image src={img2} className={styles.image} alt="slowInternet"/>
          </Link>
        </div>

        <div className={styles.imgLink}>
          <Link href="/crimedata" >
            <Image src={img3} className={styles.image} alt="slowInternet"/>
          </Link>
        </div>

        <div className={styles.imgLink}>
          <Link href="/usa" >
            <Image src={img4} className={styles.image} alt="slowInternet"/>
          </Link>
        </div>
      </div>

      {/* ROW 2 */}
      <div
        className="flex-col lg:flex-row items-center justify-center"
        style={{ display: "flex" }}
      >
        <div className={styles.imgLink}>
          <Link href="/usacars" target="_blank" rel="noopener noreferrer">
            <Image src={img5} className={styles.image} alt="slowInternet"  />
          </Link>
        </div>

        <div className={styles.imgLink}>
          <Link href="https://observablehq.com/@justinmatthewnewman/most-dangerous-spots-in-boston" target="_blank" rel="noopener noreferrer">
            <Image src={img6} className={styles.image} alt="slowInternet"  />
          </Link>
        </div>

        <div className={styles.imgLink}>
          <Link href="/assets/DataVisualization_R.pdf" target="_blank" rel="noopener noreferrer">
            <Image src={img7} className={styles.image} alt="slowInternet"  />
          </Link>
        </div>

        <div className={styles.imgLink}>
          <Link href="https://observablehq.com/@justinmatthewnewman/mapbox-with-deck-gl" target="_blank" rel="noopener noreferrer" >
            <Image src={img8} className={styles.image} alt="slowInternet"  />
          </Link>
        </div>
      </div>
      <Spacer y={2} />

      <ul className={styles.nav}>
        <li>
        <Link href='/resume'>MORE</Link>
        </li>
      </ul>
    </div>
  );
};

export default science;
