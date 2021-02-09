import React from 'react';
import styled from 'styled-components/macro';
import Header from '../components/Header';
import TextForm from '../components/TextForm';
import Button from '../components/Button';
import EmailOutlinedIcon from '@material-ui/icons/EmailOutlined';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';

const StyledWrapper = styled.div`
  margin: 130px auto 0;
  width: 700px;
`;

const StyledTitle = styled.h2`
  font-size: 24px;
  font-weight: normal;
  margin-bottom: 80px;
  text-align: center;
`;

const StyledText = styled.p`
  color: #acacac;
  text-align: center;
`;

const StyledFormList = styled.ul``;

const StyledFormItem = styled.li`
  &:not(:first-child) {
    margin-top: 20px;
  }
`;

const StyledLoginButtonWrapper = styled.div`
  margin: 0 auto;
  width: 400px;
`;

const StyledFacebook = styled.div`
  border-top: 1px dotted #707070;
  margin-top: 96px;
  padding-top: 24px;
`;

const Login: React.FC = () => (
  <>
    <Header />
    <StyledWrapper>
      <StyledTitle>ログイン</StyledTitle>
      <StyledText>登録したメールアドレスとパスワードを入力してください。</StyledText>
      <div
        css={`
          margin: 30px 0 36px;
        `}>
        <StyledFormList>
          <StyledFormItem>
            <TextForm iconType={EmailOutlinedIcon} placeholder="メールアドレス" />
          </StyledFormItem>
          <StyledFormItem>
            <TextForm iconType={LockOutlinedIcon} placeholder="パスワード" />
          </StyledFormItem>
        </StyledFormList>
      </div>
      <StyledLoginButtonWrapper>
        <Button text="ログイン" appearance="primary" onClick={() => console.log('ログイン処理')} />
      </StyledLoginButtonWrapper>
      <StyledFacebook>
        <StyledText>または</StyledText>
        <StyledText>Facebookでもログインできます。</StyledText>
        <div
          css={`
            margin-top: 30px;
          `}>
          <Button
            text="Facebookでログイン"
            appearance="facebook"
            onClick={() => console.log('facebookでログイン処理')}
          />
        </div>
      </StyledFacebook>
    </StyledWrapper>
  </>
);

export default Login;
