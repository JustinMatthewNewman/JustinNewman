import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import AboutImg from '../public/assets/profile.png';

const About = () => {
  return (
    <div id='about' className='w-full md:h-screen p-2 flex items-center py-16'>
      <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
        <div className='col-span-2'>
          <p className='uppercase text-xl tracking-widest text-[#2a2a2a]'>
            About
          </p>
          <h2 className='py-4'>Who I Am</h2>
          <p className='py-2 text-gray-600'>
          I&apos;m Justin Newman, a dedicated software engineer passionate about creating cutting-edge full-stack applications. 
          With a Bachelor&apos;s Degree in Computer Science and minor in Data Analytics from James Madison University, 
          I have a solid academic foundation that backs up my technical skills. Proficient in numerous programming languages, 
          including Java, JavaScript, Python, and PHP, I&apos;m comfortable working on both the front-end and back-end development, 
          allowing me to view and understand projects holistically.
          </p>
          <p className='py-2 text-gray-600'>
          My skill set extends beyond coding languages to encompass frameworks and databases like React.js, Firebase, DynamoDB, and mySQL. I am also proficient in web technologies like HTML and CSS. 
          From creating secure authentication systems to building user-friendly interfaces, my technical arsenal allows me to approach problems innovatively and come up with efficient solutions.
          Throughout my academic and professional career, I&apos;ve demonstrated my leadership skills, launching a Web Dev Club at my university and currently working as 
          a Junior Software Engineer with Metalinguist LLC. In this role, I&apos;ve not only contributed to substantial software projects but have also 
          learned to thrive in a fully remote and agile environment, managing tasks effectively and coordinating seamlessly with team members.
          Beyond this, I also hold experience in the world of live productions, where I&apos;ve automated athletic statistics rendering software for Telemedia Productions and James Madison University.
          </p>
          <Link href='/#projects'>
            <p className='py-2 text-gray-600 underline cursor-pointer'>
              Check out some of my latest projects.
            </p>
          </Link>
        </div>
        <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
          <Image src={AboutImg} className='rounded-xl' alt='/' />
        </div>
      </div>
    </div>
  );
};

export default About;
