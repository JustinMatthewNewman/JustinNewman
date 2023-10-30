import React from 'react'
import ScienceInfo from './ScienceInfo'
import ScienceText from './ScienceText'

function ScienceHero() {
  return (
    <div className=" container flex flex-col md:flex-row items-center justify-center mt-12 gap-4 max-w-[1200px]">
        
        <ScienceText/>
        <ScienceInfo/>
        
    </div>
  )
}

export default ScienceHero