import styled from 'styled-components';

const Form = styled.form`
  background-color: var(--color-white-regular);
  border-radius: ${(props) =>
    props.dropDownActive
      ? `var(--border-radius) var(--border-radius)
         var(--border-radius-none) var(--border-radius-none)`
      : 'var(--border-radius)'};
  font-size: var(--font-size-smaller);
  height: ${(props) =>
    props.dropDownActive ? 'var(--height-secondary)' : 'var(--height-primary)'};
  // positions dropdown over empty banner and list items
  position: relative;
  width: 100%;
  z-index: 1;
`;

export default Form;
