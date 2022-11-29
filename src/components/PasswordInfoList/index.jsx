import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import edit from '../../theme/assets/edit.png';
import destroy from '../../theme/assets/destroy.png';
import eye from '../../theme/assets/eye.png';
import done from '../../theme/assets/done.png';
import {
  StyledIcon,
  StyledEdit,
  StyledInfoInput,
  StyledPasswordContainer,
} from '../../pages/PasswordList/elements';
import { passwordActions } from '../../lib/redux/actions';
import { selectPasswordInfo } from '../../lib/redux/selectors';

export const PasswordInfoList = () => {
  const passwords = useSelector(selectPasswordInfo);
  const dispatch = useDispatch();
  const [editingPasswordId, setEditingPasswordId] = useState(null);
  const [changingPassword, setChangingPassword] = useState({});

  useEffect(() => {
    dispatch(passwordActions.getPasswordInfoAsync());
  }, []);

  const toggleTask = (passwordInfo) => {
    dispatch(passwordActions.updatePasswordInfoAsync(
      passwordInfo.id, { ...passwordInfo, isShown: !passwordInfo.isShown },
    ));
  };

  const onWebsiteChange = (event) => {
    setChangingPassword({ ...changingPassword, website: event.target.value });
  };
  const onLoginChange = (event) => {
    setChangingPassword({ ...changingPassword, login: event.target.value });
  };
  const onPasswordChange = (event) => {
    setChangingPassword({ ...changingPassword, password: event.target.value });
  };

  const updateTask = (passwordInfo) => {
    dispatch(passwordActions.updatePasswordInfoAsync(
      passwordInfo.id, {
        ...passwordInfo,
        website: changingPassword.website,
        login: changingPassword.login,
        password: changingPassword.password,
        isShown: false,
      },
    ));
    setEditingPasswordId(null);
  };

  const onEdit = (passwordInfo, passwordId) => {
    setEditingPasswordId(passwordId);
    setChangingPassword(passwordInfo);
    toggleTask(passwordInfo);
  };

  const deleteTask = (passwordId) => {
    dispatch(passwordActions.deletePasswordInfoAsync(passwordId));
  };

  return (
    <>
      {
        passwords.map((passwordInfo) => (
          <StyledPasswordContainer key={passwordInfo.id}>
            <StyledInfoInput
              disabled={editingPasswordId !== passwordInfo.id}
              value={editingPasswordId === passwordInfo.id
                ? changingPassword.website : passwordInfo.website}
              onChange={onWebsiteChange}
              border={editingPasswordId === passwordInfo.id}
            />
            <StyledInfoInput
              disabled={editingPasswordId !== passwordInfo.id}
              value={editingPasswordId === passwordInfo.id
                ? changingPassword.login : passwordInfo.login}
              onChange={onLoginChange}
              border={editingPasswordId === passwordInfo.id}
            />
            <StyledInfoInput
              type={passwordInfo.isShown ? 'text' : 'password'}
              disabled={editingPasswordId !== passwordInfo.id}
              value={editingPasswordId === passwordInfo.id
                ? changingPassword.password : passwordInfo.password}
              onChange={onPasswordChange}
              border={editingPasswordId === passwordInfo.id}
            />
            <StyledIcon src={eye} onClick={() => toggleTask(passwordInfo)} alt="edit" />
            <StyledEdit
              src={editingPasswordId === passwordInfo.id ? done : edit}
              onClick={editingPasswordId === passwordInfo.id ? () => updateTask(passwordInfo)
                : () => onEdit(passwordInfo, passwordInfo.id)}
              alt="edit"
            />
            <StyledIcon src={destroy} onClick={() => deleteTask(passwordInfo.id)} alt="edit" />
          </StyledPasswordContainer>
        ))
      }
    </>
  );
};
