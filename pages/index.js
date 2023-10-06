import React  from 'react';
import dynamic from 'next/dynamic';
import Head from 'next/head';

const Home = () => {

  const Main = dynamic(() => import('../components/Main'));

  return (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr', gridTemplateRows: 'auto 1fr', overflowX: 'hidden'}}>
      <Head>
        <title>Justin Matthew Newman | Jr. Software Engineer | Metalinguist LLC | JMU Computer Science | Virginia</title>
        <meta name="description" content="Software Engineer." />
        <link rel="icon" href="/fav.png" />
      </Head>
        <Main />

    </div>
  );
};

export default Home;
