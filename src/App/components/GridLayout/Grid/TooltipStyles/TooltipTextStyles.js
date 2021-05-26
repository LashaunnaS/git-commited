import styled from 'styled-components';

const TooltipTextStyles = styled.span`
  font-size: ${(props) => (props.primary ? '1.2rem' : '1.3rem')};
  color: ${(props) => (props.primary ? '#6d6d90' : '#37374a')};
  line-height: 1rem;
  font-weight: ${(props) => (props.primary ? '300' : '600')};
`;

export default TooltipTextStyles;
