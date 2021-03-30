import React from 'react';
import Header from '../components/header/Header';

const Layout: React.FC = ({ children }) => (
  <>
    <Header />
    {children}
  </>
);

export default Layout;
