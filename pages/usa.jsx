import React from 'react';
import dynamic from 'next/dynamic';

const usa = () => {
  const Usa = dynamic(() => import('../components/USAPage'));
  return (
    <div style={{overflowX: 'hidden'}}>
      <Usa/>
    </div>
  );
};

export default usa;
