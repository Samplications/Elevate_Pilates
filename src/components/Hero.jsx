import React from 'react';
import styled, { keyframes }  from 'styled-components'
import pilates_class from '../assets/pilates_class.jpg';

const FullWidthImageContainer = styled.div`
  position: relative;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
`;

const BackgroundImage = styled.div`
  width: 100%;
  height: 100%;
  background-image: url(${pilates_class});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  filter: brightness(0.6); // Optional: Darken the image for better text contrast
`;

const fadeIn = keyframes`
  from { opacity: 0; transform: translate(-50%, -40%); }
  to { opacity: 1; transform: translate(-50%, -50%); }
`;

const OverlayText = styled.div`
  position: absolute;
  top: 30%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  text-align: center;
  width: 90%;
  padding: 0 1em;
  box-sizing: border-box;
  animation: ${fadeIn} 1.5s ease-in-out;

  h2 {
    margin: 0;
    line-height: 1.2;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.8); // Improves readability
    font-size: clamp(1.5rem, 4vw, 3rem); // Scales between 1.5rem and 3.5rem based on viewport width

    @media (max-width: 767px) {
      font-size: clamp(1.2rem, 6vw, 2.5rem); // Adjusts scaling for mobile
    }
  }
`;

const Hero = () => {
  return (
    <FullWidthImageContainer>
      <BackgroundImage alt="Pilates class" />
      <OverlayText>
        <h2>
          "Ein Workout ist mehr als nur Schweiß, der die Stirn runterläuft —<br />Es ist die Zeit in Deinem Alltag, die Du nutzt, um in Dein verbessertes Ich zu investieren."
        </h2>
      </OverlayText>
    </FullWidthImageContainer>
  );
};

export default Hero;
