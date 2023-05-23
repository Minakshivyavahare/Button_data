import logo from './logo.svg';
import './App.css';
import Navbar from './components/NavigationBar';
import NavigationBar from './components/NavigationBar';
import Create from './components/Create';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Read from './components/Read';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <NavigationBar/>
    <Routes>
      <Route exact path='/' element={<Create/>}/>
      <Route path='/read' element={<Read/>} />
    </Routes>
    </BrowserRouter>
    
    
    </div>
  );
}

export default App;
