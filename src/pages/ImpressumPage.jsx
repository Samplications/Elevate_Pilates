import React from 'react';
import styled from 'styled-components';

const ImpressumContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  color: var(--c-dark);
  font-size: 1rem;
  line-height: 1.6;
  box-sizing: border-box;

  h1 {
    margin-bottom: 1.5rem;
    font-size: 2rem;
    color: var(--c-secondary);
  }

  h2 {
    margin-top: 1.5rem;
    font-size: 1.3rem;
    color: var(--c-secondary);
  }

  p {
    margin: 0.5rem 0;
  }

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

const ImpressumPage = () => {
  return (
    <ImpressumContainer>
      <h1>Impressum</h1>

      <h2>Angaben gemäß § 5 TMG:</h2>
      <p>
        Julia Delarue<br />
        Rheinstraße 22<br />
        64283 Darmstadt<br />
        Deutschland
      </p>

      <h2>Kontakt:</h2>
      <p>
        E-Mail: elevate-pilates@outlook.com<br />
        Telefon: TODO
      </p>

      <h2>Berufsbezeichnung und berufsrechtliche Regelungen:</h2>
      <p>
        Einzelunternehmerin
      </p>

      <h2>Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:</h2>
      <p>
        TODO
      </p>

      <h2>Inhaltsverantwortlicher gemäß § 55 Abs. 2 RStV:</h2>
      <p>
        Julia Delarue<br />
        Rheinstraße 22<br />
        64283 Darmstadt<br />
        Deutschland
      </p>
    </ImpressumContainer>
  );
};

export default ImpressumPage;
