import React from 'react';
import { StylesProvider } from '@material-ui/core/styles';
import GlobalStyle from './theme/globalStyles';
import type {} from 'styled-components/cssprop';
import ProvideAuth from './views/providers/ProvideAuth';
import Routes from './Routes';

const App: React.FC = () => (
  <ProvideAuth>
    <StylesProvider injectFirst>
      <GlobalStyle />
      <Routes />
    </StylesProvider>
  </ProvideAuth>
);

export default App;
