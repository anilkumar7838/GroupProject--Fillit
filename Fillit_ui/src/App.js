import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./views/Home";
// import Fill from "./views/Fill";
import MyForms from "./views/MyForms";
import About from "./components/About/about";
import Registration from "./components/Forms/registrationPage";

function App() {
  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route path='/about' element={<About />} />
          <Route path='/myforms' element={<MyForms />} />
          <Route path='/register' element={<Registration />} />
          <Route path='/' element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
