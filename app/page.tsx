

import GraphHero from './components/dashboard/GraphHero'
import FloatingText from './components/extras/FloatingText'
import Main from './components/layouts/HomePage'

export default function Home() {
  return (
    <section className='py-36'>
      <GraphHero />      
      <div style={{ display: 'grid', gridTemplateColumns: '1fr', gridTemplateRows: 'auto 1fr', overflowX: 'hidden' }}>

        <div className='flex items-center justify-center flex-col'>
          {/* <FloatingText/> */}
          <Main />
        </div>
      </div>
    </section>

  )
}
