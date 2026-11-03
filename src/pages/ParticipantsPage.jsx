import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "../utils/supabase/client";

import styled from "styled-components";

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

const ElevateSpan = styled.span`
  font-family: var(--f-elevate);
  color: var(--c-secondary);
  font-weight: 500;
  font-size: clamp(2.5rem, 8vw, 6rem);
  margin: 0;
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

  display: flex;
  flex-direction: column;
  gap: 1.5em;
`;

const CourseCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75em;
`;

const CourseHeader = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  justify-content: space-between;
  gap: 0.5em 1em;
`;

const CourseTitle = styled.h3`
  margin: 0;
  font-size: clamp(1rem, 4vw, 1.5rem);
`;

const CourseMeta = styled.p`
  color: var(--c-secondary);
  font-weight: bold;
  margin: 0;
  padding: 0;
`;

const Subtxt = styled.p`
  color: var(--c-grey);
  padding: 0;
  margin: 0;
  font-weight: normal;
`;

const ParticipantsList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 0.35em;
`;

const ParticipantItem = styled.li`
  display: flex;
  align-items: center;
  gap: 0.5em;
  padding: 0.4em 0.75em;
  border: 1px solid var(--c-secondary);
  border-radius: 16px;
  font-size: clamp(0.9rem, 2vw, 1rem);

  &::before {
    content: "•";
    color: var(--c-accent);
    font-weight: bold;
  }
`;

const Badge = styled.span`
  display: inline-block;
  padding: 0.15em 0.6em;
  border-radius: 999px;
  font-size: 0.7em;
  font-weight: bold;
  letter-spacing: 0.03em;
  text-transform: uppercase;
  color: var(--c-white);
  white-space: nowrap;
`;

const DropInBadge = styled(Badge)`
  background-color: var(--c-accent);
`;

const TrialBadge = styled(Badge)`
  background-color: var(--c-secondary);
`;

const DateRangeDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 1em;
`;

const DateLabel = styled.label`
  display: flex;
  align-items: center;
  gap: 0.5em;
  color: var(--c-secondary);
  font-weight: bold;
  font-size: clamp(0.9rem, 2vw, 1rem);
`;

const DateInput = styled.input`
  padding: 0.5em 0.75em;
  border: 1px solid var(--c-secondary);
  border-radius: 16px;
  font-size: clamp(0.9rem, 2vw, 1rem);
  background: var(--c-white);
  color: var(--c-black);
  font-family: inherit;

  &:focus {
    outline: none;
    border-color: var(--c-accent);
  }
`;

const ConfirmButton = styled.button`
  background-color: var(--c-secondary);
  color: var(--c-white);
  border: none;
  border-radius: 16px;
  padding: 0.5em 1em;
  cursor: pointer;
  font-weight: bold;
  transition: all 0.3s;
  font-size: 0.9rem;
  font-family: inherit;

  &:hover:not(:disabled) {
    opacity: 0.85;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const EmptyMessage = styled.p`
  color: var(--c-grey);
  font-style: italic;
  margin: 0;
`;

const Separator = styled.div`
  height: 1px;
  background: #ccc;
  margin: 0.5rem 0;
`;

const ErrorText = styled.p`
  color: red;
  font-weight: bold;
  text-align: center;
  margin: 0;
