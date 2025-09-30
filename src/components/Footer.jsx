import React from 'react'
import styled from 'styled-components';
import { Link as RouterLink } from 'react-router-dom';

// Define a styled component for the links
const FooterLink = styled(RouterLink)`
  color: var(--c-link); // Use your CSS variable for link color
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const ButtonLink = styled(RouterLink)`
  border: 2px solid var(--c-secondary);
  border-radius: 10px;
  padding: 0.6em 1.2em;
  font-size: 0.8rem;
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
  padding:0;
  width: 100%;
  box-sizing: border-box;
`;

const FooterContent = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1200px;
  margin: 0 auto;

  color: var(--c-transparent-text);
  
`;

const FooterTop = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center; // Vertically center items
  margin-bottom: 2rem;
  padding: 0 1rem; // Add padding to prevent button from touching the edge
  box-sizing: border-box;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start; // Align items to the left on mobile
    gap: 1rem; // Add space between stacked items
  }
`;

const FooterSection = styled.div`
  flex: 1;
  padding: 0 1rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start; // Align items to the left

  &:last-child {
    align-items: flex-end; // Align the last child (Kontakt button) to the right
    @media (max-width: 768px) {
      align-items: flex-start; // Reset to left on mobile
      width: 100%;
    }
  }

  p{margin:0;}
`;


const FooterLogo = styled.div`
  display: flex;
  align-items: center;
`;

const Logo = styled.img`
  height: 50px;
  width: auto;
  margin-right: 1rem;
`;

const LegalInfo = styled.div`
  text-align: left;

  p{margin:0;
    font-size: 0.9rem;}
`;

const ServicesList = styled.ul`
  list-style: none;
  padding: 0;
  text-align: left;
`;

const ServicesListItem = styled.li`
  margin-bottom: 0.5rem;
`;

const MapContainer = styled.div`
  width: 100%;
  height: 200px;
  background-color: #ddd; 
  margin: 1rem 0;
`;

const FooterBottom = styled.div`
  text-align: center;
  padding-top: 1rem;
  border-top: 1px solid rgba(255, 255, 255, 0.2);
  margin-top: 1rem;

  p{margin:0;
    font-size: 0.7rem;}
`;

const TransitionBottom = styled.div`
  background-color: var(--c-accent);
  color: var(--c-transparent-text);
  width: 100%;
  height:10px;
  margin:0;
`;

const Footer = () => {
    const currentYear = new Date().getFullYear();

  return (
    <FooterContainer>
      <TransitionBottom/>
      <FooterContent>
        <FooterTop>
          <FooterSection>
            <FooterLogo>
              {/* <Logo src={logo} alt="Logo" /> */}
              <h3>Elevate Pilates</h3>
            </FooterLogo>
            <p>By Julia Delarue</p>
          </FooterSection>
          <FooterSection>
            <ButtonLink to="/Contact">Kontakt</ButtonLink>
            
          </FooterSection>
        </FooterTop>
        <MapContainer>

          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4369.410266008517!2d8.642441597087087!3d49.87208145532613!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47bd7062a35062f9%3A0x5b3e36095d9f0a69!2sRheinstra%C3%9Fe%2022%2C%2064283%20Darmstadt!5e1!3m2!1sen!2sde!4v1758717351848!5m2!1sen!2sde"
          width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Location Map"></iframe>
        </MapContainer>

        <FooterBottom>
          <p>&copy; {currentYear} Elevate Pilates</p>
          <p>
            <FooterLink to="/Impressum">Impressum</FooterLink> | <span> </span>
            <FooterLink to="/Privacy">Privacy Statement</FooterLink> | <span> </span>
            <FooterLink to="/Disclaimer">Disclaimer</FooterLink>
          </p>
        </FooterBottom>
      </FooterContent>
    </FooterContainer>
  )
}

export default Footer
