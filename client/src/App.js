import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './Components/Home'
import { BrowserRouter } from 'react-router-dom';
import Navbar from './Components/Navbar'


function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
