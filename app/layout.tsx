import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Providers from './providers'

// import NextNavbar from './components/navbar/NextNavbar'
import TabsNavbar from './components/navbar/TabsNavbar'
import dynamic from 'next/dynamic'
import Footer from './components/footer/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Justin Matthew Newman',
  description: 'Software Engineer, Artist, Designer, Muscian. | Metalinguist LLC'
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  const Background = dynamic(() => import('./components/background/BackgroundImage'), { ssr: false })

  return (
    <html lang='en'>
      <body className={inter.className} style={{height: "100%"}}>
        <Providers>
        <Background/>
          <header>
            <TabsNavbar/>
            {/* <NextNavbar/> */}
          </header>
          <main>{children}</main>
          <footer>
          <Footer/>

          </footer>
        </Providers>
      </body>
    </html>
  )
}
