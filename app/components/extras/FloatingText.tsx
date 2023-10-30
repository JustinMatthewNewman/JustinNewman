"use client"
import React from 'react';

import { TypeAnimation } from 'react-type-animation';

const FloatingText = React.memo(() => {
  const style = {
    // position: 'absolute',
    // top: '50%',
    // left: '50%',
    // transform: `translate(-50%, -50%)`,
    marginTop: '20px',
    fontSize: '2em',
    zIndex: 3,
    animation: 'fade-in 4s', // 2s is the duration of the animation
  };

  return (
    <div style={style}>
      <TypeAnimation
        sequence={[
          'Data.',
          1000,
          'Science.',
          1000,
          'Math.',
          1000,
        ]}
        speed={50}
        style={{
          fontSize: '3rem',
          fontWeight: '700',
          fontFamily:
            'ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji',
        }}
        repeat={Infinity}
      />
    </div>
  );
});

FloatingText.displayName = 'FloatingText';

export default FloatingText;
