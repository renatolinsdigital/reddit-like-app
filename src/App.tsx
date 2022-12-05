import { store } from './store/store';
import { theme } from './theme/theme';
import { Provider } from 'react-redux';
import globalStyles from './global-styles/index.scss';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { AppContainerStyled, AppHeader, AppBody, AppFooter } from './domain/components';

const GlobalStyles = createGlobalStyle`${globalStyles}`;

function App() {
  return (
    <>
      <GlobalStyles />
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <AppContainerStyled>
            <AppHeader />
            <AppBody />
            <AppFooter />
          </AppContainerStyled>
        </ThemeProvider>
      </Provider>
    </>
  );
}

export default App;
