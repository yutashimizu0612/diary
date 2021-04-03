import React from 'react';
import { StylesProvider } from '@material-ui/core/styles';
import GlobalStyle from './theme/globalStyles';
import type {} from 'styled-components/cssprop';
import Routes from './Routes';

const App: React.FC = () => (
  <StylesProvider injectFirst>
    <GlobalStyle />
    <Routes />
  </StylesProvider>
);

export default App;
