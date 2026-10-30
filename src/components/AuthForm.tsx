import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import { useAuth } from '../hooks/useAuth';
import { Link as RouterLink } from 'react-router-dom';
//import IconSend from '../assets/icons/send-svgrepo-com.svg?react';

// Reuse your styled components from the original file
const FormDiv = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1em;
`;

const BtnDiv = styled.div`
  display: flex;
  flex-direction: column;
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

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }

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

const LinkBtn = styled.button`
  color: var(--c-accent);
  background-color: var(--c-white);
  border: none;
  text-decoration: none;
  font-size: clamp(0.9rem, 2vw, 1rem);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5em;
  margin: 0 auto;
  width: fit-content;
  transition: opacity 0.3s;
  cursor: pointer;

  &:hover {
    opacity: 0.7;
    color: var(--c-black);
  }
`;

const LinkRow = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5em;
  margin-top: 0.5em;
`;

const ErrorMessage = styled.p`
  color: red;
  font-weight: bold;
  text-align: center;
  margin-top: 1em;
  font-size: clamp(0.9rem, 2vw, 1rem);
`;

const SuccessMessage = styled.p`
  color: green;
  font-weight: bold;
  text-align: center;
  margin-top: 1em;
  font-size: clamp(0.9rem, 2vw, 1rem);
`;

type Mode = 'login' | 'register' | 'reset';

type AuthFormProps = {
  onLoginSuccess?: () => void;
};

const AuthForm = ({ onLoginSuccess }: AuthFormProps) => {
  const { signIn, signUp, resetPassword } = useAuth();
  const [mode, setMode] = useState<Mode>('login');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const form = useRef<HTMLFormElement>(null);

  const switchMode = (next: Mode) => {
    setMode(next);
    setError(null);
    setSuccess(null);
    form.current?.reset();
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  setIsSubmitting(true);
  setError(null);
  setSuccess(null);

  const email = e.currentTarget.user_name.value;
  const password = e.currentTarget.password?.value;
  const confirmPassword = e.currentTarget.confirm_password?.value;
  const firstName = e.currentTarget.first_name?.value;
  const lastName = e.currentTarget.last_name?.value;
  const phoneNr = e.currentTarget.phone_nr?.value || '';
  const bday = e.currentTarget.birthday?.value || '';
  const privacyAgreed = e.currentTarget.privacy_agreement?.checked; // Check if the checkbox is selected

  // Validate email format
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    setError('Bitte gib eine gültige E-Mail-Adresse ein.');
    setIsSubmitting(false);
    return;
  }

  // Validate required fields for registration
  if (mode === 'register') {
    if (!firstName || !lastName || !password || !confirmPassword || !privacyAgreed) {
      setError('Bitte fülle alle Pflichtfelder aus und bestätige die Datenschutzerklärung.');
      setIsSubmitting(false);
      return;
    }
    if (password.length < 6) {
      setError('Das Passwort muss mindestens 6 Zeichen lang sein.');
      setIsSubmitting(false);
      return;
    }
    if (password !== confirmPassword) {
      setError('Die Passwörter stimmen nicht überein.');
      setIsSubmitting(false);
      return;
    }
  }

  // Validate required fields for login
  if (mode === 'login' && !password) {
    setError('Bitte gib dein Passwort ein.');
    setIsSubmitting(false);
    return;
  }

  try {
    if (mode === 'login') {
      const { error } = await signIn(email, password);
      if (error) throw error;
      onLoginSuccess?.();
    } else if (mode === 'register') {
      const { error } = await signUp(email, password, firstName, lastName, phoneNr, bday);
      if (error) throw error;
      setSuccess('Registrierung erfolgreich! Bitte überprüfe Dein E-Mail-Postfach.');
    } else if (mode === 'reset') {
      const { error } = await resetPassword(email);
      if (error) throw error;
      setSuccess('Falls ein Konto mit dieser E-Mail existiert, wurde ein Link zum Zurücksetzen gesendet.');
    }
  } catch (err) {
    console.error(`${mode} error:`, err);
    setError('Beim Senden ist ein Fehler aufgetreten. Bitte versuche es erneut.');
  }

  setIsSubmitting(false);
  if (mode !== 'register' && mode !== 'reset') {
    form.current?.reset();
  }
};

  const submitLabel = {
    login: isSubmitting ? 'Logging in...' : 'Log In',
    register: isSubmitting ? 'Registering...' : 'Registrieren',
    reset: isSubmitting ? 'Sending...' : 'Link anfordern',
  }[mode];

  return (
    <FormDiv ref={form} onSubmit={handleSubmit}>

       {mode === 'register' && (
        <>
          <Input
            type="text"
            name="first_name"
            placeholder="Vorname"
            required
          />

          <Input
            type="text"
            name="last_name"
            placeholder="Nachname"
            required
          />
        </>
      )}

      <Input
        type="email"
        name="user_name"
        placeholder="Deine E-Mail"
        required
      />

      {mode === 'register' && (
         <>
          <Input
            type="tel"
            name="phone_nr"
            placeholder="Telefonnr. (optional)"
          />
          <Input
            type="date"
            name="birthday"
            placeholder="Geburtsdatum (optional)"
          />
        </>
      )}

      {mode !== 'reset' && (
        <Input
          type="password"
          name="password"
          placeholder="Passwort"
          required
        />
      )}

      {mode === 'register' && (
        <Input
          type="password"
          name="confirm_password"
          placeholder="Passwort bestätigen"
          required
        />
      )}

      {mode === 'register' && (
          <label style={{ display: 'flex', alignItems: 'center', gap: '0.5em', marginTop: '0.5em' }}>
            <Input
              type="checkbox"
              name="privacy_agreement"
              required
              style={{ width: '18px', height: '18px' }}
            />
            Ich habe die <RouterLink to="/disclaimer">Datenschutzerklärung und AGBs</RouterLink> gelesen und stimme zu.
          </label>
      )}

      <BtnDiv>
        <SubmitBtn type="submit" disabled={isSubmitting}>
          {/* <IconSend /> */}
          {submitLabel}
        </SubmitBtn>

        <LinkRow>
          {mode === 'login' && (
            <>
              <LinkBtn type="button" onClick={() => switchMode('register')}>
                Registrieren
              </LinkBtn>
              <LinkBtn type="button" onClick={() => switchMode('reset')}>
                Passwort vergessen?
              </LinkBtn>
            </>
          )}
          {mode === 'register' && (
            <LinkBtn type="button" onClick={() => switchMode('login')}>
              Zurück zum Login
            </LinkBtn>
          )}
          {mode === 'reset' && (
            <LinkBtn type="button" onClick={() => switchMode('login')}>
              Zurück zum Login
            </LinkBtn>
          )}
        </LinkRow>
      </BtnDiv>

      {error && <ErrorMessage>{error}</ErrorMessage>}
      {success && <SuccessMessage>{success}</SuccessMessage>}
    </FormDiv>
  );
};

export default AuthForm;