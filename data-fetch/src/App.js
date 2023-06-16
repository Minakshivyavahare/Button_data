
import './App.css';


import GetData from './component/GetData';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './component/Navbar';
import SigleProduct from './component/SigleProduct';
import Cart from './component/Cart';

import Normal from './component/Normal';



function App() {
  return (
    
     <BrowserRouter>
      <Navbar/>
     <Routes>
      <Route path='/' element={<GetData/>}/>
      <Route path='/single/:id' element={<SigleProduct/>}/>
      <Route path='/cart/:id' element={<Cart/>}/>
      <Route path='/practice' element={<Normal/>} />
     </Routes>
     

   
   
      </BrowserRouter>  
  );
}

export default App;
