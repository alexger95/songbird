import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

const ScoreDisplay = (props) => {
  const {
    toggle,
    buttonLabel,
    className,
    modal,
    score
  } = props;

  return (
     <>
      <Modal show={modal} onHide={toggle}>
        <Modal.Header closeButton>
          <Modal.Title>Хорошая игра</Modal.Title>
        </Modal.Header>
        <Modal.Body>Ваш результат {score} из 30.</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={toggle}>
            Закрыть
          </Button>
          <Button variant="primary" onClick={toggle}>
            Снова
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ScoreDisplay;