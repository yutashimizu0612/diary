import React from 'react';
import { StylesProvider } from '@material-ui/core/styles';
import GlobalStyle from './theme/globalStyles';
import type {} from 'styled-components/cssprop';
import AuthProvider from './views/providers/AuthProvider';
import Routes from './Routes';

const App: React.FC = () => (
  <AuthProvider>
    <StylesProvider injectFirst>
      <GlobalStyle />
      <Routes />
    </StylesProvider>
  </AuthProvider>
);

export default App;
