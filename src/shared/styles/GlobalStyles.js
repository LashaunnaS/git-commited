import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  :root {
    --font-primary: 'Work Sans', sans-serif;
    --font-secondary: 'Montserrat', serif;
    --font-size-smaller: 1.5rem;
    --font-size-small: 1.8rem;
    --font-size-regular: 2.4rem;
    --font-size-large: 3.0rem;
    --font-size-larger: 3.6rem;
    --font-size-xlarge: 4.8rem;

    --line-height-smaller: 20px;
    --line-height-small: 30px;
    --line-height-regular: 32px;
    --line-height-large: 40px;
    --line-height-larger: 48px;
    --line-height-xlarge: 56px;
    --color-white-regular: #FFFFFF;
    --color-purple-light: #ECECf6;
    --color-black-regular: #252525;
    --color-black-light: #564F62;
    --color-black-lighter: #ABA8AF;
    --bg-color-primary: #ff7575;
    --color-secondary: '';
    --color-tertiary: '';
    --screen-xs: 575px;
    --screen-sm: 767px;
    --screen-md: 991px;
    --screen-lg: 1199px;
  }
  @import url(
'https://fonts.googleapis.com/css?family=Work+Sans:300|Montserrat:400,600'
);
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  html {
    font-size: 62.5%;
  }
  body {
    font-family: var(--font-secondary);
  }
  h1, h2, h3, p {
    margin: 0;
    letter-spacing: 1px;
    font-weight: normal;
  }
  h1 {
    font-family: var(--font-primary);
    font-size: var(--font-size-xlarge);
    line-height: var(--line-height-xlarge);
  }
  h2 {
    font-family: var(--font-primary);
    font-size: var(--font-size-large);
    line-height: var(--line-height-large);
  }
  h3 {
    font-size: var(--font-size-large);
    line-height: var(--line-height-large);
  }
  p {
    font-size: var(--font-size-small);
    line-height: var(--line-height-small);
    color: var(--color-black-light)
  }
  @media (max-width: var(--screen-sm)) {
    h1 {
      font-size: var(--font-size-large);
      line-height: var(--line-height-large);
    }
    h2 {
      font-size: var(--font-size-large);
      line-height: var(--line-height-large);
    }
    h3 {
      font-size: var(--font-size-regular);
      line-height: var(--line-height-regular);
    }
    p {
      font-size: var(--font-size-small);
      line-height: var(--line-height-small);
    }
  }
  button {
    border: none;
    background: none;
    outline: none;
    padding: 0;
    cursor: pointer;
  }
  a {
    cursor: pointer;
    text-decoration: none;
    color: var(--color-black-regular);
    font-weight: 600;
    &:hover {
      text-decoration: underline;
    }
    &:active {
      text-decoration: none;
    }
  }
`;

export default GlobalStyle;
