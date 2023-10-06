import React from 'react';
import dynamic from 'next/dynamic';

const streetview = () => {
  const Streetview = dynamic(() => import('../components/Streetview'));
  return (
    <div style={{overflowX: 'hidden'}}>
      <Streetview/>
    </div>
  );
};

export default streetview;
