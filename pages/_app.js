// pages/_app.js

import Navbar from '../components/Navbar';
import { ThemeProvider } from '../contexts/ThemeContext';
import { SSRProvider } from '@react-aria/ssr';
import '../styles/globals.css';
import BackgroundImage from '../components/BackgroundImage';

function MyApp({ Component, pageProps }) {

  return (
    <ThemeProvider>
      <SSRProvider>
        {/* The main app container */}
        <div className="app-container">
          {/* Background image using next/image */}
          <div style={{ pointerEvents: 'none', }}>
            <BackgroundImage/>
          </div>

          
          {/* Rest of your app components */}
          <Navbar />
          <Component {...pageProps} />
        </div>
      </SSRProvider>
    </ThemeProvider>
  );
}

export default MyApp;
