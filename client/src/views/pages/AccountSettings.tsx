import React from 'react';
import styled from 'styled-components/macro';
import Layout from '../layouts/Layout';

const StyledWrapper = styled.div`
  background: #fff;
  border: 1px solid #d0caca;
  border-radius: 16px;
  margin: 60px auto 0;
  padding: 36px 80px 60px;
  width: 600px;
`;

const StyledTitle = styled.h2`
  font-size: 22px;
  font-weight: normal;
  margin-bottom: 80px;
  text-align: center;
`;

const StyledTerm = styled.dt`
  font-weight: bold;
  margin-bottom: 12px;
`;

const StyledData = styled.dd`
  margin-bottom: 50px;
`;

const StyledImage = styled.img`
  border-radius: 50%;
  width: 56px;
  height: 56px;
`;

const StyledButton = styled.button`
  background: #fff;
  border: 1px solid #808080;
  border-radius: 16px;
  color: #808080;
  padding: 2px 12px 0;
  margin-left: 12px;
  &:hover {
    opacity: 0.7;
  }
`;

const AccountSettings: React.FC = () => (
  <Layout>
    <StyledWrapper>
      <StyledTitle>アカウント設定</StyledTitle>
      <dl>
        <StyledTerm>
          プロフィール画像<StyledButton>変更する</StyledButton>
        </StyledTerm>
        <StyledData>
          <StyledImage src="https://placehold.jp/150x150.png" />
        </StyledData>
        <StyledTerm>
          ニックネーム<StyledButton>変更する</StyledButton>
        </StyledTerm>
        <StyledData>鈴木 尚典</StyledData>
        <StyledTerm>
          メールアドレス<StyledButton>変更する</StyledButton>
        </StyledTerm>
        <StyledData>sample@gmail.com</StyledData>
      </dl>
    </StyledWrapper>
  </Layout>
);

export default AccountSettings;
