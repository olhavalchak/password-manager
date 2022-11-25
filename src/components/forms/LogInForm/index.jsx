import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  StyledFormContainer, StyledButton, StyledForm, StyledInput, StyledError,
} from '../../../elements';
import {
  SIGN_UP_LINK_TITLE, QUESTION_TITLE, LOG_IN_TITLE,
} from '../../../constants';
import { authActions } from '../../../lib/redux/actions';
import { selectError } from '../../../lib/redux/selectors';

export const LogInForm = () => {
  const dispatch = useDispatch();

  const error = useSelector(selectError);

  const [userInfo, setUserInfo] = useState({
    email: '',
    password: '',
  });

  const onChange = (event) => {
    const { name, value } = event.target;
    setUserInfo({ ...userInfo, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(authActions.logInAsync(userInfo));
  };

  return (
    <StyledFormContainer>
      <h1>{LOG_IN_TITLE}</h1>
      <StyledForm>
        <StyledInput placeholder="email" name="email" type="email" onChange={onChange} value={userInfo.email} />
        <StyledInput placeholder="password" name="password" type="password" onChange={onChange} value={userInfo.password} />
        <StyledError>{error}</StyledError>
        <StyledButton
          type="submit"
          onClick={handleSubmit}
          disabled={!userInfo.email || !userInfo.password}
        >
          {LOG_IN_TITLE}
        </StyledButton>
      </StyledForm>
      <div>{QUESTION_TITLE}</div>
      <Link to="/signUp">{SIGN_UP_LINK_TITLE}</Link>
    </StyledFormContainer>
  );
};
