import React from 'react';
import { FaFileAlt } from 'react-icons/fa'; // Importing paper icon from react-icons
import { Card, Text } from "@nextui-org/react";

const Resume = () => {
  const files = [
    'newman_justin.pdf',
    'MPI_Algorithmic_Performance_Analysis.pdf',
    'OPENMP_ANALYSIS.pdf',
    'Parallel_Image_Processing_with_CUDA.pdf',
    'AI_ART_ANALYSIS.pdf',
    'MachineLearning.pdf',
    'DataVisualization_R.pdf',
  ];

  return (
    <div className='max-w-[1240px] mx-auto px-2 py-16 pt-32 flex flex-col items-center'>
        <div className="font-montserrat font-bold w-full">
            <div className="w-full md:w-3/4 mx-auto">
              <h2 className="text-xl md:text-2xl font-semibold mb-8 text-left">Resumé</h2>
              <Card isHoverable variant="bordered" css={{ mw: "400px", margin: '12px auto' }}>
                <a href={`/assets/${files[0]}`} download>
                  <Card.Body>
                      <div className='flex items-center space-x-2'>
                          <FaFileAlt className='w-8 h-8 text-blue-600'/>
                          <Text>{files[0]}</Text>
                      </div>
                  </Card.Body>
                </a>
              </Card>
            </div>

            <div className="w-full md:w-3/4 mx-auto">
              <h2 className="text-xl md:text-2xl font-semibold mb-8 text-left">Analysis Work</h2>
              {files.slice(1).map((file, index) => (
                  <Card key={index} isHoverable variant="bordered" css={{ mw: "400px", margin: '12px auto' }}>
                    <a href={`/assets/${file}`} download>
                      <Card.Body>
                          <div className='flex items-center space-x-2'>
                              <FaFileAlt className='w-8 h-8 text-blue-600'/>
                              <Text>{file}</Text>
                          </div>
                      </Card.Body>
                    </a>
                  </Card>
              ))}
            </div>
        </div>    
    </div>
  );
};

export default Resume;
