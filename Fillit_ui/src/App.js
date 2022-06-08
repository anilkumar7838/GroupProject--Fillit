import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./views/Home";
import Fill from "./views/Fill";
import MyForms from "./views/MyForms";

function App() {
  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route path='/fill' element={<Fill />} />
          <Route path='/myforms' element={<MyForms />} />
          <Route path='/' element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
