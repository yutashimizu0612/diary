import React, { useState, useEffect } from 'react';
import styled from 'styled-components/macro';
import axios from 'axios';
import { Color } from '@material-ui/lab/Alert';
import EmailOutlinedIcon from '@material-ui/icons/EmailOutlined';
import Layout from '../layouts/Layout';
import Toast from '../components/Toast';
import TextForm from '../components/TextForm';
import Button from '../components/BaseButton';
import { validateResendConfirmationForm } from '../../functions/auth/validation';

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

const StyledButtonWrapper = styled.div`
  margin: 36px auto 0;
  width: 400px;
`;

const ResendConfirmationEmail: React.FC = () => {
  const [values, setValues] = useState<{ email: string }>({ email: '' });
  const [errors, setErrors] = useState<{ email?: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
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
    setErrors(validateResendConfirmationForm(values));
    setIsSubmitting(true);
  };

  const submit = (): void => {
    axios({
      method: 'POST',
      url: `${process.env.REACT_APP_API_URL}/resend`,
      data: { email: values.email },
    })
      .then(() => {
        setToastStatus({
          isOpen: true,
          message: `${values.email}に確認メールを再送信しました。メールをご確認の上、本登録を行ってください。`,
          severity: 'success',
        });
        setIsSubmitted(true);
      })
      .catch((e) => {
        const { error } = e.response.data;
        let message;
        switch (error.code) {
          case 'not_registered':
            message = '仮登録されていません。登録画面からやり直してください。';
            break;
          case 'already_verified':
            message = '既に本登録が完了しています。ログイン画面からログインしてください。';
            break;
          default:
            message = '登録に失敗しました。お手数ですが時間を置いてやり直してください。';
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

  return (
    <Layout>
      <Toast
        open={toastStatus.isOpen}
        onClose={closeSnackBar}
        message={toastStatus.message}
        severity={toastStatus.severity}
      />
      <StyledWrapper>
        <StyledTitle>登録確認メール再送信</StyledTitle>
        <TextForm
          name="email"
          iconType={EmailOutlinedIcon}
          placeholder="メールアドレス"
          value={values.email}
          formType="email"
          error={errors.email}
          onChange={(e) => handleChange(e)}
        />
        <StyledButtonWrapper>
          <Button
            text="再送信"
            appearance="primary"
            onClick={(e) => handleSubmit(e)}
            disabled={isSubmitted}
          />
        </StyledButtonWrapper>
      </StyledWrapper>
    </Layout>
  );
};

export default ResendConfirmationEmail;
