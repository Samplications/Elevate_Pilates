import React, { useState, useEffect, useRef } from 'react';
import styled, { keyframes } from 'styled-components';
import pilates_class from '../assets/pilates_class.jpg';

const FullWidthImageContainer = styled.div`
  position: relative;
  height: 100vh;
  width: 100%;
  overflow: hidden;
`;

const BackgroundImage = styled.div`
  width: 100%;
  height: 100%;
  background-image: url(${props => props.src});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  filter: brightness(0.6);
  transition: opacity 0.5s ease-in-out;
  opacity: ${props => (props.isVisible ? 1 : 0)};
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translate(-50%, -40%);
  }
  to {
    opacity: 1;
    transform: translate(-50%, -50%);
  }
`;

const OverlayText = styled.div`
  position: absolute;
  top: 30%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  text-align: center;
  width: 90%;
  max-width: 1800px;
  padding: 0 1em;
  box-sizing: border-box;
  animation: ${fadeIn} 1.5s ease-in-out;

  h2 {
    margin: 0;
    line-height: 1.3;
    text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.9);
    font-size: clamp(1rem, 3vw, 2.5rem);
    font-weight: 400;

    @media (max-width: 767px) {
      font-size: clamp(0.9rem, 4vw, 1.5rem);
      br {
        display: none;
      }
    }
  }
`;

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  return (
    <FullWidthImageContainer ref={containerRef}>
      {/* Hidden img for SEO and accessibility */}
      <img
        src={pilates_class}
        alt="Energetic Pilates class with participants performing exercises on mats in a bright Darmstadt studio"
        loading="lazy"
        decoding="async"
        style={{ display: 'none' }}
      />

      {/* Lazy-loaded CSS Background */}
      <BackgroundImage
        src={pilates_class}
        isVisible={isVisible}
        aria-hidden="true"
      />

      {/* Overlay Text */}
      <OverlayText>
        <h2>
          "Ein Workout ist mehr als nur Schweiß, der die Stirn runterläuft —<br />
          Es ist die Zeit in Deinem Alltag, die Du nutzt, um in Dein verbessertes Ich zu investieren."
        </h2>
      </OverlayText>
    </FullWidthImageContainer>
  );
};

export default Hero;