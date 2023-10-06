import React from 'react';
import dynamic from 'next/dynamic';


const Projects = () => {
    const Projects = dynamic(() => import('../components/Projects'));

  return (
    <div className='max-w-[1240px] mx-auto px-4 pt-32 flex flex-col items-center'>
        <Projects />
    </div>
  );
};

export default Projects;
