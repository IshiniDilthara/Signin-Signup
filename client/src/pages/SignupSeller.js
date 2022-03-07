
import React, { useState, useEffect } from "react";
import Axios from "axios";
import './main.css'
import Button from '@material-ui/core/Button';
import * as yup from "yup";
import { ErrorMessage, Formik, Form, Field } from "formik";
const SignupSeller = ({ submitForm }) => {
  
   
    
    const [trackerList, setTrackerList] = useState([]);
  
 
    const addSeller = (values) => {
      Axios.post("http://localhost:3001/sellerReg", {
        fname:values.fname,
        lname:values.lname,
        contactno:values.contactno,
        email: values.email,
        password: values.password,
      }).then((response) => {
     
        alert(response.data.msg);
      });
    };
  

    const getTrackers = () => {
     
      Axios.get("http://localhost:3001/trackers", {}).then((response) => {
      
        setTrackerList(response.data);
      });
    };
  

    const validationsRegister = yup.object().shape({
      fname: yup
      .string()
      .required('First name is required'),
      lname: yup
      .string()
      .required('Last name is required'),
      contactno: yup
      .string()
      .min(10, "Phone number must be at least 10 characters long")
      .required('A phone number is required'),
      email: yup
        .string()
        .email("invalid email")
        .required("Email is mandatory"),
      password: yup
        .string()
        .min(8, "Password must be at least 8 characters long")
        .required("Password is mandatory"),
      confirmation: yup
        .string()
        .oneOf([yup.ref("password"), null], "The passwords are different")
        .required("Password confirmation is mandatory"),
    });
  
    return (
      <div className="container">
      
          <h1>Sign up as Seller</h1>
          <Formik
        initialValues={{}}
        onSubmit={addSeller}
        validationSchema={validationsRegister}
      >
          
        <Form className="register-form">
          <div className="register-form-group">
            <Field name="fname" className="form-field" placeholder="First name"  
             
            />

            <ErrorMessage
              component="span"
              name="fname"
              className="form-error"
            />
          </div>
          <div className="register-form-group">
            <Field name="lname" className="form-field" placeholder="Last name" 
            
            />
            <ErrorMessage
              component="span"
              name="lname"
              className="form-error"
            />
           
          </div>
          <div className="register-form-group">
            <Field name="contactno" className="form-field" placeholder="Contact number"   
            
            />

            <ErrorMessage
              component="span"
              name="contactno"
              className="form-error"
            />
          </div>

          <div className="register-form-group">
            <Field name="email" className="form-field" placeholder="Email" 
            
            
            />

            <ErrorMessage
              component="span"
              name="email"
              className="form-error"
            />
          </div>

          <div className="form-group">
            <Field name="password" className="form-field" placeholder="Password"  
            
           
            />

            <ErrorMessage
              component="span"
              name="password"
              className="form-error"
            />
          </div>

          <div className="form-group">
            <Field
              name="confirmation"
              className="form-field"
              placeholder="Confirm password"
            
            />

            <ErrorMessage
              component="span"
              name="confirmation"
              className="form-error"
            />
          </div>
<br/>
          <Button type="submit" variant="contained" color="primary" >
              Sign up
            </Button>
        </Form>
      </Formik>
      </div>
     
    );
        }
export default SignupSeller;
