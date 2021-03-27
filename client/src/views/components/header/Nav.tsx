import React from 'react';
import { Link } from 'react-router-dom';
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

const Nav: React.FC = () => (
  <StyledInner>
    <StyledList>
      <StyledItem>
        <StyledLink to="/" isActive>
          日記を書く
        </StyledLink>
      </StyledItem>
      <StyledItem>
        <StyledLink to="/status">ステータス</StyledLink>
      </StyledItem>
      <StyledItem>
        <StyledLink to="/posts">みんなの投稿</StyledLink>
      </StyledItem>
      <StyledItem>
        <StyledLink to="/">ランキング</StyledLink>
      </StyledItem>
    </StyledList>
    <DropDown />
  </StyledInner>
);

export default Nav;
