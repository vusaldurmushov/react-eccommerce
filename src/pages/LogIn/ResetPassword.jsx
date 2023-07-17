import React, { useState, useEffect } from "react";
import loginStyle from "./login.module.css";
import { Form, FormGroup, Input, Button, Label } from "reactstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/image/logo.png";

const ResetPassword = () => {

  const navigate = useNavigate();



  return (
    <div>
      <div className={loginStyle.container}>
        <div className={loginStyle.navbar}>
          <div>
            <Link to="/">
              <img src={logo} alt="logo" />
            </Link>
          </div>
          <div className={loginStyle.navRightSide}>
            <p>Already a member?</p>
            <Link to="/signIn">Sign In</Link>
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
              <Form >
                <FormGroup>
                  <h3>Reset Password</h3>
                </FormGroup>
                <FormGroup>
                  <Label for="examplePassword">New Password</Label>
                  <Input type="password" name="password" id="examplePassword" placeholder="password" />
                </FormGroup>
                <FormGroup>
                  <Label for="examplePassword">Confirm Password</Label>
                  <Input type="password" name="password" id="examplePassword" placeholder="password"  />
                </FormGroup>
                <Button type="submit" className={loginStyle.createAccount}>
                  Reset Password
                </Button>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
