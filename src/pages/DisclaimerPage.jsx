import React from 'react';
import styled from 'styled-components';

const DisclaimerContainer = styled.div`
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

  h3 {
    margin-top: 1rem;
    font-size: 1.1rem;
    font-weight: 600;
  }

  p, ul, ol {
    margin: 0.5rem 0;
  }

  ul, ol {
    padding-left: 1.5rem;
  }

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

const DisclaimerPage = () => {
  return (
    <DisclaimerContainer>
      <h1>Haftungsausschluss (Disclaimer)</h1>

      <h2>1. Haftung für Inhalte</h2>
      <p>
        Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt.
        Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen.
        Als Dienstleisterin sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich.
        Nach §§ 8 bis 10 TMG sind wir als Dienstleisterin jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen
        oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
      </p>
      <p>
        Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt.
        Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich.
        Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
      </p>

      <h2>2. Haftung für Links</h2>
      <p>
        Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben.
        Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen.
        Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.
        Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft.
        Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar.
      </p>
      <p>
        Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar.
        Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.
      </p>

      <h2>3. Urheberrecht</h2>
      <p>
        Die durch die Seitenbetreiberin erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht.
        Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung der jeweiligen Autorin bzw. Erstellerin.
        Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.
      </p>
      <p>
        Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet.
        Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden,
        bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.
      </p>

      <h2>4. Datenschutz</h2>
      <p>
        Die Nutzung unserer Website ist in der Regel ohne Angabe personenbezogener Daten möglich.
        Soweit auf unseren Seiten personenbezogene Daten (beispielsweise Name, Anschrift oder E-Mail-Adressen) erhoben werden,
        erfolgt dies, soweit möglich, stets auf freiwilliger Basis.
        Diese Daten werden ohne Ihre ausdrückliche Zustimmung nicht an Dritte weitergegeben.
      </p>
      <p>
        Wir weisen darauf hin, dass die Datenübertragung im Internet (z. B. bei der Kommunikation per E-Mail) Sicherheitslücken aufweisen kann.
        Ein lückenloser Schutz der Daten vor dem Zugriff durch Dritte ist nicht möglich.
      </p>
      <p>
        Der Nutzung von im Rahmen der Impressumspflicht veröffentlichten Kontaktdaten durch Dritte zur Übersendung von nicht ausdrücklich
        angeforderter Werbung und Informationsmaterialien wird hiermit ausdrücklich widersprochen.
        Die Betreiber der Seiten behalten sich ausdrücklich rechtliche Schritte im Falle der unverlangten Zusendung von Werbeinformationen,
        etwa durch Spam-E-Mails, vor.
      </p>

      <h2>5. Haftungsausschluss für gesundheitsbezogene Informationen</h2>
      <p>
        Die auf dieser Website bereitgestellten Informationen zu Pilates, Bewegung und Gesundheit dienen ausschließlich zu Informationszwecken
        und ersetzen keine professionelle medizinische Beratung, Diagnose oder Behandlung.
        Die Ausübung von Pilates und anderen Bewegungsformen sollte immer in Absprache mit einem Arzt oder einer Ärztin erfolgen,
        insbesondere bei Vorerkrankungen, Verletzungen oder in der Schwangerschaft.
      </p>
      <p>
        Die Seitenbetreiberin übernimmt keine Haftung für Schäden oder Verletzungen, die durch die Ausführung der gezeigten Übungen oder
        die Befolgung der gegebenen Ratschläge entstehen.
        Jede Person übt auf eigene Verantwortung und sollte auf die Signale des eigenen Körpers achten.
      </p>

      <h2>6. Änderungen des Haftungsausschlusses</h2>
      <p>
        Wir behalten uns vor, diesen Haftungsausschluss gelegentlich zu aktualisieren, um ihn an geänderte Rechtsprechungen oder
        behördliche Vorgaben anzupassen. Wir empfehlen Ihnen, diese Seite regelmäßig zu besuchen, um sich über mögliche Änderungen zu informieren.
      </p>
    </DisclaimerContainer>
  );
};

export default DisclaimerPage;
