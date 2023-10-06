import React from 'react';
import dynamic from 'next/dynamic';

const more = () => {
  const More = dynamic(() => import('../components/MorePage'));
  return (
    <div style={{overflowX: 'hidden'}}>
      <More/>
    </div>
  );
};

export default more;
