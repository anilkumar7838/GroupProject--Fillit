import React, { useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Home from "./views/Home";
import Fill from "./views/Fill";
import TemplatePage from "./components/template/template_main.jsx"



function App() {



  return (


    <div className="App">
      <Router>
        <Routes>
         {/* <Router path="/fill" element={<Fill/>}/> */ }
          <Route path="/" element={<Home />} />
          <Route path='/template' element={<TemplatePage />} />
        </Routes>
      </Router>
    </div>

  );
}


export default App;
