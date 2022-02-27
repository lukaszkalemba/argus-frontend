import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components/macro';
import { store } from 'store/store';
import IntlProvider from 'providers/intl/Intl.provider';
import ToastsProvider from 'providers/toasts/Toasts.provider';
import ErrorBoundary from 'components/error-boundary/ErrorBoundary.component';
import Layout from 'components/layout/Layout.component';
import GlobalStyle from 'components/global-style/GlobalStyle.component';
import { theme } from 'styles/theme';
import 'styles/fonts.css';

const App = () => (
  <Provider store={store}>
    <IntlProvider>
      <ErrorBoundary>
        <ThemeProvider theme={theme}>
          <GlobalStyle />

          <BrowserRouter>
            <Layout />
          </BrowserRouter>

          <ToastsProvider />
        </ThemeProvider>
      </ErrorBoundary>
    </IntlProvider>
  </Provider>
);

export default App;
