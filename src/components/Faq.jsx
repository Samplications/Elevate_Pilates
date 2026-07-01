import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import IconQuestion from '../assets/icons/question-svgrepo-com.svg?react';
import IconChevronDown from '../assets/icons/chevron-down-svgrepo-com.svg?react';
import IconChevronUp from '../assets/icons/chevron-up-svgrepo-com.svg?react';

const FAQDiv = styled.div`
  width: 100%;
  padding: clamp(1em, 3vw, 2em) 0;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  flex-direction: row;
  margin: 3em 0 2em 0;
`;

const FAQOuterCard = styled.div`
  background-color: var(--c-white);
  border-radius: clamp(25px, 5vw, 55px);
  padding: 0.5em;
  width: 100%;
  box-sizing: border-box;
`;

const FAQCard = styled.div`
  border: 1px solid var(--c-secondary);
  background-color: var(--c-white);
  border-radius: clamp(25px, 5vw, 55px);
  padding: clamp(1.5em, 3vw, 2.5em);
  width: 100%;
  box-sizing: border-box;
`;

const FAQTitle = styled.h1`
  color: #1d1d1da9;
  margin-bottom: 1.5em;
  text-align: center;
  font-size: clamp(2rem, 5vw, 4rem);
`;

const FAQList = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 1em;
`;

const FAQItem = styled.div`
  border-bottom: 1px solid #eee;
  padding-bottom: 1em;
  margin-bottom: 1em;

  &:last-child {
    border-bottom: none;
    margin-bottom: 0;
  }
`;

const FAQQuestion = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  font-weight: 600;
  font-size: clamp(1rem, 2.5vw, 1.3rem);
  color: var(--c-secondary);
  gap: 0.5em;
  transition: opacity 0.3s;

  &:hover {
    opacity: 0.8;
  }

  svg {
    min-width: 20px;
    min-height: 20px;
    width: clamp(20px, 3vw, 24px);
    height: clamp(20px, 3vw, 24px);
    opacity: 0.85;
    flex-shrink: 0;
  }
`;

const QuestionText = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5em;
  flex: 1;
`;

const FAQAnswer = styled.p`
  font-size: clamp(0.9rem, 2vw, 1.1rem);
  line-height: 1.6;
  color: #1d1d1da9;
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.3s ease-out, margin-top 0.3s ease-out;
  margin: 0;

  ${({ isOpen }) =>
    isOpen &&
    css`
      max-height: 1000px;
      margin-top: 1em;
    `}
`;

const ChevronIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  
  svg {
    width: clamp(18px, 2.5vw, 20px);
    height: clamp(18px, 2.5vw, 20px);
  }
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

const InstaLink = styled.a`
  &:hover{
    font-weight: bold;
    color: var(--c-secondary);
  }
