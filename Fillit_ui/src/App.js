import React,{useEffect} from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./views/Home";
// import Fill from "./views/Fill";
import MyForms from "./views/MyForms";
import About from "./components/About/about";
import Form from "./components/RegistrationForm/form";
import Loginpage from "./components/User/Loginpage.js";
import FormType1 from "./components/FomBuilder/formType1";

import dataStore from "./dataStore";
import { loadUser } from "./actions/userAction";
import { useSelector } from "react-redux";
import Profile from "./components/User/Profile";
import ProtectedRoute from "./components/Route/protectedRoute";
import UpdateProfile from "./components/User/UpdateProfile";
import UpdatePassword from "./components/User/UpdatePassword";
import ForgotPassword from "./components/User/ForgotPassword";
import ResetPassword from "./components/User/ResetPassword";
import Loader from "./components/utils/Loader/Loader";
import axios from "axios";
import Cookies from "js-cookie";

function App() {

  useEffect(() => {
    const user=Cookies.get("token");
    // console.log(user);
    if(user){
      axios.defaults.headers.common.Authorization = `Bearer ${user}`;
    }
    dataStore.dispatch(loadUser());
  }, []);

  return (
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/loader" element={<Loader />} />
          <Route path="/login" element={<Loginpage />} />
          <Route path="/myforms" element={<MyForms />} />
          <Route path="/form" element={<Form />} />
          <Route path="/about" element={<About />} />
          <Route path="/build" element={<FormType1 />} />
          <Route path="/password/forgot" element={<ForgotPassword />} />
          <Route path="/password/reset/:token" element={<ResetPassword />} />
          <Route
            path="/account"
            element={
              <ProtectedRoute>
                <Profile />
              </ProtectedRoute>
            }
          />
          <Route
            path="/me/update"
            element={
              <ProtectedRoute>
                <UpdateProfile />
              </ProtectedRoute>
            }
          />
          <Route
            path="/password/update"
            element={
              <ProtectedRoute>
                <UpdatePassword />
              </ProtectedRoute>
            }
          />
         
        </Routes> 
      </Router>
  );
}

export default App;
