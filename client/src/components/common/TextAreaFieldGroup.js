import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

const textAreaFieldGroup = ({
   name, placeholder, value, error, info, onChange,
}) => (
   <div className="form-group">
      <textarea
         name={name}
         className={classnames('form-control form-control-lg', {
            'is-invalid': error,
         })}
         placeholder={placeholder}
         value={value}
         onChange={onChange}
      />
      {info && <small className="form-textFieldGroup text-muted">{info}</small>}
      {error && <div className="invalid-feedback">{error}</div>}
   </div>
);

textAreaFieldGroup.propTypes = {
   name: PropTypes.string.isRequired,
   placeholder: PropTypes.string,
   value: PropTypes.string.isRequired,
   info: PropTypes.string,
   error: PropTypes.string,
   onChange: PropTypes.func.isRequired,
};

export default textAreaFieldGroup;
