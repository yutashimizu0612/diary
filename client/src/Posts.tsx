import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  background: #1877f2;
  border: none;
  box-shadow: 0 3px 4px rgb(0, 0, 0, 0.16);
  color: #fff;
  cursor: pointer;
  font-size: 18px;
  font-weight: bold;
  outline: none;
  padding: 16px 0;
  text-align: center;
  transition: 0.2s;
  width: 100%;
  &:hover {
    opacity: 0.8;
  }
`;

const Posts: React.FC = () => <p>みんなの投稿ページ</p>;

export default Posts;
