import React from 'react'
import MelodifyInfo from './MelodifyInfo'
import MelodifyText from './MelodifyText'




export default function ScienceHero2() {
  return (
    <div className=" container flex flex-col md:flex-row items-center justify-center mt-12 gap-4 max-w-[1200px]">
        
        <MelodifyInfo/>
        <MelodifyText/>
        
    </div>
  )
}