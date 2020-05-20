import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html, body {
    margin: 0;
    background-color: #f9f9f9; 
  }

  * {
    box-sizing: border-box;
    font-family: 'Inter', sans-serif;
    color: #333333;
  }

  a {
    text-decoration: none;
    color: #0070c9;
  }

`;

export default GlobalStyle;
