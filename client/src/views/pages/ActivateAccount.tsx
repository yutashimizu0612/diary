import React, { useState, useEffect } from 'react';
import styled from 'styled-components/macro';
import axios from 'axios';
import { Color } from '@material-ui/lab/Alert';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import Header from '../components/Header';
import Toast from '../components/Toast';
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

type Props = RouteComponentProps<{ token: string }>;

const ActivateAccount: React.FC<Props> = ({ match }) => {
  const [values, setValues] = useState({ token: '' });

  useEffect(() => {
    const token = match.params.token;
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
      .then((response) => {
        console.log('ACCOUNT ACTIVATION SUCCESS', response);
        setToastStatus({
          isOpen: true,
          message: response.data.message,
          severity: 'success',
        });
      })
      .catch((error) => {
        console.log('ACCOUNT ACTIVATION ERROR', error.response);
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
        <StyledTitle>アカウントの本登録</StyledTitle>
        <Button text="登録する" appearance="primary" onClick={() => submit()} />
      </StyledWrapper>
    </>
  );
};

export default withRouter(ActivateAccount);
