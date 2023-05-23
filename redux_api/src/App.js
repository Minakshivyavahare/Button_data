import logo from './logo.svg';
import './App.css';
import { useSelector, useDispatch } from 'react-redux'
import { getAllData } from './features/gitUserSlice';

function App() {
 
  const dispatch = useDispatch();
  const data = useSelector((state)=> {
    console.log("state",state.app);
    return state.app
  })
 if(data.loading){
  return(<h2>Loading...</h2>)
 }
 if(data.error != null){
 return <h3>{data.error}</h3>
 }
  return (
    <div className="App">
      <h1>Hello</h1>
      <button onClick={() => dispatch(getAllData())}>Get Users API</button>
      {
        data.users.map((ele)=>(
          <li key={ele.id}>{ele.email}</li>
        )
        )
      }
    </div>
  );
}

export default App;
