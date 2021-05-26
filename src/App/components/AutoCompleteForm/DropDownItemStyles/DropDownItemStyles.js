import styled from 'styled-components';

const DropDownItem = styled.li`
  background-color: ${(props) =>
    props.active ? 'var(--color-white-tint)' : 'var(--color-white-regular)'};
  height: var(--height-primary);
  overflow: hidden;
  padding: 1rem 3rem;
  text-overflow: ellipsis;

  &:last-child {
    border-radius: var(--border-radius-none) var(--border-radius-none)
      var(--border-radius-regular) var(--border-radius-regular);
  }
`;

export default DropDownItem;
