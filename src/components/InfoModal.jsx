import { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import emailjs from '@emailjs/browser';
import { Link } from 'react-router-dom';
import IconSend from '../assets/icons/send-svgrepo-com.svg?react';


const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

const OuterModal = styled.div`
  background-color: var(--c-white);
  width: 100%;
  border-radius: 12px;
  box-sizing: border-box;
  max-width: 500px;
  position: relative;
  text-align: center;
  padding: 0.5em; // This creates the white gap
`;

const InnerBorder = styled.div`
  border-radius: 12px;
  box-shadow: inset 0 0 0 1px var(--c-secondary); // Inset border
  padding: 1px; // Adjust as needed to control the border's position
  background: white; // Ensures the gap is white
`;

const ModalContent = styled.div`
  background: white;
  padding: 40px 60px 40px 60px;
  border-radius: 11px; // Slightly smaller to fit inside the inset border
  width: 90%;
  color: var(--c-black);

  h2 {
    margin-bottom: 0;
  }

  p {
    margin-top: 0.5rem;
  }
`;

const ModalTitle = styled.h2`
  padding: 0.2em 0;
  font-size: clamp(1.5rem, 2vw, 2rem);
  white-space: nowrap;
  width: 100%;
  text-align: center;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  z-index: 5;
  padding: 0.5em 1em 0;
  background: transparent;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: var(--c-black);
`;


const SubmitBtn = styled.button`
  background-color: var(--c-secondary);
  color: var(--c-white);
  border: 2px solid var(--c-secondary);
  border-radius: 25px;
  padding: 0.75em 2em;
  font-size: clamp(1rem, 2vw, 1.2rem);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5em;
  margin-top: 0.5em;
  transition: all 0.3s;
  font-family: inherit;
  font-weight: 500;

  width: 100%;

  &:hover {
    background-color: var(--c-white);
    color: var(--c-black);
    
    svg {
      stroke: var(--c-black);
    }
  }

  svg {
    height: 24px;
    width: 24px;
    fill: var(--c-white);
    stroke: none;
    transition: all 0.3s;
  }
`;

function InfoModal({ isOpen, onClose }) {

  if (!isOpen) return null;

  const form = useRef();

  // Handle click outside modal content
  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <Overlay  onClick={handleOverlayClick}>
      <OuterModal>
        <InnerBorder>
          <CloseButton onClick={onClose}>×</CloseButton>
        <ModalContent  onClick={(e) => e.stopPropagation()}>
        <ModalTitle>📣 Big News! 🥳</ModalTitle>
          <p>Wir ziehen in ein <strong>größeres Studio</strong> - direkt am <strong>Herrngarten</strong>.<br/>Zusätzliche Kurszeiten <strong>ab März</strong> verfügbar.</p>
          <SubmitBtn onClick={() => onClose()}>
            Super!
          </SubmitBtn>
      </ModalContent>
      </InnerBorder>
      </OuterModal>
    </Overlay>
  );
}

export default InfoModal;
