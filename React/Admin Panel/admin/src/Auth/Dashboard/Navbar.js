import React from 'react';
import { Navbar, Form, FormControl, Nav, Image } from 'react-bootstrap';
import { FaSearch, FaBell, FaSun, FaGithub } from 'react-icons/fa';

const CustomNavbar = () => {
  return (
    <Navbar bg="light" expand="lg" className="shadow-sm">
      <Navbar.Brand href="#home" className="d-flex align-items-center ">
        <FaSearch className="text-muted me-2" />
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2 border-0" />
        </Form>
      </Navbar.Brand>
      <Nav className="ms-auto  d-flex align-items-center">
        <Nav.Link href="#github">
          <FaGithub className="text-muted" />
        </Nav.Link>
        <Nav.Link href="#notifications">
          <FaBell className="text-muted" />
        </Nav.Link>
        <Nav.Link href="#theme">
          <FaSun className="text-muted" />
        </Nav.Link>
        <Nav.Link href="#profile">
          <Image 
            src="admin/public/profile.jpg" 
            roundedCircle 
            alt="Profile" 
            style={{ width: '40px', height: '40px' }}
          />
        </Nav.Link>
      </Nav>
    </Navbar>
  );
};

export default CustomNavbar;
