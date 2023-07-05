import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Grid } from "@nextui-org/react";
import { Card1 } from './Card1';
import { Card2 } from './Card2';
import { Card3 } from './Card3';
import { Card4 } from './Card4';
import { Card5 } from './Card5';

const Projects = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(false);
  }, []);

  return (
    <div id='projects' className='w-full'>
      <div className='max-w-[1240px] mx-auto px-2 py-16'>
        <h2 className='py-4'>Solutions</h2>
        <div>
          {!isLoading ? (
            <Grid.Container gap={2} justify="center">
              <Grid xs={12} sm={4}>
                <Link href="https://www.MelodifyLabs.com">
                  <a target='_blank'>
                    <Card1 />
                  </a>
                </Link>
              </Grid>
              <Grid xs={12} sm={4}>
                <Link href="https://www.CSCODE.org">
                  <a target='_blank'>
                    <Card2 />
                  </a>
                </Link>
              </Grid>
              <Grid xs={12} sm={4}>
                <Link href="https://github.com/JustinMatthewNewman">
                  <a target='_blank'>
                    <Card3 />
                  </a>
                </Link>
              </Grid>
              <Grid xs={12} sm={5}>
                <Link href="/resume">
                  <a target='_blank'>
                    <Card4 />
                  </a>
                </Link>
              </Grid>
              <Grid xs={12} sm={7}>
                <Link href="https://w3stu.cs.jmu.edu/newma4jm/website/index.html">
                  <a target='_blank'>
                    <Card5 />
                  </a>
                </Link>
              </Grid>
            </Grid.Container>
          ) : (
            <p>Loading...</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Projects;
