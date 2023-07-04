import React from 'react';
import { Card, Grid, Row, Text } from "@nextui-org/react";
import Link from 'next/link';

const Projects = () => {
  const projects = [
    {
      title: 'MelodifyLabs.com',
      img: '/assets/projects/melod.png',
      projectUrl: 'https://melodifylabs.com',
      tech: 'Next.js, Firebase, Vercel'
    },
    {
      title: 'JmuDev.com',
      img: '/assets/projects/jmudev.png',
      projectUrl: 'https://w3stu.cs.jmu.edu/newma4jm/website/index.html',
      tech: 'HTML, CSS, PHP'
    },
    {
      title: 'CSCode.org',
      img: '/assets/projects/cscode.png',
      projectUrl: 'https://cscode.org',
      tech: 'React, NextAuth, Tailwind CSS'
    },
    {
      title: 'Automated Athletic Statistics Software',
      img: '/assets/projects/code.png',
      projectUrl: 'https://github.com/JustinMatthewNewman/Stars',
      tech: 'Java, Jsoup'
    },


  ];

  return (
    <Grid.Container gap={4} justify="flex-start" id='projects'>
      {projects.map((project, index) => (
        <Grid xs={6} sm={3} key={index}>
          <Card isPressable css={{
              transition: 'transform 0.3s ease-in-out', 
              '&:hover': { transform: 'scale(1.05)' } 
          }}>
            <a href={project.projectUrl} target='_blank' rel='noreferrer'>
              <Card.Body css={{ p: 0 }}>
                <Card.Image
                  src={project.img}
                  objectFit="cover"
                  width="100%"
                  height={140}
                  alt={project.title}
                />
              </Card.Body>
              <Card.Footer css={{ justifyItems: "flex-start" }}>
                <Row wrap="wrap" justify="space-between" align="center">
                  <Text b>{project.title}</Text>

                  <Text css={{ color: "$accents7", fontWeight: "$semibold", fontSize: "$sm" }}>
                    {project.tech}
                  </Text>
                </Row>
              </Card.Footer>
            </a>
          </Card>
        </Grid>
      ))}
    </Grid.Container>

  );
};

export default Projects;
