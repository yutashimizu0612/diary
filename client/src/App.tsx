import React from 'react';
import { StylesProvider } from '@material-ui/core/styles';
import GlobalStyle from './theme/globalStyles';
import type {} from 'styled-components/cssprop';
import ProvideAuth from './views/providers/ProvideAuth';
import AccomplishmentProvider from './views/providers/AccomplishmentProvider';
import Routes from './Routes';

const App: React.FC = () => (
  <ProvideAuth>
    <AccomplishmentProvider>
      <StylesProvider injectFirst>
        <GlobalStyle />
        <Routes />
      </StylesProvider>
    </AccomplishmentProvider>
  </ProvideAuth>
);

export default App;
