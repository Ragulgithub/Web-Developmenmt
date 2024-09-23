import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { ValidateEmail, ValidatePassword, capitalize } from './Helper';
import { Form, Button, Card, Container, InputGroup } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import Swal from 'sweetalert2';
import axios from 'axios';


function Signup() {
  const [name, setName] = useState("");
  const [nameError, setNameError] = useState(false);

  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState(false);
  const [emailPatternError, setemailPattern] = useState(false);

  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState(false);
  const [passwordPatternError, setpasswordPattern] = useState(false);
  const [showPassword, setShowPassword] = useState(false); // State for password visibility

  const [cpassword, setCPassword] = useState('');
  const [cpasswordError, setCPasswordError] = useState(false);
  const [cpasswordPatternError, setCpasswordPattern] = useState(false);
  const [showCPassword, setShowCPassword] = useState(false); // State for confirm password visibility
  const validate = () => {
    let isValid = true;
  
    // Name validation
    const username = name;
    if (username) {
      setNameError(false);
    } else {
      setNameError(true);
      isValid = false;
    }
  
    // Email validation
    const useremail = email;
    if (useremail) {
      const emailboolean = ValidateEmail(email);
      if (emailboolean) {
        setEmailError(false);
        setemailPattern(false);
      } else {
        setEmailError(false);
        setemailPattern(true);
        isValid = false;
      }
    } else {
      setemailPattern(false);
      setEmailError(true);
      isValid = false;
    }
  
    // Password validation
    const userpassword = password;
    if (userpassword) {
      const passwordboolean = ValidatePassword(password);
      if (passwordboolean) {
        setPasswordError(false);
        setpasswordPattern(false);
      } else {
        setpasswordPattern(true);
        setPasswordError(false);
        isValid = false;
      }
    } else {
      setpasswordPattern(false);
      setPasswordError(true);
      isValid = false;
    }
  
    // Confirm Password Validation
    if (cpassword) {
      if (cpassword === password) {
        setCPasswordError(false);
        setCpasswordPattern(false);
      } else {
        setCPasswordError(false);
        setCpasswordPattern(true);
        isValid = false;
      }
    } else {
      setCPasswordError(true);
      setCpasswordPattern(false);
      isValid = false;
    }
  
    // If all validations pass, show success alert
    if (isValid) {
      Swal.fire({
        title: 'Success!',
        text: 'You have registered successfully!',
        icon: 'success',
        confirmButtonText: 'OK',
      });
    
      const datas = { name, email, password };
      
      axios.post('http://localhost:5000/register/register', datas)
        .then((response) => {
          console.log(response.data);
          localStorage.setItem('authToken', response.data.token);
          window.location = '/';
        })
        .catch((error) => {
          console.log('Error', error);
        });
    }
    
  };
  

  const handleInput = (event) => {
    const fieldid = event.target.id;
    const fieldvalue = event.target.value;

    if (fieldid === 'email') {
      setEmail(fieldvalue);
    }
    if (fieldid === 'password') {
      setPassword(fieldvalue);
    }
    if (fieldid === 'cpassword') {
      setCPassword(fieldvalue);
    }
    if (fieldid === 'name') {
      setName(capitalize(fieldvalue)); 
    }
  };

  return (
    <div className="signup-background">
      <Container className="d-flex justify-content-center align-items-center min-vh-100">
        <Card style={{ width: '22rem', padding: '20px', borderRadius: '10px' }}>
          <Card.Body>
            <h3 className="text-center mb-4">Register</h3>
            <Form>
              <Form.Group className="mb-3">
                <Form.Control type="text" placeholder="Name" id="name" value={name} onChange={handleInput} />
                {nameError && <span style={{ color: 'red' }}>*Required</span>}
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Control type="email" placeholder="Email" id='email' onChange={handleInput} value={email} />
                {emailError && <span style={{ color: 'red' }}>*Required</span>}
                {emailPatternError && <span style={{ color: 'red' }}>*Please enter a valid email</span>}
              </Form.Group>

              <Form.Group className="mb-3">
                <InputGroup>
                  <Form.Control
                    type={showPassword ? 'text' : 'password'}
                    placeholder="Password"
                    id='password'
                    value={password}
                    onChange={handleInput}
                  />
                  <Button variant="outline-secondary" onClick={() => setShowPassword(!showPassword)}>
                    <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
                  </Button>
                </InputGroup>
                {passwordError && <span style={{ color: 'red' }}>*Required</span>}
                {passwordPatternError && <span style={{ color: 'red' }}>*Please enter a strong password</span>}
              </Form.Group>

              {passwordPatternError && (
                <span style={{ color: 'red' }}>
                  1. Password must be min 7 & max 15 <br />
                  2. One upper case (A-Z) <br />
                  3. One lower case (a-z) <br />
                  4. Special characters (!@#$%^&*)
                </span>
              )}

              <Form.Group className="mb-3">
                <InputGroup>
                  <Form.Control
                    type={showCPassword ? 'text' : 'password'}
                    placeholder="Confirm Password"
                    id='cpassword'
                    value={cpassword}
                    onChange={handleInput}
                  />
                  <Button variant="outline-secondary" onClick={() => setShowCPassword(!showCPassword)}>
                    <FontAwesomeIcon icon={showCPassword ? faEyeSlash : faEye} />
                  </Button>
                </InputGroup>
                {cpasswordError && <span style={{ color: 'red' }}>*Required</span>}
                {cpasswordPatternError && <span style={{ color: 'red' }}>*Passwords do not match</span>}
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
                Signup
              </Button>


              <div className="text-center mt-3">
                <span className="account-text" style={{ color: '#6c757d' }}>
                  Already have an account? <Link to="/login" className="login-link" style={{ color: '#007bff', fontWeight: 'bold', textDecoration: 'none' }}>
                    Login
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

export default Signup;
