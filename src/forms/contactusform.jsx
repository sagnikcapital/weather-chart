import React, { useState, useEffect } from "react";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import './contactusform.css';
const ContactUsForm = () => {
  /**Set Initial value of form fields */
  const initialValues = {
    name: '',
    email: '',
    message: '',
    phone: ''
  };
  /**Form Validation config */
  const validationSchema = Yup.object({
    name: Yup.string().required('Name is required'),
    email: Yup.string().email('Invalid email address').required('Email is required'),
    message: Yup.string().required('Message is required'),
    phone: Yup.number().required('Phone number required')
  });
  /**Form submission process */
  const onSubmit = (values, { resetForm }) => {
    console.log('Form data', values);
    resetForm();
    alert('Thank you for your message!');
  };

  return (
    <div className="contact-container">
      <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit} >
        <Form className="contact-form">
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <Field type="text" id="name" name="name" className="form-control" />
            <ErrorMessage name="name" component="div" className="error-message" />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <Field type="email" id="email" name="email" className="form-control" />
            <ErrorMessage name="email" component="div" className="error-message" />
          </div>

          <div className="form-group">
            <label htmlFor="email">Phone</label>
            <Field type="number" id="phone" name="phone" className="form-control" />
            <ErrorMessage name="phone" component="div" className="error-message" />
          </div>

          <div className="form-group">
            <label htmlFor="message">Message</label>
            <Field as="textarea" id="message" name="message" className="form-control" />
            <ErrorMessage name="message" component="div" className="error-message" />
          </div>

          <button type="submit" className="btn btn-primary">Submit</button>
        </Form>
      </Formik>
    </div>
  );
};

export default ContactUsForm;