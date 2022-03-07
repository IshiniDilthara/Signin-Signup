import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Axios from "axios";

import './main.css'
import Button from '@material-ui/core/Button';
import * as yup from "yup";
import { ErrorMessage, Formik, Form, Field } from "formik";

const SigninSeller = ()=>{
  const[emailSeller, setEmailSeller]=useState("");
  const[passwordSeller, setPasswordSeller]=useState("");

  const[sellerLoginState,setSellerLoginState]=useState("");
  
     
      const handleLogin = (values) => {
        Axios.post("http://localhost:3001/loginSeller", {
          email: values.email,
          password: values.password,
        }).then((response) => {
          alert(response.data.msg);
        });
      };
      const validationsLogin = yup.object().shape({
        email: yup
          .string()
          .email("invalid email")
          .required("Email is mandatory"),
        password: yup
          .string()
          .min(8, "Password must be at least 8 characters long")
          .required("Password is mandatory"),
      });
    
     
   return (
    <div className="container">
    <h1>Login</h1>
    <Formik
      initialValues={{}}
      onSubmit={handleLogin}
      validationSchema={validationsLogin}
    >
      <Form className="login-form">
        <div className="login-form-group">
          <Field name="email" className="form-field" placeholder="Email" />

          <ErrorMessage
            component="span"
            name="email"
            className="form-error"
          />
        </div>
        {/*Outro campo*/}
        <div className="form-group">
          <Field name="password" className="form-field" placeholder="Password" />

          <ErrorMessage
            component="span"
            name="password"
            className="form-error"
          />
        </div>
        <br/>
        <Button  type="submit" variant="contained" color="primary">
          Login
        </Button>
      </Form>
    </Formik>
            <p >Don't have an account
              <Link to="/signupType"> Sign-up</Link>
              </p>
          
         
      </div>
    );
   }
  
  export default SigninSeller;