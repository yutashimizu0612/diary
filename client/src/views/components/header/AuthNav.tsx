import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components/macro';

const StyledInner = styled.div`
  margin: 0 auto;
  width: 900px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const StyledLink = styled(NavLink)`
  border-bottom-width: 4px;
  border-bottom-style: solid;
  border-bottom-color: #121813;
  color: #ccc;
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

const menuItems = [
  {
    to: '/signup',
    title: 'アカウント登録',
  },
  {
    to: '/login',
    title: 'ログイン',
  },
];

const AuthNav: React.FC = () => (
  <StyledInner>
    <StyledList>
      {menuItems.map((item) => (
        <StyledItem key={item.to}>
          <StyledLink
            exact
            to={item.to}
            activeStyle={{
              borderBottomColor: '#fff',
              color: '#fff',
            }}>
            {item.title}
          </StyledLink>
        </StyledItem>
      ))}
    </StyledList>
  </StyledInner>
);

export default AuthNav;
