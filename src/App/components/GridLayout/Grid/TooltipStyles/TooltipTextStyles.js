import styled from 'styled-components';

const TooltipTextStyles = styled.span`
  color: ${(props) => (props.primary ? '#6d6d90' : 'var(--background-color-primary)')};
  font-size: ${(props) => (props.primary ? '1.2rem' : '1.3rem')};
  font-weight: ${(props) => (props.primary ? '300' : '600')};
  line-height: 1rem;
`;

export default TooltipTextStyles;
