import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.cdnfonts.com/css/kanit');
  @import url('https://fonts.googleapis.com/css2?family=Kanit:wght@400;600&display=swap');

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
