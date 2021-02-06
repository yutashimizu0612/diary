import React from 'react';
import styled from 'styled-components';
import Header from '../Header';
import TextForm from '../TextForm';
import PrimaryButton from '../PrimaryButton';
import FacebookButton from '../FacebookButton';

const Wrapper = styled.div`
  margin: 130px auto 0;
  width: 700px;
`;

const Title = styled.h2`
  font-size: 24px;
  font-weight: normal;
  margin-bottom: 80px;
  text-align: center;
`;

const Text = styled.p`
  color: #acacac;
  text-align: center;
`;

const Form = styled.div`
  margin: 30px 0 36px;
  color: #3f3e3e;
`;

const FormList = styled.ul``;

const FormItem = styled.li`
  &:not(:first-child) {
    margin-top: 20px;
  }
`;

const LoginButtonWrapper = styled.div`
  margin: 0 auto;
  width: 400px;
`;

const Facebook = styled.div`
  border-top: 1px dotted #707070;
  margin-top: 96px;
  padding-top: 24px;
`;

const FacebookButtonWrapper = styled.div`
  margin-top: 24px;
`;

const Login: React.FC = () => (
  <>
    <Header />
    <Wrapper>
      <Title>ログイン</Title>
      <Text>登録したメールアドレスとパスワードを入力してください。</Text>
      <Form>
        <FormList>
          <FormItem>
            <TextForm />
          </FormItem>
          <FormItem>
            <TextForm />
          </FormItem>
        </FormList>
      </Form>
      <LoginButtonWrapper>
        <PrimaryButton />
      </LoginButtonWrapper>
      <Facebook>
        <Text>または</Text>
        <Text>Facebookでもログインできます。</Text>
        <FacebookButtonWrapper>
          <FacebookButton />
        </FacebookButtonWrapper>
      </Facebook>
    </Wrapper>
  </>
);

export default Login;
