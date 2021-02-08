import React from 'react';
import styled from 'styled-components/macro';
import Header from '../components/Header';
import TextForm from '../components/TextForm';
import Button from '../components/Button';

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

const StyledSignupButtonWrapper = styled.div`
  margin: 0 auto;
  width: 400px;
`;

const StyledFacebook = styled.div`
  border-top: 1px dotted #707070;
  margin-top: 96px;
  padding-top: 24px;
`;

const Singup: React.FC = () => (
  <>
    <Header />
    <StyledWrapper>
      <StyledTitle>アカウント登録</StyledTitle>
      <div
        css={`
          margin: 30px 0 36px;
        `}>
        <StyledFormList>
          <StyledFormItem>
            <TextForm placeholder="名前" />
          </StyledFormItem>
          <StyledFormItem>
            <TextForm placeholder="メールアドレス" />
          </StyledFormItem>
          <StyledFormItem>
            <TextForm placeholder="パスワード" />
          </StyledFormItem>
          <StyledFormItem>
            <TextForm placeholder="確認用にもう1度パスワードを入力してください" />
          </StyledFormItem>
        </StyledFormList>
      </div>
      <StyledSignupButtonWrapper>
        <Button
          text="アカウント登録"
          appearance="primary"
          onClick={() => console.log('アカウント登録処理')}
        />
      </StyledSignupButtonWrapper>
      <StyledFacebook>
        <StyledText>または</StyledText>
        <StyledText>Facebookでも登録できます。</StyledText>
        <div
          css={`
            margin-top: 30px;
          `}>
          <Button
            text="Facebookで登録"
            appearance="facebook"
            onClick={() => console.log('Facebookで登録処理')}
          />
        </div>
      </StyledFacebook>
    </StyledWrapper>
  </>
);

export default Singup;
