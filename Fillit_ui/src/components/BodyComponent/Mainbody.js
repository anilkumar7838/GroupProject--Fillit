import React from "react";
import { Link } from "react-router-dom";
import "./Mainbody.css";
// import About from "../About/index";
import Imageslider from "../Imageslider/imageslider";
import { SliderData } from "../Imageslider/SliderData";
import Footer from "../Footer/footer";
import Header from "../headerComponent/header";

import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';

const Mainbody = () => {
  return (
    <div>
      <Header />
      <section id="home">
        <div className="inner-width">
          <div className="content">
            <h1>We Provide </h1>
            <div className="sm">
              <Link to="/" className="icons"><FacebookIcon/></Link>
              <Link to="/" className="icons"><TwitterIcon/></Link>
              <Link to="/" className="icons"><InstagramIcon/></Link>
              <Link to="/" className="icons"><LinkedInIcon/></Link>
              <Link to="/" className="icons"><YouTubeIcon/></Link>
            </div>
            <div className="buttons">
              <Link to="/">Get Started</Link>
              <Link to="/">Read More</Link>
            </div>
          </div>
        </div>
      </section>
      {/* <About/> */}
      <Imageslider slides={SliderData} />
      <Footer />
    </div>
  );
};

export default Mainbody;
