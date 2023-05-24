import logo from './logo.svg';
import './App.css';
import Navbar from './component/Navbar';
import ProductCart from './component/ProductCart';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CartData from './component/CartData';




function App() {
  return (
    <BrowserRouter>
    <div className="App">
     
     <Navbar/>
     <Routes>
      <Route exact path="/" element={<ProductCart/>}/>
      <Route exact path="/cart" element={<CartData/>}/>
     </Routes>
     
    </div>
    </BrowserRouter>
  );
}

export default App;
