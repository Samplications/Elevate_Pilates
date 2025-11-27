import React from "react";
import { useState, useEffect, useRef } from "react";
import styled, { keyframes } from "styled-components";
import { Link as RouterLink } from "react-router-dom";
import axios from "axios";
import emailjs from "@emailjs/browser";
import IconSend from "../assets/icons/send-svgrepo-com.svg?react";
import ContactModal from "../components/ContactModal";
import VideoEmbed from "../components/VideoEmbed";

const BackLink = styled(RouterLink)`
  color: var(--c-black);
  text-decoration: none;
  font-size: clamp(0.9rem, 2vw, 1rem);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5em;
  margin: 0 auto;
  width: fit-content;
  transition: opacity 0.3s;

  &:hover {
    opacity: 0.7;
    color: var(--c-accent);
  }

  &::before {
    content: "←";
    font-size: 1.2rem;
  }
`;

const RegisterBtn = styled.button`
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

  &:hover {
    opacity: 0.7;
    color: var(--c-black);
  }
`;

const PageDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: row;
  overflow-x: hidden;
`;

const ContainerDiv = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 1em;
  width: 100%;
  max-width: 1600px;
  padding: clamp(1em, 3vw, 4em); clamp(1em, 3vw, 2em);
  box-sizing: border-box;
`;

const SectionTitle = styled.h1`
  color: #1d1d1da9;
  margin-top: 0.5em;
  margin-bottom: 0;
  text-align: center;
  font-size: clamp(2rem, 6vw, 4rem);
`;

const GridDiv = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  justify-content: center;
  align-content: center;
`;

const FAQOuterCard = styled.div`
  justify-self: center;
  background-color: var(--c-white);
  border-radius: clamp(25px, 5vw, 55px);
  padding: 0.5em;
  width: 100%;
  box-sizing: border-box;
`;

const CardInner = styled.div`
  border: 1px solid var(--c-secondary);
  background: var(--c-white);
  border-radius: clamp(25px, 5vw, 55px);
  padding: clamp(1em, 3vw, 2em);
  width: 100%;
  box-sizing: border-box;

  display: grid;
  grid-template-column: 1fr;
  gap: 3em;
`;

const ElevateSpan = styled.span`
  font-family: var(--f-elevate);
  color: var(--c-secondary);
  font-weight: 500;
  font-size: clamp(2.5rem, 8vw, 6rem);
  margin: 0;
`;

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

const ErrorMessage = styled.p`
  color: red;
  font-weight: bold;
  text-align: center;
  margin-top: 1em;
  font-size: clamp(0.9rem, 2vw, 1rem);
`;

const SpotifyLink = styled.a`
  &:hover {
    color: black;
  }
`;

const VideoTitle = styled.h2`
  padding-bottom: 0.2em;
`;

const PlaylistText = styled.p`
  margin: -0.6em 0 0 0;
  padding: 0.1em 0 1em 0;
