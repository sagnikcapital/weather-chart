import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const SendDetailsModal = ({ show, handleClose }) => {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Send Weather Details</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>Weather details will be sent...</p>
        {/* Add your form or content here */}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={handleClose}>
          Send
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default SendDetailsModal;