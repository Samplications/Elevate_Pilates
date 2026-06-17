import { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import Hero from './components/Hero';
import { Link as RouterLink } from 'react-router-dom';
import ContactModal from './components/ContactModal';

import IconCalendar from './assets/icons/calendar-svgrepo-com.svg?react';
import IconSocks from './assets/icons/socks-svgrepo-com.svg?react';
import IconWrite from './assets/icons/write-svgrepo-com.svg?react';
import IconFemale from './assets/icons/woman-svgrepo-com.svg?react';
import IconWeights from './assets/icons/dumbbell-large-minimalistic-svgrepo-com.svg?react';
import IconLocation from './assets/icons/location-pin-alt-1-svgrepo-com.svg?react';
import IconWorld from './assets/icons/world-2-svgrepo-com.svg?react';

import ImgJuliaLizenz from './assets/julia_lizenz.webp';
import FAQ from './components/Faq';
import InfoModal from './components/InfoModal';
import { Helmet } from 'react-helmet-async';


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

const PageDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  overflow-x: hidden;
`;

const ContentDiv = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  
  p {
    margin: 0 0 0.75rem 0;
    padding: 0;
  }
`;

const BubbleSection = styled(ContentDiv)`
  width: 100%;
  padding: clamp(1em, 3vw, 2em) 0;
  margin-top: clamp(1em, 3vw, 2em);
  box-sizing: border-box;
`;

const BalloonDiv = styled.div`
  background-color: var(--c-white);
  width: 100%;
  border-radius: clamp(25px, 5vw, 50px);
  padding: 0.5em;
  box-sizing: border-box;
`;

const Section = styled(ContentDiv)`
  width: 100%;
  padding: clamp(1em, 3vw, 2em) 0;
`;

const ContainerDiv = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: clamp(1em, 3vw, 2em);
  width: 100%;
  max-width: 1600px;
  padding: 0 clamp(1em, 3vw, 2em);
  box-sizing: border-box;
`;

const CardInner = styled.div`
  border: 1px solid var(--c-secondary);
  border-radius: clamp(25px, 5vw, 55px);
  padding: clamp(1em, 2.5vw, 1.5em);
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  overflow: hidden;
  min-width: 0;
`;

const CardInnerTop = styled(CardInner)`
  display: flex;
  justify-content: space-between;
  align-items: stretch;
  flex-direction: row;
  gap: 1em;

  @media (max-width: 767px) {
    flex-direction: column;
    align-items: stretch;
  }
`;

const TopRowDiv = styled(BalloonDiv)`
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
`;

const SecondRowDiv = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  gap: clamp(1em, 3vw, 2em);
  width: 100%;
  
  @media (max-width: 767px) {
    flex-direction: column;
  }
`;

const LeftDiv = styled(BalloonDiv)`
  width: 100%;
  box-sizing: border-box;
  
  @media (min-width: 768px) {
    width: calc(50% - 1em);
  }
`;

const RightDiv = styled(BalloonDiv)`
  width: 100%;
  box-sizing: border-box;
  
  @media (min-width: 768px) {
    width: calc(50% - 1em);
  }
`;

const Subtitles = styled.h2`
  color: var(--c-secondary);
  font-weight: 500;
  font-size: clamp(1.8rem, 5vw, 4rem);
  margin: 0;
`;

const InfoDiv = styled.div`
  margin-top: 1em;
  height: 100%;
`;

const RatesDiv = styled(InfoDiv)`
  margin-right: 2em;

  @media (min-width: 768px) {
    margin-right: 0;
  }
`;

const SectionTitle = styled.h1`
  color: #1d1d1da9;
  margin-bottom: 0.2em;
  font-size: clamp(2rem, 5vw, 4rem);
`;

const SectionContentDiv = styled.div`
  width: 100%;
`;

const RowDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: clamp(1em, 3vw, 2em);
  flex-direction: row;

  @media (max-width: 767px) {
    flex-direction: column;
    gap: 1em;
  }
`;

const ElevateSpan = styled.span`
  font-family: var(--f-elevate);
  color: var(--c-secondary);
  font-weight: 500;
  font-size: clamp(2.5rem, 8vw, 6rem);
  margin: 0;
`;

const ElevateSpanTxt = styled(ElevateSpan)`
  font-size: clamp(1.5rem, 3vw, 2rem);
`;

const SignupBtn = styled(ButtonLink)`
  font-size: clamp(1rem, 2.5vw, 1.5rem);
  border-radius: clamp(15px, 3vw, 30px);
  border-width: 3px;
  padding: 0.5em 1em;
  box-sizing: border-box;
  height: auto;
  white-space: nowrap;
  align-self: center;
  height:100%;

  @media (max-width: 767px) {
    width: 100%;
    justify-content: center;
  }
`;

const ListDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.7em;

  height: 100%;
`;

const ListItemDiv = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: row;
  gap: 0.4em;

  p {
    font-size: clamp(0.9rem, 2vw, 1.3rem);
    margin: 0;
    line-height: 1.4;
  }

  svg {
    min-width: 20px;
    min-height: 20px;
    width: clamp(20px, 3vw, 24px);
    height: clamp(20px, 3vw, 24px);
    margin-top: 2px;
    flex-shrink: 0;
    opacity: 0.85;
  }
`;

const RateListItemDiv = styled(ListItemDiv)`
  justify-content: space-between;
  width: 100%;
  box-sizing: border-box;
  align-items: center;
  margin-bottom: 0.3em;

  @media (max-width: 767px) {
    flex-direction: row;
    flex-wrap: wrap;
    gap: 0.3em;
  }
`;

const WiggleAnimation = keyframes`
  0% { transform: rotate(0deg); }
  80% { transform: rotate(0deg); }
  85% { transform: rotate(8deg); }
  95% { transform: rotate(-8deg); }
  100% { transform: rotate(0deg); }
`;

const FreeSpan = styled.p`
  font-weight: bold;
  animation: ${WiggleAnimation} 3s infinite;
  margin: 0;
  white-space: nowrap;
`;

const TextDiv = styled.div`
  flex: 1;
  
  @media (max-width: 767px) {
    width: 100%;
  }
`;

const ImgDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  width: 100%;
  max-width: 500px;

  @media (max-width: 767px) {
    max-width: 100%;
    padding: 1em 0;
  }
`;

const StyledImg = styled.img`
  width: 100%;
  max-width: 400px;
  height: auto;
  border-radius: 50%;
  border-style: solid;
  border-width: clamp(4px, 1vw, 8px);
  border-color: #1d1d1da9;
  box-shadow: 5px 5px 15px 5px #00000025;

  @media (max-width: 767px) {
    max-width: 300px;
  }
`;

const AboutTxt = styled.p`
  font-size: clamp(0.9rem, 2vw, 1.4rem);
  line-height: 1.6;
`;

const AboutCTABtn = styled(ButtonLink)`
  margin-top: 0.5em;
  font-size: clamp(1rem, 2vw, 1.4rem);
`;

const ParentDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  
  @media (max-width: 767px) {
    width: 100%;
  }
`;

const FatText = styled.p`
  font-weight: bold;
`;

const CourseDiv = styled.div`
  width: 100%;
  height: auto;
  border: 1px solid #ddd;
  border-radius: 10px;
  overflow: hidden;
`;

const CourseFrame = styled.img`
  width: 100%;
  height: auto;
  border: none;
  object-fit: contain;
  display: block; // Remove whitespace below the image
`;

const CourseBtn = styled.button`
  margin: 5px 20px 0 20px;
  padding: 8px 16px;
  background-color: var(--c-secondary);
  color: var(--c-white);
  border: none;
  border-radius: 30px;
  cursor: pointer;
`;

/////////////////////////////////////////////////////////////////////////////////////


  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Was ist Pilates?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Es handelt sich bei Pilates um eine ganzheitliche Trainingsmethode, entwickelt von Joseph Pilates unter der Bezeichnung 'Contrology'. Der Fokus liegt dabei auf der Stärkung der Tiefenmuskulatur und der kontrollierten Ausführung bewusster Bewegungen unter Berücksichtigung der Atemtechnik. Das sogenannte Powerhouse wird hierbei für die Dauer des gesamten Workouts aktiviert. Pilates mobilisiert und stärkt den Körper und ermöglicht mehr Flexibilität."
        }
      },
      {
        "@type": "Question",
        "name": "Warum Elevate Pilates?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Das traditionelle Pilates wird mit Elevate noch einen Schritt weitergeführt. Zusätzlich zur Mobilisierung und Flexibilität werden dynamische Bewegungen eingebaut, die gezielt Muskelgruppen aktivieren. Dabei wird großer Wert darauf gelegt, auf den eigenen Körper zu hören – du bestimmst, welche Variationen und Modifikationen du umsetzt, um deinem persönlichen Fitnesslevel gerecht zu werden. Das Ziel ist es, sich nach jedem Training stärker, selbstbewusster und glücklicher zu fühlen – unterstützt durch gute Laune Musik."
        }
      },
      {
        "@type": "Question",
        "name": "Für wen ist Elevate Pilates geeignet?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Die angebotenen Kurse sind für Frauen jeden Alters und Fitnesslevels geeignet – du entscheidest, wie weit du dich pushen möchtest. In meinen Trainings gebe ich 110 % und werde dich motivieren, das Beste aus dir in jedem Kurs herauszuholen. Egal, ob du Beginner, Intermediate oder Advanced bist, bist du im Kurs willkommen und gut aufgehoben."
        }
      },
      {
        "@type": "Question",
        "name": "Was ist der Unterschied zwischen Pilates auf der Matte und dem Reformer?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Die von Joseph Pilates entwickelte Methode findet ihren Ursprung auf der Matte. Du nutzt dein eigenes Körpergewicht, um die Bewegung auszuführen und zu kontrollieren. Der Reformer wurde als Instrument zur Unterstützung, vor allem im Rehabilitationsbereich, entwickelt und bietet Widerstand und Führung durch Anwendung von Federn und Seilzügen. Beide Methoden helfen dem Körper Mobilität, Kraft und Balance aufzubauen. Elevate ist auf Basis der klassischen Methode des Matten-Pilates konzipiert, die mehr Eigenkontrolle und Konzentration verlangt."
        }
      },
      {
        "@type": "Question",
        "name": "Wie kann ich mich für einen Kurs anmelden?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Du kannst dich entweder direkt nach deinem ersten kostenlosen Probekurs für eine Mitgliedschaft anmelden oder alternativ eine E-Mail an elevate-pilates@outlook.com senden."
        }
      },
      {
        "@type": "Question",
        "name": "Was sollte ich zum Kurs mitbringen?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Am besten bringst du eine eigene Matte sowie idealerweise rutschfeste Socken mit. Solltest du aber mal deine Matte vergessen oder keine eigene besitzen, stehen dir Matten im Studio zur Verfügung. Ansonsten brauchst du dich um nichts zu kümmern – Equipment steht im Studio zur Verfügung und wird nach jedem Kurs gründlich desinfiziert und gereinigt."
        }
      },
      {
        "@type": "Question",
        "name": "Gibt es Umkleidemöglichkeiten im Studio?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Im Studio gibt es zwei große Badezimmer, in denen du dich auch umkleiden kannst. Dort steht dir jederzeit eine Auswahl an Hygieneprodukten bereit, sodass du rundum sorgenfrei bleibst."
        }
      },
      {
        "@type": "Question",
        "name": "Kann ich eine Einzelstunde buchen?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Ja, auf Anfrage können Einzelstunden gebucht werden. Bei Interesse sende eine E-Mail an elevate-pilates@outlook.com mit dem Betreff 'Anfrage Einzelstunde'. Nach einer kurzen Absprache kann ich die Kurseinheit auf dein persönliches Level abstimmen sowie deine Ziele und Wünsche integrieren."
        }
      },
      {
        "@type": "Question",
        "name": "Gibt es eine Elevate Community?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Ja, auf Anfrage kannst du zur WhatsApp-Gruppe hinzugefügt werden. Folge Elevate Pilates auch auf Instagram (@elevate_pilates_darmstadt) für Updates & Event Announcements."
        }
      },
      {
        "@type": "Question",
        "name": "Wie gelange ich am besten zum Studio? und gibt es Parkmöglichkeiten?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Das Studio befindet sich direkt im Herzen von Darmstadt neben dem Herrngarten. Parkplätze sind in der Straße vorhanden. Beachte bitte, dass diese zu bestimmten Tageszeiten kostenpflichtig sein können. Mit der Straßenbahn erreichst du das Studio bequem über den Willy-Brandt-Platz oder die Pallaswiesenstraße."
        }
      }
    ]
  };


function App() {

  const [courseDates, setCourseDates] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalContactOpenDefault, setIsModalContactOpen] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState('');

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleCloseModalContact = () => {
    setIsModalContactOpen(false);
  };

  return (
    <>
    <Helmet>
      <title>Home | Elevate Pilates Darmstadt</title>

      <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
    </Helmet>
    
    <PageDiv>
      <InfoModal isOpen={isModalContactOpenDefault} onClose={handleCloseModalContact}/>
      <ContactModal isOpen={isModalOpen} onClose={handleCloseModal} registerCourse={selectedCourse}/>
      <Hero />
      <BubbleSection>
        <ContainerDiv>
          <TopRowDiv>
            <CardInnerTop>
              <div style={{ flex: 1 }}>
                <Subtitles>Mitgliedschaften</Subtitles>
                <RatesDiv>
                  
                  <RateListItemDiv>
                    <p>➤ Drop-in Session</p>
                    <p>€ 20</p>
                  </RateListItemDiv>
                  <RateListItemDiv>
                    <p>➤ 10er Pass</p>
                    <p>€ 150</p>
                  </RateListItemDiv>
                  <RateListItemDiv>
                    <p>➤ Monatskarte </p>
                    <p>€ 120</p>
                  </RateListItemDiv>
                  <RateListItemDiv>
                    <p>➤ Zugang Video Kurse</p>
                    <p>€ 10/Monat</p>
                  </RateListItemDiv>
                  <RateListItemDiv>
                    <p>➤ Private Session (nach Absprache)</p>
                    <p>€ 85/Std.</p>
                  </RateListItemDiv>
                </RatesDiv>
              </div>
              <ParentDiv>
                <SignupBtn to="/contact">Jetzt Anmelden!</SignupBtn>
              </ParentDiv>
            </CardInnerTop>
          </TopRowDiv>

          <SecondRowDiv>
            <LeftDiv>
              <CardInner>
                <Subtitles>Das Studio</Subtitles>
                <InfoDiv>
                  <ListDiv>
                    <ListItemDiv>
                      <IconLocation />
                      <p>Alicenstraße 4, 64293 Darmstadt</p>
                    </ListItemDiv>
                    <ListItemDiv>
                      <IconCalendar />
                      <p>Montag, Donnerstag und Samstag</p>
                    </ListItemDiv>
                    <ListItemDiv>
                      <IconFemale />
                      <p>Women Only</p>
                    </ListItemDiv>
                    <ListItemDiv>
                      <IconSocks />
                      <p>Sportmatte (ideal), rutschfeste Socken/Barfuß (optional)</p>
                    </ListItemDiv>
                    <ListItemDiv>
                      <IconWorld />
                      <p>Deutsch/Englisch</p>
                    </ListItemDiv>
                    <ListItemDiv>
                      <IconWrite />
                      <FatText>
                        Kostenlose Probestunde nach Vereinbarung
                      </FatText>
                    </ListItemDiv>
                  </ListDiv>
                </InfoDiv>
              </CardInner>
            </LeftDiv>

                        <RightDiv>
              <CardInner>
                <Subtitles>Kurstermine</Subtitles>
                <InfoDiv>
                  <ListDiv>
                    <CourseDiv>
                      <CourseFrame
                        src="/Courses.webp"
                        alt="Course Schedule"
                      />
                    </CourseDiv>
                    <CourseBtn
                      onClick={(e) => {
                        e.preventDefault();
                        window.open('/Courses.pdf', '_blank');
                      }}
                    >
                      Vergrößern
                    </CourseBtn>
                  </ListDiv>
                </InfoDiv>
              </CardInner>
            </RightDiv>
          </SecondRowDiv>
        </ContainerDiv>
      </BubbleSection>

      <Section>
        <ContainerDiv>
          <SectionContentDiv>
            <RowDiv>
              <TextDiv>
                <SectionTitle>
                  About <ElevateSpan>Elevate.</ElevateSpan>
                </SectionTitle>
                <AboutTxt>
                  Ein Training mit Elevate Pilates ist mehr als nur Schwitzen und Muskelkater in den Tagen danach. Die Trainingsphilosophie, die ich entwickelt habe, geht darüber hinaus. Bei Elevate dreht sich alles darum, Dich während des Trainings am Wohlsten fühlen zu lassen– und ja, das kann auch zu jeder Phase Deines Menstruationszyklus möglich sein ;). Denn im Mittelpunkt steht, auf die Bedürfnisse Deines Körpers, Deinem Gemütszustand und Energielevel zu hören – und alles in Einklang zu bringen.
                  <br /><br />
                  Als ich mein Fitness Journey begann, fühlte ich mich nach dem Training im Fitnessstudio oft überfordert, ausgelaugt und erschöpft oder sogar schlecht gelaunt. Nicht weil das Training zu anstrengend war, sondern weil es zu diesem Zeitpunkt nicht das richtige für mich war. Erst als ich begann, auf die Bedürfnisse meines Körpers zu hören und darauf zu reagieren, stellte sich eine Veränderung ein – sowohl körperlich als auch emotional. Mit der Entwicklung der Elevate Pilates-Trainingsmethode möchte ich diese Erfahrung mit anderen Frauen jeden Alters und Fitnesslevels teilen. Das Training kann Dich dabei unterstützen, Deine persönlichen Fitnessziele zu erreichen und Dich zeitgleich dabei rundum wohl und im Einklang mit deinem Körper und Emotionen zu fühlen – damit Du auch jetzt und in der Zukunft motiviert bleibst, in ein stärkeres Du zu investieren.
                  <br /><br />
                  - Julia, Gründer <ElevateSpanTxt>Elevate</ElevateSpanTxt> Pilates
                </AboutTxt>
                <AboutCTABtn to="/contact">Worauf wartest Du noch?</AboutCTABtn>
              </TextDiv>

              <ImgDiv>
                <StyledImg src={ImgJuliaLizenz} alt="Coach showing pilates license" />
              </ImgDiv>
            </RowDiv>
          </SectionContentDiv>
        </ContainerDiv>
      </Section>

      <FAQ />
    </PageDiv>
    </>
  );
  
}

export default App;
