import React from 'react';
import dynamic from 'next/dynamic';

const haskell = () => {
  const Haskell = dynamic(() => import('../components/HaskellPage'));
  return (
    <div style={{overflowX: 'hidden'}}>
      <Haskell/>
    </div>
  );
};

export default haskell;
