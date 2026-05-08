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

const ModalContent = styled.div`
  background: white;
  padding: 20px 30px 40px 30px;
  border-radius: 12px;
  width: 90%;
  max-width: 500px;
  position: relative;
  text-align: center;
  color: var(--c-black);

  h2{
    margin-bottom:0;
  };

  p{
    margin-top:0.5rem;
  };
`;

const ModalTitle = styled.h3`
  padding: 0.5em 0;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: transparent;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: var(--c-black);
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

function ContactModal({ isOpen, onClose, children, registerCourse }) {

  if (!isOpen) return null;

  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useRef();
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSuccess(false);
    setError(false);

    emailjs
      .sendForm(
        'service_utj4chp',
        'template_r1flswz',
        form.current,
        'kOvmC5bVWZLywIJxx',
      )
      .then(
        () => {
          setSuccess(true);
          form.current.reset();
          setIsSubmitting(false);
        },
        () => {
          setError(true);
          setIsSubmitting(false);
        },
      );
  };

  // Handle click outside modal content
  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <Overlay  onClick={handleOverlayClick}>
      <ModalContent  onClick={(e) => e.stopPropagation()}>
        <CloseButton onClick={onClose}>×</CloseButton>
        <ModalTitle>Anmeldung für {registerCourse}</ModalTitle>
        <FormDiv ref={form} onSubmit={sendEmail}>
          <input
            type="hidden"
            name="message"
            value={`I would like to sign up for the course on ${registerCourse}`}
          />
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
          <SubmitBtn type="submit" disabled={isSubmitting}>
            <IconSend />
            {isSubmitting ? 'Sending...' : 'Absenden'}
          </SubmitBtn>
          {success && (
            <SuccessMessage>
              Deine Anmeldung wurde erfolgreich gesendet!
            </SuccessMessage>
          )}
          {error && (
            <ErrorMessage>
              Beim Senden Deiner Anmeldung ist ein Fehler aufgetreten. Bitte versuche es erneut.
            </ErrorMessage>
          )}
        </FormDiv>

      </ModalContent>
    </Overlay>
  );
}

export default ContactModal;
