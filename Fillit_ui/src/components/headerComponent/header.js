import React, { useState } from "react";
import "../BodyComponent/Mainbody.css";
import { Link, useNavigate } from "react-router-dom";
import ClickAwayListener from "@mui/base/ClickAwayListener";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import RoomServiceIcon from "@mui/icons-material/RoomService";
import CallIcon from "@mui/icons-material/Call";
import WorkspacesIcon from "@mui/icons-material/Workspaces";
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
import LoginIcon from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout';
import { useSelector,useDispatch } from "react-redux";
import { logout } from "../../actions/userAction";

const menu=[
  {
    icon:HomeIcon,
    item:"Home",
    Location:"home",
  },
  {
    icon:InfoIcon,
    item:"About",
    Location:"about",
  },
  {
    icon:RoomServiceIcon,
    item:"Services",
    Location:"services",
  },
  {
    icon:WorkspacesIcon,
    item:"Work",
    Location:"work",
  },
  {
    icon:CallIcon,
    item:"Contact",
    Location:"contact",
  }
]

const Header = () => {


  const navigate= useNavigate();
  const dispatch=useDispatch();
  const [navbar, setNavbar] = useState(false);
  const [sidebar, setSidebar] = useState(false);

  const {isAuthenticated} = useSelector((state)=>state.user);
  const sidebarHandle = () => {
    setSidebar(!sidebar);
  };
  const handleClickAway = () => {
    return setSidebar(false);
  };

  const changeNav = () => {
    if (window.scrollY >= 20) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };
  
  window.addEventListener("scroll", changeNav);

  function logoutUser() {
    dispatch(logout());
    alert.success("Logout Successfully");
  }
  
  return (
    <>
      <nav className={navbar ? "navbar sticky" : "navbar"}>
        <div className="inner-width">
          <div className="mainHeading">
            <Link to="/" className="logo"></Link>
            <h1>FILL-IT</h1>
          </div>
          <ClickAwayListener onClickAway={handleClickAway}>
          <div>
            <button
              onClick={sidebarHandle}
              className={sidebar ? "menu-toggler active" : "menu-toggler"}
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
            <div className={sidebar ? "navbar-menu active" : "navbar-menu"}>
              {menu.map((menu)=>{
                return (
                  <Link className="navlink" to="/">
                    <menu.icon className="navicon" />
                    {menu.item}
                  </Link>
                )
              })
              }
              {isAuthenticated ? (<Link className="navlink" onClick={()=>{
                logoutUser()
              }}
               to="/">
                <LogoutIcon className="navicon" />
                Logout
              </Link>):(
              <Link className="navlink" to="/login">
                <LoginIcon className="navicon" />
                Login
              </Link>
              )}
              
            </div>
            </div>
          </ClickAwayListener>
        </div>
      </nav>
    </>
  );
};

export default Header;
