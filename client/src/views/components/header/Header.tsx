import React from 'react';
import styled from 'styled-components/macro';
import Nav from './Nav';
import AuthNav from './AuthNav';
import { useAuth } from '../../../functions/auth/use-auth';

const StyledWrapper = styled.div`
  background: #121813;
`;

const Header: React.FC = () => {
  const auth = useAuth();
  return (
    <StyledWrapper>
      {auth.isLoggedIn() && <Nav />}
      {!auth.isLoggedIn() && <AuthNav />}
    </StyledWrapper>
  );
};

export default Header;
