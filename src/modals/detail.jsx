// No import of React is needed since this file does not use React
import { Modal } from "react-bootstrap";
import SendDetailsForm from '../forms/senddetailsform';
import PropTypes from 'prop-types';

const SendDetailsModal = ({ show, handleClose }) => {
  const handleFormSubmit = (data) => {
    console.log("Form data:", data);
    handleClose();
  };

  return (
    <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
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

SendDetailsModal.propTypes = {
  show: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
};
export default SendDetailsModal;