import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  /* reset */
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  body,h1,h2,h3,h4,p,figure,blockquote,dl,dt,dd,ol,ul,li,button {
    margin: 0;
    padding: 0;
  }

  ul,ol {
    list-style: none;
  }

  html:focus-within {
    scroll-behavior: smooth;
  }

  body {
    min-height: 100vh;
    text-rendering: optimizeSpeed;
    line-height: 1.5;
  }

  img,
  picture {
    max-width: 100%;
    display: block;
  }

  button {
    border: none;
    cursor: pointer;
    outline: none;
  }

  /* common */
  a {
    cursor: pointer;
  }

  body {
    background: #F7F8FA;
    color: #3e3e3e;
    font-family: 'Helvetica', 'Arial', sans-serif;
  }

  a, button {
    transition: 0.2s;
  }
`;

export default GlobalStyle;
