import React from 'react';
import { StylesProvider } from '@material-ui/core/styles';
import GlobalStyle from './theme/globalStyles';
import type {} from 'styled-components/cssprop';
import AuthProvider from './views/providers/AuthProvider';
import PostProvider from './views/providers/PostProvider';
import AccomplishmentProvider from './views/providers/AccomplishmentProvider';
import Routes from './Routes';

const App: React.FC = () => (
  <AuthProvider>
    <PostProvider>
      <AccomplishmentProvider>
        <StylesProvider injectFirst>
          <GlobalStyle />
          <Routes />
        </StylesProvider>
      </AccomplishmentProvider>
    </PostProvider>
  </AuthProvider>
);

export default App;
