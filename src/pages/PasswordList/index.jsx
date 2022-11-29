import React from 'react';
import { PasswordInfoList } from '../../components';
import { AddPasswordInfoForm } from '../../components/forms';
import {
  StyledPage,
  StyledPasswordsListContainer,
  StyledTopContainer,
  StyledPasswordListContainer,
} from './elements';

export const PasswordList = () => (
  <StyledPage>
    <StyledPasswordsListContainer>
      <StyledTopContainer>
        <span>Your Password Manager</span>
      </StyledTopContainer>
      <StyledPasswordListContainer>
        <AddPasswordInfoForm />
        <PasswordInfoList />
      </StyledPasswordListContainer>
    </StyledPasswordsListContainer>
  </StyledPage>
);
