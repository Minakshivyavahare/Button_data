
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import NavigationBar from './component/NavigationBar';
import PostData from './component/PostData';
import UserData from './component/UserData';

import TodosData from './component/TodosData';
import PhotoData from './component/PhotoData';

function App() {
  return (
   <BrowserRouter>
   <NavigationBar/>
   <Routes>
      <Route path='/posts' element={<PostData></PostData>}/>
      <Route path='/user' element={<UserData></UserData>}/>
      <Route path='/photos' element={<PhotoData></PhotoData>}/>
      <Route path='/todos' element={<TodosData></TodosData>}/>
   </Routes>
    
   </BrowserRouter>
     
   
  );
}

export default App;
