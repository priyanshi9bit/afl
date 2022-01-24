import React, { Component } from "react";
import "./Login.css";
import { Link } from "react-router-dom";
import { Spinner } from "react-bootstrap";
import facebookLogo from './Images/facebook.svg';
import googleLogo from './Images/google.svg';
import LoginProto from './Images/LoginProto.svg';
import Afl from './Images/AFL.svg';

class Login extends Component {
  render() {
    return (
      <div className="login_wrapper">
        <div className="left_content">
          <div className="header_absolute">
            <div>Don't have an account?</div>
             {/* <Link to="/signup/1"> */}
              <button className="outlined">Sign Up</button>
             {/* </Link>  */}
          </div>
          <img src={LoginProto}></img>
        </div>
         <div className="right_content">
          <div className="signuptext">Sign in to your Account</div>
          <div className="signin_form">
            <form>
              <input
                className="outline_def"
                id="userName"
                required
                placeholder="username"
              ></input>
              <input
                className="outline_def"
                id="password"
                required
                placeholder="password"
                type="password"
              ></input>
               <button className="filled">
                  {/* {this.state.loading?(
                    <Spinner
                  as="span"
                  animation="border"
                  size="sm"
                  role="status"
                  aria-hidden="true"
                />
                  ):('')} */}
                
                <span style={{marginLeft:'10px'}}>Sign In</span>
              </button> 
            </form>
          </div>
          <div className="other_opts">
            <div>- or Sign In with -</div>
            <div className="other_opts_opts">
              <div className="google_opt" tabIndex={1}>
                <img src={googleLogo}></img>
                <div>Google</div>
              </div>
              <div className="facebook_opt" tabIndex={1}>
                <img src={facebookLogo}></img>
                <div>Facebook</div>
              </div>
              <div className="afl" tabIndex={1} style={{marginLeft:'40%'}}>
                <img src={Afl}></img>
              </div>
            </div>
          </div>
          <div className="small_screen_signup">
            Don’t have an account?{" "}
             {/* <Link to="/signup/1"> */}
              <u>Sign Up</u>
            {/* </Link>  */}
          </div>
        </div> 
      </div>
    );
  }
}
export default Login;

