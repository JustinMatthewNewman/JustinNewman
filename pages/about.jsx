import React from 'react';
import dynamic from 'next/dynamic';
import { FaCode, FaLaptopCode, FaMusic } from 'react-icons/fa';

const About = () => {
  const About = dynamic(() => import('../components/About'));

  const getCurrentHour = () => {
    const currentHour = new Date().getHours();
    if (currentHour < 12) {
      return 'Morning';
    } else if (currentHour < 18) {
      return 'Afternoon';
    } else {
      return 'Evening';
    }
  };

  const greeting = `Good ${getCurrentHour()}!`;

  return (
    <div className="max-w-[1240px] mx-auto px-2 py-16 pt-32 flex flex-col items-center">
      <section className="relative p-4 bg-gradient-to-t from-blue-400 to-blue-400 rounded-3xl overflow-hidden">
        <div className="flex flex-col md:flex-row items-center justify-center">
          <div className="text-white md:text-left">
            <h2 className="text-3xl font-bold mb-4">{greeting}</h2>
            <p className="text-lg mb-4">
              I&apos;m Justin Newman, a Jr. software engineer and live broadcast technician based in Virginia.
            </p>
            <p className="text-lg mb-4">
              With a Bachelor&apos;s degree in Computer Science from James Madison University, I have a solid foundation in
              various programming languages like Java, JavaScript, Python, and C.
            </p>
            <p className="text-lg mb-4">
              I love crafting interactive web experiences and building innovative solutions. Whether it&apos;s creating a
              full-stack platform like Melodify Labs that transforms text prompts into songs or developing a scalable
              social media application like CSCode.org, I&apos;m always seeking to push the boundaries of what&apos;s possible in
              the digital world.
            </p>
            <p className="text-lg mb-4">
              As an agile developer, I thrive in collaborative environments and excel at utilizing cutting-edge
              technologies to deliver high-quality, user-centered solutions. With experience in Git, React, Next.js, and
              more, I ensure that every project I work on is both visually stunning and technically sound.
            </p>
          </div>
        </div>
        <div className="text-white flex items-center justify-center mt-8">
          <FaCode className="text-4xl mr-4" />
          <FaLaptopCode className="text-4xl mr-4" />
          <FaMusic className="text-4xl" />
        </div>
      </section>
    </div>
  );
};

export default About;
