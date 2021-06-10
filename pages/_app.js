import '@/css/tailwind.css';
import 'bootstrap/dist/css/bootstrap.min.css';
require('typeface-quicksand');
import Jumbotron from '../components/jumbotron';
import Cards from '../components/cards';
import Head from 'next/head';

function MyApp() {
  return (
    <div className="font-sans">
      <Head>
        <title>Python Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Jumbotron />
      <Cards />
    </div>
  );
}

export default MyApp;
