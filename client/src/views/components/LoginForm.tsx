import React from 'react';
import styled from 'styled-components/macro';
import EmailOutlinedIcon from '@material-ui/icons/EmailOutlined';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';

import { LoginFormValues } from '../../types';
import TextForm from './TextForm';
import Button from './BaseButton';

const StyledForm = styled.form``;

const StyledFormItem = styled.div`
  &:not(:first-child) {
    margin-top: 34px;
  }
`;

const StyledLoginButtonWrapper = styled.div`
  margin: 80px auto 0;
  width: 400px;
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
      <StyledLoginButtonWrapper>
        <Button text="ログイン" appearance="primary" onClick={onSubmit} />
      </StyledLoginButtonWrapper>
    </StyledForm>
  );
};

export default SignUpForm;
