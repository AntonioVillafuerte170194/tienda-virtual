import Slide from '../components/Slider';
import NavBar from '../components/NavBar';
import Banner from '../components/Banner';
import Catalogo from '../components/Catalogo';
import Footer from '../components/Footer';

function App() {
  return (
    <div>
      <NavBar></NavBar>
      <Slide></Slide>
      <Banner></Banner>
      <Catalogo></Catalogo>
      <Footer></Footer>
    </div>
  );
}

export default App;