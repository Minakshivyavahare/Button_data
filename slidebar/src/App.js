import About from './component/About';
import Home from './component/Home';
import Navbar from './component/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home></Home>}/>
      <Route path='/about' element={<About></About>}/>
     

      
    </Routes>
    </BrowserRouter>
      
    
  );
}

export default App;
