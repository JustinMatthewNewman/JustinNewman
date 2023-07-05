import Navbar from '../components/Navbar';
import '../styles/globals.css';
import { SSRProvider } from '@react-aria/ssr'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <SSRProvider>
      <Component {...pageProps} />
    </SSRProvider>
    </>
  );
}

export default MyApp;
