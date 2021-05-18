import React, { useState, useEffect } from 'react';
import styled from 'styled-components/macro';
import { Redirect } from 'react-router-dom';
import { Color } from '@material-ui/lab/Alert';
import Layout from '../layouts/Layout';
import Toast from '../components/Toast';
import LoginForm from '../components/LoginForm';
import { validateLoginForm } from '../../functions/auth/validation';
import { useAuth } from '../../functions/auth/use-auth';
import { LoginFormValues } from '../../types';

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

const Login: React.FC = () => {
  const auth = useAuth();
  const [values, setValues] = useState<LoginFormValues>({
    email: '',
    password: '',
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [toastStatus, setToastStatus] = useState({
    isOpen: false,
    message: '',
    severity: 'success' as Color,
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event: React.MouseEvent<HTMLButtonElement>): void => {
    event.preventDefault();
    setErrors(validateLoginForm(values));
    setIsSubmitting(true);
  };

  const submit = () => {
    const { email, password } = values;
    auth
      .login(email, password)
      .then(() => {
        setValues({ email: '', password: '' });
      })
      .catch((e: any) => {
        const { error } = e.response.data;
        let message;
        switch (error.code) {
          case 'user_not_registered':
            message = 'このメールアドレスは登録されていません。ご利用にはユーザ登録が必要です。';
            break;
          case 'not_verified':
            message = '本登録が完了していません。';
            break;
          case 'unauthorized':
            message = 'メールアドレスかパスワードが間違っています。';
            break;
          default:
            message = 'ログインに失敗しました。';
        }
        setToastStatus({
          isOpen: true,
          message,
          severity: 'error',
        });
      });
  };

  const closeSnackBar = (): void => {
    setToastStatus({ ...toastStatus, isOpen: false });
  };

  useEffect(() => {
    if (isSubmitting && Object.keys(errors).length === 0) {
      submit();
    }
  }, [errors]);

  if (auth.isLoggedIn()) {
    return <Redirect to="/" />;
  }

  return (
    <Layout>
      <Toast
        open={toastStatus.isOpen}
        onClose={closeSnackBar}
        message={toastStatus.message}
        severity={toastStatus.severity}
      />
      <StyledWrapper>
        <StyledTitle>ログイン</StyledTitle>
        <StyledText>登録したメールアドレスとパスワードを入力してください。</StyledText>
        <div css="margin-top: 36px;">
          <LoginForm
            values={values}
            errors={errors}
            onChange={(e) => handleChange(e)}
            onSubmit={handleSubmit}
          />
        </div>
      </StyledWrapper>
    </Layout>
  );
};

export default Login;
