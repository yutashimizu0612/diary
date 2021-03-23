import React, { useState, useEffect } from 'react';
import styled from 'styled-components/macro';
import axios from 'axios';
import { Color } from '@material-ui/lab/Alert';
import Header from '../components/Header';
import Toast from '../components/Toast';
import SignUpForm from '../components/SignUpForm';
import { validateSignUpForm } from '../../functions/validation';

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
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [toastStatus, setToastStatus] = useState({
    isOpen: false,
    message: '',
    severity: 'success' as Color,
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    console.log('value', event.target.value);
    setValues({ ...values, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event: React.MouseEvent<HTMLButtonElement>): void => {
    event.preventDefault();
    console.log('handleSubmit');
    setErrors(validateSignUpForm(values));
    setIsSubmitting(true);
  };

  const submit = (): void => {
    console.log('submit');
    const { name, email, password, confirmation } = values;
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
        console.log('SIGNUP SUBMIT ERROR response', error.response);
        console.log('SIGNUP SUBMIT ERROR response.data', error.response.data);
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
    console.log('isSubmitting', isSubmitting);
    if (isSubmitting && Object.keys(errors).length === 0) {
      console.log('useEffectのsubmit！');
      submit();
    }
  }, [errors]);

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
        <SignUpForm
          values={values}
          errors={errors}
          onChange={(e) => handleChange(e)}
          onSubmit={handleSubmit}
        />
      </StyledWrapper>
    </>
  );
};

export default SignUp;
