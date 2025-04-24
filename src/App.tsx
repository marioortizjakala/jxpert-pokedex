import { ThemeProvider } from 'styled-components';
import { Home } from './ui/components/pages/Home';
import { theme } from './styles/theme';
import { GlobalStyle } from './styles/GlobalStyle';

export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Home />
    </ThemeProvider>
  );
};
