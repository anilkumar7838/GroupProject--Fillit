import React from 'react';
import './App.css';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Home from "./views/Home";
import Fill from "./views/Fill";
function App() {
  return (
    <div className="App">
        <Router>
          <Routes>
            <Route path="/fill" element={<Fill/>}/>
            <Route path="/" element={<Home/>}/>
          </Routes>
        </Router>
    </div>
  );
}

export default App;
