import React from 'react';
import styled, { css } from 'styled-components';
import facebookLogo from '../../assets/images/logo_facebook.png';

const StyledButton = styled.button<{ appearance: 'primary' | 'facebook' }>`
  border: none;
  box-shadow: 0 3px 4px rgb(0, 0, 0, 0.16);
  outline: none;
  padding: 16px 0;
  width: 100%;
  &:hover {
    opacity: 0.7;
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

const StyledText = styled.span<{ appearance: 'primary' | 'facebook' }>`
  color: #fff;
  font-size: 18px;
  position: relative;
  ${(props) =>
    props.appearance === 'facebook' &&
    css`
      margin-left: 36px;
      &::before {
        content: '';
        display: block;
        background: url(${facebookLogo}) no-repeat;
        background-size: contain;
        width: 36px;
        height: 36px;
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        left: -48px;
      }
    `}
`;

type Props = {
  text: string;
  appearance: 'primary' | 'facebook';
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

const Button: React.FC<Props> = ({ text, appearance, onClick }) => (
  <StyledButton appearance={appearance} onClick={onClick}>
    <StyledText appearance={appearance}>{text}</StyledText>
  </StyledButton>
);

export default Button;
