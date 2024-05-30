import React from 'react';
import { useForm } from 'react-hook-form';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import PropTypes from 'prop-types';
// import { ToastContainer, toast } from 'react-toastify';

// import 'react-toastify/dist/ReactToastify.css';
import './style.css';

const SendDetailsForm = ({ onSubmit }) => {

  const validationConfig = {
    email: {
      required: 'Email is required',
      pattern: {
        value: /^\S+@\S+$/i,
        message: 'Invalid email address',
      },
    },
    note: {
      required: 'Note is required',
    },
  };
  const {
    register,
    handleSubmit,
    getValues,
    setValue,
    formState: { errors },
  } = useForm();

  const handleEditorChange = (event, editor) => {
    const data = editor.getData();
    setValue('note', data, { shouldValidate: true });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="form-group">
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          className={`form-control ${errors.email ? 'is-invalid' : ''}`}
          {...register('email', validationConfig.email)}
        />
        {errors.email && <div className="invalid-feedback">{errors.email.message}</div>}
      </div>
      <div className="form-group">
        <label htmlFor="note">Note:</label>
        {/* <textarea
          id="note"
          className={`form-control ${errors.note ? 'is-invalid' : ''}`}
          {...register('note', validationConfig.note)}
        /> */}
        <CKEditor
          id="note"
          editor={ClassicEditor}
          data=""
          onChange={handleEditorChange}
          onBlur={() => {
            const data = getValues('note');
            if (!data || data === '') {
              setValue('note', data, { shouldValidate: true });
            }
          }}
        />
        {errors.note && <div className="invalid-feedback">{errors.note.message}</div>}
      </div>
      <div className="form-group">
        <button type="submit" className="btn btn-primary details-send">Send</button>
      </div>
    </form>
  );
}

SendDetailsForm.PropTypes = {
  onSubmit: PropTypes.any
}
export default SendDetailsForm;