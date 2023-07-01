import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import melodifyImg from '../public/assets/projects/melod.png';
import jmudevImg from '../public/assets/projects/jmudev.png';
import cscodelogoImg from '../public/assets/projects/cscode.png';
import automatedAthleticImg from '../public/assets/projects/code.png';
import ProjectItem from './ProjectItem';

const Projects = () => {
  return (
    <div id='projects' className='w-full'>
      <div className='max-w-[1240px] mx-auto px-2 py-16'>
        <p className='text-xl tracking-widest uppercase text-[#5651e5]'>
          Solutions
        </p>
        <h2 className='py-4'>I&apos;ve developed.</h2>
        <div className='grid md:grid-cols-2 gap-8'>
          <ProjectItem
            title='MelodifyLabs.com'
            backgroundImg={melodifyImg}
            projectUrl='https://melodifylabs.com'
            tech='Next.js, Firebase, Vercel'
          />
          <ProjectItem
            title='JmuDev.com'
            backgroundImg={jmudevImg}
            projectUrl='https://w3stu.cs.jmu.edu/newma4jm/website/index.html'
            tech='HTML, CSS, PHP'
          />
          <ProjectItem
            title='CSCode.org'
            backgroundImg={cscodelogoImg}
            projectUrl='https://cscode.org'
            tech='React, NextAuth, Tailwind CSS'
          />
          <ProjectItem
            title='Automated Athletic Statistics Software'
            backgroundImg={automatedAthleticImg}
            projectUrl='https://github.com/JustinMatthewNewman/Stars'
            tech='Java, Jsoup'
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
