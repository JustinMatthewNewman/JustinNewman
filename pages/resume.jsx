import React, { useEffect } from 'react';
import dynamic from 'next/dynamic';
import { lightTheme, darkTheme } from '../contexts/themes';
import { useTheme } from '../contexts/ThemeContext';

const Resume = () => {
  const Analysis = dynamic(() => import('../components/Analysis'));
  const { theme, toggleTheme } = useTheme();
  useEffect(() => {
    // Update body styles
    document.body.style.backgroundColor = theme.body;
    document.body.style.color = theme.text;
    
  }, [theme]);
  
  return (
    <div className='max-w-[1240px] mx-auto px-2 py-16 pt-32 flex flex-col items-center'>
        <div className="font-montserrat font-bold w-full">
            {/* <div className="w-full md:w-3/4 mx-auto">
              <h2 style={{  color: `${theme.text}` }} className="text-xl md:text-2xl font-semibold mb-8 text-left">Documents</h2>                  
            </div> */}
        <Analysis/>
        </div>    
    </div>
  );
};

export default Resume;