`;

// Local-timezone day string. (Do NOT use toISOString().slice here:
// it converts to UTC first, which shifts to the previous day
// during the early-morning hours in Germany.)
const toDateStr = (date) => {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, "0");
  const d = String(date.getDate()).padStart(2, "0");
  return `${y}-${m}-${d}`;
};

const plusDays = (dateStr, days) => {
  const d = new Date(`${dateStr}T00:00:00.000Z`);
  d.setUTCDate(d.getUTCDate() + days);
  return toDateStr(d);
};

// Start / end of a LOCAL calendar day, expressed in UTC for the API filter.
// new Date("2026-11-03T00:00:00") is local midnight, so Berlin days line up
// exactly with what the picker shows.
const dayStartUTC = (dateStr) => new Date(`${dateStr}T00:00:00`).toISOString();

const dayEndUTC = (dateStr) =>
  new Date(`${dateStr}T23:59:59.999`).toISOString();

const formatCourseDateTime = (course) => {
  const date = new Date(course.course_time);

  const weekday = date
    .toLocaleDateString("de-DE", {
      timeZone: "Europe/Berlin",
      weekday: "short",
    })
    .replace(/\./g, "");

  const day = date.toLocaleDateString("de-DE", {
    timeZone: "Europe/Berlin",
    day: "2-digit",
  });

  const month = date.toLocaleDateString("de-DE", {
    timeZone: "Europe/Berlin",
    month: "2-digit",
  });

  const formattedTime = date.toLocaleTimeString("de-DE", {
    timeZone: "Europe/Berlin",
    hour: "2-digit",
    minute: "2-digit",
  });

  return `${weekday}, ${day}.${month}. // ${formattedTime}`;
};

