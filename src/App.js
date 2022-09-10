
import { BrowserRouter } from 'react-router-dom';
import './App.css';

import Routers from './routes/Routes'
//import Single from './pages/single';



function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Routers/>
    </BrowserRouter>
      {/* <Single/> */}
    </div>
  );
}

export default App;
