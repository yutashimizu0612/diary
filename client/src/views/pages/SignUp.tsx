import React, { useState, useEffect } from 'react';
import styled from 'styled-components/macro';
import { Redirect } from 'react-router-dom';
import { Color } from '@material-ui/lab/Alert';
import Layout from '../layouts/Layout';
import Toast from '../components/Toast';
import SignUpForm from '../components/SignUpForm';
import { validateSignUpForm } from '../../functions/auth/validation';
import { useAuth } from '../../functions/auth/use-auth';

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
  const auth = useAuth();
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
    setValues({ ...values, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event: React.MouseEvent<HTMLButtonElement>): void => {
    event.preventDefault();
    setErrors(validateSignUpForm(values));
    setIsSubmitting(true);
  };

  const submit = () => {
    console.log('submit');
    const { name, email, password, confirmation } = values;
    auth
      .signup(name, email, password, confirmation)
      .then((response: any) => {
        console.log('SIGNUP SUBMIT SUCCESS', response);
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
      .catch((error: any) => {
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
        <StyledTitle>アカウント登録</StyledTitle>
        <SignUpForm
          values={values}
          errors={errors}
          onChange={(e) => handleChange(e)}
          onSubmit={handleSubmit}
        />
      </StyledWrapper>
    </Layout>
  );
};

export default SignUp;
