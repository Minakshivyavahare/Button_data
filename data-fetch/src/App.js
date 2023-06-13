import logo from './logo.svg';
import './App.css';

import SelectData from './component/SelectData';
import GetData from './component/GetData';

function App() {
  return (
    <div className="App">
      <GetData/>
      <SelectData/>
    </div>
  );
}

export default App;
