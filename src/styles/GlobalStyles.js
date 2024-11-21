import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    font-family: 'Arial', sans-serif;
    background-color: #f4f4f4;
    color: #333;
  }
  a {
    text-decoration: none;
    color: inherit;
  }
  ul {
    list-style: none;
    padding: 0;
  }
`;

export default GlobalStyles;
