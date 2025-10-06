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

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: 'Was ist Pilates?',
      answer:
        'Es handelt sich bei Pilates um eine ganzheitliche Trainingsmethode entwickelt von Joseph Pilates. Der Fokus liegt dabei auf der Stärkung der Tiefenmuskulatur und kontrollierter Ausführung unter Berücksichtigung der Atemtechniken. Das sogenannte "Powerhouse" wird hierbei für die Dauer des gesamten Workouts aktiviert. Pilates mobilisiert und stärkt den Körper und ermöglicht mehr Flexibilität. Das Training kann auf der Matte stattfinden und Equipment wie z.B. Bälle, Bänder oder Gewichte einbeziehen.',
    },
    {
      question: 'Warum Elevate?',
      answer:
        'Das traditionelle Pilates Training wird mit Elevate noch einen Schritt weitergeführt. Zusätzlich zur Mobilisierung und Flexibilität werden dynamische Bewegungen eingebaut, die gezielte Muskelgruppen aktivieren. Hierbei wird darauf großen Wert gelegt, auf den eigen Körper zu hören - pushe Dich auf Dein höchstes Level oder gehe es langsamer an. Du bestimmst welche Variationen Du umsetzt, um Deinem persönlichen Fitnesslevel gerecht zu werden. Das Ziel ist es sich stärker, selbstbewusster und glücklicher nach jedem Training zu fühlen - unterstützt wird dies mit Gute Laune Musik :).',
    },
    {
      question: 'Für wen ist das Elevate Pilates Training geeignet?',
      answer:
        'Das Training ist für Frauen jeden Alters und Fitnesslevel geeignet - Du entscheidest wie weit Du Dich pushen möchtest. In meinen Trainings gebe ich 110% und werde Dich motivieren das Beste in Dir in jedem Training herauszuholen.',
    },
    {
      question: 'Warum werden die Kurse in diesem Jahr kostenlos angeboten? Was ändert sich 2026?',
      answer:
        'Das Trainingsprogramm befindet sich in der Anlaufphase. Um Dir die faire Möglichkeit zu geben zu testen, ob Dir das Training gefällt und Du langfristig ein Teil der Elevate Community werden möchtest, werden die "Probekurse" kostenlos angeboten. Sobald Du deine Entscheidung getroffen hast, freue ich mich Dich ab 2026 als Mitglied in der Community willkommen zu heißen :)',
    },
    {
      question: 'Wie registriere ich mich für eine Mitgliedschaft?',
      answer:
        'Du kannst Dich entweder direkt nach dem Training für eine Mitgliedschaft anmelden oder alternativ eine E-Mail an elevate-pilates@outlook.com senden.',
    },
    {
      question: 'Benötige ich Equipment (Matte, Gewichte,..) für das Training?',
      answer:
        'Aktuell ist das Studio nicht genügend ausgestattet, um alle Teilnehmerinnen mit Equipment zu versorgen. Bringe daher bitte für das Training eine eigene Matte sowie idealerweise rutschfeste Socken mit. Ich persönlich trainiere am liebsten in rutschfesten Socken oder alternativ auch Barfuß. Sofern Du Manschetten ("Ankle Weights"), Resistance Bands, Pilates Bälle etc. hast, dann bringe diese gerne mit - damit hebst Du Dein Training nochmal auf ein höhere Stufe ;).',
    },
    {
      question: 'Kann ich eine Einzelstunde buchen?',
      answer:
        'Ja, auf Anfrage können Einzelstunden gebucht werden. Bei Interesse sende eine E-Mail an elevate-pilates@outlook.com mit dem Betreff "Anfrage Einzelstunde". Nach einer kurzen Absprache kann ich die Trainingseinheit auf Dein persönliches Level abstimmen und Deine Vorlieben und Wünsche integrieren.',
    },
    {
      question: 'Gibt es eine Elevate Community?',
      answer:
        'Ja, auf Anfrage kannst Du zur WhatsApp Gruppe hinzugefügt werden. Eine Instagram Seite ist ebenfalls in Bearbeitung. Diese wird Dir in Zukunft unter anderem aktuelle Infos zum Trainingskalender gegeben sowie spannende Pilates Challenges und Tutorials bereithalten. Wir freuen uns Dich willkommen heißen zu dürfen! :)',
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
