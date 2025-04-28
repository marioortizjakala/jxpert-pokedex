import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

  *, *::before, *::after {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    font-family: 'Kanit', sans-serif;
    background-color: ${({ theme }) => theme.colors.background05};
    color: ${({ theme }) => theme.colors.background9};
  }
`;
