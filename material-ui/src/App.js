
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import CardData from './components/CardData';
import GridData from './components/GridData';
import ButtonData from './components/ButtonData';
import AccordionData from './components/AccordionData';
import InputData from './components/InputData';


function App() {
  return (
    <BrowserRouter className={App}>
        <Routes>
         
          <Route path='/' element={<CardData></CardData>}/>
          <Route path='/button' element={<ButtonData></ButtonData>} />
          <Route path='/grid' element={<GridData></GridData>}/>
          <Route path='/accordian' element={<AccordionData></AccordionData>}/>
          <Route path='/input' element={<InputData></InputData>} />
        </Routes>
    </BrowserRouter>
   
  );
}

export default App;
