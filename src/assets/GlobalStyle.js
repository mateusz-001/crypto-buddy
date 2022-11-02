import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
  }
  *, *::after, *::before {
    box-sizing: inherit;
  }
  body {
    font-family: 'Open Sans', 'Arial', sans-serif;
    margin: 0;
    padding: 0;
    color: ${({ theme }) => theme.colors.smokegray};
    background-color: ${({ theme }) => theme.colors.gray3};
  }
`;
