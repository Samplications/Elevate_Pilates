import { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import Hero from './components/Hero';
import { Link as RouterLink } from 'react-router-dom';

import IconCalendar from './assets/icons/calendar-svgrepo-com.svg?react';
import IconSocks from './assets/icons/socks-svgrepo-com.svg?react';
import IconWrite from './assets/icons/write-svgrepo-com.svg?react';
import IconFemale from './assets/icons/woman-svgrepo-com.svg?react';
import IconWeights from './assets/icons/dumbbell-large-minimalistic-svgrepo-com.svg?react';
import IconLocation from './assets/icons/location-pin-alt-1-svgrepo-com.svg?react';
import IconWorld from './assets/icons/world-2-svgrepo-com.svg?react';

import ImgJuliaLizenz from './assets/julia_lizenz.jpg';
import FAQ from './components/Faq';

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
  
  h1 {
    margin: 1.2rem 0 0.75rem 0;
  }
  
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
  justify-content: center;
  flex-direction: column;
  gap: 0.5em;
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

function App() {
  return (
    <PageDiv>
      <Hero />
      <BubbleSection>
        <ContainerDiv>
          <TopRowDiv>
            <CardInnerTop>
              <div style={{ flex: 1 }}>
                <Subtitles>Mitgliedschaften</Subtitles>
                <RatesDiv>
                  <RateListItemDiv>
                    <p>➤ Alle 2025 Kurse</p>
                    <FreeSpan>Kostenlos</FreeSpan>
                  </RateListItemDiv>
                  <RateListItemDiv>
                    <p>➤ Drop-in Session</p>
                    <p>€ 20</p>
                  </RateListItemDiv>
                  <RateListItemDiv>
                    <p>➤ 10er Pass</p>
                    <p>€ 150</p>
                  </RateListItemDiv>
                </RatesDiv>
              </div>
              <ParentDiv>
                <SignupBtn to="/Contact">Jetzt Anmelden!</SignupBtn>
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
                      <p>Rheinstrasse 22, 3. OG, 64283 Darmstadt</p>
                    </ListItemDiv>
                    <ListItemDiv>
                      <IconCalendar />
                      <p>Samstags: 9:30 - 10:30 Uhr</p>
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
                        Teilnahme nur mit Anmeldung!<br />
                        Max. 10 Teilnehmerinnen pro Kurs.
                      </FatText>
                    </ListItemDiv>
                  </ListDiv>
                </InfoDiv>
              </CardInner>
            </LeftDiv>

            <RightDiv>
              <CardInner>
                <Subtitles>Kurstermine 2025</Subtitles>
                <InfoDiv>
                  <ListDiv>
                    
                    <RateListItemDiv>
                      <ListItemDiv>
                        <IconWeights />
                        <p>25. Oktober</p>
                      </ListItemDiv>
                      <p>~ Kostenlos</p>
                    </RateListItemDiv>
                    <RateListItemDiv>
                      <ListItemDiv>
                        <IconWeights />
                        <p>1. November</p>
                      </ListItemDiv>
                      <p>~ Kostenlos</p>
                    </RateListItemDiv>
                    <RateListItemDiv>
                      <ListItemDiv>
                        <IconWeights />
                        <p>8. November</p>
                      </ListItemDiv>
                      <p>~ Kostenlos</p>
                    </RateListItemDiv>
                    <RateListItemDiv>
                      <ListItemDiv>
                        <IconWeights />
                        <p>15. November</p>
                      </ListItemDiv>
                      <p>~ Kostenlos</p>
                    </RateListItemDiv>
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
                <AboutCTABtn to="/Contact">Worauf wartest Du noch?</AboutCTABtn>
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
  );
}

export default App;
