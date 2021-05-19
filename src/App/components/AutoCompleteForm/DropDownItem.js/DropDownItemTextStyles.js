import styled from 'styled-components';

const DropDownItemText = styled.span`
  color: ${(props) => (props.primary ? '#9797bc' : '#000')};
  font-weight: ${(props) => (props.primary ? '300' : '600')};
`;

export default DropDownItemText;
