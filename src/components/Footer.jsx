import React from 'react';
import styled from 'styled-components';
import { Link as RouterLink } from 'react-router-dom';

const FooterLink = styled(RouterLink)`
  color: var(--c-transparent-text);
  text-decoration: none;
  transition: opacity 0.3s;

  &:hover {
    opacity: 0.7;
  }
`;

const ButtonLink = styled(RouterLink)`
  border: 2px solid var(--c-secondary);
  border-radius: 10px;
  padding: 0.6em 1.2em;
  font-size: clamp(0.7rem, 2vw, 0.8rem);
  font-weight: 500;
  font-family: inherit;
  background-color: var(--c-secondary);
  color: var(--c-white);
  cursor: pointer;
  transition: 0.3s;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: fit-content;

  &:hover {
    background-color: var(--c-white);
    color: var(--c-black);
  }
`;

const FooterContainer = styled.footer`
  background-color: var(--c-dark);
  color: white;
  padding: 0;
  width: 100%;
  box-sizing: border-box;
  margin-top: auto;
`;

const FooterContent = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1200px;
  margin: 0 auto;
  color: var(--c-transparent-text);
  padding: clamp(1em, 3vw, 2em);
`;

const FooterTop = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
  gap: 1rem;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const FooterSection = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  &:last-child {
    align-items: flex-end;
    
    @media (max-width: 768px) {
      align-items: flex-start;
      width: 100%;
    }
  }

  p {
    margin: 0;
    font-size: clamp(0.8rem, 2vw, 0.9rem);
  }

  h3 {
    margin: 0;
    font-size: clamp(1rem, 2.5vw, 1.2rem);
  }
`;

const FooterLogo = styled.div`
  display: flex;
  align-items: center;
`;

const MapContainer = styled.div`
  width: 100%;
  height: clamp(180px, 30vw, 200px);
  background-color: #ddd;
  margin: 1rem 0;
  border-radius: 10px;
  overflow: hidden;

  iframe {
    width: 100%;
    height: 100%;
    border: 0;
  }
`;

const FooterBottom = styled.div`
  text-align: center;
  padding-top: 1rem;
  border-top: 1px solid rgba(255, 255, 255, 0.2);
  margin-top: 1rem;

  p {
    margin: 0.5em 0;
    font-size: clamp(0.65rem, 1.8vw, 0.7rem);
  }
`;

const TransitionBottom = styled.div`
  background-color: var(--c-accent);
  color: var(--c-transparent-text);
  width: 100%;
  height: 10px;
  margin: 0;
`;

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <FooterContainer>
      <TransitionBottom />
      <FooterContent>
        <FooterTop>
          <FooterSection>
            <FooterLogo>
              <h3>Elevate Pilates</h3>
            </FooterLogo>
            <p>By Julia Delarue</p>
          </FooterSection>
          <FooterSection>
            <ButtonLink to="/Contact">Kontakt</ButtonLink>
          </FooterSection>
        </FooterTop>

        <MapContainer>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4369.410266008517!2d8.642441597087087!3d49.87208145532613!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47bd7062a35062f9%3A0x5b3e36095d9f0a69!2sRheinstra%C3%9Fe%2022%2C%2064283%20Darmstadt!5e1!3m2!1sen!2sde!4v1758717351848!5m2!1sen!2sde"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Location Map"
          />
        </MapContainer>

        <FooterBottom>
          <p>&copy; {currentYear} Elevate Pilates</p>
          <p>
            <FooterLink to="/Impressum">Impressum</FooterLink> |{' '}
            <FooterLink to="/Privacy">Privacy Statement</FooterLink> |{' '}
            <FooterLink to="/Disclaimer">Disclaimer</FooterLink>
          </p>
        </FooterBottom>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer;
