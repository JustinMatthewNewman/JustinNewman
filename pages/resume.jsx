import React from 'react';
import { FaFileAlt } from 'react-icons/fa'; // Importing paper icon from react-icons

const Resume = () => {
  return (
    <div className='max-w-[1240px] mx-auto px-2 py-16'>
        <div className="font-montserrat font-bold">
      <div className='flex justify-between items-center p-2 md:p-8 bg-white shadow-lg rounded-md w-full md:w-3/4 mx-auto my-8'>
        <h2 className='py-4'>Resumé</h2>
        <div className='flex items-center space-x-2'>
          <FaFileAlt className='w-8 h-8 text-blue-600'/>
          <h1 className='text-xl md:text-2xl font-semibold'>newman_justin.pdf</h1>
        </div>
        <a href='/assets/newman_justin.pdf' download className='px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors duration-200'>Download</a>
      </div>
      <div className='flex justify-between items-center p-2 md:p-8 bg-white shadow-lg rounded-md w-full md:w-3/4 mx-auto my-8'>
        <div className='flex items-center space-x-2'>
          <FaFileAlt className='w-8 h-8 text-blue-600'/>
          <h1 className='text-xl md:text-2xl font-semibold'>MPI_Algorithmic_Performance_Analysis.pdf</h1>
        </div>
        <a href='/assets/MPI_Algorithmic_Performance_Analysis.pdf' download className='px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors duration-200'>Download</a>
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
          <h1 className='text-xl md:text-2xl font-semibold'>Parallel_Image_Processing_with_CUDA.pdf</h1>
        </div>
        <a href='/assets/Parallel_Image_Processing_with_CUDA.pdf' download className='px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors duration-200'>Download</a>
      </div>
      <div className='flex justify-between items-center p-2 md:p-8 bg-white shadow-lg rounded-md w-full md:w-3/4 mx-auto my-8'>
        <div className='flex items-center space-x-2'>
          <FaFileAlt className='w-8 h-8 text-blue-600'/>
          <h1 className='text-xl md:text-2xl font-semibold'>AI_ART_ANALYSIS.pdf</h1>
        </div>
        <a href='/assets/AI_ART_ANALYSIS.pdf' download className='px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors duration-200'>Download</a>
      </div>
      <div className='flex justify-between items-center p-2 md:p-8 bg-white shadow-lg rounded-md w-full md:w-3/4 mx-auto my-8'>
        <div className='flex items-center space-x-2'>
          <FaFileAlt className='w-8 h-8 text-blue-600'/>
          <h1 className='text-xl md:text-2xl font-semibold'>MachineLearning.pdf</h1>
        </div>
        <a href='/assets/MachineLearning.pdf' download className='px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors duration-200'>Download</a>
      </div>
      <div className='flex justify-between items-center p-2 md:p-8 bg-white shadow-lg rounded-md w-full md:w-3/4 mx-auto my-8'>
        <div className='flex items-center space-x-2'>
          <FaFileAlt className='w-8 h-8 text-blue-600'/>
          <h1 className='text-xl md:text-2xl font-semibold'>DataVisualization_R.pdf</h1>
        </div>
        <a href='/assets/DataVisualization_R.pdf' download className='px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors duration-200'>Download</a>
      </div>
      
    </div>    </div>

  );
};

export default Resume;
