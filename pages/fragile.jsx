import React from 'react';
import dynamic from 'next/dynamic';

const fragile = () => {
  const Fragile = dynamic(() => import('../components/FragilePage'));
  return (
    <div style={{overflowX: 'hidden'}}>
      <Fragile/>
    </div>
  );
};

export default fragile;
