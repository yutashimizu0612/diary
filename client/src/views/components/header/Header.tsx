import React from 'react';
import styled from 'styled-components/macro';
import Nav from './Nav';
import AuthNav from './AuthNav';
import { isLoggedIn } from '../../../functions/auth/authenticate';

const StyledWrapper = styled.div`
  background: #121813;
`;

const Header: React.FC = () => {
  return (
    <StyledWrapper>
      {/* ログイン中のみ表示 */}
      {isLoggedIn() && <Nav />}
      {/* 未ログイン時のみ表示 */}
      {!isLoggedIn() && <AuthNav />}
    </StyledWrapper>
  );
};

export default Header;
