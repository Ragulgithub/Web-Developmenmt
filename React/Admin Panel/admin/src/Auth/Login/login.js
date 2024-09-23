import React from 'react';
import {useState} from 'react'
import { Link} from "react-router-dom";
import{ValidateEmail,ValidatePassword} from './Helper'
import { Form, Button, Card, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Swal from 'sweetalert2';
import axios from 'axios';

function Login() {

    const [email, setEmail] = useState('');
    const [emailError,  setEmailError] = useState(false);
    const[emailPatternError, setemailPattern] = useState(false);

    
    const [password, setPassword] = useState('');
    const [passwordError, setPasswordError] = useState(false);
    const[passwordPatternError, setpasswordPattern] = useState(false);


    const validate = () => {
      let isValid = true;
    
      // Email validation
      if (!ValidateEmail(email)) {
        setEmailError(true);
        setemailPattern(true);
        isValid = false;
      } else {
        setEmailError(false);
        setemailPattern(false);
      }
    
      // Password validation
      if (!password) {
        setPasswordError(true);
        isValid = false;
      } else {
        setPasswordError(false);
      }
    
      // Make the API call only if the form is valid
      if (isValid) {
        const datas = { email, password };
        axios.post('http://localhost:5000/register/login', datas)
          .then((response) => {
            if (response.data.status === 1) {
              console.log(response.data);
              localStorage.setItem('authToken', response.data.token);
              window.location = '/';
            } else {
              Swal.fire({
                title: 'Error!',
                text: response.data.message,
                icon: 'error',
                confirmButtonText: 'OK'
              });
            }
          })
          .catch((error) => {
            console.log('Error', error);
            Swal.fire({
              title: 'Error!',
              text: 'Server error occurred. Please try again later.',
              icon: 'error',
              confirmButtonText: 'OK'
            });
          });
      }
    };
    

    const handleInput=(event)=>{
        const fieldid = event.target.id;
        const fieldvalue = event.target.value;
  
        if(fieldid == 'email'){
          setEmail(fieldvalue)
        }
        if(fieldid == 'password'){
            setPassword(fieldvalue)
        }
    }
  return (
    <div className="login-background">
      <Container className="d-flex justify-content-center align-items-center min-vh-100">
        <Card style={{ width: '22rem', padding: '20px', borderRadius: '10px' }}>
          <Card.Body>
            <h3 className="text-center mb-4">Welcome!</h3>
            <Form>
              <Form.Group className="mb-3">
                <Form.Control type="text" placeholder="Email" onChange={handleInput}  id='email' defaultValue={email} />
                {emailError==true? <span style={{color:'red'}}>*Required</span>:""}
                {emailPatternError==true? <span style={{color:'red'}}>*Please enter vaild email</span>:""}
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Control type="password" placeholder="Password" onChange={handleInput} id='password' defaultValue={password} />
                {passwordError==true? <span style={{color:'red'}}>*Required</span>:""}
                {passwordPatternError==true? <span style={{color:'red'}}>*Please enter strong password </span>:""}

              </Form.Group>

              <Button
                variant="primary"
                className="w-100"
                onClick={validate}
                style={{
                  background: 'linear-gradient(to right, #4facfe, #00f2fe)',
                  border: 'none',
                }}
              >
                Login
              </Button>

              <div className="text-center mt-3">
                <Link to="/forgotpassword" className="forgot-password" style={{ color: '#007bff', textDecoration: 'none' }}>
                  Forgot Password?
                </Link>
              </div>
              <div className="text-center mt-2">
                <span className="account-text" style={{ color: '#6c757d' }}>
                  Don't have an account? <Link to="/signup" className="sign-up" style={{ color: '#007bff', fontWeight: 'bold', textDecoration: 'none' }}>
                    Sign up
                  </Link>
                </span>
              </div>
            </Form>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
}

export default Login;