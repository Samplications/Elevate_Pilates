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
  font-size: clamp(0.9rem, 2vw, 1rem);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5em;
  margin: 2em auto 0;
  width: fit-content;
  transition: opacity 0.3s;

  &:hover {
    opacity: 0.7;
    color: var(--c-accent);
  }

  &::before {
    content: "←";
    font-size: 1.2rem;
  }
`;

const PageDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  overflow-x: hidden;
`;

const ContainerDiv = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 1em;
  width: 100%;
  max-width: 1600px;
  padding: clamp(1em, 3vw, 2em);
  box-sizing: border-box;
`;

const SectionTitle = styled.h1`
  color: #1d1d1da9;
  margin-bottom: 0;
  text-align: center;
  font-size: clamp(2rem, 6vw, 4rem);
`;

const ElevateSpan = styled.span`
  font-family: var(--f-elevate);
  color: var(--c-secondary);
  font-size: clamp(2.5rem, 8vw, 6rem);
  font-weight: 500;
`;

const CardInner = styled.div`
  border: 1px solid var(--c-secondary);
  background: var(--c-white);
  border-radius: clamp(25px, 5vw, 55px);
  padding: clamp(1em, 3vw, 2em);
  width: 100%;
  box-sizing: border-box;
`;

const RowDiv = styled.div`
  display: flex;
  justify-content: space-between;
  gap: clamp(1em, 3vw, 2em);
  flex-direction: row;

  @media (max-width: 767px) {
    flex-direction: column;
    gap: 1.5em;
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
  gap: 1.5em;
`;

const ListItemDiv = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: row;
  gap: 0.5em;

  svg {
    width: clamp(20px, 3vw, 24px);
    height: clamp(20px, 3vw, 24px);
    flex-shrink: 0;
    margin-top: 2px;
    opacity: 0.85;
  }

  p {
    margin: 0;
    font-size: clamp(0.9rem, 2vw, 1.3rem);
    line-height: 1.4;
    word-break: break-word;
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
  font-size: clamp(0.9rem, 2vw, 1rem);
  background: var(--c-white);
  color: var(--c-black);
  font-family: inherit;
  width: 100%;
  box-sizing: border-box;

  &:focus {
    outline: none;
    border-color: var(--c-accent);
  }
`;

const TextArea = styled.textarea`
  padding: 0.75em;
  border: 1px solid var(--c-secondary);
  border-radius: 25px;
  font-size: clamp(0.9rem, 2vw, 1rem);
  min-height: 150px;
  resize: vertical;
  background: var(--c-white);
  color: var(--c-black);
  font-family: inherit;
  width: 100%;
  box-sizing: border-box;

  &:focus {
    outline: none;
    border-color: var(--c-accent);
  }
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

const SuccessMessage = styled.p`
  color: green;
  font-weight: bold;
  text-align: center;
  margin-top: 1em;
  font-size: clamp(0.9rem, 2vw, 1rem);
`;

const ErrorMessage = styled.p`
  color: red;
  font-weight: bold;
  text-align: center;
  margin-top: 1em;
  font-size: clamp(0.9rem, 2vw, 1rem);
`;

const FAQOuterCard = styled.div`
  background-color: var(--c-white);
  border-radius: clamp(25px, 5vw, 55px);
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
        'service_utj4chp',
        'template_r1flswz',
        form.current,
        'kOvmC5bVWZLywIJxx'
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
