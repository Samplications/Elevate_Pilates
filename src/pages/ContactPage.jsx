import { useState, useRef } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import styled from 'styled-components';
import emailjs from '@emailjs/browser';
import IconEmail from '../assets/icons/email-svgrepo-com.svg?react';
import IconLocation from '../assets/icons/location-pin-alt-1-svgrepo-com.svg?react';
import IconSend from '../assets/icons/send-svgrepo-com.svg?react';

const BackLink = styled(RouterLink)`
  color: var(--c-black);
  text-decoration: none;
  font-size: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5em;
  margin: 2em auto 0;
  width: fit-content;
  transition: opacity 0.3s;

  &:hover {
    opacity: 0.7;
    color: var(--c-accent); // Optional: Change color on hover
  }

  &::before {
    content: "←"; // Unicode left arrow
    font-size: 1.2rem;
  }
`;



const PageDiv = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

const ContainerDiv = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 1em;
  width: 100%;
  max-width: 1600px;
  padding: 2em;
  box-sizing: border-box;
`;

const SectionTitle = styled.h1`
  color: #1d1d1da9;
  margin-bottom: 0;
  text-align: center;

  @media (max-width: 767px) {
    font-size: 3em;
  }
`;

const ElevateSpan = styled.span`
  font-family: var(--f-elevate);
  color: var(--c-secondary);
  font-size: 6rem;
  font-weight: 500;
  @media (max-width: 767px) {
    font-size: 2em;
  }
`;

const CardInner = styled.div`
  border: 1px solid var(--c-secondary);
  background: var(--c-white);
  border-radius: 55px;
  padding: 2em;
  width: 100%;
  box-sizing: border-box;
`;

const RowDiv = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 2em;
  flex-direction: row;

  @media (max-width: 767px) {
    flex-direction: column;
    gap: 1em;
  }
`;

const LeftDiv = styled.div`
  width: 100%;
  box-sizing: border-box;

  @media (min-width: 768px) {
    width: calc(50% - 1em);
  }
`;

const RightDiv = styled.div`
  width: 100%;
  box-sizing: border-box;

  @media (min-width: 768px) {
    width: calc(50% - 1em);
  }
`;

const InfoDiv = styled.div`
  margin-top: 1em;
`;

const ListDiv = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 1em;
`;

const ListItemDiv = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  flex-direction: row;

  svg {
    width: 24px;
    height: 24px;
    margin-right: 8px;
    opacity: 0.85;
  }

  p {
    margin: 0;
    font-size: 1.3rem;
  }
`;

const FormDiv = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1em;
  
`;

const Input = styled.input`
  padding: 0.75em;
  border: 1px solid var(--c-secondary);
  border-radius: 25px;
  font-size: 1rem;
  background: var(--c-white);
  color: var(--c-black);
`;

const TextArea = styled.textarea`
  padding: 0.75em;
  border: 1px solid var(--c-secondary);
  border-radius: 25px;
  font-size: 1rem;
  min-height: 150px;
  resize: vertical;
  background: var(--c-white);
  color: var(--c-black);
`;

const SubmitBtn = styled.button`
  background-color: var(--c-secondary);
  color: var(--c-white);
  border-radius: 25px;
  padding: 0.75em 2em;
  font-size: 1.2rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5em;
  margin-top: 0.5em;

  stroke: var(--c-white);

  &:hover {
    opacity: 0.9;
    svg {
      fill: none; 
      stroke: var(--c-black); 
    };

    border-color: var(--c-black);
  }

  svg {
    fill: var(--c-white); 
    stroke: none;

    height: 24px; 
    width: 24px;
    
  }
`;

const SuccessMessage = styled.p`
  color: green;
  font-weight: bold;
  text-align: center;
  margin-top: 1em;
`;

const ErrorMessage = styled.p`
  color: red;
  font-weight: bold;
  text-align: center;
  margin-top: 1em;
`;

const FAQOuterCard = styled.div`
  background-color: var(--c-white);
  border-radius: 55px;
  padding: 0.5em;
  width: 100%;
  box-sizing: border-box;
`;

const ContactPage = () => {
  const form = useRef();
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setSuccess(false);
    setError(false);

    emailjs
      .sendForm(
        'service_utj4chp', // Replace with your EmailJS service ID
        'template_r1flswz', // Replace with your EmailJS template ID
        form.current,
        'kOvmC5bVWZLywIJxx' // Replace with your EmailJS public key
      )
      .then(
        () => {
          setSuccess(true);
          form.current.reset();
        },
        () => {
          setError(true);
        }
      );
  };

  return (
    <PageDiv>
      <ContainerDiv>
        <SectionTitle>
          Kontaktiere <ElevateSpan>Elevate.</ElevateSpan>
        </SectionTitle>
        <FAQOuterCard>
        <CardInner>
          <RowDiv>
            <LeftDiv>
              <InfoDiv>
                <ListDiv>
                  <ListItemDiv>
                    <IconLocation />
                    <p>Rheinstrasse 22, 3. OG, 64283 Darmstadt</p>
                  </ListItemDiv>
                  <ListItemDiv>
                    <IconEmail />
                    <p>elevate-pilates@outlook.com</p>
                  </ListItemDiv>
                </ListDiv>
              </InfoDiv>
            </LeftDiv>
            <RightDiv>
              <FormDiv ref={form} onSubmit={sendEmail}>
                <Input
                  type="text"
                  name="user_name"
                  placeholder="Dein Name"
                  required
                />
                <Input
                  type="email"
                  name="user_email"
                  placeholder="Deine Email"
                  required
                />
                <TextArea
                  name="message"
                  placeholder="Deine Nachricht"
                  required
                />
                <SubmitBtn type="submit">
                  <IconSend />
                  Absenden
                </SubmitBtn>
                {success && (
                  <SuccessMessage>
                    Deine Nachricht wurde erfolgreich gesendet!
                  </SuccessMessage>
                )}
                {error && (
                  <ErrorMessage>
                    Beim Senden Deine Nachricht ist ein Fehler aufgetreten. Bitte versuche es erneut.
                  </ErrorMessage>
                )}
              </FormDiv>
            </RightDiv>
          </RowDiv>
        </CardInner>
        </FAQOuterCard>
         <BackLink to="/">Zurück zur Homepage</BackLink>
      </ContainerDiv>
    </PageDiv>
  );
};

export default ContactPage;
