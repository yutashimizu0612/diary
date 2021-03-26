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
  const [values, setValues] = useState({
    name: '',
    token: '',
  });

  useEffect(() => {
    const token = match.params.token;
    console.log('token', token);
  }, []);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [toastStatus, setToastStatus] = useState({
    isOpen: false,
    message: '',
    severity: 'success' as Color,
  });

  const handleSubmit = (event: React.MouseEvent<HTMLButtonElement>): void => {
    event.preventDefault();
    setIsSubmitting(true);
  };

  const submit = (): void => {
    console.log('submit');
    const { name, token } = values;
    axios({
      method: 'POST',
      url: `${process.env.REACT_APP_API_URL}/signup`,
      data: { name, token },
    })
      .then((response) => {
        console.log('SIGNUP SUBMIT SUCCESS', response);
        setValues({
          name: '',
          token: '',
        });
        setToastStatus({
          isOpen: true,
          message: response.data.message,
          severity: 'success',
        });
      })
      .catch((error) => {
        console.log('SIGNUP SUBMIT ERROR response', error.response);
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
        <Button text="登録する" appearance="primary" onClick={() => console.log('本登録')} />
      </StyledWrapper>
    </>
  );
};

export default withRouter(ActivateAccount);
