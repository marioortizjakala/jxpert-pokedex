import { ThemeProvider } from 'styled-components';
import { Home } from './ui/components/pages/Home';
import { theme } from './ui/styles/theme';
import { GlobalStyle } from './ui/styles/GlobalStyle';

export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Home />
    </ThemeProvider>
  );
};
