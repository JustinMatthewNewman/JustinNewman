import React from 'react';
import dynamic from 'next/dynamic';


const Projects = () => {
    const Projects = dynamic(() => import('../components/Projects'));
    const Analysis = dynamic(() => import('../components/Analysis'));

  return (
    <div className='max-w-[1240px] mx-auto px-4 py-2 pt-32 flex flex-col items-center'>
         <h2 className='py-4'>Solutions</h2>
        <Projects />
        <Analysis/>  
    </div>
  );
};

export default Projects;
