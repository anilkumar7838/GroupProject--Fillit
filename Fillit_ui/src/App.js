import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./views/Home";
import Fill from "./views/Fill";
import MyForms from "./views/MyForms";
import About from "./components/About/about";
import Form from "./components/RegistrationForm/form";
import Loginpage from "./components/utils/Loginpage.js"
import FormType1 from "./components/FomBuilder/formType1";
import DropDown from "./components/utils/DrpoDown/DropDown"
function App() {
  
  return (
    <div className='App'>
      <Router>
        <Routes>
        <Route path='/fill' element={<Fill />} />
        <Route path='/login' element={<Loginpage />} />
          <Route path='/myforms' element={<MyForms />} />
          <Route path='/' element={<Home />} />
          <Route path='/form' element={<Form />} />
          <Route path='/about' element={<About />} />
          <Route path='/build' element={<FormType1 />} />
          <Route path='/work' element={<DropDown />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
