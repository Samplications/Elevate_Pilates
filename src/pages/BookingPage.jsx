import React from "react";
import { useState, useEffect, useRef } from "react";
import styled, { keyframes } from "styled-components";
import { Link as RouterLink } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import AuthForm from "../components/AuthForm";
import IconSend from "../assets/icons/send-svgrepo-com.svg?react";
import ContactModal from "../components/ContactModal";
import VideoEmbed from "../components/VideoEmbed";
import { Helmet } from "react-helmet-async";
import { supabase } from "../utils/supabase/client";
import { useQueryClient, useQuery, useMutation } from "@tanstack/react-query";
import BookingModal from "../components/BookingModal";
import ConfirmModal from "../components/ConfirmModal";

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
  max-width: 1200px;
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
  gap: 1em;
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

const VideoTitle = styled.h2`
  padding-bottom: 0.2em;
`;

const PlaylistText = styled.p`
  margin: -0.6em 0 0 0;
  padding: 0.1em 0 1em 0;
`;

const Subtitle = styled.p`
  color: var(--c-secondary);
  padding: 0;
  margin: 0;
  font-weight: bold;
`;

const Subtxt = styled.p`
  color: var(--c-grey);
  padding: 0;
  margin: 0;
  font-weight: normal;
`;

const RegisterButton = styled.button`
  background-color: var(--c-secondary);
  color: var(--c-white);
  border: none;
  border-radius: 16px;
  cursor: pointer;
  font-weight: bold;
  transition: all 0.3s;
  font-size: 1rem;

  width: 100%;
  height: 80%;

  &:hover {
    opacity: 0.9;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const RegisterDiv = styled.div`
  display: grid;
  grid-template-columns: 5fr 2fr;
  justify-content: center;
  align-content: center;
  gap: 1rem;
`;

const RegisterTxtDiv = styled.div`
  grid-column: 1;
  padding: 0.2em;
`;

const RegisterBtnDiv = styled.div`
  grid-column: 2;
`;

const RegisterTitle = styled.h3`
  margin-top: 0;
  margin-bottom: 0;
`;

const Separator = styled.div`
  height: 1px;
  background: #ccc;
  margin: 1rem 0;
  grid-column: 1 / -1; // Span all columns
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center; // Centers horizontally
  align-items: center; // Centers vertically
  height: 100%; // Ensure the div takes up available height
`;

const DEMOTEXT = styled.span`
  font-weight: normal;
  margin-left: 1rem;
`;

const CancelButton = styled.button`
  color: var(--c-white);
  border: none;
  border-radius: 16px;
  cursor: pointer;
  font-weight: bold;
  transition: all 0.3s;
  font-size: 1rem;
  width: 100%;
  height: 80%;

  &:hover {
    opacity: 0.9;
    background-color: #ff4444; // Red color for cancel
  }
