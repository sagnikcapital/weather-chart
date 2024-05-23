import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';
import SendDetailsForm from '../forms/senddetailsform';

const SendDetailsModal = ({ show, handleClose }) => {

  const handleFormSubmit = (data) => {
    console.log('Form data:', data);
    // You can add logic to send the form data to your backend here
    toast.success('Form submitted successfully!');
    handleClose(); // Close the modal after form submission
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Send Weather Details</Modal.Title>
      </Modal.Header>
      <Modal.Body>
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