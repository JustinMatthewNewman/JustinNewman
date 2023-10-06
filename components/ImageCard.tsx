import React, { useState } from 'react';
import Image from 'next/image';

import header from '../public/assets/skills.png';
import header2 from '../public/assets/datascience-min.png';

import styles from './ImageCard.module.css'; // Import your CSS module here

function ImageCard() {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div className={styles.imageCard} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <div className={styles.imageContainer}>
        <div className={`${styles.image} ${isHovered ? styles.slideOut : ''}`}>
          <Image src={header} alt="Image 1" layout="fill" objectFit="cover" />
          <p className={styles.text}>Text for Image 1</p>
        </div>
        <div className={`${styles.image} ${isHovered ? '' : styles.hidden}`}>
          <Image src={header2} alt="Image 2" layout="fill" objectFit="cover" />
          <p className={styles.text}>Text for Image 2</p>
        </div>
      </div>
    </div>
  );
}

export default ImageCard;
