/* eslint-disable no-nested-ternary */
import styled from 'styled-components';
import ListItemStyles from '../ListItemStyles';

const ListItemDeleteButtonStyles = styled.button`
  ${ListItemStyles}:hover & {
    visibility: visible;
  }
  visibility: hidden;
  background-color: #272736d1;
  margin-top: 3rem;
  border-radius: 0px 10px 10px 0px;
  width: 8rem;
  position: absolute;
  right: 34px;
  height: 10%;
`;

export default ListItemDeleteButtonStyles;
