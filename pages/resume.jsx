import React from 'react';
import { FaFileAlt } from 'react-icons/fa'; // Importing paper icon from react-icons
import { Text, Card } from "@nextui-org/react";
import dynamic from 'next/dynamic';

const Resume = () => {
  const Analysis = dynamic(() => import('../components/Analysis'));

  const files = [
    'newman_justin.pdf',
  ];

  return (
    <div className='max-w-[1240px] mx-auto px-2 py-16 pt-32 flex flex-col items-center'>
        <div className="font-montserrat font-bold w-full">
            <div className="w-full md:w-3/4 mx-auto">
              <h2 className="text-xl md:text-2xl font-semibold mb-8 text-left">Documents</h2>
              <Card isHoverable variant="bordered" css={{ mw: "400px", margin: '12px auto' }}>
                <a href={`/assets/${files[0]}`} download>
                  <Card.Body>
                      <div className='flex items-center space-x-2'>
                          <FaFileAlt className='w-8 h-8 text-blue-600'/>
                          <Text>{files[0]}</Text> <Text>(Resumé)</Text>
                      </div>
                  </Card.Body>
                </a>
              </Card>              
            </div>
            <Analysis/>


            
        </div>    
    </div>
  );
};

export default Resume;
