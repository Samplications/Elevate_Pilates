import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import { Link as RouterLink } from 'react-router-dom';

// Existing styled components
const HeadDiv = styled.div`
  position: relative;
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
  display: flex;
  flex-direction: column;
  position: relative;
`;

const SubHeadNavDiv = styled.div`
  display: grid;
  grid-template-columns: auto auto auto auto auto auto;
  gap: clamp(0.9rem, 2vw, 5rem);
  justify-content: center;
  align-content: center;
  padding: 0 0.5em 0 0.5em;

  @media (max-width: 768px) {
    display: none;
  }
`;

const NavLink = styled(RouterLink)`
  color: var(--c-white);
  text-decoration: none;
  font-size: clamp(0.9rem, 2vw, 1rem);
  padding: 0.4em;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  transition: opacity 0.3s;

  &:hover {
    opacity: 0.7;
  }
`;

const HamburgerButton = styled.button`
  display: none;
  background: none;
  border: none;
  color: var(--c-white);
  font-size: 1.5rem;
  cursor: pointer;
  padding: 0.5rem;
  align-self: flex-end;
  margin-right: 1rem;

  @media (max-width: 768px) {
    display: block;
  }
`;

// Slide-in menu container
const SlideInMenu = styled.div`
  position: fixed;
  top: 0;
  right: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
  width: 70%;
  max-width: 300px;
  height: 100vh;
  background-color: var(--c-accent);
  z-index: 1000;
  transition: right 0.3s ease-in-out;
  box-shadow: -2px 0 5px rgba(0, 0, 0, 0.2);
  padding-top: 4rem;
`;

// Container for navigation links inside the slide-in menu
const SlideInNavLinks = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  padding: 1rem;
`;

// Overlay to cover the rest of the screen
const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 999;
  opacity: ${({ isOpen }) => (isOpen ? '1' : '0')};
  visibility: ${({ isOpen }) => (isOpen ? 'visible' : 'hidden')};
  transition: opacity 0.3s ease-in-out, visibility 0.3s ease-in-out;
`;

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Close menu if clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  return (
    <HeadDiv>
      <AlignDiv>
        <CenterDiv to="/">
          <TitleTopDiv>Elevate.</TitleTopDiv>
          <TitleBottomDiv>PILATES</TitleBottomDiv>
        </CenterDiv>
        <SubHeadDiv>
          <HamburgerButton onClick={toggleMenu}>☰</HamburgerButton>
          <SubHeadNavDiv>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/kurse-buchen">Buchen</NavLink>
            <NavLink to="/workshops">Workshops</NavLink>
            <NavLink to="/online-Kurse">Video Kurse</NavLink>
            <NavLink to="/contact">Kontakt</NavLink>
            <NavLink to="/account">Account</NavLink>
          </SubHeadNavDiv>
        </SubHeadDiv>
      </AlignDiv>

      {/* Overlay to close menu when clicked outside */}
      <Overlay isOpen={isOpen} onClick={toggleMenu} />

      {/* Slide-in menu for mobile */}
      <SlideInMenu isOpen={isOpen} ref={menuRef}>
        <SlideInNavLinks>
          <NavLink to="/" onClick={toggleMenu}>Home</NavLink>
          <NavLink to="/kurse-buchen" onClick={toggleMenu}>Buchen</NavLink>
          <NavLink to="/workshops" onClick={toggleMenu}>Workshops</NavLink>
          <NavLink to="/online-Kurse" onClick={toggleMenu}>Video Kurse</NavLink>
          <NavLink to="/contact" onClick={toggleMenu}>Kontakt</NavLink>
          <NavLink to="/account" onClick={toggleMenu}>Account</NavLink>
        </SlideInNavLinks>
      </SlideInMenu>
    </HeadDiv>
  );
};

export default Header;