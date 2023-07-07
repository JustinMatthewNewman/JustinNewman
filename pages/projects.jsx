import React from 'react';
import dynamic from 'next/dynamic';


const Projects = () => {
    const Projects = dynamic(() => import('../components/Projects'));
    const Analysis = dynamic(() => import('../components/Analysis'));

  return (
    <div className='max-w-[1240px] mx-auto px-2 py-16 pt-32 flex flex-col items-center'>
        <div className="font-montserrat font-bold w-full">
          <Projects />
          <div className='p-4'>
        <Analysis/>  

          </div>

        </div>    
    </div>
  );
};

export default Projects;
