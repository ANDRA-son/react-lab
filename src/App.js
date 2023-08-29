import Home1 from '../Lab1/Home1';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'

function App() {
  return (
    <Router>
      <Link to="/lab1" >Lab 1</Link>
      <br></br>
      <Link to="/lab2" >Lab 2</Link>
      <br></br>
      <Link to="/lab3" >Lab 3</Link>
      <br></br>
      <Link to="/lab4" >Lab 4</Link>
      <br></br>
      <Link to="/lab5" >Lab 5</Link>
      <br></br>
      <Link to="/lab6&7" >Lab 6&7</Link>

      <Routes>
        <Route path="/" element={<App/>} />
        <Route path="/lab1" element={<Home1 />} />
      </Routes>
    </Router>
  );
}

export default App;
