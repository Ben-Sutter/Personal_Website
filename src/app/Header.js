// filepath: /Users/bensutter/FR WEBSITES/MY_WEBSITE/personal_website/src/app/Header.js
/**
 * Header component for the website.
 * @returns {JSX.Element} The rendered header component.
 */
import React from "react";
import { Link } from "react-router-dom";
import { Nav, Container, Button } from "react-bootstrap";
import styled from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/index.css";

const StyledHeader = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: #6a0dad; /* Purple color */
  color: #ff00ff; /* Fuchsia color */
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 0.5rem 1rem;
`;

const StyledButton = styled(Button)`
  background-color: #ff00ff; /* Fuchsia color */
  color: #ffccff; /* Light Fuchsia color */
  font-weight: bold;
  border-radius: 20px; /* Rounded corners */
  margin-left: 10px; /* Space between buttons */
  &:hover {
    background-color: #e600e6; /* Darker Fuchsia color */
    color: #ffe6ff; /* Lighter Fuchsia color */
  }
`;

const Header = () => {
  return (
    <StyledHeader>
      <Container className="d-flex flex-column flex-sm-row justify-content-between align-items-center py-3">
        <h1 className="brand">
          <Link to="/" className="text-decoration-none">
            Ben Sutter
          </Link>
        </h1>
        <Nav className="d-flex">
          <Nav.Item>
            <StyledButton
              as={Link}
              to="/blog"
              className="px-2 sm:px-3 py-1 sm:py-2"
            >
              Blog
            </StyledButton>
          </Nav.Item>
          <Nav.Item>
            <StyledButton
              as={Link}
              to="/resume"
              className="px-2 sm:px-3 py-1 sm:py-2"
            >
              Resume
            </StyledButton>
          </Nav.Item>
          <Nav.Item>
            <StyledButton
              as={Link}
              to="/about"
              className="px-2 sm:px-3 py-1 sm:py-2"
            >
              About Me
            </StyledButton>
          </Nav.Item>
          <Nav.Item>
            <StyledButton
              as={Link}
              to="/contact"
              className="px-2 sm:px-3 py-1 sm:py-2"
            >
              Contact
            </StyledButton>
          </Nav.Item>
          <Nav.Item>
            <StyledButton
              as="a"
              href="https://github.com/Ben-Sutter"
              className="px-2 sm:px-3 py-1 sm:py-2"
            >
              GitHub
            </StyledButton>
          </Nav.Item>
        </Nav>
      </Container>
    </StyledHeader>
  );
};

export default Header;
