import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
// import Sidebar from './Sidebar';
// import CustomNavbar from './Navbar'; 

const Dashboard = () => {
  return (
    <div className="d-flex">
      {/* <Sidebar /> */}
      <div style={{ flex: 1 }}>
        {/* <CustomNavbar /> */}
        <Container fluid className="p-4">
          <Row>
            <Col>
              <h2 className="text-primary">User Overview! 🎉</h2>
            </Col>
          </Row>
          <Row className="mt-4">
            <Col md={3}>
              <Card className="shadow-sm">
                <Card.Body>
                  <h5 className="text-muted">Active User</h5>
                  <h3 className="text-success">12</h3>
                </Card.Body>
              </Card>
            </Col>
            <Col md={3}>
              <Card className="shadow-sm">
                <Card.Body>
                  <h5 className="text-muted">Inactive User</h5>
                  <h3 className="text-primary">8</h3>
                </Card.Body>
              </Card>
            </Col>
            <Col md={3}>
              <Card className="shadow-sm">
                <Card.Body>
                  <h5 className="text-muted">Total</h5>
                  <h3 className="text-danger">20</h3>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Dashboard;

