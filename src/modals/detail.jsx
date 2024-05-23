import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import SendDetailsForm from '../forms/senddetailsform';

const SendDetailsModal = ({ show, handleClose }) => {

  const handleFormSubmit = (data) => {
    console.log('Form data:', data);
    // You can add logic to send the form data to your backend here
    handleClose(); // Close the modal after form submission
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Send Weather Details</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>Weather details will be sent...</p>
        <SendDetailsForm onSubmit={handleFormSubmit} />
      </Modal.Body>
      {/* <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer> */}
    </Modal>
  );
};

export default SendDetailsModal;