import { useState, useEffect, useTransition } from 'react';
import { Modal, Tab, Tabs } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import PropTypes from 'prop-types';
import './signupmodal.css';

const CycloneModal = ({ show, handleClose }) => {
  // Login validation config
  const loginValidationConfig = {
    email: {
      required: 'Email is required',
      pattern: {
        value: /^\S+@\S+$/i,
        message: 'Invalid email address',
      },
    },
    password: {
      required: 'Password is required',
    },
  };

  // Sign up validation config
  const signupValidationConfig = {
    email: {
      required: 'Email is required',
      pattern: {
        value: /^\S+@\S+$/i,
        message: 'Invalid email address',
      },
    },
    password: {
      required: 'Password is required',
    },
    confirmPassword: {
      required: 'Confirm Password is required',
      validate: (value) =>
        value === getValues('password') || 'Passwords do not match',
    },
  };

  // Login form
  const {
    register: registerLogin,
    handleSubmit: handleSubmitLogin,
    formState: { errors: loginErrors },
  } = useForm();

  const onSubmitLogin = (data) => {
    console.log('Login Data:', data);
    // Post data to API
  };

  // Signup form
  const {
    register: registerSignup,
    handleSubmit: handleSubmitSignup,
    formState: { errors: signupErrors },
    getValues,
  } = useForm();

  const onSubmitSignup = (data) => {
    console.log('Signup Data:', data);
    // Post data to API
  };

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
                <form onSubmit={handleSubmitLogin(onSubmitLogin)}>
                  <div className="form-group">
                    <label htmlFor="loginEmail">Email address</label>
                    <input
                      type="email"
                      className={`form-control ${loginErrors.email ? 'is-invalid' : ''}`}
                      id="loginEmail"
                      {...registerLogin('email', loginValidationConfig.email)}
                    />
                    {loginErrors.email && (
                      <div className="invalid-feedback">{loginErrors.email.message}</div>
                    )}
                  </div>
                  <div className="form-group">
                    <label htmlFor="loginPassword">Password</label>
                    <input
                      type="password"
                      className={`form-control ${loginErrors.password ? 'is-invalid' : ''}`}
                      id="loginPassword"
                      {...registerLogin('password', loginValidationConfig.password)}
                    />
                    {loginErrors.password && (
                      <div className="invalid-feedback">{loginErrors.password.message}</div>
                    )}
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
                <form onSubmit={handleSubmitSignup(onSubmitSignup)}>
                  <div className="form-group">
                    <label htmlFor="signupEmail">Email address</label>
                    <input
                      type="email"
                      className={`form-control ${signupErrors.email ? 'is-invalid' : ''}`}
                      id="signupEmail"
                      {...registerSignup('email', signupValidationConfig.email)}
                    />
                    {signupErrors.email && (
                      <div className="invalid-feedback">{signupErrors.email.message}</div>
                    )}
                  </div>
                  <div className="form-group">
                    <label htmlFor="signupPassword">Password</label>
                    <input
                      type="password"
                      className={`form-control ${signupErrors.password ? 'is-invalid' : ''}`}
                      id="signupPassword"
                      {...registerSignup('password', signupValidationConfig.password)}
                    />
                    {signupErrors.password && (
                      <div className="invalid-feedback">{signupErrors.password.message}</div>
                    )}
                  </div>
                  <div className="form-group">
                    <label htmlFor="signupConfirmPassword">Confirm Password</label>
                    <input
                      type="password"
                      className={`form-control ${signupErrors.confirmPassword ? 'is-invalid' : ''}`}
                      id="signupConfirmPassword"
                      {...registerSignup('confirmPassword', signupValidationConfig.confirmPassword)}
                    />
                    {signupErrors.confirmPassword && (
                      <div className="invalid-feedback">{signupErrors.confirmPassword.message}</div>
                    )}
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
};

CycloneModal.PropTypes = {
  show: PropTypes.bool,
  handleClose: PropTypes.bool
}

export default CycloneModal;
