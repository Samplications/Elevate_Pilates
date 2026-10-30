import { useState } from "react";
import styled from "styled-components";
import { useAuth } from "../hooks/useAuth";
import { useQueryClient, useMutation } from "@tanstack/react-query";
import { supabase } from "../utils/supabase/client";

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  background: white;
  padding: 20px 30px 40px 30px;
  border-radius: 12px;
  width: 90%;
  max-width: 500px;
  position: relative;
  text-align: center;
  color: var(--c-black);

  h2 {
    margin-bottom: 0;
  }

  p {
    margin-top: 0.5rem;
  }
`;

const ModalTitle = styled.h3`
  padding: 0.5em 0;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: transparent;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: var(--c-black);
`;

const FormDiv = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1em;
`;

const RadioGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5em;
  align-items: flex-start;
`;

const RadioLabel = styled.label`
  display: flex;
  align-items: center;
  gap: 0.5em;
  cursor: pointer;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 1em;
  justify-content: center;
  margin-top: 1em;
`;

const ConfirmButton = styled.button`
  background-color: var(--c-secondary);
  color: var(--c-white);
  border: 2px solid var(--c-secondary);
  border-radius: 25px;
  padding: 0.75em 2em;
  font-size: clamp(1rem, 2vw, 1.2rem);
  cursor: pointer;
  transition: all 0.3s;
  font-family: inherit;
  font-weight: 500;

  &:hover {
    background-color: var(--c-white);
    color: var(--c-black);
  }
`;

const CancelButton = styled.button`
  background-color: transparent;
  color: var(--c-black);
  border: 2px solid var(--c-black);
  border-radius: 25px;
  padding: 0.75em 2em;
  font-size: clamp(1rem, 2vw, 1.2rem);
  cursor: pointer;
  transition: all 0.3s;
  font-family: inherit;
  font-weight: 500;

  &:hover {
    background-color: var(--c-black);
    color: var(--c-white);
  }
`;

function BookingModal({ isOpen, onClose, course, member }) {
  const { user } = useAuth();
  const queryClient = useQueryClient();
  const [selectedOption, setSelectedOption] = useState(null);

  // Move useMutation outside of any conditional block
  const { mutate: confirmBooking, isPending } = useMutation({
    mutationFn: async ({ selectedOption }) => {
      if (!member?.membership_type && !selectedOption) {
        throw new Error("Bitte wäle eine Option.");
      }

      const isDropIn = member?.membership_type
        ? false
        : selectedOption === "drop-in";
      const isTrialBooking = member?.membership_type
        ? false
        : selectedOption === "trial";

      const { error: bookingError } = await supabase.from("Bookings").insert([
        {
          member_id: user.id,
          course_id: course.id,
          waitlisted: false,
          state: "booked",
          drop_in: isDropIn,
          trial_booking: isTrialBooking,
        },
      ]);

      if (bookingError) {
        throw bookingError;
      }

      if (isTrialBooking) {
        const { error: trialError } = await supabase
          .from("Members")
          .update({ trial_done: true })
          .eq("id", user.id);

        if (trialError) {
          throw trialError;
        }
      }

      return { success: true };
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["course-spots-free"]);
      queryClient.invalidateQueries(["member"]);
      queryClient.invalidateQueries(["user-bookings", user?.id]);
      alert("Buchung bestätigt!");
      onClose();
    },
    onError: (err) => {
      alert(`Buchung konnte nicht bestätigt werden: ${err.message}. Bitte versuche es erneut.`);
    },
  });

  if (!isOpen) return null;

  const handleConfirm = () => {
    confirmBooking({ selectedOption });
  };

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

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

  return (
    <Overlay onClick={handleOverlayClick}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <CloseButton onClick={onClose}>×</CloseButton>
        <ModalTitle>
          Bestätige Buchung für<br />
          {formattedDate} // {formattedTime}
        </ModalTitle>
        {member?.membership_type ? (
          <></>
        ) : (
          <>
            <p>Wähle eine Option:</p>
            <RadioGroup>
              <RadioLabel>
                <input
                  type="radio"
                  name="membership_type"
                  value="drop-in"
                  checked={selectedOption === "drop-in"}
                  onChange={() => setSelectedOption("drop-in")}
                />
                Drop-in
              </RadioLabel>

              {!member?.trial_done && (
                <RadioLabel>
                  <input
                    type="radio"
                    name="membership_type"
                    value="trial"
                    checked={selectedOption === "trial"}
                    onChange={() => setSelectedOption("trial")}
                  />
                  Probestunde
                </RadioLabel>
              )}
            </RadioGroup>
          </>
        )}
        <ButtonGroup>
          <ConfirmButton onClick={handleConfirm} disabled={isPending}>Bestätigen</ConfirmButton>
          <CancelButton onClick={onClose}>Abbrechen</CancelButton>
        </ButtonGroup>
      </ModalContent>
    </Overlay>
  );
}

export default BookingModal;
