import { useState } from 'react';
import styled, { keyframes }  from 'styled-components'
import { BrowserView, MobileView } from 'react-device-detect';
import Hero from './components/Hero';
import { Link as RouterLink } from 'react-router-dom';

import IconBike from './assets/icons/bike-2-svgrepo-com.svg?react';
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
  font-size: 0.8rem;
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
  width: 100vw;
  display: flex;
  justify-content: center;
  flex-direction: column;

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
  @media (max-width: 767px) {
    p {
      margin: 0 0 1rem 0;
    }
  }
`;

const BubbleSection = styled(ContentDiv)`
  width: 100%;
  padding: 2em 0;
  margin-top: 2em;
  box-sizing: border-box;
`;

const BalloonDiv = styled.div`
  background-color: var(--c-white);
  width: 100%;
  border-radius: 50px;
  padding: 0.5em; 
  box-sizing: border-box;
`;


const Section = styled(ContentDiv)`
  width: 100%;
  padding: 2em 0;
`;

const ContainerDiv = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 2em;
  width: 100%;
  max-width: 1600px; /* Add a max-width for large screens */
  padding: 0 2em;
  box-sizing: border-box;
`;

const CardInner = styled.div`
  border: 1px solid var(--c-secondary);
  border-radius: 55px;
  padding: 2em 2.5em;
  width: 100%; // Ensure it takes full width of parent
  height: 100%;
  box-sizing: border-box; // Include padding in width calculation
`;

const CardInnerTop = styled(CardInner)`
  display: flex;
  justify-content: space-between;
  flex-direction: row;

  @media (max-width: 767px) {
    justify-content: center;
    flex-direction: column;
    gap: 0em;
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
  gap: 2em;
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
  font-size: 4rem;
  margin: 0;
  @media (max-width: 767px) {
    font-size: 2rem;
  }
`;

const InfoDiv = styled.div`
  margin-top: 1em;
`;

const SectionTitle = styled.h1`
  color: #1d1d1da9;
  margin-bottom: 0.2em;
`;

const SectionContentDiv = styled.div`
  
`;

const RowDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center; // Vertically center the items
  gap: 2em;
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
    font-size: 6rem;
    margin:0;
`;

const ElevateSpanTxt = styled(ElevateSpan)`
  font-size: 2rem;
`;

const SignupBtn = styled(ButtonLink)`
  font-size: 2rem;
  border-radius: 30px;
  border-width: 3px;
  padding: 0.6em 1.2em;
  box-sizing: border-box; // Include padding and border in the element's total width and height
  height: auto; // Let the height adjust naturally
  flex-grow: 1; // Allow the button to grow and fill available space
  display: flex;
  align-items: center; // Vertically center the content
  justify-content: center; // Horizontally center the content
  margin-left: 1em;

  @media (max-width: 767px) {
        margin-left: 0;
        margin-top: 0.5em;
        text-align: center;
      }
`;


const ListDiv = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

const ListItemDiv = styled.div`
  display: flex;
  justify-content: start;
  flex-direction: row;

  p{
    font-size: 1.3rem;
    margin-left:0.4em;
  }

  svg {
    min-width: 24px;
    min-height : 24px;
    width: 24px;  // Set your desired width
    height: 24px; // Set your desired height
    margin-right: 8px; // Optional: Add some spacing between icon and text
    opacity: 0.85;
  }
`;

const RateListItemDiv = styled(ListItemDiv)`
  justify-content: space-between;
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
  margin:0;
`;

const TextDiv = styled.div`
  

  @media (max-width: 767px) {
    align-items: center; // Vertically center the items
    gap: 0;
    display: flex;
  justify-content: space-between;
  flex-direction: column;
  }
`;

const ImgDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  width: 100%;
  max-width: 500px; // Set a max-width to control the size on larger screens
  margin: 0 auto; // Center the image container

  @media (max-width: 767px) {
    max-width: 300px; // Adjust for smaller screens
    padding: 1em 0;
  }
`;

const StyledImg = styled.img`
  width: 100%;
  height: auto; // Maintain aspect ratio
  border-radius: 50%;
  border-style: solid;
  border-width: 8px;
  border-color: #1d1d1da9;
  box-shadow: 5px 5px 15px 5px #00000025;
  min-width: 250px;
`;

const AboutTxt = styled.p`
  font-size: 1.4em;
`;

const AboutCTABtn = styled(ButtonLink)`
  margin-top: 0.5em;
  font-size: 1.4em;
`;

const OverflowDiv = styled.div`
  
`;

const ParentDiv = styled.div`
   display: flex;
  align-items: stretch; // Allows child to stretch to full height
  width: fit-content; // Or 100% if needed
`;

const FatText = styled.p`
  font-weight:bold;
`;

