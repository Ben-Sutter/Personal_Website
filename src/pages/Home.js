import React, { useEffect, useState } from "react";
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import introText from '../files/general_text/intro.txt';
import funSectionText from '../files/general_text/funSection.txt';

const Home = () => {
  const [intro, setIntro] = useState('');
  const [funSection, setFunSection] = useState('');

  useEffect(() => {
    fetch(introText)
      .then(response => response.text())
      .then(text => setIntro(text));

    fetch(funSectionText)
      .then(response => response.text())
      .then(text => setFunSection(text));
  }, []);

  return (
    <Container className="py-4">
      <Row className="justify-content-center">
        <Col md={8}>
          <h1 className="display-4 font-weight-bold mb-4 text-center">Welcome to My Website!</h1>
          <p className="lead">{intro}</p>
          <div className="rounded">
            <h2 className="text-2xl font-bold mb-2 text-center">Fun Section</h2>
            <p className="mb-2">{funSection}</p>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;