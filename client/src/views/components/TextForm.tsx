import React from 'react';
import styled from 'styled-components';

const Form = styled.input`
  background: #fff;
  border-radius: 24px;
  border: none;
  box-shadow: 0 3px 4px rgb(0, 0, 0, 0.16);
  cursor: pointer;
  font-size: 18px;
  outline: none;
  padding: 16px 0 16px 86px;
  position: relative;
  transition: 0.2s;
  width: 100%;
  &:hover {
    opacity: 0.8;
  }
  ::placeholder {
    color: #acacac;
  }
`;

type Props = {
  placeholder: string;
};

const TextForm: React.FC<Props> = ({ placeholder }) => (
  <div
    css={`
      position: relative;
    `}>
    <Form placeholder={placeholder} />
  </div>
);

export default TextForm;
