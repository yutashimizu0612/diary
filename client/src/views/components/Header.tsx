import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components/macro';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

const StyledWrapper = styled.div`
  background: #121813;
`;

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

const StyledAuthList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const StyledAuthItem = styled.li`
  &:not(:last-child) {
    margin-right: 20px;
  }
`;

const StyledIconWrapper = styled.div`
  position: relative;
`;

const StyledAccountCircleIcon = styled(AccountCircleIcon)`
  color: #fff;
  font-size: 3em !important;
`;

const StyledDropDown = styled.div`
  border-radius: 8px;
  position: absolute;
  top: 50px;
  left: 0;
  width: 120px;
`;

const StyledDropDownLink = styled(Link)`
  background: #fff;
  border-radius: 8px 8px 0 0;
  color: #808080;
  display: block;
  font-size: 12px;
  padding: 10px;
  text-align: center;
  text-decoration: none;
  &:hover {
    background: #f5f5f5;
    color: #000;
  }
`;

const StyledDropDownButton = styled.button`
  background: #fff;
  color: #808080;
  display: block;
  font-size: 12px;
  padding: 10px;
  text-align: center;
  text-decoration: none;
  width: 100%;
  &:last-child {
    border-radius: 0 0 8px 8px;
  }
  &:hover {
    background: #f5f5f5;
    color: #000;
  }
`;

type Props = {
  auth?: boolean;
  current?: string;
};

const Header: React.FC<Props> = () => (
  <StyledWrapper>
    <StyledInner>
      {/* ログイン中のみ表示 */}
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
      {/* 未ログイン時のみ表示 */}
      <StyledAuthList>
        <StyledAuthItem>
          <StyledLink to="/signup">アカウント登録</StyledLink>
        </StyledAuthItem>
        <StyledAuthItem>
          <StyledLink to="/login">ログイン</StyledLink>
        </StyledAuthItem>
      </StyledAuthList>
      {/* ログイン中のみ表示 */}
      <StyledIconWrapper>
        <StyledAccountCircleIcon />
        <StyledDropDown>
          <StyledDropDownLink to="/settings">アカウント設定</StyledDropDownLink>
          <StyledDropDownButton>ログアウト</StyledDropDownButton>
          <StyledDropDownButton>退会</StyledDropDownButton>
        </StyledDropDown>
      </StyledIconWrapper>
    </StyledInner>
  </StyledWrapper>
);

export default Header;
