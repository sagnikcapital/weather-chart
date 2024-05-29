import  {useState, useEffect, useTransition} from 'react';
import { Modal, Tab, Tabs } from 'react-bootstrap';
import './signupmodal.css';

const CycloneModal = ({ show, handleClose }) => {
  return (
    <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
    <Modal.Header closeButton>
      <Modal.Title>Authentication</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <Tabs defaultActiveKey="login" id="auth-tab">
        <Tab eventKey="login" title="Login">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Login</h5>
              <form>
                <div className="form-group">
                  <label htmlFor="loginEmail">Email address</label>
                  <input type="email" className="form-control" id="loginEmail" required />
                </div>
                <div className="form-group">
                  <label htmlFor="loginPassword">Password</label>
                  <input type="password" className="form-control" id="loginPassword" required />
                </div>
                <button type="submit" className="btn btn-primary padding">Login</button>
              </form>
            </div>
          </div>
        </Tab>
        <Tab eventKey="signup" title="Signup">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Signup</h5>
              <form>
                <div className="form-group">
                  <label htmlFor="signupEmail">Email address</label>
                  <input type="email" className="form-control" id="signupEmail" required />
                </div>
                <div className="form-group">
                  <label htmlFor="signupPassword">Password</label>
                  <input type="password" className="form-control" id="signupPassword" required />
                </div>
                <div className="form-group">
                  <label htmlFor="signupConfirmPassword">Confirm Password</label>
                  <input type="password" className="form-control" id="signupConfirmPassword" required />
                </div>
                <button type="submit" className="btn btn-primary padding">Signup</button>
              </form>
            </div>
          </div>
        </Tab>
      </Tabs>
    </Modal.Body>
  </Modal>
  );
}

export default CycloneModal;