import styled from 'styled-components';

const Form = styled.form`
  background-color: var(--color-white-regular);
  border-radius: ${(props) => (props.dropDownActive ? '5px 5px 0px 0px' : '5px')};
  font-size: var(--font-size-smaller);
  height: ${(props) => (props.dropDownActive ? '70px' : '62px')};
  width: 100%;
`;

export default Form;
