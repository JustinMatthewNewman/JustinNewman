import Image from 'next/image';
import Link from 'next/link';
import { useTheme } from '../contexts/ThemeContext';
import React, { useState, useEffect } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { FaLinkedinIn } from 'react-icons/fa';
import NavLogo from '../public/assets/navLogo.png'
import NavLogoDark from '../public/assets/justin_white.png'
import { FaSun, FaMoon } from 'react-icons/fa';
import { lightTheme, darkTheme } from '../contexts/themes';
import { Button } from "@nextui-org/react";


const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    // Here you need to update your styles based on the theme
    document.body.style.backgroundColor = theme.body;
    document.body.style.color = theme.text;
    // add other style updates as needed
  }, [theme]);
  // const [position, setPosition] = useState('fixed')
  // const router = useRouter();

  // useEffect(() => {
  //   if (
  //     router.asPath === '/property' ||
  //     router.asPath === '/crypto' ||
  //     router.asPath === '/netflix' ||
  //     router.asPath === '/twitch'
  //   ) {
  //     setNavBg('transparent');
  //     setLinkColor('#ecf0f3');
  //   } else {
  //     setNavBg('#ecf0f3');
  //     setLinkColor('#1f2937');
  //   }
  // }, [router]);

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener('scroll', handleShadow);
  }, []);

  return (
    <div
      style={{
        backgroundColor: `${theme.nav}`,
        backdropFilter: 'blur(25px)',
        fontFamily: 'Ubuntu',
        fontWeight: 'bold' // make it bold
      }}

      className={`${shadow ? 'fixed w-full h-20 shadow-xl z-[100] ease-in-out duration-300' : 'fixed w-full h-20 z-[100]'} backdrop-blur-sm`}

    >
      <div className='flex justify-between items-center w-full h-full px-2 2xl:px-16'>
        <Link href='/'>
          <a>
            <Image
              src={theme === lightTheme ? NavLogo : NavLogoDark}
              alt='/'
              width='125'
              height='50'
              className='cursor-pointer'
            />
          </a>
        </Link>
        <div>
          <ul style={{ color: `${theme.text}` }} className='hidden md:flex flex items-center'>
            <li className='ml-10 text-sm uppercase hover:text-white'>
              <Link href='/'>Home</Link>
            </li>
            <li className='ml-10 text-sm uppercase hover:text-white'>
              <Link href='/about'>About</Link>
            </li>
            {/* <li className='ml-10 text-sm uppercase hover:text-white'>
            <Link href='/#skills'>Skills</Link>
          </li> */}
            <li className='ml-10 text-sm uppercase hover:text-white'>
              <Link href='/projects'>Projects</Link>
            </li>
            <li className='ml-10 text-sm uppercase hover:text-white'>
              <Link href='/resume'>Resume</Link>
            </li>
            <li className='ml-10'>
              <Button color={theme.nav} onClick={toggleTheme} auto ghost className="shadow-none" style={{ padding: '10px', backgroundColor: theme.body, color: theme.text }}>
                {theme === lightTheme ? <FaMoon /> : <FaSun />}
              </Button>
            </li>
            {/* <li className='ml-10 text-sm uppercase hover:text-white'>
            <Link href='/#contact'>Contact</Link>
          </li> */}
          </ul>
          <ul className='flex items-center px-4'>
            <li className='md:hidden px-4'>
              <Button
                color={theme.nav}
                onClick={toggleTheme}
                auto
                ghost
                className='shadow-none'
                style={{ padding: '10px', backgroundColor: theme.body, color: theme.text, zIndex: 2 }}
              >
                {theme === lightTheme ? <FaMoon /> : <FaSun />}
              </Button>
            </li>
            {/* Hamburger Icon */}
            <li className='md:hidden px-4'>
            <Button
                color={theme.nav}
                onClick={handleNav}
                auto
                ghost
                className='shadow-none md:hidden'
                style={{ padding: '10px', backgroundColor: theme.body, color: theme.text, zIndex: 2 }}
              >
                <div
                className='md:hidden'
                style={{ color: `${theme.text}` }}
              >
                <AiOutlineMenu size={25} />
              </div>
              </Button>
              
            </li>
          </ul>

        </div>
      </div>

      {/* Mobile Menu */}
      {/* Overlay */}
      <div
        className={
          nav ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/70' : ''
        }
      >
        {/* Side Drawer Menu */}
        <div
          style={{
            fontFamily: 'Ubuntu',
            fontWeight: 'bold',
            color: "white"
          }}
          className={
            nav
              ? 'fixed left-0 top-0 w-[100%] sm:w-[100%] md:w-[100%] h-screen p-10 ease-in duration-500 backdrop-filter backdrop-blur-sm'
              : 'fixed left-[-100%] top-0 p-10 ease-in duration-500'
          }
        >
          <div >
            <div className='flex w-full items-center justify-between'>
              {/* <Link href='/'>
                <a>
                  <Image
                    src={theme === lightTheme ? NavLogo : NavLogoDark}
                    width='87'
                    height='35'
                    alt='/'
                  />
                </a>
              </Link> */}
              <div
                onClick={handleNav}
                className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer'
              >
                <AiOutlineClose />
              </div>
            </div>
            <div className='border-b border-gray-300 my-4'>
              <p className='w-[85%] md:w-[90%] py-4'>
                Let&#39;s build something legendary together
              </p>
            </div>
          </div>
          <div className='py-4 flex flex-col'>
            <ul className='uppercase'>
              <Link href='/'>
                <li onClick={() => setNav(false)} className='py-4 text-sm'>
                  Home
                </li>
              </Link>
              <Link href='/about'>
                <li onClick={() => setNav(false)} className='py-4 text-sm'>
                  About
                </li>
              </Link>
              {/* <Link href='/#skills'>
                <li onClick={() => setNav(false)} className='py-4 text-sm'>
                  Skills
                </li>
              </Link> */}
              <Link href='/projects'>
                <li onClick={() => setNav(false)} className='py-4 text-sm'>
                  Projects
                </li>
              </Link>
              <Link href='/resume'>
                <li onClick={() => setNav(false)} className='py-4 text-sm'>
                  Resume
                </li>
              </Link>

              {/* <Link href='/#contact'>
                <li onClick={() => setNav(false)} className='py-4 text-sm'>
                  Contact
                </li>
              </Link> */}
            </ul>
            <div className='pt-40'>
              <p className='uppercase tracking-widest text-[#5651e5]'>
                Let&#39;s Connect
              </p>
              <div className='flex items-center justify-between my-4 w-full sm:w-[80%]'>
                <a
                  href='https://www.linkedin.com/in/justin-newman-15650b185/'
                  target='_blank'
                  rel='noreferrer'
                >
                  <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                    <FaLinkedinIn />
                  </div>
                </a>
                {/* <a
                  href='https://github.com/justinmatthewnewman'
                  target='_blank'
                  rel='noreferrer'
                >
                  <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                    <FaGithub />
                  </div>
                </a>
                <Link href='/#contact'>
                  <div
                    onClick={() => setNav(!nav)}
                    className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'
                  >
                    <AiOutlineMail />
                  </div>
                </Link>
                <Link href='/resume'>
                  <div
                    onClick={() => setNav(!nav)}
                    className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'
                  >
                    <BsFillPersonLinesFill />
                  </div>
                </Link> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
