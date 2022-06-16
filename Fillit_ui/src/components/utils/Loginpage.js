import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Loginpage.css";

const Loginpage = () => {
  const [switchtoggled, setswitchtoggled] = useState(true);

  const toggleswitch = () => {
    setswitchtoggled(!switchtoggled);
  };

  return (
    <>
      <div
        className={
          switchtoggled ? "containerlogin" : "containerlogin sign-up-modelogin"
        }
      >
        <div className='forms-containerlogin'>
          <div className='signin-signuplogin'>
            <form action='/' className='sign-in-formlogin'>
              <h2 className='titlelogin'>Sign in</h2>
              <div className='input-fieldlogin'>
                <i className='fas fa-user'></i>
                <input type='text' placeholder='Username' />
              </div>
              <div className='input-fieldlogin'>
                <i className='fas fa-lock'></i>
                <input type='password' placeholder='Password' />
              </div>
              <input
                type='submit'
                value='Login'
                className='btnlogin solidlogin'
              />
              <p className='social-textlogin'>
                Or Sign in with social platforms
              </p>
              <div className='social-medialogin'>
                <Link to='/' className='social-iconlogin'>
                  <i className='fab fa-facebook-f'></i>
                </Link>
                <Link to='/' className='social-iconlogin'>
                  <i className='fab fa-twitter'></i>
                </Link>
                <Link to='/' className='social-iconlogin'>
                  <i className='fab fa-google'></i>
                </Link>
                <Link to='/' className='social-iconlogin'>
                  <i className='fab fa-linkedin-in'></i>
                </Link>
              </div>
            </form>
            <form action='/' className='sign-up-formlogin'>
              <h2 className='titlelogin'>Sign up</h2>
              <div className='input-fieldlogin'>
                <i className='fas fa-user'></i>
                <input type='text' placeholder='Username' />
              </div>
              <div className='input-fieldlogin'>
                <i className='fas fa-envelope'></i>
                <input type='email' placeholder='Email' />
              </div>
              <div className='input-fieldlogin'>
                <i className='fas fa-lock'></i>
                <input type='password' placeholder='Password' />
              </div>
              <input type='submit' className='btnlogin' value='Sign up' />
              <p className='social-textlogin'>
                Or Sign up with social platforms
              </p>
              <div className='social-medialogin'>
                <Link to='/' className='social-iconlogin'>
                  <i className='fab fa-facebook-f'></i>
                </Link>
                <Link to='/' className='social-iconlogin'>
                  <i className='fab fa-twitter'></i>
                </Link>
                <Link to='/' className='social-iconlogin'>
                  <i className='fab fa-google'></i>
                </Link>
                <Link to='/' className='social-iconlogin'>
                  <i className='fab fa-linkedin-in'></i>
                </Link>
              </div>
            </form>
          </div>
        </div>

        <div className='panels-containerlogin'>
          <div className='panellogin left-panellogin'>
            <div className='contentlogin'>
              <h3>New here ?</h3>
              <p>
                Tum Jo Aaye Meri Website Mein Baat Ban Gayi Ishq Mazhab Ishq
                Meri Zaat Ban Gayi!
              </p>
              <button
                className='btnlogin transparentlogin'
                id='sign-up-btnlogin'
                onClick={toggleswitch}
              >
                Sign up
              </button>
            </div>
          </div>
          <div className='panellogin right-panellogin'>
            <div className='contentlogin'>
              <h3>One of us ?</h3>
              <p>
                Kundi mat khadkao raja Seedha login karo raja Phool bicha
                perfume laga ke Mood banao taaja taaja
              </p>
              <button
                className='btnlogin transparentlogin'
                id='sign-in-btnlogin'
                onClick={toggleswitch}
              >
                Sign in
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Loginpage;
