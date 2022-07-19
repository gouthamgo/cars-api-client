import './App.css';

// import {BrowserRouter, Route, Link} from 'react-router-dom'
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Homescreen from './screens/Homescreen';

function App() {
  return (
    <div className="App">
      <h1>Cars Showroom</h1>

      <BrowserRouter>
      <Routes>
      
      <Route path = "/" element={<Homescreen/>} />

      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
