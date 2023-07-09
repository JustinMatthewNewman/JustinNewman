import Image from 'next/image';
import soccer from '../public/assets/soccer.webp';
import { Card, Grid, Button } from "@nextui-org/react";
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import { useTheme } from '../contexts/ThemeContext';
import React, { useEffect } from 'react';

const Star = () => {
  const redirectToGitHub = () => {
    window.location.href = 'https://github.com/JustinMatthewNewman/Stars';
  };

  const images = [
    'https://i.ibb.co/j4cLqPx/ESPN-Example.png',
    'https://i.ibb.co/HTB9Ym9/ESPN-Example2.png',
    'https://i.ibb.co/p3DgF7q/ESPN-Example3.png',
  ];

  const slideProperties = {
    duration: 5000,
    transitionDuration: 500,
    infinite: true,
    indicators: true,
    arrows: true,
  };

  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    // Here you need to update your styles based on the theme
    document.body.style.backgroundColor = theme.body;
    document.body.style.color = theme.text;
    // add other style updates as needed
  }, [theme]);

  return (
    <div className='w-full'>
      <div className='w-screen h-[50vh] relative'>
        <div className='absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10' />
        <Image
          className='absolute z-1'
          layout='fill'
          objectFit='cover'
          src={soccer}
          alt='/'
        />
        <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
          <h2 className='py-2'>Statistic Team Althletic Rendering Software</h2>
          <h3>Java / JSoup / Swing</h3>
        </div>
      </div>



      {/* <Image className="w-screen" alt="stars" src="https://i.ibb.co/VLkL8dW/STARS.png" /> */}


      
      <div className="container mx-auto max-w-2xl mt-8">
        <Card style={{ backgroundColor: `${theme.sidenav}`, color: `${theme.text}`, margin: "8px", border: 'none' }}>
          <div className="content p-8">
            <h2 className="text-2xl font-bold mb-4">SOFTWARE DEMO (Beta version render)</h2>
            <video className="w-screen" controls>
              <source src="https://i.imgur.com/SZ2Djoo.mp4" type="video/mp4" />
              Your browser does not support the video tag. Please check out this awesome demo from a newer device.
            </video>

            <div className="flex justify-center p-4">
              <Button primary ghost className='shadow-none' onClick={redirectToGitHub}>
                Open Source
              </Button>
            </div>





          </div>
        </Card>
        <div className="container mx-auto max-w-2xl mt-8">

        <Card shadow style={{ backgroundColor: `${theme.sidenav}`, color: `${theme.text}`, margin: "8px", border: 'none' }}>
      <div className="p-4">
        <h2 className="text-2xl font-bold mb-4">REAL statistics graphic renders</h2>
        <div className="mx-auto max-w-2xl">
          <Slide {...slideProperties}>
            {images.map((image, index) => (
              <div key={index} className="relative">
                <div
                  style={{ backgroundImage: `url(${image})` }}
                  className="h-64 md:h-96 bg-cover bg-center"
                ></div>
              </div>
            ))}
          </Slide>
        </div>
      </div>
    </Card>
      </div>
        <Grid.Container gap={3} justify="center">


          <div className="flex justify-between mt-8">
            <Card shadow style={{ backgroundColor: `${theme.sidenav}`, color: `${theme.text}`, margin: "8px", border: 'none' }}>

              <div className="text-center p-4">
                <img className="w-32 mx-auto" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/512px-HTML5_logo_and_wordmark.svg.png" alt="HTML" />
              </div>
            </Card>
            <Card shadow style={{ backgroundColor: `${theme.sidenav}`, color: `${theme.text}`, margin: "8px", border: 'none' }}>
              <div className="text-center p-4">
                <img className="w-32 mx-auto" src="https://classes.engineering.wustl.edu/cse231/core/images/2/26/Java.png" alt="Java" />
              </div>
            </Card>
            <Card shadow style={{ backgroundColor: `${theme.sidenav}`, color: `${theme.text}`, margin: "8px", border: 'none' }}>
              <div className="text-center p-4">
                <img className="w-32 mx-auto" src="https://cdn3.iconfinder.com/data/icons/logos-and-brands-adobe/512/267_Python-512.png" alt="Python" />
              </div>
            </Card>
          </div>

        </Grid.Container>
      </div>


    </div>
  );
};

export default Star;
