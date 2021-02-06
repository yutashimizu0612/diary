import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  background: #1877f2;
  border: none;
  box-shadow: 0 3px 4px rgb(0, 0, 0, 0.16);
  color: #fff;
  cursor: pointer;
  font-size: 18px;
  outline: none;
  padding: 16px 0;
  text-align: center;
  transition: 0.2s;
  width: 100%;
  &:hover {
    opacity: 0.8;
  }
`;

const FacebookButton: React.FC = () => <Button>Facebookで登録</Button>;

export default FacebookButton;
