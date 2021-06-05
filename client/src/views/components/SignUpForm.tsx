import React from 'react';
import styled from 'styled-components/macro';
import PersonIcon from '@material-ui/icons/Person';
import EmailOutlinedIcon from '@material-ui/icons/EmailOutlined';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';

import { SignUpFormValues } from '../../types';
import TextForm from './TextForm';
import Button from './BaseButton';

const StyledForm = styled.form``;

const StyledFormItem = styled.div`
  &:not(:first-child) {
    margin-top: 34px;
  }
`;

const StyledSignupButtonWrapper = styled.div`
  margin: 80px auto 0;
  width: 400px;
`;

type Props = {
  values: SignUpFormValues;
  errors: {
    name?: string;
    email?: string;
    password?: string;
    confirmation?: string;
  };
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

const SignUpForm: React.FC<Props> = ({ values, errors, onChange, onSubmit }) => {
  return (
    <StyledForm>
      {/* フォーム */}
      <StyledFormItem>
        <TextForm
          name="name"
          iconType={PersonIcon}
          placeholder="名前"
          value={values.name}
          formType="text"
          error={errors.name}
          onChange={onChange}
        />
      </StyledFormItem>
      <StyledFormItem>
        <TextForm
          name="email"
          iconType={EmailOutlinedIcon}
          placeholder="メールアドレス"
          value={values.email}
          formType="email"
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
          formType="password"
          error={errors.password}
          onChange={onChange}
        />
      </StyledFormItem>
      <StyledFormItem>
        <TextForm
          name="confirmation"
          iconType={LockOutlinedIcon}
          placeholder="確認用にもう1度パスワードを入力してください"
          value={values.confirmation}
          formType="password"
          error={errors.confirmation}
          onChange={onChange}
        />
      </StyledFormItem>
      {/* Submitボタン */}
      <StyledSignupButtonWrapper>
        <Button text="アカウント登録" appearance="primary" onClick={onSubmit} />
      </StyledSignupButtonWrapper>
    </StyledForm>
  );
};

export default SignUpForm;
