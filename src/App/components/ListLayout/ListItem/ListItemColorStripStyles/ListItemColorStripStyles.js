/* eslint-disable no-nested-ternary */
import styled from 'styled-components';

const ListItemColorStripStyles = styled.div`
  background-color: ${(props) => props.color};
  border-radius: var(--border-radius-regular) var(--border-radius-none)
    var(--border-radius-none) var(--border-radius-regular);
  width: 2%;
`;

export default ListItemColorStripStyles;
