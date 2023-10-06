import React, { useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import AboutImg from '../public/assets/justin-code-min.png';
import AboutImgDark from '../public/assets/justin-math-min.jpg';

import { lightTheme, darkTheme } from '../contexts/themes';
import { useTheme } from '../contexts/ThemeContext';

const About = () => {
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    // Here you need to update your styles based on the theme
    document.body.style.backgroundColor = theme.body;
    document.body.style.color = theme.text;
    // add other style updates as needed
  }, [theme]);

  return (
    <div style={{overflowX: 'hidden'}}>
    <div id='about' className='w-full md:h-screen p-2 flex items-center py-16' >
      <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
        <div className='col-span-2'>
          <div className="rounded-lg p-5" style={{ position: 'relative', backgroundColor: `${theme.sidenav}`, color: `${theme.text}`, zIndex: '10' }}>
            <p className='py-2'>
              A dedicated software engineer passionate about creating cutting-edge full-stack applications. With a Bachelor&apos;s Degree in Computer Science and minor in Data Analytics from James Madison University, I have a solid academic foundation that backs up my technical skills. Proficient in Java, JavaScript, Python, and C, I&apos;m comfortable working on both the front-end and back-end, allowing me to view and understand projects holistically.
            </p>
            <p className='py-2'>
              My skill set includes frameworks and databases like React.js, Firebase, DynamoDB, and mySQL, as well as web technologies like HTML and CSS. From secure authentication systems to user-friendly interfaces, my technical arsenal enables me to approach problems innovatively and provide efficient solutions.
            </p>
            <p className='py-2'>- Justin Matthew Newman</p>
          </div>
        </div>
        <div >
          <Image src={theme === lightTheme ? AboutImg : AboutImgDark} className='rounded-xl' alt='/' />
        </div>
      </div>
    </div>
    </div>

  );
};

export default About;
