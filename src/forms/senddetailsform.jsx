import React from 'react';
import { useForm } from 'react-hook-form';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';

const SendDetailsForm = ({ onSubmit }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="form-group">
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          className={`form-control ${errors.email ? 'is-invalid' : ''}`}
          {...register('email', { required: 'Email is required', pattern: { value: /^\S+@\S+$/i, message: 'Invalid email address' } })}
        />
        {errors.email && <div className="invalid-feedback">{errors.email.message}</div>}
      </div>
      <div className="form-group">
        <label htmlFor="note">Note:</label>
        <textarea
          id="note"
          className={`form-control ${errors.note ? 'is-invalid' : ''}`}
          {...register('note', { required: 'Note is required' })}
        />
        {errors.note && <div className="invalid-feedback">{errors.note.message}</div>}
      </div>
      <div className="form-group">
        <button type="submit" className="btn btn-primary details-send">Send</button>
      </div>
    </form>
  );
}

export default SendDetailsForm;