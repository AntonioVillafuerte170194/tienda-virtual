// import './App.css';
import { Routes, Route } from "react-router-dom";
import Pay from './components/Pay';
import Home from './pages/Home';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pay" element={<Pay/>} />
      </Routes>
    </div>
  );
}

export default App;
