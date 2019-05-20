import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html, body {
    font-family: 'Roboto', sans-serif;
  }

  *, ::after, ::before {
      box-sizing: border-box;
  }
`;

export default GlobalStyle;
