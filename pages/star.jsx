import React from 'react';
import dynamic from 'next/dynamic';

const star = () => {
  const Star = dynamic(() => import('../components/StarsPage'));
  return (
    <div style={{overflowX: 'hidden'}}>
      <Star/>
    </div>
  );
};

export default star;
