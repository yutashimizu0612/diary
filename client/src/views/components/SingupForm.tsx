import React from 'react';
import styled from 'styled-components/macro';
import TextForm from './TextForm';
import Button from '../components/Button';
import PersonIcon from '@material-ui/icons/Person';
import EmailOutlinedIcon from '@material-ui/icons/EmailOutlined';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';

const StyledForm = styled.form``;

const StyledFormItem = styled.div`
  &:not(:first-child) {
    margin-top: 32px;
  }
`;

const StyledText = styled.p`
  color: #acacac;
  text-align: center;
`;

const StyledSignupButtonWrapper = styled.div`
  margin: 40px auto 0;
  width: 400px;
`;

const StyledFacebook = styled.div`
  border-top: 1px dotted #707070;
  margin-top: 96px;
  padding-top: 24px;
`;

type Props = {
  values: {
    name: string;
    email: string;
    password: string;
    confirmation: string;
  };
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const SingupForm: React.FC<Props> = ({ values, onChange }) => {
  return (
    <StyledForm>
      {/* フォーム */}
      <StyledFormItem>
        <TextForm
          name="name"
          iconType={PersonIcon}
          placeholder="名前"
          value={values.name}
          onChange={onChange}
        />
      </StyledFormItem>
      <StyledFormItem>
        <TextForm
          name="email"
          iconType={EmailOutlinedIcon}
          placeholder="メールアドレス"
          value={values.email}
          onChange={onChange}
        />
      </StyledFormItem>
      <StyledFormItem>
        <TextForm
          name="password"
          iconType={LockOutlinedIcon}
          placeholder="パスワード"
          value={values.password}
          onChange={onChange}
        />
      </StyledFormItem>
      <StyledFormItem>
        <TextForm
          name="confirmation"
          iconType={LockOutlinedIcon}
          placeholder="確認用にもう1度パスワードを入力してください"
          value={values.confirmation}
          onChange={onChange}
        />
      </StyledFormItem>
      {/* Submitボタン */}
      <StyledSignupButtonWrapper>
        <Button
          text="アカウント登録"
          appearance="primary"
          onClick={() => console.log('アカウント登録処理')}
        />
      </StyledSignupButtonWrapper>
      {/* Submitボタン（Facebook） */}
      <StyledFacebook>
        <StyledText>または</StyledText>
        <StyledText>Facebookでも登録できます。</StyledText>
        <div css="margin-top: 30px;">
          <Button
            text="Facebookで登録"
            appearance="facebook"
            onClick={() => console.log('Facebookで登録処理')}
          />
        </div>
      </StyledFacebook>
    </StyledForm>
  );
};

export default SingupForm;
