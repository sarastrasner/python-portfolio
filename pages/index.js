import Head from 'next/head';
import App from './_app';

function Index() {
  return (
    <>
      <Head>
        <title>Python Portfolio</title>
        <meta name="description" content="Python Portfolio" />
      </Head>
      <App />
    </>
  );
}

export default Index;
