import styled from 'styled-components';
import { StyledEdit } from './EditPassword';
import { StyledIcon } from './Icon';
import { StyledInfoInput } from './InfoInput';

export const StyledPasswordContainer = styled.div`
  display: flex;
  justify-content:space-around;
  align-items: center;
  padding: 5px;
  margin-left: 10px;
  margin-right: 10px;
  border-radius: 5px;
  &:hover {
    background-color: #E1E1C9; 
  }
  &:hover ${StyledEdit} {
    visibility: visible;
  }
  &:hover ${StyledIcon} {
    visibility: visible;
  }
  &:hover ${StyledInfoInput} {
    background: #E1E1C9;
  }
  
`;
