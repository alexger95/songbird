import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

const ScoreDisplay = (props) => {
  const {
    toggle,
    buttonLabel,
    className,
    modal,
    score,
    newGame,
  } = props;


if(score === 30) {
  return (
    <>
     <Modal show={modal} onHide={toggle}>
       <Modal.Header closeButton>
         <Modal.Title>Вы знаток!</Modal.Title>
       </Modal.Header>
       <Modal.Body>Поздравляю {score} из 30.</Modal.Body>
       <Modal.Footer>
         <Button variant="secondary" onClick={toggle}>
           Закрыть
         </Button>
         <Button variant="primary" onClick={newGame}>
           Снова
         </Button>
       </Modal.Footer>
     </Modal>
   </>
 );
}
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
          <Button variant="primary" onClick={newGame}>
            Снова
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ScoreDisplay;