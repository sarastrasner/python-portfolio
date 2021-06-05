import '@/css/tailwind.css';
import 'bootstrap/dist/css/bootstrap.min.css';
require('typeface-quicksand');
import Jumbotron from '../components/jumbotron';
import Cards from '../components/cards';
//import Cards from '../components/newCards';


function MyApp() {
  return (
    <div className="font-sans">
      <Jumbotron />
      <Cards />
    </div>
  );
}

export default MyApp;
