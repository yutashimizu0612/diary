import React, { useState, useEffect } from 'react';
import styled from 'styled-components/macro';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import { Color } from '@material-ui/lab/Alert';
import Header from '../components/Header';
import Toast from '../components/Toast';
import LoginForm from '../components/LoginForm';
import { validateLoginForm } from '../../functions/auth/validation';
import { authenticate, isLoggedIn } from '../../functions/auth/authenticate';
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

  const submit = (): void => {
    console.log('submit');
    const { email, password } = values;
    axios({
      method: 'POST',
      url: `${process.env.REACT_APP_API_URL}/login`,
      data: { email, password },
    })
      .then((response) => {
        console.log('LOGIN SUBMIT SUCCESS', response);
        authenticate(response.data, () => {
          setValues({ email: '', password: '' });
          setToastStatus({
            isOpen: true,
            message: `ようこそ！${response.data.user.name}さん`,
            severity: 'success',
          });
        });
      })
      .catch((error) => {
        console.log('LOGIN SUBMIT ERROR response', error.response);
        setToastStatus({
          isOpen: true,
          message: error.response.data.message,
          severity: 'error',
        });
      });
  };

  const closeSnackBar = (): void => {
    setToastStatus({ ...toastStatus, isOpen: false });
  };

  useEffect(() => {
    console.log('useEffect');
    console.log(Object.keys(errors).length);
    if (isSubmitting && Object.keys(errors).length === 0) {
      console.log('useEffectのsubmit！');
      submit();
    }
  }, [errors]);

  if (isLoggedIn()) {
    return <Redirect to="/" />;
  }

  return (
    <>
      <Header />
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
    </>
  );
};

export default Login;
