import React, { useState, useEffect } from 'react';
import styled from 'styled-components/macro';
import { useHistory } from 'react-router-dom';
import { Color } from '@material-ui/lab/Alert';
import axios from 'axios';
import Layout from '../layouts/Layout';
import Toast from '../components/Toast';
import UpdateAccountForm from '../components/UpdateAccountForm';
import Profile from '../components/Profile';
import { useAuth } from '../../functions/auth/use-auth';
import { validateUpdateAccountForm } from '../../functions/auth/validation';

const StyledWrapper = styled.div`
  background: #fff;
  border: 1px solid #d0caca;
  border-radius: 16px;
  margin: 60px auto 0;
  padding: 36px 80px 60px;
  width: 600px;
`;

const StyledTitle = styled.h2`
  font-size: 22px;
  font-weight: normal;
  margin-bottom: 80px;
  text-align: center;
`;

type State = {
  name: string;
  email: string;
};

const AccountSettings: React.FC = () => {
  const auth = useAuth();
  const token = auth.getAccessToken();
  const userId = auth.getCurrentUserId();
  const [values, setValues] = useState<State>({
    name: '',
    email: '',
  });
  const [errors, setErrors] = useState({});
  const [toastStatus, setToastStatus] = useState({
    isOpen: false,
    message: '',
    severity: 'success' as Color,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const history = useHistory();

  const edit = () => {
    setIsEditing(true);
  };

  const quitEditing = () => {
    setIsEditing(false);
    setIsSubmitting(false);
    setErrors({});
    loadUserInfo();
  };

  const handleChange = (prop: keyof State) => (event: React.ChangeEvent<HTMLInputElement>) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleSubmit = (event: React.MouseEvent<HTMLButtonElement>): void => {
    event.preventDefault();
    setErrors(validateUpdateAccountForm(values));
    setIsSubmitting(true);
  };

  const submit = () => {
    console.log('update');
    const { name } = values;
    axios({
      method: 'PUT',
      url: `${process.env.REACT_APP_API_URL}/users/`,
      data: { name },
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => {
        console.log('PRPFILE UPDATE SUCCESS', response);
        setToastStatus({
          isOpen: true,
          message: response.data.message,
          severity: 'success',
        });
      })
      .catch((error) => {
        console.log('PRPFILE UPDATE ERROR', error.response);
        setToastStatus({
          isOpen: true,
          message: error.response.data.message,
          severity: 'error',
        });
      });
  };

  const loadUserInfo = () => {
    axios({
      method: 'GET',
      url: `${process.env.REACT_APP_API_URL}/users/${userId}`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => {
        console.log('LOAD USER INFO', response);
        const { name, email } = response.data;
        setValues({ ...values, name, email });
      })
      .catch((error) => {
        console.log('LOAD USER INFO ERROR', error);
        if (error.response.status === 401) {
          auth.logout(() => {
            history.push('/login');
          });
        }
      });
  };

  const closeSnackBar = (): void => {
    setToastStatus({ ...toastStatus, isOpen: false });
  };

  useEffect(() => {
    loadUserInfo();
  }, []);

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
        <StyledTitle>アカウント設定</StyledTitle>
        {isEditing ? (
          <UpdateAccountForm
            values={values}
            errors={errors}
            onChange={handleChange('name')}
            onSubmit={handleSubmit}
            onBackButton={quitEditing}
          />
        ) : (
          <Profile name={values.name} email={values.email} onClick={() => edit()} />
        )}
      </StyledWrapper>
    </Layout>
  );
};

export default AccountSettings;
