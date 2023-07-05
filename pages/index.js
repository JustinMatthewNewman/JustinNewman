import Head from 'next/head'
import About from '../components/About'
import Contact from '../components/Contact'
import Main from '../components/Main'
import Projects from '../components/Projects'
import Skills from '../components/Skills'


const Home = () => {
  return (
    <div>
      <Head>
        <title>Justin Newman</title>
        <meta name="description" content="I’m a human." />
        <link rel="icon" href="/fav.png" />
      </Head>
      <Main />
      <div style={{ position: 'relative', zIndex: 1 }}>
        
        <About />
        <Skills />
        <Projects />
        <Contact />
      </div>
    </div>
  );
};

export default Home;

