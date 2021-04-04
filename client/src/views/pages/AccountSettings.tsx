import React, { useState, useEffect } from 'react';
import styled from 'styled-components/macro';
import axios from 'axios';
import Layout from '../layouts/Layout';
import UpdateAccountForm from '../components/UpdateAccountForm';
import Profile from '../components/Profile';
import { useAuth } from '../../hooks/use-auth';

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
  const [values, setValues] = useState<State>({
    name: '',
    email: '',
  });
  const [errors, setErrors] = useState({});
  const [isEditing, setIsEditing] = useState(false);

  const handleChange = (prop: keyof State) => (event: React.ChangeEvent<HTMLInputElement>) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const edit = () => {
    setIsEditing(true);
  };

  const quitEditing = () => {
    setIsEditing(false);
  };

  const loadUserInfo = () => {
    console.log('auth.user', auth.user);
    axios({
      method: 'GET',
      url: `${process.env.REACT_APP_API_URL}/user/${auth.user.id}`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => {
        console.log('LOAD USER INFO', response);
        const { name, email } = response.data;
        setValues({ ...values, name, email });
      })
      .catch((error) => console.log('LOAD USER INFO ERROR', error));
  };

  useEffect(() => {
    loadUserInfo();
  }, []);

  return (
    <Layout>
      <StyledWrapper>
        <StyledTitle>アカウント設定</StyledTitle>
        {isEditing ? (
          <UpdateAccountForm
            values={values}
            errors={errors}
            onChange={handleChange('name')}
            onSubmit={() => console.log('submit')}
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
