// import './App.css';
import { Routes, Route } from "react-router-dom";
import Pay from './components/Pay';
import Home from './pages/Home';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/pay" element={<Pay/>} />
    </Routes>
  );
}

export default App;
