import React from 'react';
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

const StyledLink = styled.a<{ isActive?: boolean }>`
  border-bottom-width: 4px;
  border-bottom-style: solid;
  border-bottom-color: ${(props) => (props.isActive ? '#fff' : '#121813')};
  color: ${(props) => (props.isActive ? '#fff' : '#ccc')};
  display: block;
  padding: 22px 0 12px;
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

const StyledDropDownLink = styled.a`
  background: #fff;
  color: #808080;
  display: block;
  font-size: 12px;
  text-align: center;
  padding: 10px;
  &:first-child {
    border-radius: 8px 8px 0 0;
  }
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

// active時のスタイル
// Linkがaタグになってるのでreact-routerのLinkを使用する

const Header: React.FC<Props> = () => (
  <StyledWrapper>
    <StyledInner>
      {/* ログイン中のみ表示 */}
      <StyledList>
        <StyledItem>
          <StyledLink isActive>日記を書く</StyledLink>
        </StyledItem>
        <StyledItem>
          <StyledLink>ステータス</StyledLink>
        </StyledItem>
        <StyledItem>
          <StyledLink>みんなの投稿</StyledLink>
        </StyledItem>
        <StyledItem>
          <StyledLink>ランキング</StyledLink>
        </StyledItem>
      </StyledList>
      {/* 未ログイン時のみ表示 */}
      <StyledAuthList>
        <StyledAuthItem>
          <StyledLink>アカウント登録</StyledLink>
        </StyledAuthItem>
        <StyledAuthItem>
          <StyledLink>ログイン</StyledLink>
        </StyledAuthItem>
      </StyledAuthList>
      {/* ログイン中のみ表示 */}
      <StyledIconWrapper>
        <StyledAccountCircleIcon />
        <StyledDropDown>
          <StyledDropDownLink>アカウント設定</StyledDropDownLink>
          <StyledDropDownLink>ログアウト</StyledDropDownLink>
          <StyledDropDownLink>退会</StyledDropDownLink>
        </StyledDropDown>
      </StyledIconWrapper>
    </StyledInner>
  </StyledWrapper>
);

export default Header;
