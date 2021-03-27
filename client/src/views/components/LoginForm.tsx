import React from 'react';
import styled from 'styled-components/macro';
import EmailOutlinedIcon from '@material-ui/icons/EmailOutlined';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';

import { LoginFormValues } from '../../types';
import TextForm from './TextForm';
import Button from './Button';

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

const StyledLoginButtonWrapper = styled.div`
  margin: 36px auto 0;
  width: 400px;
`;

const StyledFacebook = styled.div`
  border-top: 1px dotted #707070;
  margin-top: 96px;
  padding-top: 24px;
`;

type Props = {
  values: LoginFormValues;
  errors: {
    email?: string;
    password?: string;
  };
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

const SignUpForm: React.FC<Props> = ({ values, errors, onChange, onSubmit }) => {
  return (
    <StyledForm>
      <StyledFormItem>
        <TextForm
          name="email"
          iconType={EmailOutlinedIcon}
          placeholder="メールアドレス"
          value={values.email}
          error={errors.email}
          onChange={onChange}
        />
      </StyledFormItem>
      <StyledFormItem>
        <TextForm
          name="password"
          iconType={LockOutlinedIcon}
          placeholder="パスワード"
          value={values.password}
          error={errors.password}
          onChange={onChange}
        />
      </StyledFormItem>
      <StyledLoginButtonWrapper>
        <Button text="ログイン" appearance="primary" onClick={onSubmit} />
      </StyledLoginButtonWrapper>
      <StyledFacebook>
        <StyledText>または</StyledText>
        <StyledText>Facebookでもログインできます。</StyledText>
        <div css="margin-top: 30px;">
          <Button
            text="Facebookでログイン"
            appearance="facebook"
            onClick={() => console.log('facebookでログイン処理')}
          />
        </div>
      </StyledFacebook>
    </StyledForm>
  );
};

export default SignUpForm;