const ParticipantsPage = () => {
  // Draft dates from the pickers, plus the range actually applied to the
  // query. The query only re-runs when "Anwenden" copies the draft over.
  // Default applied range: today -> today + 9 days (like the booking page)
  const [draftStart, setDraftStart] = useState(() => toDateStr(new Date()));
  const [draftEnd, setDraftEnd] = useState(() =>
    plusDays(toDateStr(new Date()), 9),
  );
  const [appliedRange, setAppliedRange] = useState(() => ({
    start: toDateStr(new Date()),
    end: plusDays(toDateStr(new Date()), 9),
  }));

  const isDirty =
    draftStart !== appliedRange.start || draftEnd !== appliedRange.end;
  const isValid = draftStart <= draftEnd;

  // Get courses within the applied date range
  const {
    data: courses,
    isLoading: coursesLoading,
    error: coursesError,
  } = useQuery({
    queryKey: ["all-courses", appliedRange.start, appliedRange.end],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("Courses")
        .select("*, trainer(first_name, last_name)")
        .gte("course_time", dayStartUTC(appliedRange.start))
        .lte("course_time", dayEndUTC(appliedRange.end))
        .order("course_time", { ascending: true });

      if (error) throw error;
      return data ?? [];
    },
  });

  // Fetch all bookings for these courses, joined with the member names.
  // This assumes a foreign key Bookings.member_id -> Members.id.
  // If the automatic detection fails, use the explicit form:
  //   "course_id, drop_in, trial_booking, member:Members!Bookings_member_id_fkey(first_name, last_name)"
  const {
    data: courseParticipants,
    isLoading: participantsLoading,
    error: participantsError,
  } = useQuery({
    queryKey: ["course-participants", courses],
    queryFn: async () => {
      if (!courses || courses.length === 0) return [];

      const { data: bookings, error } = await supabase
        .from("Bookings")
        .select(
          "course_id, drop_in, trial_booking, member:Members(first_name, last_name)",
        )
        .in(
          "course_id",
          courses.map((course) => course.id),
        );

      if (error) throw error;

      // Group bookings by course_id, keeping the booking flags for the badges
      const bookingsByCourse = (bookings ?? []).reduce((acc, booking) => {
        if (!acc[booking.course_id]) acc[booking.course_id] = [];
        acc[booking.course_id].push({
          first_name: booking.member?.first_name ?? "",
          last_name: booking.member?.last_name ?? "",
          drop_in: booking.drop_in ?? false,
          trial_booking: booking.trial_booking ?? false,
        });
        return acc;
      }, {});

      // Map each course to its participant list
      return courses.map((course) => ({
        course_id: course.id,
        participants: bookingsByCourse[course.id] ?? [],
      }));
    },
    enabled: !!courses && courses.length > 0,
  });

  if (coursesLoading) {
    return (
      <PageDiv>
        <ContainerDiv>
          <p>Loading...</p>
        </ContainerDiv>
      </PageDiv>
    );
  }

  if (coursesError) {
    return (
      <PageDiv>
        <ContainerDiv>
          <ErrorText>Fehler beim Laden der Kurse: {coursesError.message}</ErrorText>
        </ContainerDiv>
      </PageDiv>
    );
  }

  return (
    <>
      <Helmet>
        <title>Teilnehmer | Elevate Pilates Darmstadt</title>
        <meta
          name="description"
          content="Übersicht der Kursteilnehmer und Anmeldungen."
        />
        <link rel="canonical" href="https://elevate-pilates.de/teilnehmer" />
        <html lang="de" />
      </Helmet>

      <PageDiv>
        <ContainerDiv>
          <SectionTitle>
            Kurs <ElevateSpan>Teilnehmer</ElevateSpan>
          </SectionTitle>

          <DateRangeDiv>
            <DateLabel>
              Von
              <DateInput
                type="date"
                value={draftStart}
                max={draftEnd}
                onChange={(e) => setDraftStart(e.target.value)}
              />
            </DateLabel>
            <DateLabel>
              Bis
              <DateInput
                type="date"
                value={draftEnd}
                min={draftStart}
                onChange={(e) => setDraftEnd(e.target.value)}
              />
            </DateLabel>
            <ConfirmButton
              disabled={!isValid || !isDirty}
              title={
                !isValid
                  ? "Startdatum muss vor dem Enddatum liegen"
                  : "Ausgewählten Zeitraum laden"
              }
              onClick={() =>
                setAppliedRange({ start: draftStart, end: draftEnd })
              }
            >
              Anwenden
            </ConfirmButton>
          </DateRangeDiv>

          <FAQOuterCard>
            <CardInner>
              {courses && courses.length > 0 ? (
                courses.map((course, index) => {
                  const entry = courseParticipants?.find(
                    (c) => c.course_id === course.id,
                  );
                  const participants = entry?.participants ?? [];
                  const booked = participants.length;
                  const maxSpots = course.total_participants ?? 0;

                  return (
                    <React.Fragment key={course.id}>
                      <CourseCard>
                        <CourseHeader>
                          <CourseTitle>
                            {formatCourseDateTime(course)}
                          </CourseTitle>
                          <CourseMeta>
                            {course.course_title} - {course.timespan_min}min
                          </CourseMeta>
                        </CourseHeader>
                        <Subtxt>
                          {booked}/{maxSpots} belegt
                          {course?.trainer?.first_name
                            ? ` · Trainer: ${course.trainer.first_name} ${course.trainer.last_name ?? ""}`
                            : ""}
                        </Subtxt>

                        {participantsLoading ? (
                          <Subtxt>Teilnehmer werden geladen...</Subtxt>
                        ) : participants.length > 0 ? (
                          <ParticipantsList>
                            {participants.map((participant, i) => (
                              <ParticipantItem key={i}>
                                <span>
                                  {participant.first_name}{" "}
                                  {participant.last_name}
                                </span>
                                {participant.drop_in && (
                                  <DropInBadge>Drop-in</DropInBadge>
                                )}
                                {participant.trial_booking && (
                                  <TrialBadge>Trial</TrialBadge>
                                )}
                              </ParticipantItem>
                            ))}
                          </ParticipantsList>
                        ) : (
                          <EmptyMessage>
                            Noch keine Anmeldungen für diesen Kurs.
                          </EmptyMessage>
                        )}
                      </CourseCard>
                      {index < courses.length - 1 && <Separator />}
                    </React.Fragment>
                  );
                })
              ) : (
                <EmptyMessage>
                  Aktuell gibt es keine Kurse im gewählten Zeitraum.
                </EmptyMessage>
              )}
            </CardInner>
          </FAQOuterCard>
        </ContainerDiv>
      </PageDiv>
    </>
  );
};

export default ParticipantsPage;