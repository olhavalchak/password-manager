import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { passwordActions } from '../../../lib/redux/actions';
import {
  StyledAddPassword,
  StyledButton,
  StyledInput,
} from '../../../pages/PasswordList/elements';

export const AddPasswordInfoForm = () => {
  const dispatch = useDispatch();
  const [passwordInfo, setPasswordInfo] = useState({
    website: '',
    login: '',
    password: '',
  });

  const onSubmit = (event) => {
    event.preventDefault();
    dispatch(passwordActions.createPasswordInfoAsync(passwordInfo));
    setPasswordInfo({
      website: '',
      login: '',
      password: '',
    });
  };

  const onWebsiteChange = (event) => {
    const websiteValue = event.target.value;

    setPasswordInfo({ ...passwordInfo, website: websiteValue });
  };
  const onLoginChange = (event) => {
    const loginValue = event.target.value;

    setPasswordInfo({ ...passwordInfo, login: loginValue });
  };
  const onPasswordChange = (event) => {
    const websiteValue = event.target.value;

    setPasswordInfo({ ...passwordInfo, password: websiteValue });
  };

  return (
    <div>
      <StyledAddPassword>
        <StyledInput type="text" name="text" value={passwordInfo.website} onChange={onWebsiteChange} placeholder="Website" />
        <StyledInput type="text" name="text" value={passwordInfo.login} onChange={onLoginChange} placeholder="login" />
        <StyledInput type="password" name="text" value={passwordInfo.password} onChange={onPasswordChange} placeholder="password" />
        <StyledButton type="button" onClick={onSubmit}>Add todo</StyledButton>
      </StyledAddPassword>

    </div>
  );
};
