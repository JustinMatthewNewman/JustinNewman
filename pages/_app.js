// pages/_app.js

import Navbar from '../components/Navbar';
import { ThemeProvider } from '../contexts/ThemeContext';
import '../styles/globals.css';
import { SSRProvider } from '@react-aria/ssr';

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <SSRProvider>
        <Navbar />
        <Component {...pageProps} />
      </SSRProvider>
    </ThemeProvider>
  );
}

export default MyApp;
