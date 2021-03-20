import React, { useState } from 'react';
import styled from 'styled-components/macro';
import Header from '../components/Header';
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

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    console.log('value', event.target.value);
    setValues({ ...values, [event.target.name]: event.target.value });
  };

  return (
    <>
      <Header />
      <StyledWrapper>
        <StyledTitle>アカウント登録</StyledTitle>
        <SignUpForm values={values} onChange={(e) => handleChange(e)} />
      </StyledWrapper>
    </>
  );
};

export default SignUp;
