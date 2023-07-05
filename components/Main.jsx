import React, { useState } from 'react';


const FloatingText = React.memo(() => {
  const [hovered, setHovered] = useState(false);

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: `translate(-50%, -50%) scale(${hovered ? 1.2 : 1})`,
    transition: 'transform 0.3s',
    fontSize: '2em',
    cursor: 'pointer',
    zIndex: 3,
    animation: 'fade-in 4s'  // 2s is the duration of the animation
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
  return (
    <div id='home' className='w-full h-screen text-center'>
      <FloatingText/>
    </div>
  );
};

export default Main;
