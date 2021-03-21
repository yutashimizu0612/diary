import React, { useState } from 'react';
import styled from 'styled-components/macro';
import axios from 'axios';
import { Color } from '@material-ui/lab/Alert';
import Header from '../components/Header';
import Toast from '../components/Toast';
import SignUpForm from '../components/SignUpForm';

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

const SignUp: React.FC = () => {
  const [values, setValues] = useState({
    name: '',
    email: '',
    password: '',
    confirmation: '',
  });

  const [toastStatus, setToastStatus] = useState({
    isOpen: false,
    message: '',
    severity: 'success' as Color,
  });

  const { name, email, password, confirmation } = values;

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    console.log('value', event.target.value);
    setValues({ ...values, [event.target.name]: event.target.value });
  };

  const submit = (event: React.MouseEvent<HTMLButtonElement>): void => {
    event.preventDefault();
    console.log(name);
    console.log(email);
    console.log(password);
    axios({
      method: 'POST',
      url: `${process.env.REACT_APP_API_URL}/signup`,
      data: { name, email, password, confirmation },
    })
      .then((response) => {
        console.log('SIGNUP SUBMIT SUCCESS', response);
        console.log('SIGNUP SUBMIT SUCCESS response.data', response.data);
        setValues({
          name: '',
          email: '',
          password: '',
          confirmation: '',
        });
        setToastStatus({
          isOpen: true,
          message: response.data.message,
          severity: 'success',
        });
      })
      .catch((error) => {
        console.log('SIGNUP SUBMIT ERROR', error);
        setToastStatus({
          isOpen: true,
          message: 'エラー文言を入れる',
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
        <StyledTitle>アカウント登録</StyledTitle>
        <SignUpForm values={values} onChange={(e) => handleChange(e)} onSubmit={submit} />
      </StyledWrapper>
    </>
  );
};

export default SignUp;
