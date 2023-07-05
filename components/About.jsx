import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import AboutImg from '../public/assets/profile.png';

const About = () => {
  return (
    <div id='about' className='w-full md:h-screen p-2 flex items-center py-16'>
      <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
        <div className='col-span-2'>
          <div className="bg-white bg-opacity-40 rounded-lg backdrop-blur-lg p-5">
            <p className='py-2 text-gray-600'>
              A dedicated software engineer passionate about creating cutting-edge full-stack applications. With a Bachelor&apos;s Degree in Computer Science and minor in Data Analytics from James Madison University, I have a solid academic foundation that backs up my technical skills. Proficient in Java, JavaScript, Python, and C, I&apos;m comfortable working on both the front-end and back-end, allowing me to view and understand projects holistically.
            </p>
            <p className='py-2 text-gray-600'>
              My skill set includes frameworks and databases like React.js, Firebase, DynamoDB, and mySQL, as well as web technologies like HTML and CSS. From secure authentication systems to user-friendly interfaces, my technical arsenal enables me to approach problems innovatively and provide efficient solutions.
            </p>
            <p className='py-2 text-gray-600'>- Justin Matthew Newman</p>
          </div>
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
