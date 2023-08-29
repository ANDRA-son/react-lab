import Home1 from './Lab1/Home1';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import Menu from './Menu';

function App() {
  return (
    <Router>
      <Link to="/" >home</Link>
      <br></br>
      <Routes>
        <Route path="/" element={<Menu/>}/>
        <Route path="/lab1" element={<Home1 />} />
      </Routes>
    </Router>
  );
}

export default App;
