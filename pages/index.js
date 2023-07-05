import Head from 'next/head'
import About from '../components/About'
import Contact from '../components/Contact'
import Main from '../components/Main'
import Projects from '../components/Projects'
import Skills from '../components/Skills'

const Home = () => {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr', gridTemplateRows: 'auto 1fr' }}>
      <Head>
        <title>Justin Newman</title>
        <meta name="description" content="I’m a human." />
        <link rel="icon" href="/fav.png" />
      </Head>
      <Main />
      <div style={{ overflow: 'auto', display: 'grid', gridTemplateRows: 'auto', rowGap: '50px' }}>
        <About />
        <Skills />
        <Projects />
        <Contact />
      </div>
    </div>
  );
};

export default Home;
