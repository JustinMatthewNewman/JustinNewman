import React from 'react';
import dynamic from 'next/dynamic';

const resume = () => {
  const Resume = dynamic(() => import('../components/Resume'));
  return (
    <div style={{overflowX: 'hidden'}}>
      <Resume/>
    </div>
  );
};

export default resume;
