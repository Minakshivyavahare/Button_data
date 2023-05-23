
import { useState } from 'react';
import './App.css';
import Child1 from './component/Child1';
import { useSelector } from 'react-redux';

function App() {
  const data = useSelector((c) => c.show.value
   
  
  )  
  return (
    <div className="App">
     <h1>App {data}</h1>
     
     <Child1/>
    </div>
  );
}

export default App;
