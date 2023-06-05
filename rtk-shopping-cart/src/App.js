import logo from './logo.svg';
import './App.css';
import Navbar from './component/Navbar';
import ProductCart from './component/ProductCart';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CartData from './component/CartData';
import Checkout from './component/Checkout';
import productData from './productData';





function App() {
  return (
    <BrowserRouter>
    <div className="App">
     
     <Navbar data={productData}/>
     <Routes>
      <Route exact path="/" element={<ProductCart/>}/>
      <Route exact path="/cart" element={<CartData/>}/>
      <Route exact path="/checkout" element={<Checkout/>}/>
     </Routes>
     
    </div>
    </BrowserRouter>
  );
}

export default App;
