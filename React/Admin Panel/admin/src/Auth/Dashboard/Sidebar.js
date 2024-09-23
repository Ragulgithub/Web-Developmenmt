import React from 'react';
import { Link } from "react-router-dom";
import { Nav } from 'react-bootstrap';
import { FaUser, FaSignInAlt, FaRegChartBar, FaCogs, FaExclamationTriangle, FaThLarge } from 'react-icons/fa';

const Sidebar = () => {
  return (
    <div className="d-flex flex-column vh-100 bg-light p-3" style={{ width: '250px' }}>
      <h3 className="text-primary mb-4">SNeat</h3>
      <Nav defaultActiveKey="/dashboard" className="flex-column">
        <Nav.Link href="/dashboard" className="text-secondary mb-3">
          <FaThLarge className="me-2" /> Dashboard
        </Nav.Link>
        <h6 className="text-muted mt-3">PAGES</h6>
        <Nav.Link as={Link} to="/signup" className="text-secondary mb-3">
          <FaSignInAlt className="me-2" />Register
        </Nav.Link>
        <Nav.Link as={Link} to="/table" className="text-secondary mb-3">
          <FaUser className="me-2" /> List User
        </Nav.Link>
        
      </Nav>
    </div>
  );
};

export default Sidebar;
