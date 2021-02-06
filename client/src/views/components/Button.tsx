import React from 'react';
import styled, { css } from 'styled-components';

const StyledButton = styled.button<{ appearance: 'primary' | 'facebook' }>`
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
  ${(props) =>
    props.appearance === 'primary' &&
    css`
      background: #2cd671;
      border-radius: 24px;
    `}
  ${(props) =>
    props.appearance === 'facebook' &&
    css`
      background: #1877f2;
    `}
`;

type Props = {
  text: string;
  appearance: 'primary' | 'facebook';
  onClick: () => void;
};

const Button: React.FC<Props> = ({ text, appearance, onClick }) => (
  <StyledButton appearance={appearance} onClick={onClick}>
    {text}
  </StyledButton>
);

export default Button;
