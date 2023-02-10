import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './Components/Home'
import { BrowserRouter } from 'react-router-dom';
import Navbar from './Components/Navbar'
import Footer from './Components/Footer';


function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
