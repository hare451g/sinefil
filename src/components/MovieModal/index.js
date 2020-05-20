import React from 'react';

import { Modal, ModalContent, CloseButton } from './styled';

function MovieModal({
  title = '',
  poster = '',
  isOpen = false,
  onClose = () => {},
}) {
  return (
    <Modal isOpen={isOpen} data-testid="modal-container">
      <ModalContent>
        <CloseButton onClick={() => onClose()} data-testid="modal-close-button">
          &times;
        </CloseButton>
        <img src={poster} alt={title} data-testid="modal-poster" />
      </ModalContent>
    </Modal>
  );
}

export default MovieModal;
