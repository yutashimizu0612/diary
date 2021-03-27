import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components/macro';

const StyledInner = styled.div`
  margin: 0 auto;
  width: 900px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const StyledLink = styled(Link)<{ isActive?: boolean }>`
  border-bottom-width: 4px;
  border-bottom-style: solid;
  border-bottom-color: ${(props) => (props.isActive ? '#fff' : '#121813')};
  color: ${(props) => (props.isActive ? '#fff' : '#ccc')};
  display: block;
  padding: 22px 0 12px;
  text-decoration: none;
  &:hover {
    color: #fff;
  }
`;

const StyledList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const StyledItem = styled.li`
  &:not(:last-child) {
    margin-right: 20px;
  }
`;

const AuthNav: React.FC = () => (
  <StyledInner>
    <StyledList>
      <StyledItem>
        <StyledLink to="/signup">アカウント登録</StyledLink>
      </StyledItem>
      <StyledItem>
        <StyledLink to="/login">ログイン</StyledLink>
      </StyledItem>
    </StyledList>
  </StyledInner>
);

export default AuthNav;
