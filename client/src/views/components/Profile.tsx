import React from 'react';
import styled from 'styled-components/macro';

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

type Props = {
  name: string;
  email: string;
  onClick: () => void;
};

const Profile: React.FC<Props> = ({ name, email, onClick }) => (
  <dl>
    <StyledTerm>
      プロフィール画像<StyledButton>変更する</StyledButton>
    </StyledTerm>
    <StyledData>
      <StyledImage src="https://placehold.jp/150x150.png" />
    </StyledData>
    <StyledTerm>
      ニックネーム<StyledButton onClick={onClick}>変更する</StyledButton>
    </StyledTerm>
    <StyledData>{name}</StyledData>
    <StyledTerm>メールアドレス</StyledTerm>
    <StyledData>{email}</StyledData>
  </dl>
);

export default Profile;
