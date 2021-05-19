import styled from 'styled-components';

const DropDownItem = styled.li`
  background-color: ${(props) =>
    props.active ? 'var(--color-purple-light)' : 'var(--color-white-regula)'};
  height: 46px;
  padding: 17px 30px 0;

  &:last-child {
    border-radius: 0 0 10px 10px;
  }
`;

export default DropDownItem;
