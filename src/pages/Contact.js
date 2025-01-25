import React, { useState } from "react";
import { Container, Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Contact = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState({
      ...formState,
      [name]: value
    });
  };

  return (
    <Container className="py-4">
      <h1 className="display-4 font-weight-bold mb-4">Contact</h1>
      <Form name="contact" method="POST" data-netlify="true" netlify>
        {/* Hidden field for Netlify form handling */}
        <input type="hidden" name="form-name" value="contact" />

        {/* Honeypot field to prevent spam submissions */}
        <div style={{ display: "none" }}>
          <Form.Group>
            <Form.Label>Don't fill this out if you're human:</Form.Label>
            <Form.Control type="text" name="bot-field" />
          </Form.Group>
        </div>

        <Form.Group className="mb-3">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            name="name"
            value={formState.name}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            name="email"
            value={formState.email}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Message</Form.Label>
          <Form.Control
            as="textarea"
            name="message"
            rows={3}
            value={formState.message}
            onChange={handleChange}
          />
        </Form.Group>

        <Button variant="primary" type="submit">Submit</Button>
      </Form>
    </Container>
  );
};

export default Contact;