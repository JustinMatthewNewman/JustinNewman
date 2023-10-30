import React from 'react'
import ScienceInfo2 from './ScienceInfo2'
import ScienceText2 from './ScienceText2'


export default function ScienceHero2() {
  return (
    <div className=" container flex flex-col md:flex-row items-center justify-center mt-12 gap-4 max-w-[1200px]">
        
        <ScienceInfo2/>
        <ScienceText2/>
        
    </div>
  )
}