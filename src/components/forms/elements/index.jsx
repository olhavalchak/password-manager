import React from 'react';
import propTypes from 'prop-types';
import { StyledInput, StyledError } from '../../../elements';

export const FormInput = ({
  placeholder, type, onChange, errorMessage, value, required,
}) => (
  <div>
    <StyledInput
      type={type}
      placeholder={placeholder}
      required={required}
      onChange={onChange}
      value={value}
    />
    <StyledError>{errorMessage}</StyledError>
  </div>
);

FormInput.defaultProps = {
  errorMessage: '',
  value: '',
  required: true,
};

FormInput.propTypes = {
  placeholder: propTypes.string.isRequired,
  type: propTypes.string.isRequired,
  onChange: propTypes.func.isRequired,
  errorMessage: propTypes.string,
  value: propTypes.string,
  required: propTypes.bool,
};
