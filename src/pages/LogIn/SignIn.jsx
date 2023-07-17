import React, { useState, useEffect, useRef } from "react";
import loginStyle from "./login.module.css";
import { Form, FormGroup, Input, Button, Label } from "reactstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/image/logo.png";

const SignIn = () => {
  const [type, setType] = useState("password");
  const [eye,setEye] = useState(true )

  const changeType = () => {
    if (type == "password") {
      setType("text");
      setEye(false)

    } else {
      setType("password");
      setEye(true)
    }
  };

  return (
    <div>
      <div className={loginStyle.container}>
        <div className={loginStyle.navbar}>
          <div>
            <Link to='/'>
              <img src={logo} alt='logo' />
            </Link>
          </div>
          <div className={loginStyle.navRightSide}>
            <p>Not a member?</p>
            <Link to='/signUp'>Sign Up Now</Link>
            <Link to='/'> Go home </Link>
          </div>
        </div>
        <div className={loginStyle.main}>
          <div className={loginStyle.main_leftSide_SignIn}>
            <div>
              <h3>We Offer the Best Products</h3>
            </div>
          </div>
          <div className={loginStyle.main_rightSide}>
            <div className={loginStyle.main_rightSide_form}>
              <Form>
                <FormGroup>
                  <h3>Sign in to eTrade.</h3>
                  <p>Enter your detail below</p>
                </FormGroup>
                <FormGroup>
                  <Label for='exampleEmail'>Email</Label>
                  <Input
                    type='email'
                    name='email'
                    id='exampleEmail'
                    placeholder='annie@example.com'
                  />
                </FormGroup>
                <FormGroup className={loginStyle.passwordSide} >
                  <Label for='examplePassword'>Password</Label>
                  <Input
                    type={type}
                    name='password'
                    id='examplePassword'
                    placeholder='password'
                  />
                  {
                    eye ?  <p onClick={changeType} className={loginStyle.signEyeSee}><i class="fa-solid fa-eye"></i></p>
                    : <p onClick={changeType}className={loginStyle.signEyeSee}> <i class="fa-solid fa-eye-slash"></i></p>
                  }
                 
                </FormGroup>
                <FormGroup className={loginStyle.signIn_forgotpassword_btn}>
                  <Button type='submit' className={loginStyle.createAccount}>
                    Sign In
                  </Button>
                  <Link to=''>Forget Password?</Link>
                </FormGroup>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
