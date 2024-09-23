import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const TopNavbar = () => {

  const handleLogout = () => {
    localStorage.removeItem('authToken'); // Remove token from localStorage
    window.location.href='/login';
  };

  return (
   <>
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand>Admin Panel</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Dashboard</Nav.Link>
            <Nav.Link as={Link} to="/table">Listuser</Nav.Link>
            <Nav.Link as={Link} to="/signup">Register</Nav.Link>
            <button className="nav-link btn btn-link" onClick={handleLogout}>
            Logout
          </button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    {/* <div className='text-center fs-5'>
        Welcome!
    </div> */}
    </>
    
  );
};

export default TopNavbar;