function App() {
  return (
    <PageDiv>
      <OverflowDiv>
        <Hero />
      </OverflowDiv>
      <BubbleSection>
        <ContainerDiv>
          <TopRowDiv>
            <CardInnerTop>
            <div>
            <Subtitles>Mitgliedschaften</Subtitles>

            <InfoDiv>
              <RateListItemDiv>
                <p>➤ Alle 2025 Kurse</p>
                <p><FreeSpan>Kostenlos</FreeSpan></p>
              </RateListItemDiv>

              <RateListItemDiv>
                <p>➤ Drop-in Session</p>
                <p>€ 20</p>
              </RateListItemDiv>

              <RateListItemDiv>
                <p>➤ 10er Pass</p>
                <p>€ 150</p>
              </RateListItemDiv>

            </InfoDiv>
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
                    <IconLocation/>
                    <p>Rheinstrasse 22, 3. OG, 64283 Darmstadt</p>
                  </ListItemDiv>

                  <ListItemDiv>
                    <IconCalendar/> 
                    <p>Samstags: 9:30 - 10:30 Uhr</p>
                  </ListItemDiv>

                  <ListItemDiv>
                    <IconFemale/>
                    <p>Women Only</p>
                  </ListItemDiv>

                  <ListItemDiv>
                    <IconSocks/> 
                    <p>Rutschfeste Socken und Matte mitbringen</p>
                   </ListItemDiv>

                  <ListItemDiv>
                    <IconWorld/>
                    <p>Deutsch/Englisch</p>
                  </ListItemDiv>

                  <ListItemDiv>
                    <IconWrite/> 
                    <FatText>Teilnahme nur mit Anmeldung! <br/>Max. 10 Teilnehmerinnen pro Kurs.</FatText>
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
                    <IconWeights/>
                    <p>11. Oktober</p>
                  </ListItemDiv>
                  <p>~ Kostenlos</p>
                </RateListItemDiv>
                
                <RateListItemDiv>
                  <ListItemDiv>
                    <IconWeights/>
                    <p>18. Oktober</p>
                  </ListItemDiv>
                  <p>~ Kostenlos</p>
                </RateListItemDiv>

                <RateListItemDiv>
                  <ListItemDiv>
                    <IconWeights/>
                    <p>25. Oktober</p>
                  </ListItemDiv>
                  <p>~ Kostenlos</p>
                </RateListItemDiv>

                <RateListItemDiv>
                  <ListItemDiv>
                    <IconWeights/>
                    <p>1. November</p>
                  </ListItemDiv>
                  <p>~ Kostenlos</p>
                </RateListItemDiv>

                <RateListItemDiv>
                  <ListItemDiv>
                    <IconWeights/>
                    <p>8. November</p>
                  </ListItemDiv>
                  <p>~ Kostenlos</p>
                </RateListItemDiv>

                <RateListItemDiv>
                  <ListItemDiv>
                    <IconWeights/>
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
              <SectionTitle>About <ElevateSpan>Elevate.</ElevateSpan></SectionTitle>
              <AboutTxt>
                Ein Training mit Elevate Pilates ist mehr als nur Schwitzen und Muskelkater in den Tagen danach. Die Trainingsphilosophie, die ich entwickelt habe, geht darüber hinaus. Bei Elevate dreht sich alles darum, Dich während des Trainings am Wohlsten fühlen zu lassen– und ja, das kann auch zu jeder Phase Deines Menstruationszyklus möglich sein ;). Denn im Mittelpunkt steht, auf die Bedürfnisse Deines Körpers, Deinem Gemütszustand und Energielevel zu hören – und alles in Einklang zu bringen. 
Als ich mein Fitness Journey begann, fühlte ich mich nach dem Training im Fitnessstudio oft überfordert, ausgelaugt und erschöpft oder sogar schlecht gelaunt. Nicht weil das Training zu anstrengend war, sondern weil es zu diesem Zeitpunkt nicht das richtige für mich war. Erst als ich begann, auf die Bedürfnisse meines Körpers zu hören und darauf zu reagieren, stellte sich eine Veränderung ein – sowohl körperlich als auch emotional. Mit der Entwicklung der Elevate Pilates-Trainingsmethode möchte ich diese Erfahrung mit anderen Frauen jeden Alters und Fitnesslevels teilen. Das Training kann Dich dabei unterstützen, Deine persönlichen Fitnessziele zu erreichen und Dich zeitgleich dabei rundum wohl und im Einklang mit deinem Körper und Emotionen zu fühlen – damit Du auch jetzt und in der Zukunft motiviert bleibst, in ein stärkeres Du zu investieren. - Julia, Gründer <ElevateSpanTxt>Elevate</ElevateSpanTxt> Pilates
              </AboutTxt>
              <AboutCTABtn to="/Contact">Worauf wartest Du noch?</AboutCTABtn>
            </TextDiv>

            <ImgDiv>
              <StyledImg src={ImgJuliaLizenz} alt="Coach showing pilates license"/>
            </ImgDiv>
            </RowDiv>
          </SectionContentDiv>
        </ContainerDiv>
      </Section>

      <Section>
        <FAQ/>
      </Section>
    </PageDiv>
  );
}

export default App;
