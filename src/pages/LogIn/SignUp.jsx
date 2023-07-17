import React, { useState, useEffect } from "react";
import loginStyle from "./login.module.css";
import { Form, FormGroup, Input, Button, Label } from "reactstrap";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/image/logo.png";

const SignUp = () => {
  const navigate = useNavigate();
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
            <p>Already a member?</p>
            <Link to='/signIn'>Sign In</Link>
            <Link to='/'>go Home</Link>
          </div>
        </div>
        <div className={loginStyle.main}>
          <div className={loginStyle.main_leftSide}>
            <div>
              <h3>We Offer the Best Products</h3>
            </div>
          </div>
          <div className={loginStyle.main_rightSide}>
            <div className={loginStyle.main_rightSide_form}>
              <Form>
                <FormGroup>
                  <h3>I'm New Here</h3>
                  <p>Enter your detail below</p>
                </FormGroup>
                <FormGroup>
                  <Label for='exampleUserName'>User Name</Label>
                  <Input
                    type='text'
                    name='userName'
                    id='userName'
                    placeholder='anniemario'
                  />
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
                <Button type='submit' className={loginStyle.createAccount}>
                  Create Account
                </Button>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
