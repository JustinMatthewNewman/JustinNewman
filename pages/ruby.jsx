import React from 'react';
import dynamic from 'next/dynamic';

const ruby = () => {
  const Ruby = dynamic(() => import('../components/RubyPage'));
  return (
    <div style={{overflowX: 'hidden'}}>
      <Ruby/>
    </div>
  );
};

export default ruby;
