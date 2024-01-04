import React from "react";
import { Link } from "react-router-dom";
import "./Mainbody.css";
import Footer from "../Footer/footer";
import Header from "../headerComponent/header";

import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";
import Section1 from "../ContentPage/section1";
import Section2 from "../ContentPage/section2";
import Section3 from "../ContentPage/section3";
import Contact from "../ContactUs/contact";

const Mainbody = () => {
  return (
    <div>
      <Header />
      <section id='home'>
        <div className='inner-width'>
          <div className='content'>
            <h1>We Provide </h1>
            <div className='sm'>
              <Link to='/' className='icons'>
                <FacebookIcon />
              </Link>
              <Link to='/' className='icons'>
                <TwitterIcon />
              </Link>
              <Link to='/' className='icons'>
                <InstagramIcon />
              </Link>
              <Link to='/' className='icons'>
                <LinkedInIcon />
              </Link>
              <Link to='/' className='icons'>
                <YouTubeIcon />
              </Link>
            </div>
            <div className="buttons">
              <Link to="/myforms">Get Started</Link>
              <a href="#content">Read More</a>
            </div>
          </div>
        </div>
      </section>
      {/* <About/> */}
      <div id="content">
        <Section1/>
      </div>
      <Section2/>
      <Section3/>
      <Contact/>
      {/* <Imageslider slides={SliderData} /> */}
      <Footer />
    </div>
  );
};

export default Mainbody;
