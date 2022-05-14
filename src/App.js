import './App.css';
import Home from './Pages/Home/Home.jsx';
import Navbar from '../src/components/Navbar/Navbar.jsx'
import SignIn from './components/Auth/SignUp/SignUp.jsx'

import { Routes, Route, Link } from "react-router-dom";
import CurrentCourse from './Pages/Courses/CurrentCourse';
import {desc} from "../src/constants"
import ApplyCourse from './Pages/ApplyCourse/ApplyCourse';
import SignUp from './components/Auth/SignIn/SignIn';

function App() {  return (
    <div className="App">
      
      {/* <Navbar/>    */}
      <Routes>
        <Route path="/" element={<Home desc={desc}/>} />
        <Route path="/current-courses" element={<CurrentCourse/>} />
        <Route path="/apply" element={<ApplyCourse/>} />
        <Route path="/signin" element={<SignUp/>} />
        <Route path="/signup" element={<SignIn/>} />
      </Routes>
    </div>
  );
}

export default App;
