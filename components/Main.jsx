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
    'Design.',
    1000,
    'Build.',
    1000,
    'Optimize.',
    1000,
    'Refine.',
    1000,
    'Deploy.',
    1000,
    
  ]}
  speed={50}
  style={{ fontSize: '3rem', fontWeight: '700', fontFamily: 'ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji'}}
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
