import React from "react";
import styled from "styled-components";

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  background-color: var(--c-white);
  padding: 2em;
  border-radius: 16px;
  max-width: 400px;
  width: 90%;
  text-align: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const ModalTitle = styled.h3`
  margin-top: 0;
  color: var(--c-black);
`;

const ModalMessage = styled.p`
  color: var(--c-grey);
  margin-bottom: 1.5em;
`;

const ModalButtons = styled.div`
  display: flex;
  justify-content: center;
  gap: 1em;
`;

const ConfirmButton = styled.button`
  background-color: #ff4444;
  color: var(--c-white);
  border: none;
  border-radius: 8px;
  padding: 0.5em 1em;
  cursor: pointer;
  font-weight: bold;
  transition: opacity 0.3s;

  &:hover {
    opacity: 0.9;
  }
`;

const CancelButton = styled.button`
  background-color: var(--c-secondary);
  color: var(--c-white);
  border: none;
  border-radius: 8px;
  padding: 0.5em 1em;
  cursor: pointer;
  font-weight: bold;
  transition: opacity 0.3s;

  &:hover {
    opacity: 0.9;
  }
`;

// Generic ConfirmModal component
const ConfirmModal = ({
  isOpen,
  onClose,
  onConfirm,
  title = "Bestätigen",
  message = "Bist du sicher?",
  confirmText = "Ja",
  cancelText = "Nein",
}) => {
  if (!isOpen) return null;

  return (
    <ModalOverlay>
      <ModalContent>
        <ModalTitle>{title}</ModalTitle>
        <ModalMessage>{message}</ModalMessage>
        <ModalButtons>
          <ConfirmButton onClick={onConfirm}>{confirmText}</ConfirmButton>
          <CancelButton onClick={onClose}>{cancelText}</CancelButton>
        </ModalButtons>
      </ModalContent>
    </ModalOverlay>
  );
};

export default ConfirmModal;