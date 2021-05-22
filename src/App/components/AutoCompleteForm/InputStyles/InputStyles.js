import styled from 'styled-components';

const Input = styled.input`
  border: none;
  border-radius: var(--border-radius);
  font-size: var(--font-size-smaller);
  height: var(--height-primary);
  padding-left: 3rem;
  width: 90%;

  &:focus {
    outline: none;
  }
`;

export default Input;
