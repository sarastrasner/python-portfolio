import Head from 'next/head';
import App from './_app';

function Index() {
  return (
    <>
      <Head>
        <title>Python Portfolio</title>
        <meta name="description" content="Python Portfolio" />
        <link rel="icon" href="@/public/favicon.ico" />
      </Head>
      <App />
    </>
  );
}

export default Index;
