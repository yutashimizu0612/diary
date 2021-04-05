import React from 'react';
import styled from 'styled-components/macro';
import Nav from './Nav';
import AuthNav from './AuthNav';
import { useAuth } from '../../../hooks/use-auth';

const StyledWrapper = styled.div`
  background: #121813;
`;

const Header: React.FC = () => {
  const auth = useAuth();
  return (
    <StyledWrapper>
      {/* ログイン中のみ表示 */}
      {auth.isLoggedIn() && <Nav />}
      {/* 未ログイン時のみ表示 */}
      {!auth.isLoggedIn() && <AuthNav />}
    </StyledWrapper>
  );
};

export default Header;
