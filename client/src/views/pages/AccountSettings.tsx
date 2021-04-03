import React, { useState } from 'react';
import styled from 'styled-components/macro';
import Layout from '../layouts/Layout';
import UpdateAccountForm from '../components/UpdateAccountForm';

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

const StyledTerm = styled.dt`
  font-weight: bold;
  margin-bottom: 12px;
`;

const StyledData = styled.dd`
  margin-bottom: 50px;
`;

const StyledImage = styled.img`
  border-radius: 50%;
  width: 56px;
  height: 56px;
`;

const StyledButton = styled.button`
  background: #fff;
  border: 1px solid #808080;
  border-radius: 16px;
  color: #808080;
  padding: 2px 12px 0;
  margin-left: 12px;
  &:hover {
    opacity: 0.7;
  }
`;

type State = {
  name: string;
};

const AccountSettings: React.FC = () => {
  const [values, setValues] = useState<State>({
    name: '',
  });
  const [errors, setErrors] = useState({});
  const [isEditing, setIsEditing] = useState(false);

  const edit = () => {
    setIsEditing(true);
  };

  const Profile = () => (
    <dl>
      <StyledTerm>
        プロフィール画像<StyledButton>変更する</StyledButton>
      </StyledTerm>
      <StyledData>
        <StyledImage src="https://placehold.jp/150x150.png" />
      </StyledData>
      <StyledTerm>
        ニックネーム<StyledButton onClick={() => edit()}>変更する</StyledButton>
      </StyledTerm>
      <StyledData>鈴木 尚典</StyledData>
      <StyledTerm>メールアドレス</StyledTerm>
      <StyledData>sample@gmail.com</StyledData>
    </dl>
  );

  const handleChange = (prop: keyof State) => (event: React.ChangeEvent<HTMLInputElement>) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const quitEditing = () => {
    setIsEditing(false);
  };

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
          <Profile />
        )}
      </StyledWrapper>
    </Layout>
  );
};

export default AccountSettings;
