/* eslint-disable no-nested-ternary */
import styled from 'styled-components';

const RepositoryNameStyles = styled.span`
  color: ${(props) =>
    props.primary
      ? 'var(--color-purple-light)'
      : props.search
      ? 'var(--color-black-regular)'
      : 'var(--color-white-regular)'};
  font-weight: ${(props) => (props.primary ? '300' : props.search ? '600' : '500')};
`;

export default RepositoryNameStyles;
