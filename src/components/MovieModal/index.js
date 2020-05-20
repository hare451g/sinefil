import React from 'react';
import { Link } from '@reach/router';
import { Modal, ModalContent, CloseButton } from './styled';

function MovieModal({
  title = '',
  poster = '',
  isOpen = false,
  onClose = () => {},
  imdbID = '',
}) {
  return (
    <Modal isOpen={isOpen} data-testid="modal-container">
      <ModalContent>
        <CloseButton onClick={() => onClose()} data-testid="modal-close-button">
          &times;
        </CloseButton>
        <img src={poster} alt={title} data-testid="modal-poster" />
        <Link to={`details/${imdbID}`}>Details</Link>
      </ModalContent>
    </Modal>
  );
}

export default MovieModal;
