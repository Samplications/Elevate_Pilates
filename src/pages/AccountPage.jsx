import React from "react";
import styled from "styled-components";
import { Link as RouterLink } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import AuthForm from "../components/AuthForm";
import { Helmet } from "react-helmet-async";
import { supabase } from "../utils/supabase/client";
import { useQuery } from "@tanstack/react-query";

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
  padding: clamp(1em, 3vw, 4em) clamp(1em, 3vw, 2em);
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
  grid-template-columns: 1fr;
  gap: 1em;
`;

const ElevateSpan = styled.span`
  font-family: var(--f-elevate);
  color: var(--c-secondary);
  font-weight: 500;
  font-size: clamp(2.5rem, 8vw, 6rem);
  margin: 0;
`;

const WelcomeText = styled.p`
  text-align: center;
  font-size: clamp(1rem, 2.5vw, 1.4rem);
  color: var(--c-black);
  margin: 0;
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
  gap: 1em;
`;

const StatCard = styled.div`
  border: 1px solid var(--c-secondary);
  border-radius: 25px;
  padding: 1em;
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 0.3em;
`;

const StatValue = styled.span`
  font-family: var(--f-elevate);
  color: var(--c-secondary);
  font-weight: 500;
  font-size: clamp(2rem, 5vw, 3rem);
`;

const StatLabel = styled.span`
  color: var(--c-grey);
  font-size: clamp(0.9rem, 2vw, 1rem);
`;

const SignOutBtn = styled.button`
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
  margin: 0 auto;
  transition: all 0.3s;
  font-family: inherit;
  font-weight: 500;

  &:hover {
    background-color: var(--c-white);
    color: var(--c-black);
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const LoadingText = styled.p`
  text-align: center;
`;

const AccountPage = () => {
  const { user, loading, signOut } = useAuth();

  // Member record (name etc.)
  const { data: member } = useQuery({
    queryKey: ["member", user?.id],
    queryFn: async () => {
      const { data } = await supabase
        .from("Members")
        .select("*")
        .eq("id", user.id);
      return data[0] ?? null;
    },
    enabled: !!user,
  });

  // All courses the member has ever booked
  const { data: bookedCourses } = useQuery({
    queryKey: ["member-booked-courses", user?.id],
    queryFn: async () => {
      const { data: bookings } = await supabase
        .from("Bookings")
        .select("course_id")
        .eq("member_id", user.id);

      if (!bookings || bookings.length === 0) return [];
      const courseIds = bookings.map((b) => b.course_id);
      if (courseIds.includes(null)) return [];

      const { data: courses } = await supabase
        .from("Courses")
        .select("*")
        .in("id", courseIds)
        .order("course_time", { ascending: false });

      return courses ?? [];
    },
    enabled: !!user,
  });

  if (loading) {
    return <div>Loading...</div>;
  }

  // Not logged in: same login screen as the online courses page
  if (!user) {
    return (
      <>
        <Helmet>
          <title>Mein Konto | Elevate Pilates Darmstadt</title>
          <meta
            name="description"
            content="Melde dich an, um dein Konto bei Elevate Pilates Darmstadt zu sehen: deine Kursstatistiken und deine gebuchten Kurse."
          />
          <link rel="canonical" href="https://elevate-pilates.de/konto" />
          <html lang="de" />
        </Helmet>

        <PageDiv>
          <ContainerDiv>
            <SectionTitle>
              Zugang zu deinem <ElevateSpan>Konto</ElevateSpan>
            </SectionTitle>
            <GridDiv>
              <FAQOuterCard>
                <CardInner>
                  <AuthForm />
                </CardInner>
              </FAQOuterCard>
            </GridDiv>
            <BackLink to="/">Zurück zur Homepage</BackLink>
          </ContainerDiv>
        </PageDiv>
      </>
    );
  }

  // Stats
  const now = new Date();
  const attendedCourses =
    bookedCourses?.filter(
      (course) => new Date(course.course_time) < now,
    ) ?? [];
//   const upcomingCourses =
//     bookedCourses?.filter(
//       (course) => new Date(course.course_time) >= now,
//     ) ?? [];

  // Adjust the field name if your Members table stores it differently
  const displayName = member?.name ?? user?.email;

  return (
    <>
      <Helmet>
        <title>Mein Konto | Elevate Pilates Darmstadt</title>
        <meta
          name="description"
          content="Dein Konto bei Elevate Pilates Darmstadt: deine Kursstatistiken und deine gebuchten Kurse."
        />
        <link rel="canonical" href="https://elevate-pilates.de/konto" />
        <html lang="de" />
      </Helmet>

      <PageDiv>
        <ContainerDiv>
          <SectionTitle>
            Mein <ElevateSpan>Konto</ElevateSpan>
          </SectionTitle>

          <FAQOuterCard>
            <CardInner>
              <WelcomeText>Willkommen zurück, {displayName}!</WelcomeText>

              <StatsGrid>
                <StatCard>
                  <StatValue>{attendedCourses.length}</StatValue>
                  <StatLabel>Dein Kurs-Counter</StatLabel>
                </StatCard>
                {/* <StatCard>
                  <StatValue>{upcomingCourses.length}</StatValue>
                  <StatLabel>Kommende Kurse</StatLabel>
                </StatCard>
                <StatCard>
                  <StatValue>{bookedCourses?.length ?? 0}</StatValue>
                  <StatLabel>Kurse insgesamt</StatLabel>
                </StatCard> */}
              </StatsGrid>
                {member?.role === "admin" && (
                  <div>
                    <RouterLink to="/course-participants">Participants Overview</RouterLink>
                  </div>
                )}
              <SignOutBtn onClick={() => signOut()}>Abmelden</SignOutBtn>
            </CardInner>
          </FAQOuterCard>
        </ContainerDiv>
      </PageDiv>
    </>
  );
};

export default AccountPage;