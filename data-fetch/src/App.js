
import './App.css';


import GetData from './component/GetData';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './component/Navbar';
import SigleProduct from './component/SigleProduct';

function App() {
  return (
    
     <BrowserRouter>
      <Navbar/>
     <Routes>
      <Route path='/' element={<GetData/>}/>
      <Route path='/single/:id' element={<SigleProduct/>}/>
     </Routes>
     

   
   
      </BrowserRouter>  
  );
}

export default App;
