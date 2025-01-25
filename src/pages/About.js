/**
 * Renders the About page component.
 * 
 * @returns {JSX.Element} The rendered About page component.
 */
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const About = () => {
  return (
    <Container className="py-4">
      <Row className="justify-content-center">
        <Col md={8}>
          <h1 className="display-4 font-weight-bold mb-4">About Me</h1>
          <p className="lead">Welcome to my personal website! My name is Ben Sutter.</p>
        </Col>
      </Row>
    </Container>
  );
};

export default About;