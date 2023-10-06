import React from 'react';
import dynamic from 'next/dynamic';

const about = () => {
  const About = dynamic(() => import('../components/AboutPage'));
  return (
    <div style={{overflowX: 'hidden'}}>
      <About/>
    </div>
  );
};

export default about;
