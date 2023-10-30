import React from 'react'

import AppsText from './AppsText'
import AppDisplay from './AppDisplay'

export default function AppsHero() {
  return (
    <div className=" container flex flex-col md:flex-row items-center justify-center mt-12 gap-4 max-w-[1200px]">
        
        <AppsText/>
        <AppDisplay/>
        
    </div>
  )
}

