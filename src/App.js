import './App.css';
import Home from './Pages/Home/Home.jsx';
import Navbar from '../src/components/Navbar/Navbar.jsx'

import { Routes, Route, Link } from "react-router-dom";
import CurrentCourse from './Pages/Courses/CurrentCourse';
import {desc} from "../src/constants"

function App() {  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<CurrentCourse/>} />
      </Routes>
    </div>
  );
}

export default App;
