// import './App.css';
import Pay from './components/Pay';
import Slide from './components/Slider';
import NavBar from './components/NavBar';
import Banner from './components/Banner';
import Catalogo from './components/Catalogo';

function App() {
  return (
    <div>
      <NavBar></NavBar>
      <Slide></Slide>
      <Banner></Banner>
      <Catalogo></Catalogo>
      <Pay></Pay>
    </div>
  );
}

export default App;
