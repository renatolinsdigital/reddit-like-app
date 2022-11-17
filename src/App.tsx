import { theme } from './theme/theme'
import globalStyles from './global-styles/index.scss';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { AppContainerStyled, AppHeader, AppBody, AppFooter } from './domain/components';

const GlobalStyles = createGlobalStyle`${globalStyles}`;

function App() {
  return (
    <>
      <GlobalStyles />
      <ThemeProvider theme={theme}>
        <AppContainerStyled >
          <AppHeader />
          <AppBody />
          <AppFooter />
        </AppContainerStyled>
      </ThemeProvider>
    </>

  );
}

export default App;
