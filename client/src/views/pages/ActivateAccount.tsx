import React, { useState, useEffect } from 'react';
import styled from 'styled-components/macro';
import axios from 'axios';
import { Color } from '@material-ui/lab/Alert';
import { useParams } from 'react-router-dom';
import Layout from '../layouts/Layout';
import Toast from '../components/Toast';
import Button from '../components/Button';

const StyledWrapper = styled.div`
  margin: 130px auto 0;
  width: 400px;
`;

const StyledTitle = styled.h2`
  font-size: 24px;
  font-weight: normal;
  margin-bottom: 80px;
  text-align: center;
`;

type ParamTypes = {
  token: string;
};

const ActivateAccount: React.FC = () => {
  const [values, setValues] = useState({ token: '' });
  const { token } = useParams<ParamTypes>();

  useEffect(() => {
    console.log('token', token);
    if (token) {
      setValues({ ...values, token });
    }
  }, []);

  const [toastStatus, setToastStatus] = useState({
    isOpen: false,
    message: '',
    severity: 'success' as Color,
  });

  const submit = (): void => {
    console.log('submit');
    const { token } = values;
    axios({
      method: 'POST',
      url: `${process.env.REACT_APP_API_URL}/activation`,
      data: { token },
    })
      .then(() => {
        setToastStatus({
          isOpen: true,
          message: 'ユーザ登録が完了しました。ログインしてください！',
          severity: 'success',
        });
      })
      .catch((e) => {
        const { error } = e.response.data;
        let message;
        switch (error.code) {
          case 'unauthorized':
            message = 'このURLは使用できません。再度登録画面からやり直してください。';
            break;
          case 'not_registered':
            message = '仮登録されていません。登録画面からやり直してください。';
            break;
          case 'already_verified':
            message = '既に本登録が完了しています。ログイン画面からログインしてください。';
            break;
          case 'token_required':
            message = '登録画面から必要事項を入力してください。';
            break;
          default:
            message = '登録に失敗しました。お手数ですが再度登録画面からやり直してください。';
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

  return (
    <Layout>
      <Toast
        open={toastStatus.isOpen}
        onClose={closeSnackBar}
        message={toastStatus.message}
        severity={toastStatus.severity}
      />
      <StyledWrapper>
        <StyledTitle>アカウントの本登録</StyledTitle>
        <Button text="登録する" appearance="primary" onClick={() => submit()} />
      </StyledWrapper>
    </Layout>
  );
};

export default ActivateAccount;
