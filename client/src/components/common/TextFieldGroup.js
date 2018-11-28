import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

const textFieldGroup = ({
   name,
   placeholder,
   value,
   label,
   error,
   info,
   type,
   onChange,
   disabled,
}) => (
   <div className="form-group">
      <input
         type={type}
         name={name}
         className={classnames('form-control form-control-lg', {
            'is-invalid': error,
         })}
         placeholder={placeholder}
         value={value}
         onChange={onChange}
         disabled={disabled}
      />
      {info && <small className="form-textFieldGroup text-muted">{info}</small>}
      {error && <div className="invalid-feedback">{error}</div>}
   </div>
);

textFieldGroup.defaultProps = {
   type: 'text',
};

textFieldGroup.propTypes = {
   name: PropTypes.string.isRequired,
   placeholder: PropTypes.string,
   value: PropTypes.string.isRequired,
   info: PropTypes.string,
   error: PropTypes.string,
   type: PropTypes.string.isRequired,
   onChange: PropTypes.func.isRequired,
   disabled: PropTypes.bool,
};

export default textFieldGroup;
