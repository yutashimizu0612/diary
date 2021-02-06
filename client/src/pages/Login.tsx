import React from 'react';
import styled from 'styled-components';
import Header from '../Header';
import TextForm from '../TextForm';
import Button from '../Button';

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

const StyledForm = styled.div`
  margin: 30px 0 36px;
  color: #3f3e3e;
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

const StyledFacebookButtonWrapper = styled.div`
  margin-top: 24px;
`;

const Login: React.FC = () => (
  <>
    <Header />
    <StyledWrapper>
      <StyledTitle>ログイン</StyledTitle>
      <StyledText>登録したメールアドレスとパスワードを入力してください。</StyledText>
      <StyledForm>
        <StyledFormList>
          <StyledFormItem>
            <TextForm />
          </StyledFormItem>
          <StyledFormItem>
            <TextForm />
          </StyledFormItem>
        </StyledFormList>
      </StyledForm>
      <StyledLoginButtonWrapper>
        <Button text="ログイン" appearance="primary" onClick={() => console.log('ログイン処理')} />
      </StyledLoginButtonWrapper>
      <StyledFacebook>
        <StyledText>または</StyledText>
        <StyledText>Facebookでもログインできます。</StyledText>
        <StyledFacebookButtonWrapper>
          <Button
            text="Facebookでログイン"
            appearance="facebook"
            onClick={() => console.log('facebookでログイン処理')}
          />
        </StyledFacebookButtonWrapper>
      </StyledFacebook>
    </StyledWrapper>
  </>
);

export default Login;
