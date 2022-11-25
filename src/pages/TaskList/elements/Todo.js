import styled from 'styled-components';
import { StyledEditTodo } from './EditTodo';
import { StyledDestroyTodo } from './DestroyTodo';
import { StyledTask } from './Task';

export const StyledTodo = styled.div`
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
  &:hover ${StyledEditTodo} {
    visibility: visible;
  }
  &:hover ${StyledDestroyTodo} {
    visibility: visible;
  }
  &:hover ${StyledTask} {
    background: #E1E1C9;
  }
  
`;
