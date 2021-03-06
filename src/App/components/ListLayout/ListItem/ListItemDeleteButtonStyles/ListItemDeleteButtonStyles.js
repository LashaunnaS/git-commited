import styled from 'styled-components';
import ListItemStyles from '../ListItemStyles';

const ListItemDeleteButtonStyles = styled.button`
  background-color: #272736d1;
  border-radius: var(--border-radius-regular);
  height: 9rem;
  margin-left: -8rem;
  visibility: hidden;
  width: 8rem;

  ${ListItemStyles}:hover & {
    visibility: visible;
  }
`;

export default ListItemDeleteButtonStyles;
