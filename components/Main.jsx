import React, { useState } from 'react';
import { TypeAnimation } from 'react-type-animation';


const FloatingText = React.memo(() => {

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: `translate(-50%, -50%)`,
    transition: 'transform 0.3s',
    fontSize: '2em',
    zIndex: 3,
    animation: 'fade-in 4s'  // 2s is the duration of the animation
  };

  return (
    <div
      style={style}
    >
      <TypeAnimation
  sequence={[
    // Same substring at the start will only be typed once, initially
    'Hi, welcome to my website!',
    1000,
    'My name is Justin Newman.',
    1000,
    'I would love to hear from you!',
    1000,
    
  ]}
  speed={50}
  style={{ fontSize: '1em' }}
  repeat={Infinity}
/>
    </div>
  );
});
FloatingText.displayName = 'FloatingText';

const Main = () => {
  return (
    <div id='home' className='w-full h-screen text-center'>
      <FloatingText/>
    </div>
  );
};

export default Main;
