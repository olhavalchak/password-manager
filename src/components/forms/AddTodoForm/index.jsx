import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { tasksActions } from '../../../lib/redux/actions';
import {
  StyledAddTodo,
  StyledButton,
  StyledInput,
} from '../../../pages/TaskList/elements';

export const AddTodoForm = () => {
  const dispatch = useDispatch();
  const [taskInfo, setTaskInfo] = useState('');

  const onSubmit = (event) => {
    event.preventDefault();
    dispatch(tasksActions.createTaskAsync(taskInfo));
    setTaskInfo('');
  };

  const onChange = (event) => {
    setTaskInfo(event.target.value);
  };

  return (
    <div>
      <StyledAddTodo>
        <StyledInput type="text" name="text" value={taskInfo} onChange={onChange} placeholder="Write todo" />
        <StyledButton type="button" onClick={onSubmit}>Add todo</StyledButton>
      </StyledAddTodo>
    </div>
  );
};
