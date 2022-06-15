import React,{useState} from 'react'
import "./Loginpage.css"




const Loginpage = () => {
  const[switchtoggled,setswitchtoggled]=useState(true);

  const toggleswitch=()=>{

    setswitchtoggled(!switchtoggled) ;
  }

  return (
    
    <>
      <div class={switchtoggled ? "containerlogin" : "containerlogin sign-up-modelogin"} >
      <div class="forms-containerlogin">
        <div class="signin-signuplogin">
          <form action="#" class="sign-in-formlogin">
            <h2 class="titlelogin">Sign in</h2>
            <div class="input-fieldlogin">
              <i class="fas fa-user"></i>
              <input type="text" placeholder="Username" />
            </div>
            <div class="input-fieldlogin">
              <i class="fas fa-lock"></i>
              <input type="password" placeholder="Password" />
            </div>
            <input type="submit" value="Login" class="btnlogin solidlogin" />
            <p class="social-textlogin">Or Sign in with social platforms</p>
            <div class="social-medialogin">
              <a to="/" class="social-iconlogin">
                <i class="fab fa-facebook-f"></i>
              </a>
              <a href="#" class="social-iconlogin">
                <i class="fab fa-twitter"></i>
              </a>
              <a href="#" class="social-iconlogin">
                <i class="fab fa-google"></i>
              </a>
              <a href="#" class="social-iconlogin">
                <i class="fab fa-linkedin-in"></i>
              </a>
            </div>
          </form>
          <form action="#" class="sign-up-formlogin">
            <h2 class="titlelogin">Sign up</h2>
            <div class="input-fieldlogin">
              <i class="fas fa-user"></i>
              <input type="text" placeholder="Username" />
            </div>
            <div class="input-fieldlogin">
              <i class="fas fa-envelope"></i>
              <input type="email" placeholder="Email" />
            </div>
            <div class="input-fieldlogin">
              <i class="fas fa-lock"></i>
              <input type="password" placeholder="Password" />
            </div>
            <input type="submit" class="btnlogin" value="Sign up" />
            <p class="social-textlogin">Or Sign up with social platforms</p>
            <div class="social-medialogin">
              <a href="#" class="social-iconlogin">
                <i class="fab fa-facebook-f"></i>
              </a>
              <a href="#" class="social-iconlogin">
                <i class="fab fa-twitter"></i>
              </a>
              <a href="#" class="social-iconlogin">
                <i class="fab fa-google"></i>
              </a>
              <a href="#" class="social-iconlogin">
                <i class="fab fa-linkedin-in"></i>
              </a>
            </div>
          </form>
        </div>
      </div>

      <div class="panels-containerlogin">
        <div class="panellogin left-panellogin">
          <div class="contentlogin">
            <h3>New here ?</h3>
            <p>
            Tum Jo Aaye Meri Website Mein Baat Ban Gayi
            Ishq Mazhab Ishq Meri Zaat Ban Gayi!
            </p>
            <button class="btnlogin transparentlogin" id="sign-up-btnlogin" onClick={toggleswitch} >
              Sign up
            </button>
          </div>
          
        </div>
        <div class="panellogin right-panellogin">
          <div class="contentlogin">
            <h3>One of us ?</h3>
            <p>
            Kundi mat khadkao raja
            Seedha login karo raja
            Phool bicha perfume laga ke
            Mood banao taaja taaja


            </p>
            <button class="btnlogin transparentlogin" id="sign-in-btnlogin" onClick={toggleswitch}>
              Sign in
            </button>
          </div>
         
        </div>
      </div>
    </div>

    </>
  )
}

export default Loginpage
