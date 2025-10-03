import React from 'react';
import styled from 'styled-components';
import { Link as RouterLink } from 'react-router-dom';

const HeadDiv = styled.div`
  top: 0;
  width: 100%;
  z-index: 1000;
  background-color: var(--c-dark);
  display: flex;
  justify-content: center;
  box-shadow: 0 1px 0.4em var(--c-shadow);
`;

const TitleTopDiv = styled.h1`
  text-align: center;
  font-family: var(--f-elevate);
  color: var(--c-secondary);
  font-weight: 500;
  font-size: clamp(5rem, 15vw, 11rem);
  margin: 0;
  margin-bottom: clamp(-15px, -2vw, -30px);
  text-shadow:
    0 0 8px rgba(255, 255, 255, 0.16),
    0 0 16px rgba(255, 197, 231, 0.1);
`;

const TitleBottomDiv = styled.h1`
  margin: 0;
  text-align: center;
  font-size: clamp(1.5rem, 5vw, 3rem);
  font-weight: 400;
  font-family: "Roboto Flex";
  letter-spacing: clamp(5px, 2vw, 15px);
  color: var(--c-pilates);
`;

const CenterDiv = styled(RouterLink)`
  flex-wrap: nowrap;
  display: flex;
  flex-direction: column;
  padding: clamp(1em, 3vw, 2em) 0;
  align-items: center;
  text-decoration: none;
  width: 100%;
`;

const AlignDiv = styled.div`
  width: 100%;
  max-width: 100%;
  overflow: hidden;
`;

const SubHeadDiv = styled.div`
  background-color: var(--c-accent);
  color: var(--c-transparent-text);
  width: 100%;
  margin: 0;
  font-style: italic;
  display: flex;
  flex-direction: column;

  p {
    margin: 0;
    padding: 0.5em;
    text-align: center;
  }
`;

const Header = () => {
  return (
    <HeadDiv>
      <AlignDiv>
        <CenterDiv to="/">
          <TitleTopDiv>Elevate.</TitleTopDiv>
          <TitleBottomDiv>PILATES</TitleBottomDiv>
        </CenterDiv>
        <SubHeadDiv>
          <p></p>
        </SubHeadDiv>
      </AlignDiv>
    </HeadDiv>
  );
};

export default Header;
