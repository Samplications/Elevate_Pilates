import React from 'react'
import styled from 'styled-components';
import { BrowserView, MobileView } from 'react-device-detect';
import { Link as RouterLink } from 'react-router-dom';
// import { Link as RouterLink } from 'react-router-dom';
// import logo from '../assets/logo.png';



const HeadDiv = styled.div`
  // position: fixed;
  top: 0;
  width: 100vw;
  z-index: 1000;
  background-color: var(--c-dark);
  display: flex;
  justify-content: center;
  box-shadow: 0 1px 0.4em var(--c-shadow);

  @media (max-width: 767px) {
    // Placeholder, I know its gotta be filled at some point
  }

`;

const TitleTopDiv = styled.h1`
    margin-bottom: 0;
    text-align: center;

    font-family: var(--f-elevate);
    color: var(--c-secondary);
    font-weight: 500;
    font-size: 11rem;
    margin:0;
    margin-bottom:-30px;

    text-shadow:
    0 0 8px rgba(255, 255, 255, 0.16),
    0 0 16px rgba(255, 197, 231, 0.1);

     @media (max-width: 767px) {
        font-size: 9rem;
      }
    
`;
const TitleBottomDiv = styled.h1`
    margin:0;
    text-align: center;
    font-size: 3rem;

    font-weight: 400;
    font-family: "Roboto Flex";

    letter-spacing: 15px;
    color: var(--c-pilates);

    @media (max-width: 767px) {
        font-size: 2rem;
      }
`;


const CenterDiv = styled(RouterLink)`
  flex-wrap: no-wrap;
  display: flex;
  flex-direction: column;
  padding: 2em 0;
  align-items: center;
`;

const AlignDiv = styled.div`
  width: 100%;
`;

const SubHeadDiv = styled.div`
  background-color: var(--c-accent);
  color: var(--c-transparent-text);
  width: 100%;
  margin:0;
  font-style: italic;

  display: flex;
  flex-direction: column;
  

  p{
    margin:0;
    padding: 0.5em;
    text-align:center;
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
  )
}

export default Header
