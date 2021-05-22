import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  :root {
    // Font Size
    --font-primary: 'Work Sans', sans-serif;
    --font-secondary: 'Montserrat', serif;
    --font-size-smaller: 1.5rem;
    --font-size-small: 1.8rem;
    --font-size-regular: 2.4rem;
    --font-size-large: 3.0rem;
    --font-size-larger: 3.6rem;
    --font-size-xlarge: 4.8rem;

    // Line Height
    --line-height-smaller: 20px;
    --line-height-small: 30px;
    --line-height-regular: 32px;
    --line-height-large: 40px;
    --line-height-larger: 48px;
    --line-height-xlarge: 56px;

    // Color
    --color-white-regular: #FFFFFF;
    --color-white-tint: #ECECf6;
    --color-purple-lighter: #bcbcf2;
    --color-purple-light: #9797bc; 
    --color-purple-dark: #242432; 
    --color-black-regular: #252525; 

    // Screen Size
    --screen-xs: 575px;
    --screen-sm: 767px;
    --screen-md: 991px;
    --screen-lg: 1199px;

    // Border Radius
    --border-radius-regular: 5px;
    --border-radius-large: 15px;
    --border-radius-none: 0px;

    // Height -->
    --height-primary: 6rem;
    --height-secondary: 7rem;
  }
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
    color: var(--color-purple-lighter)
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
