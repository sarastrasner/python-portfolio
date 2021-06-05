import '@/css/tailwind.css';
import 'bootstrap/dist/css/bootstrap.min.css';
require('typeface-quicksand')
import Jumbotron from '../components/jumbotron';
import Cards from '../components/cards'

function MyApp() {
  return (
    <>
      <Jumbotron />
      <Cards />
    </>
  );
}

export default MyApp;
