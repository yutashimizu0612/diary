import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components/macro';
import DropDown from './DropDown';

const StyledInner = styled.div`
  margin: 0 auto;
  width: 900px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const StyledList = styled.ul`
  display: flex;
  align-items: center;
`;

const StyledItem = styled.li`
  &:not(:last-child) {
    margin-right: 20px;
  }
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

const menuItems = [
  {
    to: '/',
    title: '日記を書く',
  },
  {
    to: '/status',
    title: 'ステータス',
  },
  {
    to: '/posts',
    title: 'みんなの投稿',
  },
];

const Nav: React.FC = () => (
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
    <DropDown />
  </StyledInner>
);

export default Nav;
