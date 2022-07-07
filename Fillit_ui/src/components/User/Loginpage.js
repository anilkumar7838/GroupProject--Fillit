import React, { useState, useEffect } from "react";
import Header from "../headerComponent/header";
import "./Loginpage.css";
import Loader from "../utils/Loader/Loader";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { clearErrors, login, register } from "../../actions/userAction";
import { useAlert } from "react-alert";

const Loginpage = () => {
  const [switchtoggled, setswitchtoggled] = useState(true);

  const dispatch = useDispatch();
  const alert = useAlert();
  const navigate = useNavigate();

  const toggleswitch = () => {
    setswitchtoggled(!switchtoggled);
  };

  const userResponse = useSelector((state) => state.user);

  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [avatar, setAvatar] = useState("/Profile.png");
  const [avatarPreview, setAvatarPreview] = useState("/Profile.png");
  const { name, email, password, token } = user;

  const loginSubmit = (e) => {
    e.preventDefault();
    // console.log("loginPage",token);
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
    dispatch(login(loginEmail, loginPassword));
  };

  const registerSubmit = (e) => {
    e.preventDefault();

    const myForm = new FormData();

    myForm.set("name", name);
    myForm.set("email", email);
    myForm.set("password", password);
    myForm.set("avatar", avatar);
    dispatch(register(myForm));
  };

  const registerDataChange = (e) => {
    if (e.target.name === "avatar") {
      const reader = new FileReader();

      reader.onload = () => {
        if (reader.readyState === 2) {
          setAvatarPreview(reader.result);
          setAvatar(reader.result);
        }
      };

      reader.readAsDataURL(e.target.files[0]);
    } else {
      setUser({ ...user, [e.target.name]: e.target.value });
    }
  };

  useEffect(() => {
    if (userResponse.error) {
      alert.error(userResponse.error);
      dispatch(clearErrors());
    }

    if (userResponse.isAuthenticated) {
      navigate(`/myforms`);
    }
  }, [
    dispatch,
    navigate,
    userResponse.error,
    alert,
    userResponse.isAuthenticated,
  ]);

  return (
    <>
      {userResponse.loading ? (
        <Loader />
      ) : (
        <>
          <Header />
          <div
            className={
              switchtoggled
                ? "containerlogin"
                : "containerlogin sign-up-modelogin"
            }
          >
            <div className='forms-containerlogin'>
              <div className='signin-signuplogin'>
                <form onSubmit={loginSubmit} className='sign-in-formlogin'>
                  <h2 className='titlelogin'>Sign in</h2>
                  <div className='input-fieldlogin'>
                    <i className='fas fa-user'></i>
                    <input
                      type='text'
                      placeholder='Username'
                      required
                      value={loginEmail}
                      onChange={(e) => setLoginEmail(e.target.value)}
                    />
                  </div>
                  <div className='input-fieldlogin'>
                    <i className='fas fa-lock'></i>
                    <input
                      type='password'
                      placeholder='Password'
                      required
                      value={loginPassword}
                      onChange={(e) => setLoginPassword(e.target.value)}
                    />
                  </div>
                  <Link to='/password/forgot' style={{ color: "white" }}>
                    Forget Password ?
                  </Link>
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
                <form onSubmit={registerSubmit} className='sign-up-formlogin'>
                  <h2 className='titlelogin'>Sign up</h2>
                  <div className='input-fieldlogin'>
                    <i className='fas fa-user'></i>
                    <input
                      type='text'
                      placeholder='Username'
                      required
                      name='name'
                      value={name}
                      onChange={registerDataChange}
                    />
                  </div>
                  <div className='input-fieldlogin'>
                    <i className='fas fa-envelope'></i>
                    <input
                      type='email'
                      placeholder='Email'
                      required
                      name='email'
                      value={email}
                      onChange={registerDataChange}
                    />
                  </div>
                  <div className='input-fieldlogin'>
                    <i className='fas fa-lock'></i>
                    <input
                      type='password'
                      placeholder='Password'
                      required
                      name='password'
                      value={password}
                      onChange={registerDataChange}
                    />
                  </div>
                  <div id='registerImage' className='input-fieldlogin'>
                    <img src={avatarPreview} alt='Avatar Preview' />
                    <input
                      type='file'
                      name='avatar'
                      accept='image/*'
                      onChange={registerDataChange}
                    />
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

              <div className='panels-containerlogin'>
                <div className='panellogin left-panellogin'>
                  <div className='contentlogin'>
                    <h3>New here ?</h3>
                    <p>
                      Tum Jo Aaye Meri Website Mein Baat Ban Gayi Ishq Mazhab
                      Ishq Meri Zaat Ban Gayi!
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
          </div>
        </>
      )}
    </>
  );
};

export default Loginpage;
