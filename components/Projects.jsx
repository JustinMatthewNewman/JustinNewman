import React from 'react';
import Link from 'next/link';

import { Grid } from "@nextui-org/react";
import { Card1 } from './Card1';
import { Card2 } from './Card2';
import { Card3 } from './Card3';
import { Card4 } from './Card4';
import { Card5 } from './Card5';

const Projects = () => {
  return (
    <div id='projects' className='w-full'>
      <div className='max-w-[1240px] mx-auto px-2 py-16'>
        {/* <h2 className='py-4'>Solutions</h2> */}
        <div >
          <Grid.Container gap={2} justify="center">
            <Grid xs={12} sm={4}>
              <Card1 />
            </Grid>
            <Grid xs={12} sm={4}>
              <Card2 />
            </Grid>
            <Grid xs={12} sm={4}>
              <Card3 />
            </Grid>
            <Grid xs={12} sm={5}>
              <Card4 />
            </Grid>
            <Grid xs={12} sm={7}>
              <Card5 />
            </Grid>
          </Grid.Container>
        </div>
      </div>
    </div>
  );
};

export default Projects;
