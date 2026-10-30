import React from 'react';
import { Helmet } from 'react-helmet-async';
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

const Subtitle = styled.p`
  margin-bottom: 1.5rem;
  font-size: 0.95rem;
  opacity: 0.75;
`;

const WithdrawalBox = styled.blockquote`
  margin: 1rem 0;
  padding: 1.25rem 1.5rem;
  border-left: 4px solid var(--c-secondary, #999);
  background: rgba(0, 0, 0, 0.04);

  p {
    margin: 0.5rem 0;
  }
`;

const DisclaimerPage = () => {
  return (
    <>
    <Helmet>
      <title>Disclaimer | Elevate Pilates Darmstadt</title>
    </Helmet>
    
    <DisclaimerContainer>
      <h1>Allgemeine Geschäftsbedingungen (AGB)</h1>
        <Subtitle>Elevate Pilates · Darmstadt · Stand: Oktober 2026</Subtitle>

        <h2>§ 1 Geltungsbereich und Anbieterin</h2>
        <p>
          (1) Diese AGB gelten für alle Verträge zwischen Elevate Pilates, Julia
          Delarü, Alicenstraße 4, 64293 Darmstadt, E-Mail:
          elevate-pilates@outlook.com, (im Folgenden „Studio“) und den Kundinnen
          (im Folgenden „Kundin“) über die Teilnahme am angebotenen
          Kursprogramm.
        </p>
        <p>
          (2) Das Studio ist ein Matten-Pilates-Studio ausschließlich für
          Frauen. Gegenstand der Verträge ist die Teilnahme an
          Matten-Pilates-Kursen gemäß dem jeweils gültigen Kursplan.
          Trainingsgeräte im Sinne eines klassischen Fitnessstudios werden
          nicht verkauft oder bereitgestellt.
        </p>
        <p>
          (3) Für Kurskarten mit Mitgliedschaftsmodell (Monatsabo oder
          Stempelkarte) gilt zusätzlich der Mitgliedschaftsvertrag. Bei
          Widersprüchen geht der Mitgliedschaftsvertrag diesen AGB vor.
        </p>
        <p>
          (4) Abweichende Bedingungen der Kundin gelten nicht, es sei denn, das
          Studio stimmt ihnen ausdrücklich in Textform zu.
        </p>

        <h2>§ 2 Kursplan und Online-Buchung</h2>
        <p>
          (1) Der aktuelle Kursplan sowie freie und ausgebuchte Plätze sind im
          Online-Buchungsportal auf www.elevate-pilates.de einsehbar. Das
          Studio kann den Kursplan anpassen.
        </p>
        <p>
          (2) Kurse können bis zu 7 Tage vor Kursbeginn über die Website gebucht
          werden. Die Buchung ist verbindlich, sobald die Kundin den
          Buchungsvorgang abgeschlossen hat und eine Buchungsbestätigung
          erhält.
        </p>
        <p>
          (3) Eine Probestunde (Trial Class) kann pro Person nur einmal gebucht
          werden. Für die Teilnahme an einer Probestunde wird keine Gebühr
          erhoben.
        </p>
        <p>
          (4) Drop-Ins (Einzelbuchungen) sind jederzeit buchbar, solange Plätze
          verfügbar sind.
        </p>
        <p>
          (5) Die Kundin legt im Buchungsportal ein Kundenkonto an. Sie ist
          verpflichtet, ihre Angaben aktuell zu halten und ihre Zugangsdaten
          nicht an Dritte weiterzugeben.
        </p>
        <p>
          (6) Buchungen, Kurskarten und Mitgliedschaften sind personengebunden
          und nicht übertragbar (Ausnahmefälle nach Absprache und ausdrücklicher
          Zustimmung).
        </p>

        <h2>§ 3 Warteliste</h2>
        <p>
          (1) Ist ein Kurs ausgebucht, kann sich die Kundin auf die Warteliste
          setzen lassen. Wird ein Platz frei, erhält sie die Möglichkeit,
          diesen Platz zu buchen.
        </p>
        <p>
          (2) Ein Anspruch auf einen freiwerdenden Platz besteht nicht. Die
          Platzvergabe der Warteliste erfolgt nach dem Prinzip „First Come,
          First Served&#8220;.
        </p>
        <p>
          (3) Der Eintrag auf die Warteliste ist kostenlos und begründet keine
          Zahlungspflicht. Ein Stempel bzw. Entgelt wird erst mit der
          verbindlichen Buchung des Platzes relevant.
        </p>

        <h2>§ 4 Preise und Zahlung</h2>
        <p>
          (1) Es gelten die zum Zeitpunkt der Buchung auf der Website
          angegebenen Preise. Kleinunternehmerregelung nach § 19 UStG: Es wird
          keine Umsatzsteuer ausgewiesen.
        </p>
        <p>(2) Die Zahlung erfolgt per SEPA-Lastschrift / Überweisung.</p>
        <p>
          (4) Bei Rückbuchungen mangels Deckung oder bei Zahlungsverzug ist das
          Studio berechtigt, die dadurch entstehenden Kosten sowie
          Verzugszinsen gemäß § 288 BGB in Rechnung zu stellen.
        </p>

        <h2>§ 5 Stornierung und Nichterscheinen (No-Show)</h2>
        <p>
          (1) Eine gebuchte Kursteilnahme muss mindestens 6 Stunden vor
          Kursbeginn storniert werden, damit sie kostenfrei bleibt.
        </p>
        <p>
          (2) Die Stornierung kann über das Buchungsportal auf der Website oder
          per Nachricht an das Studio (elevate-pilates@outlook.com) erfolgen.
        </p>
        <p>
          (3) Bei fristgerechter Stornierung wird der Platz wieder freigegeben
          und bei Kurskarten kein Stempel abgezogen.
        </p>
        <p>
          (4) Bei verspäteter Stornierung oder bei Nichterscheinen (No-Show)
          gilt die Kursteilnahme als in Anspruch genommen. Bei der Stempelkarte
          wird dennoch ein Stempel abgezogen. Eine nachträgliche Gutschrift des
          Stempels oder eine Erstattung erfolgt nicht. Bei Drop-Ins und
          Probestunden verfällt die Buchung ohne Erstattung des gezahlten
          Preises.
        </p>
        <p>
          (5) Bei Mitgliedern mit Monatsabo gilt bei No-Show: Nach dem 3.
          No-Show innerhalb von 4 Wochen wird eine No-Show-Gebühr von 20 €
          erhoben.
        </p>
        <p>
          (7) Bei Verspätung kann zu Beginn des Kurses ein Einlass aus
          Rücksicht auf die anderen Teilnehmerinnen und aus Sicherheitsgründen
          nicht mehr möglich sein (Einlassschluss: 15 Minuten nach Beginn des
          Kurses). In diesem Fall gilt Absatz 4.
        </p>

        <h2>§ 6 Kurskarten und Mitgliedschaften</h2>
        <p>
          (1) Die Stempelkarte (10er-Karte) ist ab Kauf unbefristet gültig, ist
          kein Abonnement und bedarf keiner Kündigung. Sie verfällt mit
          Einlösung aller Stempelfelder.
        </p>
        <p>
          (2) Das Monatsabo berechtigt zur unbegrenzten Teilnahme am regulären
          Kursbetrieb. Laufzeit, Verlängerung, Kündigung und Pausierung (Ruhen)
          ergeben sich aus dem Mitgliedschaftsvertrag.
        </p>
        <p>
          (3) Ein Anspruch auf Teilnahme an einem bestimmten Kurs oder zu
          einer bestimmten Zeit besteht nicht. Teilnahmeplätze sind begrenzt.
        </p>

        <h2>§ 7 Workshops</h2>
        <p>
          (1) Workshops können einzeln gebucht werden. Preise und Termine
          ergeben sich aus der jeweiligen Workshop-Beschreibung auf der
          Website.
        </p>
        <p>
          (2) Für Workshops gilt abweichend von § 5: Stornierung bis 24 Stunden
          vor Beginn kostenfrei, danach / bei Nichterscheinen wird die
          Teilnahmegebühr vollständig fällig. Eine Ersatzteilnehmerin kann
          benannt werden.
        </p>

        <h2>§ 8 Kursausfall, Änderungen und Trainerinnen</h2>
        <p>
          (1) Das Studio ist berechtigt, Kurse aus wichtigem Grund (z. B.
          Krankheit der Trainerin, höhere Gewalt, Raumausfall, zu geringe
          Teilnehmerzahl) abzusagen, zu verschieben oder durch eine andere
          qualifizierte Trainerin zu vertreten. Ein Anspruch auf eine bestimmte
          Trainerin besteht nicht.
        </p>
        <p>
          (2) Fällt ein gebuchter Kurs aus, wird die Kundin informiert. Bei
          Stempelkarten wird der Stempel gutgeschrieben bzw. nicht abgezogen.
          Bei Drop-Ins, Probestunden und Workshops wird der gezahlte Preis
          erstattet oder auf Wunsch ein Ersatztermin angeboten. Bei Monatsabos
          besteht der Anspruch auf Teilnahme an anderen Kursen.
        </p>

        <h2>§ 9 Hausordnung und Verhalten im Studio</h2>
        <p>
          Die Kundin verpflichtet sich, die Hausordnung des Studios sowie die
          Anweisungen der Trainerinnen zu befolgen, pünktlich zu erscheinen und
          sich rücksichtsvoll gegenüber anderen Teilnehmerinnen zu verhalten.
          Bei erheblichen oder wiederholten Verstößen kann das Studio die
          Kundin vom Kursbetrieb ausschließen. Der Anspruch auf Vergütung bleibt
          unberührt, soweit gesetzlich zulässig.
        </p>

        <h2>§ 10 Gesundheitliche Eignung</h2>
        <p>
          Die Kundin versichert, gesundheitlich zur Teilnahme an
          Matten-Pilates-Kursen in der Lage zu sein, und wird gebeten, das
          Studio vor Kursbeginn über relevante gesundheitliche Einschränkungen
          (z. B. Schwangerschaft, Verletzungen) zu informieren. Bei
          gesundheitlichen Zweifeln wird die vorherige Rücksprache mit einer
          Ärztin bzw. einem Arzt empfohlen. Die Teilnahme erfolgt auf eigene
          Verantwortung im Rahmen der Anleitung der Trainerin.
        </p>

        <h2>§ 11 Haftung</h2>
        <p>
          (1) Das Studio haftet nach den gesetzlichen Bestimmungen für Vorsatz
          und grobe Fahrlässigkeit unbeschränkt.
        </p>
        <p>
          (2) Für leichte Fahrlässigkeit haftet das Studio nur bei Verletzung
          wesentlicher Vertragspflichten (Kardinalpflichten) und begrenzt auf
          den vorhersehbaren, vertragstypischen Schaden.
        </p>
        <p>
          (3) Für die Verletzung von Leben, Körper oder Gesundheit gelten die
          gesetzlichen Haftungsregeln uneingeschränkt.
        </p>
        <p>
          (4) Für mitgebrachte persönliche Gegenstände wird keine Haftung
          übernommen.
        </p>

        <h2>§ 12 Widerrufsrecht für Verbraucherinnen</h2>
        <p>
          Wurde ein Vertrag online, telefonisch oder außerhalb der
          Geschäftsräume des Studios geschlossen, steht der Kundin als
          Verbraucherin das folgende gesetzliche Widerrufsrecht zu. Die
          Widerrufsbelehrung und das Muster-Widerrufsformular entsprechen § 10
          des Mitgliedschaftsvertrags.
        </p>

        <WithdrawalBox>
          <h3>Widerrufsbelehrung</h3>

          <h3>Widerrufsrecht</h3>
          <p>
            Sie haben das Recht, binnen 14 Tagen ohne Angabe von Gründen
            diesen Vertrag zu widerrufen. Die Widerrufsfrist beträgt 14 Tage ab
            dem Tag des Vertragsabschlusses. Um Ihr Widerrufsrecht auszuüben,
            müssen Sie das Studio (Elevate Pilates, Julia Delarü, Alicenstraße
            4, 64293 Darmstadt, E-Mail: elevate-pilates@outlook.com) über Ihren
            Entschluss, diesen Vertrag zu widerrufen, informieren. Sie können
            dafür das beigefügte Muster-Widerrufsformular verwenden, das jedoch
            nicht vorgeschrieben ist. Eine E-Mail genügt. Zur Wahrung der
            Widerrufsfrist reicht es aus, dass Sie die Mitteilung über die
            Ausübung des Widerrufsrechts vor Ablauf der Widerrufsfrist
            absenden.
          </p>

          <h3>Folgen des Widerrufs</h3>
          <p>
            Wenn Sie diesen Vertrag widerrufen, hat das Studio Ihnen alle
            Zahlungen, die es von Ihnen erhalten hat, unverzüglich und
            spätestens binnen vierzehn Tagen ab dem Tag zurückzuzahlen, an dem
            die Mitteilung über Ihren Widerruf dieses Vertrags eingegangen ist.
            Für diese Rückzahlung wird dasselbe Zahlungsmittel verwendet, das
            Sie bei der ursprünglichen Transaktion eingesetzt haben, es sei
            denn, mit Ihnen wurde ausdrücklich etwas anderes vereinbart; in
            keinem Fall werden Ihnen wegen dieser Rückzahlung Entgelte
            berechnet. Haben Sie verlangt, dass die Kursteilnahme während der
            Widerrufsfrist beginnen soll, so haben Sie dem Studio einen
            angemessenen Betrag zu zahlen, der dem Anteil der bis zu dem
            Zeitpunkt, zu dem Sie das Studio von der Ausübung des Widerrufsrechts
            hinsichtlich dieses Vertrags unterrichten, bereits erbrachten
            Leistungen im Vergleich zum Gesamtumfang der im Vertrag
            vorgesehenen Leistungen entspricht.
          </p>

          <h3>Muster-Widerrufsformular</h3>
          <p>
            (Wenn Sie den Vertrag widerrufen wollen, füllen Sie bitte dieses
            Formular aus und senden Sie es zurück.)
          </p>
          <p>
            An: Elevate Pilates, Julia Delarü, Alicenstraße 4, 64293 Darmstadt,
            E-Mail: elevate-pilates@outlook.com
          </p>
          <p>
            Hiermit widerrufe ich den von mir abgeschlossenen Vertrag über die
            Mitgliedschaft im Studio Elevate Pilates.
          </p>
          <p>Abgeschlossen am: ………………………………</p>
          <p>Name der Kundin: ………………………………</p>
          <p>Anschrift der Kundin: ………………………………</p>
          <p>
            Unterschrift der Kundin (nur bei Mitteilung auf Papier):
            ………………………………
          </p>
          <p>Datum: ………………………………</p>
        </WithdrawalBox>

        <h2>§ 13 Datenschutz</h2>
        <p>
          Das Studio verarbeitet personenbezogene Daten der Kundin
          ausschließlich zur Vertragsabwicklung sowie bei gesonderter
          Einwilligung zu Marketingzwecken gemäß den Bestimmungen der DSGVO.
          Näheres regelt die Datenschutzerklärung auf der Website des Studios.
        </p>

        <h2>§ 14 Streitbeilegung</h2>
        <p>
          Das Studio ist nicht bereit und nicht verpflichtet, an einem
          Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle
          teilzunehmen.
        </p>

        <h2>§ 15 Schlussbestimmungen</h2>
        <p>
          (1) Änderungen und Ergänzungen dieser AGB bedürfen der Textform. Das
          Studio kann diese AGB mit Wirkung für die Zukunft ändern.
        </p>
        <p>
          (2) Es gilt das Recht der Bundesrepublik Deutschland. Gegenüber
          Verbraucherinnen gilt diese Rechtswahl nur, soweit dadurch nicht
          zwingende Bestimmungen des Staates, in dem die Verbraucherin ihren
          gewöhnlichen Aufenthalt hat, entzogen werden.
        </p>
        <p>
          (3) Sollte eine Bestimmung dieser AGB unwirksam sein, bleibt die
          Wirksamkeit der übrigen Bestimmungen unberührt.
        </p>

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
    </>
  );
};

export default DisclaimerPage;
