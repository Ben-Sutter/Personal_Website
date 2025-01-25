import React, { useEffect, useState } from "react";
import { Container, Row, Col } from 'react-bootstrap';
import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';
import introText from '../files/general_text/intro.txt';
import funSectionText from '../files/general_text/funSection.txt';
import pic from "../files/pictures/framed_buffalo_pic.png";

const StyledContainer = styled(Container)`
  display: flex;
  justify-content: center;
  padding: 2rem;
`;

const StyledContent = styled.div`
  width: 100%;
  padding: 2rem;
  display: flex;
  flex-wrap: wrap;
  @media (min-width: 768px) {
    flex-wrap: nowrap;
  }
`;

const StyledTextSection = styled.div`
  width: 100%;
  color: #4b0082; /* Purple color */
  @media (min-width: 768px) {
    width: 70%;
    padding-right: 2rem;
  }
`;

const StyledImageSection = styled.div`
  width: 100%;
  @media (min-width: 768px) {
    width: 30%;
  }
`;

const StyledImage = styled.img`
  width: 100%;
  height: auto;
`;

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
    <StyledContainer>
      <StyledContent>
        <StyledTextSection>
          <h1 className="text-4xl font-bold mb-4 text-center">Welcome to My Website!</h1>
          <p className="mb-8">{intro}</p>
          <div className="rounded">
            <h2 className="text-2xl font-bold mb-2 text-center">Fun Section</h2>
            <p className="mb-2">{funSection}</p>
          </div>
        </StyledTextSection>
        <StyledImageSection>
          <StyledImage src={pic} alt="my pic" />
        </StyledImageSection>
      </StyledContent>
    </StyledContainer>
  );
};

export default Home;