`;

const ButtonWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

// Usage:
<ButtonContainer>
  <RegisterButton>Buchen</RegisterButton>
</ButtonContainer>;

const BookingPage = () => {
  const queryClient = useQueryClient();
  const { user, session, loading, signIn, signOut } = useAuth();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [hoveredCourseId, setHoveredCourseId] = useState(null);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [courseToCancel, setCourseToCancel] = useState(null);
  const [showLogin, setShowLogin] = useState(false);

  //signOut();

  // BookingModal
  const handleOpenModal = (course) => {
    if(!user){
      setShowLogin(true)
    }else{
      setSelectedCourse(course);
      setIsModalOpen(true);
    }
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedCourse(null);
  };

  // CancelButton
  const handleCancelClick = (courseId) => {
    setCourseToCancel(courseId);
    setShowConfirmation(true);
  };

  const handleConfirmCancel = () => {
    if (courseToCancel) {
      cancelBooking(courseToCancel);
      setShowConfirmation(false);
      setCourseToCancel(null);
    }
  };

  const handleCloseConfirmation = () => {
    setShowConfirmation(false);
    setCourseToCancel(null);
  };

  // Mutation to cancel a booking
  const { mutate: cancelBooking } = useMutation({
    mutationFn: async (courseId) => {
      const { error } = await supabase
        .from("Bookings")
        .delete()
        .eq("course_id", courseId)
        .eq("member_id", user.id);
      if (error) throw error;
    },
    onSuccess: () => {
      // Refetch bookings and course spots after cancellation
      queryClient.invalidateQueries(["user-bookings", user?.id]);
      queryClient.invalidateQueries(["course-spots-free", courses]);
    },
  });

  const { data: member } = useQuery({
    queryKey: ["member"],
    queryFn: async () => {
      const { data } = await supabase
        .from("Members")
        .select("*")
        .eq("id", user.id);
      return data[0] ?? null;
    },
    enabled: !!user,
  });

  // Get latest courses entries
  const { data: courses } = useQuery({
    queryKey: ["all-courses"],
    queryFn: async () => {
      const today = new Date().toISOString();
      const nextWeek = new Date(today);
      nextWeek.setDate(nextWeek.getDate() + 9); // Add 9 days
      const formattedNextWeek = nextWeek.toISOString(); // Format as YYYY-MM-DD

      const { data } = await supabase
        .from("Courses")
        .select("*, trainer(first_name, last_name)")
        .gt("course_time", today) // Filter for courses starting after today
        .lt("course_time", formattedNextWeek)
        .order("course_time", { ascending: true });

        console.log(data);
      return data ?? [];
    },
  });

  // Fetch bookings for all courses and calculate free spots
  const { data: courseSpotsFree } = useQuery({
    queryKey: ["course-spots-free", courses], // Include courses as a dependency
    queryFn: async () => {
      if (!courses || courses.length === 0) return [];
      const courseIds = courses.map((course) => course.id);
      if (courseIds.includes(undefined)) return []; // Skip if any course_id is undefined

      // Fetch all bookings for the courses
      const { data: bookings } = await supabase
        .from("Bookings")
        .select("*")
        .in(
          "course_id",
          courses.map((course) => course.id),
        );
      // Group bookings by course_id
      const bookingsByCourse = bookings?.reduce((acc, booking) => {
        if (!acc[booking.course_id]) acc[booking.course_id] = [];
        acc[booking.course_id].push(booking);
        return acc;
      }, {});

      // Calculate free spots for each course
      return courses.map((course) => {
        const bookingsForCourse = bookingsByCourse?.[course.id] || [];
        const totalBookings = bookingsForCourse.length;
        const maxSpots = course.total_participants || 0; // Replace with your actual field name
        const freeSpots = maxSpots - totalBookings;
        return {
          course_id: course.id,
          free_spots: freeSpots,
        };
      });
    },
    enabled: courses && courses.length > 0, // Only enable if user and courses exist
  });

  const { data: userBookings } = useQuery({
    queryKey: ["user-bookings", user?.id], // Include user.id as a dependency
    queryFn: async () => {
      if (!user?.id) return [];
      const { data } = await supabase
        .from("Bookings")
        .select("course_id")
        .eq("member_id", user.id); // Filter bookings by the current user's ID
      return data ?? [];
    },
    enabled: !!user, // Only run if user is logged in
  });

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Helmet>
        {/* Standard SEO Tags */}
        <title>Kurse Buchen | Elevate Pilates Darmstadt</title>
        <meta
          name="description"
          content="Entdecke unsere Online-Kurse für Pilates: Technik-Tutorials und Follow-Along-Workouts. Melde dich an und trainiere flexibel von zu Hause aus." // TODO
        />
        <meta
          name="keywords"
          content="Pilates, Online Kurse, Technik Tutorials, Workouts, Elevate Pilates, Darmstadt, Video Kurse, Mat Pilates" // TODO
        />

        {/* Open Graph (OG) Tags for Social Sharing */}
        <meta property="og:title" content="Online Kurse | Elevate Pilates" />
        <meta
          property="og:description"
          content="Entdecke unsere Online-Kurse für Pilates: Technik-Tutorials und Follow-Along-Workouts. Melde dich an und trainiere flexibel von zu Hause aus." // TODO
        />
        <meta
          property="og:url"
          content="https://elevate-pilates.de/online-kurse" // TODO
        />

        {/* Twitter Card Tags */}
        <meta name="twitter:title" content="Online Kurse | Elevate Pilates" />
        <meta
          name="twitter:description"
          content="Entdecke unsere Online-Kurse für Pilates: Technik-Tutorials und Follow-Along-Workouts. Melde dich an und trainiere flexibel von zu Hause aus." // TODO
        />

        {/* Canonical URL */}
        <link rel="canonical" href="https://elevate-pilates.de/kurse-buchen" />

        {/* Language Tag */}
        <html lang="de" />
      </Helmet>

      <PageDiv>
        <BookingModal
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          course={selectedCourse}
          member={member}
        />

        <ConfirmModal
          isOpen={showConfirmation}
          onClose={handleCloseConfirmation}
          onConfirm={handleConfirmCancel}
          title="Buchung stornieren"
          message="Möchtest du deine Buchung wirklich stornieren?"
          confirmText="Ja, stornieren"
          cancelText="Nein, Buchung behalten"
        />

        <ContainerDiv>
          {!showLogin ? (
            <>
              <SectionTitle>
                Kurse <ElevateSpan>Buchen</ElevateSpan>
              </SectionTitle>

              <FAQOuterCard>
                <CardInner>
                  {courses ? (
                    courses.map((course, index) => {
                      const date = new Date(course.course_time);

                      const weekday = date
                        .toLocaleDateString("de-DE", {
                          timeZone: "Europe/Berlin",
                          weekday: "short",
                        })
                        .replace(/\./, ""); // Remove dot after weekday

                      const day = date.toLocaleDateString("de-DE", {
                        timeZone: "Europe/Berlin",
                        day: "2-digit",
                      });

                      const month = date.toLocaleDateString("de-DE", {
                        timeZone: "Europe/Berlin",
                        month: "2-digit",
                      });

                      const formattedDate = `${weekday}, ${day}.${month}`;

                      const formattedTime = date.toLocaleTimeString("de-DE", {
                        timeZone: "Europe/Berlin",
                        hour: "2-digit",
                        minute: "2-digit",
                      });

                      // Check if user has booked this course
                      const isBooked = userBookings?.some(
                        (booking) => booking.course_id === course.id,
                      );

                      // Find the free spots for the current course
                      const currentCourseSpots = courseSpotsFree?.find(
                        (spot) => spot.course_id === course.id,
                      );

                      const freeSpots =
                        currentCourseSpots?.free_spots ??
                        course.total_participants;
                      return (
                        <>
                          <RegisterDiv key={course.id}>
                            <RegisterTxtDiv>
                              <RegisterTitle>
                                {formattedDate}. // {formattedTime}
                              </RegisterTitle>
                              <Subtitle>
                                {course.course_title} - {course.timespan_min}min 
                                {/* - {course?.trainer?.first_name} */}
                              </Subtitle>
                              <Subtxt>
                                {freeSpots}/{course.total_participants} Plätze
                                Verfügbar
                              </Subtxt>
                            </RegisterTxtDiv>
                            <ButtonContainer>
                              <ButtonWrapper
                                onMouseEnter={() =>
                                  setHoveredCourseId(course.id)
                                }
                                onMouseLeave={() => setHoveredCourseId(null)}
                              >
                                {isBooked ? (
                                  hoveredCourseId === course.id ? (
                                    <CancelButton
                                      onClick={() => handleCancelClick(course.id)}
                                    >
                                      Stornieren
                                    </CancelButton>
                                  ) : (
                                    <RegisterButton disabled>
                                      Platz gesichert
                                    </RegisterButton>
                                  )
                                ) : (
                                  <RegisterButton
                                    disabled={freeSpots === 0}
                                    onClick={() => handleOpenModal(course)}
                                  >
                                    {freeSpots === 0
                                      ? "Ausgebucht"
                                      : "Buchen"}
                                  </RegisterButton>
                                )}
                              </ButtonWrapper>
                            </ButtonContainer>
                          </RegisterDiv>
                          {index < courses.length - 1 && <Separator />}{" "}
                          {/* Add separator except after the last item */}
                        </>
                      );
                    })
                  ) : (
                    <p>Loading...</p>
                  )}
                </CardInner>
              </FAQOuterCard>
            </>
          ) : (
            <>
              <SectionTitle>
                Anmeldung
              </SectionTitle>
              <GridDiv>
                <FAQOuterCard>
                  <CardInner>
                    <AuthForm onLoginSuccess={() => setShowLogin(false)}/>
                  </CardInner>
                </FAQOuterCard>
              </GridDiv>
              <BackLink to="/">Zurück zur Homepage</BackLink>
            </>
          )}
        </ContainerDiv>
      </PageDiv>
    </>
  );
};

export default BookingPage;
