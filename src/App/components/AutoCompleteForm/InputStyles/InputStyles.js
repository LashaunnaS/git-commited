import styled from 'styled-components';

const Input = styled.input`
  border: none;
  border-radius: var(--border-radius);
  font-size: var(--font-size-smaller);
  height: 62px;
  padding: 5px 30px;
  width: 90%;

  &:focus {
    outline: none;
  }
`;

export default Input;