`;

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: 'Was ist Pilates?',
      answer:
        (<>
        Es handelt sich bei Pilates um eine ganzheitliche Trainingsmethode, entwickelt von Joseph Pilates unter der Bezeichnung "Contrology". Der Fokus liegt dabei auf der Stärkung der Tiefenmuskulatur und der kontrollierten Ausführung bewusster Bewegungen unter Berücksichtigung der Atemtechnik. Das sogenannte „Powerhouse“ wird hierbei für die Dauer des gesamten Workouts aktiviert. Pilates mobilisiert und stärkt den Körper und ermöglicht mehr Flexibilität. Das klassische Pilates wird auf der Matte praktiziert und durch Equipment wie z. B. Bälle, Bänder oder Gewichte zusätzlich unterstützt.
        </>),
    },
    {
      question: 'Warum Elevate Pilates?',
      answer:
        (<>
        Das traditionelle Pilates wird mit Elevate noch einen Schritt weitergeführt. Zusätzlich zur Mobilisierung und Flexibilität werden dynamische Bewegungen eingebaut, die gezielt Muskelgruppen aktivieren. Dabei wird großer Wert darauf gelegt, auf den eigenen Körper zu hören – pushe dich auf dein höchstes Level oder gehe es langsamer an. du bestimmst, welche Variationen und Modifikationen du umsetzt, um deinem persönlichen Fitnesslevel gerecht zu werden.
        <br/>
        Das Ziel ist es, sich nach jedem Training stärker, selbstbewusster und glücklicher zu fühlen – unterstützt durch gute Laune Musik 🙂.
        </>),
    },
    {
      question: 'Für wen ist Elevate Pilates geeignet?',
      answer:
        (<>
        Die angebotenen Kurse sind für Frauen jeden Alters und Fitnesslevels geeignet – du entscheidest, wie weit du dich pushen möchtest. In meinen Trainings gebe ich 110 % und werde dich motivieren, das Beste aus dir in jedem Kurs herauszuholen. Egal, ob du Beginner, Intermediate oder Advanced bist, bist du im Kurs willkommen und gut aufgehoben.
        </>),
    },
    {
      question: 'Was ist der Unterschied zwischen Pilates auf der Matte und dem Reformer?',
      answer:
        (<>
        Die von Joseph Pilates entwickelte Methode findet ihren Ursprung auf der Matte. Du nutzt dein eigenes Körpergewicht, um die Bewegung auszuführen und zu kontrollieren. Der Reformer wurde als Instrument zur Unterstützung, vor allem im Rehabilitationsbereich, entwickelt und bietet Widerstand und Führung durch Anwendung von Federn und Seilzügen. Beide Methoden helfen dem Körper Mobilität, Kraft und Balance aufzubauen. In der aktuellen Zeit wird Reformer-Pilates daher oft irrtümlicherweise als "Fortgeschritten" und Matten-Pilates als "Anfänger" bezeichnet. Dies ist jedoch nicht der Fall.
        <br/>
        Elevate ist auf Basis der klassischen Methode des Matten-Pilates konzipiert. Diese verlangt mehr Eigenkontrolle und Konzentration ab, da das Feedback der Bewegung direkt von deinem eigenen Körper ohne äußere Einwirkung erfolgt und gesteuert werden kann.
        </>),
    },
    {
      question: 'Wie kann ich mich für einen Kurs anmelden?',
      answer:
        (<>
        Du kannst dich entweder direkt nach deinem ersten kostenlosen Probekurs für eine Mitgliedschaft anmelden oder alternativ eine E-Mail an <InstaLink href='mailto:elevate-pilates@outlook.com'>elevate-pilates@outlook.com</InstaLink> senden.
        </>),
    },
    {
      question: 'Was sollte ich zum Kurs mitbringen?',
      answer:
        (<>
        Am besten bringst du eine eigene Matte sowie idealerweise rutschfeste Socken mit. Solltest du aber mal deine Matte vergessen oder keine eigene besitzen, stehen dir Matten im Studio zur Verfügung.
        Ansonsten brauchst du dich um nichts zu kümmern und kannst direkt zum Kurs erscheinen. Equipment steht im Studio zur Verfügung und wird nach jedem Kurs gründlich desinfiziert und gereinigt.
        </>),
    },
    {
      question: 'Gibt es Umkleidemöglichkeiten im Studio?',
      answer:
        (<>
        Im Studio gibt es zwei große Badezimmer, in denen du dich auch umkleiden kannst. Dort steht dir jederzeit eine Auswahl an Hygieneprodukten bereit, sodass du rundum sorgenfrei bleibst.
        </>),
    },
    {
      question: 'Kann ich eine Einzelstunde buchen?',
      answer:
        (<>
        Ja, auf Anfrage können Einzelstunden gebucht werden. Bei Interesse sende eine E-Mail an <InstaLink href='mailto:elevate-pilates@outlook.com'>elevate-pilates@outlook.com</InstaLink> mit dem Betreff "Anfrage Einzelstunde". Nach einer kurzen Absprache kann ich die Kurseinheit auf dein persönliches Level abstimmen sowie deine Ziele und Wünsche integrieren.
        </>),
    },
    {
      question: 'Gibt es eine Elevate Community?',
      answer:
        (<>
        Ja, auf Anfrage kannst du zur WhatsApp-Gruppe hinzugefügt werden. Folge Elevate Pilates auch auf Instagram (<InstaLink href='https://www.instagram.com/elevate_pilates_darmstadt/' target="_blank">@elevate_pilates_darmstadt</InstaLink>) für Updates & Event Announcements. Wir freuen uns dich bald in der Elevate Family willkommen heißen zu dürfen! 🙂
        </>),
    },
    {
      question: 'Wie gelange ich am besten zum Studio? und gibt es Parkmöglichkeiten?',
      answer:
        (<>
        Das Studio befindet sich direkt im Herzen von Darmstadt neben dem Herrngarten. Parkplätze sind in der Straße vorhanden. Beachte bitte, dass diese zu bestimmten Tageszeiten kostenpflichtig sein können. Solltest du mit dem Fahrrad unterwegs sein, befinden sich direkt in der Alicenstraße Möglichkeiten zum Anschließen, alternativ auch in der Viktoriastraße vor der Geotheschule. Mit der Straßenbahn erreichst du das Studio bequem über den Willy-Brandt-Platz oder die Pallaswiesenstraße.
        </>),
    },
    
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <FAQDiv>
      <ContainerDiv>
        <FAQOuterCard>
          <FAQCard>
            <FAQTitle>FAQ's</FAQTitle>
            <FAQList>
              {faqs.map((faq, index) => (
                <FAQItem key={index}>
                  <FAQQuestion onClick={() => toggleFAQ(index)}>
                    <QuestionText>
                      <IconQuestion />
                      {faq.question}
                    </QuestionText>
                    <ChevronIcon>
                      {openIndex === index ? <IconChevronUp /> : <IconChevronDown />}
                    </ChevronIcon>
                  </FAQQuestion>
                  <FAQAnswer isOpen={openIndex === index}>{faq.answer}</FAQAnswer>
                </FAQItem>
              ))}
            </FAQList>
          </FAQCard>
        </FAQOuterCard>
      </ContainerDiv>
    </FAQDiv>
  );
};

export default FAQ;
