import React from 'react';
import { FaFileAlt } from 'react-icons/fa'; // Importing paper icon from react-icons

const Resume = () => {
  return (
    <div className='max-w-[1240px] mx-auto px-2 py-16'>
    <div className=''>
        <h2 className='py-4'>Resumé</h2>
      <div className='flex justify-between items-center p-2 md:p-8 bg-white shadow-lg rounded-md w-full md:w-3/4 mx-auto my-8'>
        <div className='flex items-center space-x-2'>
          <FaFileAlt className='w-8 h-8 text-blue-600'/>
          <h1 className='text-xl md:text-2xl font-semibold'>newman_justin.pdf</h1>
        </div>
        <a href='/assets/newman_justin.pdf' download className='px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors duration-200'>Download</a>
      </div>
      <h2 className='py-4'>Publications</h2>
      <div className='flex justify-between items-center p-2 md:p-8 bg-white shadow-lg rounded-md w-full md:w-3/4 mx-auto my-8'>
        <div className='flex items-center space-x-2'>
          <FaFileAlt className='w-8 h-8 text-blue-600'/>
          <h1 className='text-xl md:text-2xl font-semibold'>mpi.pdf</h1>
        </div>
        <a href='/assets/mpi.pdf' download className='px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors duration-200'>Download</a>
      </div>
      <div className='flex justify-between items-center p-2 md:p-8 bg-white shadow-lg rounded-md w-full md:w-3/4 mx-auto my-8'>
        <div className='flex items-center space-x-2'>
          <FaFileAlt className='w-8 h-8 text-blue-600'/>
          <h1 className='text-xl md:text-2xl font-semibold'>OPENMP_ANALYSIS.pdf</h1>
        </div>
        <a href='/assets/OPENMP_ANALYSIS.pdf' download className='px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors duration-200'>Download</a>
      </div>
      <div className='flex justify-between items-center p-2 md:p-8 bg-white shadow-lg rounded-md w-full md:w-3/4 mx-auto my-8'>
        <div className='flex items-center space-x-2'>
          <FaFileAlt className='w-8 h-8 text-blue-600'/>
          <h1 className='text-xl md:text-2xl font-semibold'>Cuda_Project.pdf</h1>
        </div>
        <a href='/assets/Cuda_Project.pdf' download className='px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors duration-200'>Download</a>
      </div>
      <div className='flex justify-between items-center p-2 md:p-8 bg-white shadow-lg rounded-md w-full md:w-3/4 mx-auto my-8'>
        <div className='flex items-center space-x-2'>
          <FaFileAlt className='w-8 h-8 text-blue-600'/>
          <h1 className='text-xl md:text-2xl font-semibold'>MATH268.pdf</h1>
        </div>
        <a href='/assets/MATH268.pdf' download className='px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors duration-200'>Download</a>
      </div>
      
    </div>    </div>

  );
};

export default Resume;