`;

const OnlineCourse = () => {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [tutorialsVids, setTutorials] = useState([]);
  const [workoutVids, setWorkouts] = useState([]);

  const pswrd = "Elevate25";

  // Fetch tutorials from backend
  const fetchTutorials = async () => {
    try {
      const response = await axios.get(
        "https://openai-backend-6999.onrender.com/api/elevate-pilates/tutorials",
        {
          params:{
              password: pswrd
          }
        }
      );
      setTutorials(response.data.data);
    } catch (error) {
      console.error("Error calling API:", error);
      const errorMessage =
        "Sorry, something went wrong. Please try again later.";
      setTutorials((prevtTutorials) => [...prevtTutorials, errorMessage]);
    }
  };

  // Fetch tutorials from backend
  const fetchWorkouts = async () => {
    try {
      const response = await axios.get(
        "https://openai-backend-6999.onrender.com/api/elevate-pilates/workouts",
        {
          params:{
              password: pswrd
          }
        }
      );
      setWorkouts(response.data.data);
    } catch (error) {
      console.error("Error calling API:", error);
      const errorMessage =
        "Sorry, something went wrong. Please try again later.";
      setWorkouts((prevWorkouts) => [...prevWorkouts, errorMessage]);
    }
  };

  useEffect(() => {
    if (isLoggedIn) {
      fetchTutorials();
      fetchWorkouts();
    }
  }, [isLoggedIn]);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const form = useRef();
  const [error, setError] = useState(false);

  const LogIn = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const username = e.target.user_name.value;
    const password = e.target.password.value;

    if ("Surprise" === username) {
      if (password === pswrd) {
        form.current.reset();
        setLoggedIn(true);
      } else {
        setError(true);
        console.log("Wrong password");
      }
    } else {
      setError(true);
      console.log("Wrong username");
    }

    setIsSubmitting(false);
  };

  return (
    <PageDiv>
      <ContactModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        registerCourse="Video Kurse"
      />
      <ContainerDiv>
        {isLoggedIn ? (
          <>
            <SectionTitle>
              Technik <ElevateSpan>Tutorials</ElevateSpan>
            </SectionTitle>

            <FAQOuterCard>
              <CardInner>
                {tutorialsVids ? (
                  tutorialsVids.map((tutorial, index) => (
                    <div key={index}>
                      <div>
                        <VideoTitle>{tutorial.title}</VideoTitle>
                        <VideoEmbed src={tutorial.vid_url} />
                      </div>
                    </div>
                  ))
                ) : (
                  <p>Loading...</p>
                )}
              </CardInner>
            </FAQOuterCard>

            <SectionTitle>
              Follow Along <ElevateSpan>Workouts</ElevateSpan>
            </SectionTitle>
            <FAQOuterCard>
              <CardInner>
                {workoutVids ? (
                  workoutVids.map((workout, index) => (
                    <div key={index}>
                      <div>
                        <VideoTitle>{workout.title}</VideoTitle>
                        <PlaylistText>
                          Listen to my{" "}
                          <SpotifyLink
                            target="_blank"
                            href="https://open.spotify.com/playlist/46w0f41ciIZIlk2Hgf1JMH?si=DGK10GMMQwumO_2KRJ48WA&pi=Hl_NpUwzT9aXc"
                          >
                            Spotify Playlist
                          </SpotifyLink>
                        </PlaylistText>
                        <VideoEmbed src={workout.vid_url} />
                      </div>
                    </div>
                  ))
                ) : (
                  <p>Loading...</p>
                )}
              </CardInner>
            </FAQOuterCard>
          </>
        ) : (
          <>
            <SectionTitle>
              Zugang zu den <ElevateSpan>Video Kursen</ElevateSpan>
            </SectionTitle>
            <GridDiv>
              <FAQOuterCard>
                <CardInner>
                  <FormDiv ref={form} onSubmit={LogIn}>
                    <input
                      type="hidden"
                      name="message"
                      value={`I would like to sign up for the video classes`}
                    />
                    <Input
                      type="text"
                      name="user_name"
                      placeholder="Dein Name"
                      required
                    />
                    <Input
                      type="password"
                      name="password"
                      placeholder="Passwort"
                      required
                    />
                    <BtnDiv>
                      <SubmitBtn type="submit" disabled={isSubmitting}>
                        <IconSend />
                        {isSubmitting ? "Logging in..." : "Log In"}
                      </SubmitBtn>

                      <RegisterBtn type="button" onClick={handleOpenModal}>
                        Registrieren
                      </RegisterBtn>
                    </BtnDiv>
                    {error && (
                      <ErrorMessage>
                        Beim Senden Deiner Anmeldung ist ein Fehler aufgetreten.
                        Bitte versuche es erneut.
                      </ErrorMessage>
                    )}
                  </FormDiv>
                </CardInner>
              </FAQOuterCard>
            </GridDiv>
            <BackLink to="/">Zurück zur Homepage</BackLink>
          </>
        )}
      </ContainerDiv>
    </PageDiv>
  );
};

export default OnlineCourse;
