import React, { useState, useEffect } from 'react';
import { Parallax } from 'react-parallax';
import Image from 'next/image';

const FloatingText = React.memo(() => {
  const [hovered, setHovered] = useState(false);

  const style = {
    position: 'absolute',
    top: '40%',
    left: '50%',
    transform: `translate(-50%, -50%) scale(${hovered ? 1.2 : 1})`,
    transition: 'transform 0.3s',
    fontSize: '2em',
    cursor: 'pointer',
    zIndex: 3,
    animation: 'fade-in 4s',
    color: '#404040'
  };

  return (
    <div
      style={style}
      onMouseOver={() => setHovered(true)}
      onMouseOut={() => setHovered(false)}
    >
      Hi, I&apos;m Justin.
    </div>
  );
});
FloatingText.displayName = 'FloatingText';

const Main = () => {
  const [scrollY, setScrollY] = useState(0);

  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }
  }, []);

  return (
    <div id='home' className='w-full h-screen relative overflow-hidden'>
      <Parallax
        bgImage='/assets/bg2.jpg'
        bgImageAlt='Background Image'
        strength={500}
        style={{ height: '100vh' }}
        bgImageStyle={{
          position: 'absolute',
          top: '10%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '100%',
          objectFit: 'cover',
          opacity: 0.4
        }}
      >
        <div style={{ height: '100vh' }}>
          <div className='absolute w-full h-full'>
            <Parallax
              bgImage='/assets/justin_flip.png'
              bgImageAlt='Justin Flip'
              strength={1000}
              style={{ width: '100%', height: '100%' }}
              bgImageStyle={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                width: 'auto',
                height: '60%',
                objectFit: 'cover',          
                transform: `translate(-50%, -50%)`,
                transition: 'transform 0.3s',
                cursor: 'pointer',
                animation: 'fade-in 4s',
              }}
            >
              <div
                className='absolute w-full h-full'
                style={{
                  opacity: typeof window !== 'undefined' ? scrollY / (window.innerHeight * 0.8) : 0,
                  transition: 'opacity 0.5s',
                }}
              />
            </Parallax>
          </div>
          <FloatingText />
        </div>
      </Parallax>
    </div>
  );
};

export default Main;
