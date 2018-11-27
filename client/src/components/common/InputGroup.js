import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

const InputGroup = ({
   name, placeholder, value, error, icon, type, onChange,
}) => (
   <div className="input-group mb-3">
      <div className="input-group-prepend">
         <span className="input-group-text">
            <i className={icon} />
         </span>
      </div>
      <input
         name={name}
         className={classnames('form-control form-control-lg', {
            'is-invalid': error,
         })}
         placeholder={placeholder}
         value={value}
         onChange={onChange}
      />
      {error && <div className="invalid-feedback">{error}</div>}
   </div>
);

InputGroup.defaultProps = {
   type: 'text',
};

InputGroup.propTypes = {
   name: PropTypes.string.isRequired,
   placeholder: PropTypes.string,
   value: PropTypes.string.isRequired,
   icon: PropTypes.string,
   error: PropTypes.string,
   type: PropTypes.string.isRequired,
   onChange: PropTypes.func.isRequired,
};

export default InputGroup;
