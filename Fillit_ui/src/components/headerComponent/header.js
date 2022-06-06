import React, { useState } from "react";
import "../BodyComponent/Mainbody.css";
import { Link } from "react-router-dom";
import ClickAwayListener from "@mui/base/ClickAwayListener";

import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import RoomServiceIcon from "@mui/icons-material/RoomService";
import CallIcon from "@mui/icons-material/Call";
import WorkspacesIcon from "@mui/icons-material/Workspaces";

const Header = () => {
  const [navbar, setNavbar] = useState(false);
  const [sidebar, setSidebar] = useState(false);

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
              <Link className="navlink" to="/">
                <HomeIcon className="navicon" />
                Home
              </Link>
              <Link className="navlink" to="/">
                <InfoIcon className="navicon" />
                About
              </Link>
              <Link className="navlink" to="/">
                <RoomServiceIcon className="navicon" />
                Services
              </Link>
              <Link className="navlink" to="/">
                <WorkspacesIcon className="navicon" />
                Works
              </Link>
              <Link className="navlink" to="/">
                <CallIcon className="navicon" />
                Contact
              </Link>
            </div>
            </div>
          </ClickAwayListener>
        </div>
      </nav>
    </>
  );
};

export default Header;
