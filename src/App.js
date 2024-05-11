
import './App.css';
import Home  from './pages/Home';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from './pages/Login';
import Navbar from './components/Navbar';
import Services from './pages/Services';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/Login" element={[<Navbar/>,<Login/>]} />
          <Route path="/services" element={[<Navbar/>,<Services/>]} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
