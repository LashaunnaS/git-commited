import styled from 'styled-components';

const DropDownItem = styled.li`
  background-color: ${(props) =>
    props.active ? 'var(--color-white-tint)' : 'var(--color-white-regular)'};
  height: 60px;
  overflow: hidden;
  padding: 20px 30px 0;
  text-overflow: ellipsis;

  &:last-child {
    border-radius: var(--border-radius-none) var(--border-radius-none)
      var(--border-radius) var(--border-radius);
  }
`;

export default DropDownItem;
