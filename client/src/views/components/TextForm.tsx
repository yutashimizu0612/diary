import React from 'react';
import styled from 'styled-components';

const Form = styled.input`
  background: #fff;
  border-radius: 24px;
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

const TextForm: React.FC = () => <Form placeholder="test" />;

export default TextForm;
