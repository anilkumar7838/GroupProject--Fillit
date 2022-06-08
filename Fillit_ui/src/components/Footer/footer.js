import React from "react";
import "./footer.css"

import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer className="footer">
        {/* <div className="container"> */}
          <div className="row">
            <div className="footer-col">
              <h4>Solutions</h4>
              <ul>
                <li>
                  <Link to="/">Form Builder</Link>
                </li>
                <li>
                  <Link to="/">Survey Maker</Link>
                </li>
                <li>
                  <Link to="/">Quiz Maker</Link>
                </li>
                <li>
                  <Link to="/">Store Builder</Link>
                </li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Templates</h4>
              <ul>
                <li>
                  <Link to="/">Application Forms</Link>
                </li>
                <li>
                  <Link to="/">Order Forms</Link>
                </li>
                <li>
                  <Link to="/">Contact Forms</Link>
                </li>
                <li>
                  <Link to="/">Payment Form</Link>
                </li>
                <li>
                  <Link to="/">payment Forms</Link>
                </li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Resources</h4>
              <ul>
                <li>
                  <Link to="/">Blog</Link>
                </li>
                <li>
                  <Link to="/">Help Center</Link>
                </li>
                <li>
                  <Link to="/">Templates</Link>
                </li>
                <li>
                  <Link to="/">Download</Link>
                </li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>follow us</h4>
              <div className="social-links">
                <Link to="/">
                  <FacebookIcon className="foot-icon"/>
                </Link>
                <Link to="/">
                  <TwitterIcon className="foot-icon"/>
                </Link>
                <Link to="/">
                  <InstagramIcon className="foot-icon"/>
                </Link>
                <Link to="/">
                  <LinkedInIcon className="foot-icon"/>
                </Link>
                <Link to="/">
                  <YouTubeIcon className="foot-icon"/>
                </Link>
              </div>
            </div>
          </div>
        {/* </div> */}
      </footer>
    </>
  );
};

export default Footer;
