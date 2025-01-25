/**
 * Renders the Resume page component.
 * @returns {JSX.Element} The rendered Resume page component.
 */
import React from "react";
import { Container, Row, Col, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import resume from "../files/resume.pdf"; // Import the PDF

const Resume = () => {
  return (
    <Container fluid className="min-vh-100 d-flex align-items-center bg-light">
      <Row className="justify-content-center w-100">
        <Col md={10} lg={8}>
          <Card className="shadow-lg">
            <Card.Body className="text-center">
              <Card.Title className="display-4 font-weight-bold mb-4">My Resume</Card.Title>
              <Card.Text className="lead mb-4">
                View my resume below. Thanks for checking it out!
              </Card.Text>
              <embed
                src={resume}
                type="application/pdf"
                width="100%"
                height="700px"
                className="border rounded"
              />
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Resume;