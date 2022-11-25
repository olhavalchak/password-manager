import styled from 'styled-components';

export const StyledTask = styled.input`
  width: 80%;
  border: 0;
  text-decoration: ${(props) => (props.textDecoration ? 'line-through' : 'none')};
  border: ${(props) => (props.border ? 'solid 2px black' : 'none')};
  background: #FFFFFC;
`;
