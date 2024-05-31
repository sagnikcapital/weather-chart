import { useState, useEffect, useRef } from "react";
import { Modal } from "react-bootstrap";
import PropTypes from 'prop-types';
import ContactUsForm from "../forms/contactusform";

const ContactUsModal = ({ show, handleClose }) => {
  /**Submit Form */
  const handleSubmit = (data) => {
    console.log(data);
    handleClose();
  };

  return (
    <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
      <Modal.Header closeButton>
        <Modal.Title>Share the Details</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <ContactUsForm onSubmit={handleSubmit} />
      </Modal.Body>
    </Modal>
  );
};

ContactUsModal.propTypes = {
  show: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
};

export default ContactUsModal;