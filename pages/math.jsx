import React from 'react';
import dynamic from 'next/dynamic';

const math = () => {
  const Math = dynamic(() => import('../components/MathPage'));
  return (
    <div style={{overflowX: 'hidden'}}>
      <Math/>
    </div>
  );
};

export default math;
