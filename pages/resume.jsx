import React from 'react';
import { FaFileAlt } from 'react-icons/fa'; // Importing paper icon from react-icons

const Resume = () => {
  return (
    <div className='flex items-center justify-center min-h-screen'>
      
      <div className='flex justify-between items-center p-4 md:p-8 bg-white shadow-lg rounded-md w-full md:w-3/4 mx-auto my-8'>
        <div className='flex items-center space-x-2'>
          <FaFileAlt className='w-8 h-8 text-blue-600'/>
          <h1 className='text-xl md:text-2xl font-semibold'>newman_justin.pdf</h1>
        </div>
        <a href='/assets/newman_justin.pdf' download className='px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors duration-200'>Download</a>
      </div>
      
    </div>
  );
};

export default Resume;
