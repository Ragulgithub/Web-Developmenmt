
import React, { useState } from 'react';
import {  Link } from "react-router-dom";
import { ValidateEmail} from './Helper';
import { Form, Button, Card, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Swal from 'sweetalert2';


function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState(false);
  const [emailPatternError, setemailPattern] = useState(false);

  const validate = () => {
    const useremail = email;
    if (useremail) {
      const emailboolean = ValidateEmail(email);
      if (emailboolean) {
        setEmailError(false);
        setemailPattern(false);
        // Show success alert
        Swal.fire({
          title: 'Email Sent!',
          text: 'A password reset link has been sent to your email.',
          icon: 'success',
          confirmButtonText: 'OK'
        });
      } else {
        setEmailError(false);
        setemailPattern(true);
      }
    } else {
      setemailPattern(false);
      setEmailError(true);
    }

  };
  

  const handleInput = (event) => {
    const fieldid = event.target.id;
    const fieldvalue = event.target.value;

    if (fieldid === 'email') {
      setEmail(fieldvalue);
    }
  };
  return (
    <>
    <div className="forgot-password-background">
      <Container className="d-flex justify-content-center align-items-center min-vh-100">
        <Card style={{ width: '22rem', padding: '20px', borderRadius: '10px' }}>
          <Card.Body>
            <h3 className="text-center mb-4">Forgot Password</h3>
            <Form>
              <Form.Group className="mb-3">
                <Form.Control type="email" placeholder="Enter your email" id='email' onChange={handleInput} value={email}/>
                {emailError && <span style={{ color: 'red' }}>*Required</span>}
                {emailPatternError && <span style={{ color: 'red' }}>*Please enter a valid email</span>}
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
                Reset Password
              </Button>

              <div className="text-center mt-3">
                <span className="account-text" style={{ color: '#6c757d' }}>
                  Remember your password? <Link to="/login" className="login-link" style={{ color: '#007bff', fontWeight: 'bold', textDecoration: 'none' }}>
                    Login
                  </Link>
                </span>
              </div>
            </Form>
          </Card.Body>
        </Card>
      </Container>
    </div>
    
      </>
  );
}


export default ForgotPassword;
